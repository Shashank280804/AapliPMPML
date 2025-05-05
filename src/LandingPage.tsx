import { useGeneralContext } from "./generalContextApi";
import { useState, useEffect } from "react";
import ThemeToggle from "./components/themetoggle";
import { Box, Snackbar, Alert } from "@mui/material";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import ComingSoonSection from "./components/ComingSoonSection";
import MetroCard from "./components/MetroCard";
import DailyPassCard from "./components/pass/DailyPassCard";
import PassCard from "./components/pass/PassCard";
import RouteCard from "./components/route/RouteCard";
import BusTicketCard from "./components/ticket/BusTicketCard";
import TicketCard from "./components/ticket/TicketCard";

const Landing = () => {
  const context: any = useGeneralContext();
  const [state] = useState({
    vertical: "top" as const,
    horizontal: "center" as const,
  });
  const { vertical, horizontal } = state;

  useEffect(() => {
    // Update the body class to handle dark mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(currentTheme);
  }, []);

  const handleClose = () => {
    context.setState((prev: any) => ({ ...prev, isSessionExpired: false }));
  };

  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Search Box */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2">
            <SearchIcon className="text-gray-600 dark:text-gray-300" />
            <input
              type="text"
              placeholder="Where do you wanna go?"
              className="bg-transparent outline-none w-full text-gray-700 dark:text-gray-300 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Welcome Section */}
        <WelcomeSection />

        {/* Cards Section 1 */}
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/bus-ticket">
            <BusTicketCard />
          </Link>
          <Link to="/daily-pass">
            <DailyPassCard />
          </Link>
        </div>

        {/* Cards Section 2 */}
        <div className="flex flex-wrap justify-center gap-6">
          <TicketCard />
          <PassCard />
          <RouteCard />
          <MetroCard />
        </div>

        <ComingSoonSection />
      </div>

      {/* Session Expired Snackbar */}
      <Box sx={{ width: 500 }}>
        <Snackbar
          autoHideDuration={2000}
          onClose={handleClose}
          anchorOrigin={{ vertical, horizontal }}
          open={context.state.isSessionExpired}
          key={vertical + horizontal}
        >
          <Alert severity="error" variant="standard" sx={{ width: "100%" }}>
            Session Expired
          </Alert>
        </Snackbar>
      </Box>
    </div>
  );
};

export default Landing;

export function WelcomeSection() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-4 sm:gap-6 py-6 px-2">
      <img
        src="/public/bus.png"
        alt="Regular Bus"
        className="w-24 h-20 sm:w-48 sm:h-32 lg:w-64 lg:h-44 object-contain"
      />
      <h1 className="text-xl sm:text-3xl lg:text-5xl font-bold">
        Welcome to <br className="sm:hidden" /> Apli PMPML
      </h1>
      <img
        src="/public/ac-bus.png"
        alt="AC Bus"
        className="w-24 h-20 sm:w-48 sm:h-32 lg:w-64 lg:h-44 object-contain"
      />
    </div>
  );
}
