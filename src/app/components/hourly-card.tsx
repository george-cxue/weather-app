import { Cloud, CircleOutline } from "@carbon/icons-react";

export default function HourlyCard({
  time,
  icon,
  temperature,
}: {
  time: string;
  icon: string;
  temperature: number;
}) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-sm">{time}</div>
      <div className="py-2 text-3xl text-black">
        {icon === "cloud" ? <Cloud size={24} /> : <CircleOutline size={24} />}
      </div>
      <div className="text-sm">{temperature}</div>
    </div>
  );
}
