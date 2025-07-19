import React from "react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-center mb-4 display-5 fw-bold">About Mortal Kombat</h2>

            <p className="mb-4">
                <strong>Mortal Kombat</strong> is one of the most iconic fighting game franchises, first launched in 1992 by Midway Games.
                Known for its brutal combat, unique characters, and the legendary \"Finish Him!\" fatalities, it has revolutionized the fighting game genre for decades.
                The franchise has spawned multiple sequels, movies, and comics — creating a legendary legacy.
            </p>

            <p className="mb-4">
                This website is a tribute to that legacy — rebuilt from scratch using modern frontend technologies including React, Bootstrap, and Framer Motion.
                The project originally started as a simple static HTML experiment and has now evolved into a dynamic, responsive single-page application.
            </p>

            <div className="bg-dark text-white p-4 rounded shadow-sm">
                <h5 className="mb-3">Project Contributors:</h5>
                <ul className="mb-0">
                    <li><strong>Barsena Dhruv</strong> — Developer & Deigner</li>
                </ul>
            </div>
        </motion.div>
    );
}
