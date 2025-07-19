import React from "react";
import { motion } from "framer-motion";
import "./Gallery.css"; // Custom styles for gallery

const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToqBa4ONyMQJGqeaxfagwaWVPO9o-55PvdKg&s",
    "https://i.pinimg.com/236x/ef/4e/7b/ef4e7b9d78872c616d2b541566199a6a.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwwcylp3OYGS97QNOWGHx_kdRE3yJ1c4xtrA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFRQiyYgnlf-GpHK8smSny-fu3P8gYJ_lAQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYGzBS1MVTd8YzMW8XgjJ5_UnzqZZXy1K4eQ&s",
    "https://play-lh.googleusercontent.com/qTflzTh1gnRdSNvwv2491ugSsCoQUL5NzuYeh-76pZKC8Mmk84lGd1UCBTbbL4GBLg=w526-h296-rw",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxLQiPWXu0qxus930fVQ0sMEkvk4i35dPMQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNgw3kOkxtE4ywn-3z_xk5mIET44k4t5Ot3w&s",
];

export default function Gallery() {
    return (
        <motion.div
            className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-center mb-5 display-5 fw-bold">Gallery</h2>
            <div className="row g-4">
                {images.map((src, index) => (
                    <div key={index} className="col-6 col-md-4 col-lg-3">
                        <motion.div
                            className="gallery-card"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img src={src} alt={`Mortal Kombat ${index}`} className="img-fluid rounded shadow gallery-img" />
                        </motion.div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
