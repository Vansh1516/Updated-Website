
import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none transition-opacity duration-1000">
      <div 
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500 opacity-[0.07] dark:opacity-[0.12] blur-[150px] animate-slow-rotate"
      />
      <div 
        className="absolute bottom-0 right-[5%] w-[400px] h-[400px] rounded-full bg-purple-400 opacity-[0.07] dark:opacity-[0.12] blur-[150px] animate-slow-rotate-reverse"
      />
      <div 
        className="absolute top-[20%] right-[25%] w-[300px] h-[300px] rounded-full bg-gray-300 dark:bg-blue-900 opacity-[0.07] dark:opacity-[0.08] blur-[150px] animate-slow-rotate"
      />
    </div>
  );
};

export default Background;
