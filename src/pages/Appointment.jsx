import React, { useEffect, useState } from "react";
import BackgroundWrapper from "../component/BackgroundWrapper";
import BookingForm from "../component/BookingForm";
import banner from "../assets/bgwrapper.jpg";

const Appointment = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() =>{
        document.title = "Appointment - Dristy Eye Hospital, Chouparan";
        const meta = document.querySelector("meta[name='description']");
        if(meta){
          meta.setAttribute("content", "Dristy Eye Hospital a unit of Afroz Charitable trust is a non profitable organization in Jharkhand dedicated to transforming lives and fostering hope for the underprivileged.");
        }
      },[])

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      if (now.getDate() !== currentDate.getDate()) {
        setCurrentDate(now);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [currentDate]);

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = getDaysInMonth(year, month);

    const days = [];

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-12 bg-transparent"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === currentDate.getDate() &&
        year === currentDate.getFullYear() &&
        month === currentDate.getMonth();
      days.push(
        <div
          key={day}
          className={`h-12 flex items-center justify-center rounded-lg ${
            isToday
              ? "bg-primary text-white font-bold"
              : "bg-gray-100 hover:bg-blue-100"
          }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div>
      <BackgroundWrapper title1={"Home"} title2={"Appointment"} img={banner} />
      <div className="mt-10 flex w-full lg:p-0 p-4">
        <div className="lg:block hidden mx-auto p-6 bg-gradient-to-r from-black to-violet-600 shadow-lg rounded-lg">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-semibold text-gray-100">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
          </div>
          <div className="grid grid-cols-7 gap-4 text-center">
            <div className="font-bold text-gray-100 p-1">Sun</div>
            <div className="font-bold text-gray-100 p-1">Mon</div>
            <div className="font-bold text-gray-100 p-1">Tue</div>
            <div className="font-bold text-gray-100 p-1">Wed</div>
            <div className="font-bold text-gray-100 p-1">Thu</div>
            <div className="font-bold text-gray-100 p-1">Fri</div>
            <div className="font-bold text-gray-100 p-1">Sat</div>
            {generateCalendarDays()}
          </div>
        </div>
        <BookingForm />
      </div>
    </div>
  );
};

export default Appointment;
