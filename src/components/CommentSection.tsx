"use client";

import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

type Comment = {
    id: number;
    name: string;
    message: string;
    createdAt: string;
};

export default function CommentSection() {
    const { t, dir } = useLanguage();

    const [comments, setComments] = useState<Comment[]>([]);
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        fetchComments();
    }, []);

    const fetchComments = async () => {
        try {
            const res = await fetch('/api/comments');
            const data = await res.json();
            setComments(data);
        } catch (err) {
            console.error(err);
        } finally {
            setIsFetching(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !message) return;
        setIsLoading(true);

        try {
            const res = await fetch('/api/comments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, message })
            });
            const newComment = await res.json();
            if (res.ok) {
                setComments([newComment, ...comments]);
                setName('');
                setMessage('');
            } else {
                alert(newComment.error || 'Failed to post comment');
            }
        } catch (err) {
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="comments-wrapper fade-in delay-2">
            <div className="comment-form">
                <h3><span className="gradient-text">{t.comments.formTitle}</span></h3>
                <p style={{ color: '#888', marginBottom: '2rem', fontSize: '1rem' }}>{t.comments.formSubtitle}</p>

                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">{t.comments.lblName}</label>
                        <input
                            type="text"
                            id="name"
                            className="form-control"
                            placeholder={t.comments.plcName}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            maxLength={100}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">{t.comments.lblMessage}</label>
                        <textarea
                            id="message"
                            className="form-control"
                            placeholder={t.comments.plcMessage}
                            rows={4}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            maxLength={500}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-primary" disabled={isLoading} style={{ width: '100%' }}>
                        {isLoading ? t.comments.btnSending : t.comments.btnPost}
                    </button>
                </form>
            </div>

            <div className="comments-list">
                {isFetching ? (
                    <div className="no-comments">{t.comments.loading}</div>
                ) : comments.length === 0 ? (
                    <div className="no-comments">{t.comments.empty}</div>
                ) : (
                    comments.map((comment, index) => (
                        <div
                            key={comment.id}
                            className="comment-card"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="comment-header">
                                <span className="comment-name">{comment.name}</span>
                                <span className="comment-date" dir="ltr">
                                    {new Date(comment.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                            <p className="comment-message">{comment.message}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
