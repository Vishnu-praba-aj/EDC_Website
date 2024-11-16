import React, { useState } from "react";
import "./Contact.css";

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you! Your message has been sent.");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <footer className="contact">
            <div className="contact-container">
                {/* Column 1: Contact Info */}
                <div className="contact-info">
                    <h2>Contact Us</h2>
                    <p><strong>Email:</strong> ssnlakshaya.com</p>
                    <p><strong>Phone:</strong> 04325 12345</p>
                    <p><strong>Address:</strong> SSN,OMR,Chennai </p>
                </div>

                {/* Column 2: Feedback Form */}
                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="form-input"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="form-textarea"
                    ></textarea>
                    <button type="submit" className="form-button">Send Message</button>
                </form>
            </div>
        </footer>
    );
}

export default Contact;
