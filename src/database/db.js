import mongoose from "mongoose"

async function connectDatabase() {

    await mongoose
        .connect(
            "mongodb+srv://naymaisa:nayara1234@cluster0.zlxtvrn.mongodb.net/myDatabase?retryWrites=true&w=majority&tls=true")
}

export default connectDatabase