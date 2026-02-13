import React, { type ReactNode } from 'react';
import Background from './Background';
import lokioImg from '../assets/lokio.png';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="relative w-full h-screen overflow-hidden text-white font-romantic selection:bg-pink-500/30">
            <Background />

            {/* Lokio Background Images */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Left Lokio - Mirrored */}
                <img
                    src={lokioImg}
                    alt=""
                    className="absolute left-[-5%] top-1/2 -translate-y-1/2 w-[50vh] h-[50vh] opacity-[0.7] scale-x-[-1] rotate-12"
                    style={{
                    }}
                />
                {/* Right Lokio */}
                <img
                    src={lokioImg}
                    alt=""
                    className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-[50vh] h-[50vh] opacity-[0.7] -rotate-12"
                    style={{
                    }}
                />
            </div>

            <div className="relative z-30 w-full h-full flex flex-col items-center justify-center">
                {children}
            </div>
        </div>
    );
};

export default Layout;
