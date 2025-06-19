import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Loader: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) return;
    let animationFrame: number;
    const animate = () => {
      setProgress((prev) => {
        if (prev < 100) {
          animationFrame = requestAnimationFrame(animate);
          return prev + 1;
        }
        return 100;
      });
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isLoading]);

  if (!isLoading) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      animate={{
        background: [
          'linear-gradient(45deg, #3B82F6, #8B5CF6)',
          'linear-gradient(45deg, #8B5CF6, #F97316)',
          'linear-gradient(45deg, #F97316, #3B82F6)'
        ]
      }}
      transition={{ duration: 6, repeat: Infinity }}
      style={{ backgroundSize: '200% 200%' }}
    >
      {/* Center bar */}
      <div className="w-2/5 h-4 rounded-full bg-white/70 shadow-lg">
        <div
          className="h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      {/* Progress number in bottom-left */}
      <div className="absolute left-4 bottom-2 text-white text-[80px] font-light select-none drop-shadow-lg">
        {progress}
      </div>
    </motion.div>
  );
};

export default Loader;
