import React from "react";

const NearMeSection = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-4xl mx-auto">
      {/* Bus Stop Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-xl">Kalewadi Pump Bus Stop</h2>
        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          206 m away
        </span>
      </div>

      {/* Bus Arrivals */}
      <div className="space-y-4">
        {/* Current Bus */}
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="font-bold text-2xl text-blue-800">361</span>
              <span className="ml-3 text-lg">Bhosari Pmt Chowk</span>
            </div>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              Now
            </span>
          </div>
        </div>
        
        {/* Next Bus */}
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="font-bold text-2xl text-gray-800">119</span>
              <span className="ml-3 text-lg">Alandi</span>
            </div>
            <div className="text-right">
              <div className="text-lg font-medium">7 min</div>
              <div className="text-sm text-gray-500">29 min</div>
            </div>
          </div>
        </div>
      </div>

      <button className="mt-6 w-full py-3 text-center text-blue-600 font-medium text-lg hover:bg-blue-50 rounded-lg transition-colors border border-blue-100">
        See more Buses
      </button>
    </div>
  );
};



const NearBySection = () => {
    return (
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-4xl mx-auto mt-6">
        {/* Map Container */}
        <h3 className="font-semibold text-lg mb-3">Nearby</h3>
  
        <div className="h-48 md:h-64 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
          {/* Map image from the public folder */}
          <img 
            src="/map.png"  // Assuming map.png is inside the public folder
            alt="Map View" 
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
  
        {/* Nearby Section Title */}
        <div>
          <div className="text-sm text-gray-500">(Map integration would appear here)</div>
        </div>
  
        <div className="text-xs text-gray-500 mt-3">Maps Legal</div>
      </div>
    );
  };
  
  




const BusStopInfo = () => {
  return (
    <section className="mt-8 w-full">
      <NearMeSection />
      <NearBySection />
    </section>
  );
};

export default BusStopInfo;