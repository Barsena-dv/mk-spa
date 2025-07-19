import React from "react";
import { motion } from "framer-motion";
import "./Characters.css";

const characters = [
    {
        name: "Scorpion",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToqBa4ONyMQJGqeaxfagwaWVPO9o-55PvdKg&s",
        description: "Vengeful specter with fire-based attacks.",
        stats: { Power: 9, Speed: 8, Defense: 7 },
    },
    {
        name: "Sub-Zero",
        image: "https://i.pinimg.com/236x/ef/4e/7b/ef4e7b9d78872c616d2b541566199a6a.jpg",
        description: "Master of ice-based combat and ninja skills.",
        stats: { Power: 8, Speed: 7, Defense: 9 },
    },
    {
        name: "Liu Kang",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwcylp3OYGS97QNOWGHx_kdRE3yJ1c4xtrA&s",
        description: "Champion of Earthrealm with dragon powers.",
        stats: { Power: 8, Speed: 9, Defense: 8 },
    },
    {
        name: "Joker",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFRQiyYgnlf-GpHK8smSny-fu3P8gYJ_lAQ&s",
        description: "Chaos incarnate with tricks and explosives.",
        stats: { Power: 7, Speed: 6, Defense: 6 },
    },
];

export default function Characters() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="container"
        >
            <h2 className="text-center mb-5 display-5 fw-bold">Characters</h2>
            <div className="row g-4">
                {characters.map((char, index) => (
                    <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front text-center p-3">
                                    <img src={char.image} alt={char.name} className="img-fluid mb-2" />
                                    <h5 className="fw-bold">{char.name}</h5>
                                </div>
                                <div className="flip-card-back text-white p-3 bg-dark rounded">
                                    <p>{char.description}</p>
                                    <ul className="list-unstyled mb-0">
                                        {Object.entries(char.stats).map(([stat, val]) => (
                                            <li key={stat}>{stat}: {val}/10</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
