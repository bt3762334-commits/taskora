export default function TodayTasks() {
  return (
    <div className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6">
      <h2 className="text-xl font-bold mb-4">
        Today's Tasks
      </h2>

      <div className="space-y-3">
        <div className="bg-slate-800 p-4 rounded-xl">
          Study Algorithms
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          Attend Physics Lecture
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          Complete Assignment
        </div>
      </div>
    </div>
  );
}
