import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this comment.'],
        maxlength: [100, 'Name cannot be more than 100 characters'],
    },
    message: {
        type: String,
        required: [true, 'Please provide the comment message.'],
        maxlength: [500, 'Message cannot be more than 500 characters'],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema);
