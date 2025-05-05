const routes = [
  {
    name: "Alandi - Manapa",
    link: "https://moovitapp.com/index/en/public_transit-time-119-Pune-5884-1509110-41638920-5255183-0",
  },
  {
    name: "Swargate - Alandi",
    link: "https://moovitapp.com/index/en/public_transit-time-25-Pune-5884-1509110-41638920-1335812-0",
  },
  {
    name: "Bhosari - Alandi",
    link: "https://moovitapp.com/index/en/public_transit-time-78-Pune-5884-1509110-41638920-1480783-0",
  },
  {
    name: "Pune Station - Alandi",
    link: "https://moovitapp.com/index/en/public_transit-time-148-Pune-5884-1509110-41638920-1439520-0",
  },
  {
    name: "Alandi - Dehu",
    link: "https://moovitapp.com/index/en/public_transit-time-288-Pune-5884-1509110-41638920-1491251-0",
  },
];

const RouteCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {routes.map((route, index) => (
        <a
          key={index}
          href={route.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center cursor-pointer"
        >
          <img src="/route.png" alt="route icon" className="mx-auto mb-3 w-12 h-12" />
          <h2 className="text-lg font-semibold text-gray-800 hover:text-blue-600">
            {route.name}
          </h2>
        </a>
      ))}
    </div>
  );
};

export default RouteCards;
