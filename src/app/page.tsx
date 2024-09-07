import Image from "next/image";
import HourlyCard from "./components/hourly-card";
import {
  BatteryHalf,
  Wifi,
  SignalStrength,
  LocationCurrent,
} from "@carbon/icons-react";

export default function Home() {
  const hourlyForcast = [
    {
      time: "9AM",
      icon: "sun",
      temperature: 60,
    },
    {
      time: "10AM",
      icon: "cloud",
      temperature: 65,
    },
    {
      time: "11AM",
      icon: "cloud",
      temperature: 65,
    },
    {
      time: "12PM",
      icon: "sun",
      temperature: 70,
    },
    {
      time: "1PM",
      icon: "sun",
      temperature: 72,
    },
    {
      time: "2PM",
      icon: "cloud",
      temperature: 74,
    },
    {
      time: "3PM",
      icon: "sun",
      temperature: 75,
    },
    {
      time: "4PM",
      icon: "sun",
      temperature: 74,
    },
    {
      time: "5PM",
      icon: "cloud",
      temperature: 70,
    },
    {
      time: "6PM",
      icon: "cloud",
      temperature: 70,
    },
  ];

  return (
    <div className="flex flex-col h-screen items-center justify-between p-4 bg-white">
      <div className="flex justify-between">
        <div className="flex items-center">
          <p>9:23</p>
          <LocationCurrent />
        </div>
        <div>Bar</div>
        <div className="flex justify-between items-center">
          <SignalStrength />
          <Wifi />
          <BatteryHalf />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center">
          <Image
            src="/weather.jpeg"
            alt="sun & clouds"
            height={400}
            width={400}
          />
        </div>
        <div className="text-center flex flex-col w-full">
          <div className="flex flex-row justify-center items-center gap-2">
            <div className="text-2xl font-semibold">CLOUDY</div>
            <div className="text-sm">-&gt; 1 mph</div>
          </div>
          <div className="flex items-center justify-center text-sm opacity-50">
            humidity: 50% | percipitation: 0%
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center py-4 gap-4 w-full overflow-x-auto scrollbar-hidden">
        {hourlyForcast.map((hour) => (
          <HourlyCard
            key={hour.time}
            time={hour.time}
            icon={hour.icon}
            temperature={hour.temperature}
          />
        ))}
      </div>
    </div>
  );
}
