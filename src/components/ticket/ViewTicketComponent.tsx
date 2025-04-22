// import { Link } from "react-router-dom";


// const ViewTicketComponent = () => {
//   return (
//     <>
//       ViewTicketComponent
//     </>
//   )
// }

// export default ViewTicketComponent;

import React, { useState, useEffect } from "react";

// Define ticket structure
interface Ticket {
  id: number;
  busNumber: string;
  date: string;
  time: string;
  source: string;
  destination: string;
  fare: number;
}

const ViewTicketComponent: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  // Simulated API call for booked tickets
  useEffect(() => {
    const bookedTickets: Ticket[] = [
      { id: 101, busNumber: "PMPML-12A", date: "2025-04-04", time: "10:30 AM", source: "Shivajinagar", destination: "Hinjewadi", fare: 25 },
      { id: 102, busNumber: "PMPML-7B", date: "2025-04-05", time: "08:15 AM", source: "Swargate", destination: "Pimpri", fare: 30 },
      { id: 103, busNumber: "PMPML-21C", date: "2025-04-06", time: "06:45 PM", source: "Katraj", destination: "Baner", fare: 40 },
    ];
    setTickets(bookedTickets);
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Bus Tickets (Pune City)</h2>
      <div className="bg-white p-4 shadow rounded-lg">
        {tickets.length === 0 ? (
          <p>No tickets booked yet.</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-2">Ticket ID</th>
                <th className="border p-2">Bus No.</th>
                <th className="border p-2">Date</th>
                <th className="border p-2">Time</th>
                <th className="border p-2">Source</th>
                <th className="border p-2">Destination</th>
                <th className="border p-2">Fare (₹)</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td className="border p-2">{ticket.id}</td>
                  <td className="border p-2">{ticket.busNumber}</td>
                  <td className="border p-2">{ticket.date}</td>
                  <td className="border p-2">{ticket.time}</td>
                  <td className="border p-2">{ticket.source}</td>
                  <td className="border p-2">{ticket.destination}</td>
                  <td className="border p-2 text-green-600 font-bold">₹{ticket.fare}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default ViewTicketComponent;
