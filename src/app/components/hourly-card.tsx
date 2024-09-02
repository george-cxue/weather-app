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
      <div>{time}</div>
      <div>{icon}</div>
      <div>{temperature}</div>
    </div>
  );
}
