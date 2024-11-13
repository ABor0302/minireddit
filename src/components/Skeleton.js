import React from "react";

function Skeleton({ times = 3 }) {
  
  const skeletons = Array.from({ length: times }).map((_, index) => (
    <div key={index} className="bg-gray-200 animate-pulse p-4 mb-4 rounded-lg max-w-md mx-auto">
      <div className="w-3/4 h-6 bg-gray-300 mb-4"></div> 
      <div className="w-full h-48 bg-gray-300 mb-4"></div> 
      <div className="w-1/2 h-4 bg-gray-300 mb-2"></div>
      <div className="w-1/3 h-4 bg-gray-300"></div>
    </div>
  ));

  return <>{skeletons}</>;
}

export default Skeleton;

