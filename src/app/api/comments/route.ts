import { openDb } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const db = await openDb();
        const comments = await db.all('SELECT * FROM comments ORDER BY createdAt DESC');
        return NextResponse.json(comments);
    } catch (error) {
        console.error('Failed to fetch comments', error);
        return NextResponse.json({ error: 'Failed to fetch comments' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const { name, message } = await request.json();
        if (!name || !message) {
            return NextResponse.json({ error: 'Name and message are required' }, { status: 400 });
        }

        // Validate length for safety
        if (name.length > 100 || message.length > 500) {
            return NextResponse.json({ error: 'Name or message too long' }, { status: 400 });
        }

        const db = await openDb();
        const result = await db.run(
            'INSERT INTO comments (name, message) VALUES (?, ?)',
            [name, message]
        );
        const newComment = await db.get('SELECT * FROM comments WHERE id = ?', result.lastID);
        return NextResponse.json(newComment, { status: 201 });
    } catch (error) {
        console.error('Failed to insert comment', error);
        return NextResponse.json({ error: 'Failed to insert comment' }, { status: 500 });
    }
}
