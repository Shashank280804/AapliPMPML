import Header from "../Header";

const routes = [
  {
    name: "Alandi - Manapa",
    link: "https://moovitapp.com/index/en/public_transit-time-119-Pune-5884-1509110-41638920-5255147-0",
  },
  {
    name: "Swargate - Alandi",
    link: "https://moovitapp.com/index/en/public_transit-time-29-Pune-5884-1509110-41038917-5243750-0",
  },
  {
    name: "Bhosari - Alandi",
    link: "https://moovitapp.com/index/en/public_transit-time-361-Pune-5884-1509110-42370940-5280966-0",
  },
  {
    name: "Pune Station - Alandi",
    link: "https://moovitapp.com/index/en/public_transit-time-151-Pune-5884-1509110-41734878-5258066-0",
  },
  {
    name: "Alandi - Dehu",
    link: "https://moovitapp.com/index/en/public_transit-time-309-Pune-5884-1509110-195239459-7764496-0",
  },
  {
    name: "All Routes",
    link: "https://pmpml.org/assets/schedule/170866629042bbb3b37009c5fd5bea2b0df59c1b62.pdf",
  }
];

const RouteCards = () => {
  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-800">
          Popular Alandi Routes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </div>
    </>
  );
};

export default RouteCards;
