import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-width-md mx-auto"
        >
            <h2 className="text-center mb-4 display-5 fw-bold">Contact Us</h2>
            <p className="text-center mb-5">
                Have questions, suggestions, or feedback about Mortal Kombat? Reach out below!
            </p>

            <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-6">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your name" required />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                </div>
                <div className="col-12">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="5" placeholder="Write your message here..." required></textarea>
                </div>
                <div className="col-12 text-center">
                    <motion.button
                        type="submit"
                        className="btn btn-danger px-4 py-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Send Message
                    </motion.button>
                </div>
            </form>
        </motion.div>
    );
}
