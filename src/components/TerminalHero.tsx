import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const TerminalHero = ({ onComplete }: { onComplete: () => void }) => {
    const lines = [
        "Initializing system...",
        "Loading 2025 logs...",
        "Analyzing happiness metrics... OK",
        "Optimizing team synergy...",
        "Cleaning up legacy bugs...",
        "Compiling 2026 build...",
        "Deploying update to production...",
        "Launch successful!"
    ];
    const [currentLine, setCurrentLine] = useState(0);

    useEffect(() => {
        if (currentLine < lines.length) {
            const timeout = setTimeout(() => {
                setCurrentLine(prev => prev + 1);
            }, 600); // Speed of typing
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(onComplete, 1200);
            return () => clearTimeout(timeout);
        }
    }, [currentLine]);

    return (
        <div className="min-h-[50vh] flex flex-col justify-center max-w-2xl mx-auto p-6 font-mono text-green-400 text-lg md:text-xl">
            {lines.slice(0, currentLine + 1).map((line, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-2"
                >
                    <span className="text-gray-500 mr-2">{">"}</span>
                    {line}
                </motion.div>
            ))}
            {currentLine < lines.length && (
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-3 h-5 bg-green-400 ml-1 translate-y-1"
                />
            )}
        </div>
    );
};
