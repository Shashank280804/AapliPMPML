import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Landing from "./LandingPage";
import PageNotFound from "./components/PageNotfound";
import Profile from "./components/Profile";
import PassForm from "./components/pass/PassForm";
import ViewPassComponent from "./components/pass/ViewPassComponent";
import RouteComponent from "./components/route/RouteComponent";
import TicketForm from "./components/ticket/TicketForm";
import ViewTicketComponent from "./components/ticket/ViewTicketComponent";
import Complaints from "./components/Complaints";
import Help from "./components/Help";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Feedback from "./pages/Feedback";
import ThankYou from "./pages/ThankYou";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/bus-ticket",
        element: <TicketForm />,
      },
      {
        path: "/daily-pass",
        element: <PassForm />,
      },
      {
        path: "/view-ticket",
        element: <ViewTicketComponent />,
      },
      {
        path: "/view-pass",
        element: <ViewPassComponent />,
      },
      {
        path: "/route-timetable",
        element: <RouteComponent />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/my-tickets",
        element: <Profile />,
      },
      {
        path: "/complaints",
        element: <Complaints />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/signup",  
        element: <Signup />,
      },
      {
        path: "/login",  
        element: <Login />,
      },
      {
        path: "/feedback",  
        element: <Feedback />,
      },
      {
        path: "/thankyou",  
        element: <ThankYou />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/help",
    element: <Landing />,
  }
]);
