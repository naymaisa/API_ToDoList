// src/database/db.js
import mongoose from 'mongoose';

async function connectDatabase() {
    if (mongoose.connection.readyState === 1) {
        return; // Se já estiver conectado, não tenta reconectar
    }

    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export default connectDatabase;
