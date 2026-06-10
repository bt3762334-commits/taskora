export default function StatCard({
  title,
  value,
}) {
  return (
    <div className="bg-slate-900/70 backdrop-blur-xl border border-slate-800 rounded-3xl p-6">
      <h3 className="text-slate-400 text-sm mb-3">
        {title}
      </h3>

      <p className="text-4xl font-bold">
        {value}
      </p>
    </div>
  );
}
