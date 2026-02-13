import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import flowerVideo from '../assets/0_Flower_Tulip_3840x2160.mp4';

const Bloom: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        const handlePlay = () => {
            // Set canvas size based on video, scaled down for performance if needed
            // The previous logic used /5 scaling. Let's keep it or adjust slightly.
            if (video.videoWidth > 0) {
                canvas.width = video.videoWidth / 5;
                canvas.height = video.videoHeight / 5;
            }
            renderFrame();
        };

        const handleLoadedMetadata = () => {
            canvas.width = video.videoWidth / 5;
            canvas.height = video.videoHeight / 5;
        };

        const renderFrame = () => {
            if (video.paused || video.ended) return;

            // Self-heal: If canvas is 0 but video has dimensions, fix it.
            if (canvas.width === 0 && video.videoWidth > 0) {
                canvas.width = video.videoWidth / 5;
                canvas.height = video.videoHeight / 5;
            }

            if (canvas.width === 0) {
                requestAnimationFrame(renderFrame);
                return;
            }

            // Draw video frame to canvas
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            // Get image data
            const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = frame.data;
            const length = data.length;

            // Chroma key (Background Removal)
            // Assuming black/dark or white background removal as before
            for (let i = 0; i < length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];

                // Adjust these thresholds if needed based on the video background
                if (r > 200 && g > 200 && b > 200) data[i + 3] = 0; // White
                else if (r < 40 && g < 40 && b < 40) data[i + 3] = 0; // Black
            }

            ctx.putImageData(frame, 0, 0);

            requestAnimationFrame(renderFrame);
        };

        video.addEventListener('play', handlePlay);
        video.addEventListener('loadedmetadata', handleLoadedMetadata);

        // Start playing
        video.play().catch(e => console.log("Autoplay blocked:", e));

        return () => {
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, []);

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.5 }}
            className="flex flex-col items-center justify-center w-full h-full max-w-6xl mx-auto overflow-hidden"
        >
            <motion.p
                className="text-2xl md:text-4xl font-romantic text-red-200 mb-4 z-50 text-center shadow-black"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                La amo MEUHUEHUE
            </motion.p>

            {/* Video Container - Smaller size as requested (h-[40vh] instead of 60vh or full) */}
            <div className="relative flex items-center justify-center h-[50vh] w-full">
                <video
                    ref={videoRef}
                    src={flowerVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hidden" // Hide the original video
                    crossOrigin="anonymous"
                />
                <canvas
                    ref={canvasRef}
                    className="h-full w-auto object-contain"
                // Removed filters as requested in previous turn
                />
            </div>

            <motion.p
                className="text-2xl md:text-4xl font-romantic text-red-200 mt-4 z-50 text-center shadow-black"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
            >
                Mañana a las 8:50 am paso por ti.
            </motion.p>
        </motion.div>
    );
};

export default Bloom;
