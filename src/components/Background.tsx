import React from 'react';
import { motion } from 'framer-motion';

const Background: React.FC = () => {
    // Generate random hearts
    const hearts = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        scale: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 10,
    }));

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {/* Dark overlay for cinematic feel */}
            <div className="absolute inset-0 bg-black/20 z-10" />

            {/* Floating Hearts */}
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute text-pink-500/30"
                    initial={{ bottom: '-10%', left: `${heart.x}%`, opacity: 0 }}
                    animate={{
                        bottom: '110%',
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: heart.duration,
                        repeat: Infinity,
                        delay: heart.delay,
                        ease: "linear",
                    }}
                    style={{
                        scale: heart.scale,
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                    >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                </motion.div>
            ))}

            {/* Cinematic vignetting */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-20 pointer-events-none" />
        </div>
    );
};

export default Background;
