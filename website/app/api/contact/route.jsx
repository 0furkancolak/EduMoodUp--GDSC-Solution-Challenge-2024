import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Handles POST requests to /api

export async function POST(request) {

    const body = await request.json()
    const { name, email, message } = body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    try {

        const mail = await transporter.sendMail({
            from: "EduMoodUp <edumoodup@gmail.com>",
            to: "edumoodup@gmail.com",
            subject: `${name} isimli kullanıcı bir mesajı var`,
            html: `
            <div>
                <h1>Name: ${name}</h1>
                <p>Message: ${message}</p>
                <h6>Email: ${email}</h6>
            </div>
            `,
        })

        return NextResponse.json({ message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ message: "COULD NOT SEND MESSAGE" })
    }
}
