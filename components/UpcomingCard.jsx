export default function UpcomingCard({
  title,
  time,
}) {
  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4">
      <h3 className="font-semibold mb-2">
        {title}
      </h3>

      <p className="text-slate-400">
        {time}
      </p>
    </div>
  );
}
