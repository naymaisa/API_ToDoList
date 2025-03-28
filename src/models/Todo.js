// src/models/Todo.js
import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    tarefa: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
});

export default mongoose.model('Todo', todoSchema);
