import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SlideProps {
    children: ReactNode;
    isActive: boolean;
}

const Slide: React.FC<SlideProps> = ({ children, isActive }) => {
    if (!isActive) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
        >
            {children}
        </motion.div>
    );
};

export default Slide;
