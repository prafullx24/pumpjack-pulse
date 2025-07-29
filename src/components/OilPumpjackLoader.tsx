import React from 'react';

const OilPumpjackLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#463E41]">
      <div className="relative">
        {/* Animated Pumpjack using sprite frames */}
        <div className="w-80 h-60 bg-contain bg-no-repeat animate-pumpjack-cycle"></div>
      </div>
      
      {/* Loading text */}
      <div className="mt-6 text-white text-lg font-medium opacity-80">
        Loading...
      </div>
      
      {/* Optional loading dots animation */}
      <div className="flex space-x-1 mt-2">
        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
      </div>
      
    </div>
  );
};

export default OilPumpjackLoader;