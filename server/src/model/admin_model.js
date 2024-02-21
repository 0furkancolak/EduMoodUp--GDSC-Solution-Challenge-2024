const mongoose = require("mongoose")

const adminSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            trim: true,
            required: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        }
    }
)

const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;