import { ArrowLeft, BusFront, Timer } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formInputs } from '../../data/forms/forms.json';
import { useGeneralContext } from "../../generalContextApi";
import { ITimer } from "../../interfaces/forDailyPass";
import { SelectRoute, SelectStops } from "./RouteInfoCard";
import { Divider } from "@mui/material";

const TicketForm = () => {
  const navigate = useNavigate();
  const context: any = useGeneralContext();

  const [currentDateTime, setCurrentDateTime] = useState('');
  const dummyFare = 10;

  const [timer, setTimer] = useState<ITimer>({
    seconds: 0,
    minutes: 5,
    isSessionExpired: false
  });

  const [fullTicketCount, setFullTicketCount] = useState<number>(1);
  const [halfTicketCount, setHalfTicketCount] = useState<number>(0);
  const [totalFare, setTotalFare] = useState<number>(0);
  const [selectionMode, setSelectionMode] = useState<'fare' | 'stop'>('fare');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString(undefined, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      const formattedTime = now.toLocaleTimeString();
      setCurrentDateTime(`${formattedDate} | ${formattedTime}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fullFare = fullTicketCount * dummyFare;
    const halfFare = halfTicketCount * (dummyFare / 2);
    setTotalFare(fullFare + halfFare);
  }, [fullTicketCount, halfTicketCount]);

  useEffect(() => {
    countDownTimer();
  }, [timer]);

  const countDownTimer = () => {
    if (timer.minutes === 0 && timer.seconds === 0) {
      setTimer(prev => ({ ...prev, isSessionExpired: true }));
      context.setState((prev: any) => ({ ...prev, isSessionExpired: true }));
      return navigate('/');
    } else {
      let timerId = setTimeout(() => {
        if (timer.seconds === 0) {
          setTimer(prev => ({
            ...prev,
            seconds: 59,
            minutes: timer.minutes - 1
          }));
        } else {
          setTimer(prev => ({ ...prev, seconds: prev.seconds - 1 }));
        }
      }, 1000);
      return () => clearTimeout(timerId);
    }
  };

  const handleGoBack = () => navigate('/');

  const handleIncreaseFullTicket = () => setFullTicketCount(prev => prev + 1);
  const handleDecreaseFullTicket = () => setFullTicketCount(prev => (prev > 0 ? prev - 1 : 0));

  const handleIncreaseHalfTicket = () => setHalfTicketCount(prev => prev + 1);
  const handleDecreaseHalfTicket = () => setHalfTicketCount(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-2 py-12">
      <div className='min-h-screen px-2 py-4'>
        <div className='flex flex-row md:flex-row items-baseline justify-between font-maven space-y-4 md:space-y-0'>
          <div className='flex items-center cursor-pointer bg-slate-200 rounded-2xl p-2 md:p-2 mb-4 md:mb-0' onClick={handleGoBack}>
            <div className="h-6 w-6 p-1 md:h-8 md:w-8">
              <ArrowLeft />
            </div>
            <div><h1 className="text-sm md:text-base lg:text-md">&nbsp;{formInputs.back}&nbsp;</h1></div>
          </div>

          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">{formInputs.passTitle}</h1>

          <div className='flex items-center bg-red-100 rounded-2xl p-2 md:p-3'>
            <Timer />
            <span className="text-sm md:text-base lg:text-md ml-2">
              {formInputs.timer} {timer.minutes} : {timer.seconds === 0 ? '00' : timer.seconds}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-600 p-4">
              <h2 className="text-lg font-medium text-center text-white">
                {currentDateTime}
              </h2>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex flex-row items-center justify-start">
                <BusFront className="w-10 h-9 bg-green-700 rounded-full p-1 mr-4 ml-0" color="#ffffff" />
                <SelectRoute />
              </div>
              <Divider />
              <div><SelectStops /></div>
              <Divider />
            </div>

            <div className="grid grid-cols-2 gap-4 px-6 py-4">
              <button
                onClick={() => setSelectionMode('fare')}
                className={`py-2 px-4 rounded text-xs sm:text-sm md:text-base border transition-all duration-200
                  ${selectionMode === 'fare'
                    ? 'bg-green-700 text-white border-green-600'
                    : 'bg-white text-gray-700 hover:bg-green-700 hover:text-white border-green-600'}`}
              >
                By Fare
              </button>

              <button
                onClick={() => setSelectionMode('stop')}
                className={`py-2 px-4 rounded text-xs sm:text-sm md:text-base border transition-all duration-200
                  ${selectionMode === 'stop'
                    ? 'bg-green-700 text-white border-green-600'
                    : 'bg-white text-gray-700 hover:bg-green-700 hover:text-white border-green-600'}`}
              >
                By Ending Stop
              </button>
            </div>

            <div className="px-6 py-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <label className="block mr-2">Full Ticket:</label>
                  <button onClick={handleDecreaseFullTicket} className="bg-gray-200 p-1 rounded">[-]</button>
                  <span className="mx-2">{fullTicketCount}</span>
                  <button onClick={handleIncreaseFullTicket} className="bg-gray-200 p-1 rounded">[+]</button>
                </div>
                <div className="text-sm">₹{dummyFare}</div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <label className="block mr-2">Half Ticket:</label>
                  <button onClick={handleDecreaseHalfTicket} className="bg-gray-200 p-1 rounded">[-]</button>
                  <span className="mx-2">{halfTicketCount}</span>
                  <button onClick={handleIncreaseHalfTicket} className="bg-gray-200 p-1 rounded">[+]</button>
                </div>
                <div className="text-sm">₹{(dummyFare / 2).toFixed(2)}</div>
              </div>
            </div>

            <div className="px-6 py-4">
              <h3 className="text-lg font-medium">Total Fare: ₹{totalFare.toFixed(2)}</h3>
              <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded w-full">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketForm;
