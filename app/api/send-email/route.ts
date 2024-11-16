import { NextRequest, NextResponse } from 'next/server';
import emailjs from '@emailjs/browser';

// Définition de l'interface pour la structure de la requête
interface EmailRequest {
    from: string;
    subject: string;
    message: string;
}

// Fonction pour valider le format de l'email
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
    try {
        const { from, subject, message }: EmailRequest = await request.json();

        // Validation des champs requis
        if (!from || !subject || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Validation du format de l'email
        if (!isValidEmail(from)) {
            return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
        }

        // Vérification de la longueur du message
        if (message.length > 5000) {
            return NextResponse.json({ error: 'Message too long (max 5000 characters)' }, { status: 400 });
        }

        // Logging pour le débogage
        console.log(`Attempting to send email from ${from}`);

        // Configuration d'EmailJS
        emailjs.init({
            publicKey: process.env.EMAILJS_PUBLIC_KEY,
        });

        // Envoi de l'email avec EmailJS
        const result = await emailjs.send(
            process.env.EMAILJS_SERVICE_ID!,
            process.env.EMAILJS_TEMPLATE_ID!,
            {
                from_email: from,
                subject: subject,
                message: message,
            }
        );

        console.log('Email sent successfully', result.status, result.text);
        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Failed to send email:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}