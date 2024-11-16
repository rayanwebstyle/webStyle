"use client"

import React, { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        requestType: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name) newErrors.name = "Nom est requis.";
        if (!formData.email) newErrors.email = "Email est requis.";
        if (!formData.phone) newErrors.phone = "Téléphone est requis.";
        if (!formData.message) newErrors.message = "Message est requis.";
        if (!formData.requestType) newErrors.requestType = "Veuillez sélectionner un type de demande.";

        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email invalide.";
        }

        if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = "Numéro de téléphone invalide.";
        }

        return newErrors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Envoi en cours...');
        setErrors({}); // Reset errors

        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setStatus('');
            return;
        }

        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    from_phone: formData.phone,
                    request_type: formData.requestType,
                    message: formData.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );

            if (result.text === 'OK') {
                setStatus('Message envoyé avec succès!');
                setFormData({ name: '', email: '', phone: '', requestType: '', message: '' });
            } else {
                setStatus('Erreur lors de l\'envoi du message. Veuillez réessayer.');
            }
        } catch (error) {
            setStatus('Échec de l\'envoi du message. Veuillez réessayer.');
            console.error('EmailJS error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-[#1F1F1F]/50 space-y-6">
            <h2 className="text-2xl font-bold text-center text-primary mb-8">Contactez-nous</h2>

            {/* Nom */}
            <div className="relative z-0 w-full group">
                <input
                    type="text"
                    name="name"
                    id="floating_name"
                    className={`block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 ${errors.name ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-0 focus:border-blue-400 peer`}
                    placeholder=" "
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
                <label
                    htmlFor="floating_name"
                    className="peer-focus:font-medium absolute text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Nom
                </label>
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="relative z-0 w-full group">
                <input
                    type="email"
                    name="email"
                    id="floating_email"
                    className={`block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 ${errors.email ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-0 focus:border-blue-400 peer`}
                    placeholder=" "
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Email
                </label>
                {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>

            {/* Téléphone */}
            <div className="relative z-0 w-full group">
                <input
                    type="tel"
                    name="phone"
                    id="floating_phone"
                    className={`block py-2.5 px-0 w-full text-sm text-gray-300 bg-transparent border-0 border-b-2 ${errors.phone ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-0 focus:border-blue-400 peer`}
                    placeholder=" "
                    required
                    value={formData.phone}
                    onChange={handleChange}
                />
                <label
                    htmlFor="floating_phone"
                    className="peer-focus:font-medium absolute text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                    Téléphone
                </label>
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            {/* Type de demande */}
            <div className="relative z-0 w-full group">
                <label htmlFor="requestType" className="block mb-2 text-sm font-medium text-primary">
                    Type de demande
                </label>
                <select
                    id="requestType"
                    name="requestType"
                    className={`bg-[#1F1F1F] border border-primary text-primary text-sm  block w-full p-2.5 ${errors.requestType ? 'border-red-500' : ''}`}
                    value={formData.requestType}
                    onChange={handleChange}
                    required
                >
                    <option value="" disabled>Sélectionnez une option</option>
                    <option value="Demande de site web">Demande de site web</option>
                    <option value="Réparation de téléphone">Réparation de téléphone</option>
                    <option value="Question">Questions diverses</option>
                </select>
                {errors.requestType && <p className="text-xs text-red-500 mt-1">{errors.requestType}</p>}
            </div>

            {/* Message */}
            <div className="relative z-0 w-full group">
                <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className={`block p-2.5 w-full text-sm text-gray-300 bg-[#1F1F1F] border border-gray-600 resize-none focus:outline-none focus:ring-0 ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Votre message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
            </div>

            {/* Statut */}
            {status && <p className="mt-4 text-center text-sm text-primary">{status}</p>}

            {/* Boutons */}
            <div className="flex space-x-4 mt-8">
                <Link
                    href={"/"}
                    className="flex-1 text-center text-primary border border-primary hover:bg-primary hover:text-primary-foreground font-medium text-sm px-5 py-2.5 transition-colors duration-300"
                >
                    Retour
                </Link>
                <button
                    type="submit"
                    className="flex-1 text-primary-foreground bg-primary/90 border border-primary hover:bg-primary font-medium text-sm px-5 py-2.5 transition-colors duration-300"
                >
                    Envoyer
                </button>

            </div>
        </form>
    );
};

export default ContactForm;
