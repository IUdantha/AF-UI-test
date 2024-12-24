"use client";
import {useState, useEffect} from "react";
import NewsCard from "@/components/newsCard";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import DateRangePicker from "@/components/dateRangePicker";

export default function LatestNews() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch data from NASA API based on user-selected date range
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.nasa.gov/DONKI/notifications?startDate=${startDate}&endDate=${endDate}&type=all&api_key=pRzcMCA7oFHusCrSJpEggFC2pYpbbhrN8ojWtjLy`
        );
        const data = await response.json();
        setNotifications(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [startDate, endDate]);

  const handleDateChange = (date: any, type: any) => {
    if (type === "start") {
      setStartDate(date);
    } else if (type === "end") {
      setEndDate(date);
    }
  };

  return (
    <>
      <NavBar fontColor="text-stone-950" />
      <h1 className="text-center text-black text-5xl font-bold mb-10">
        Latest News
      </h1>
      <div className="flex justify-center items-center">
        <DateRangePicker onDateChange={handleDateChange} />
      </div>

      <section className="grid sm:grid-cols-3">
        {notifications.map((notification: any) => (
          <NewsCard
            key={notification.messageID}
            title={notification.messageType}
            content={notification.messageBody}
            date={notification.messageIssueTime}
          />
        ))}
      </section>
      <Footer />
    </>
  );
}
