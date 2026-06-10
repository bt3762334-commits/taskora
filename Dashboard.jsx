import D3Background from "../components/D3Background";
import StatCard from "../components/StatCard";
import UpcomingCard from "../components/UpcomingCard";
import TodayTasks from "../components/TodayTasks";

export default function Dashboard() {
  return (
    <>
      <D3Background />

      <div className="relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl font-bold">
            Welcome Back 👋
          </h1>

          <p className="text-slate-400 mt-2">
            Manage your day with Taskora
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Tasks"
            value="12"
          />

          <StatCard
            title="Lectures"
            value="4"
          />

          <StatCard
            title="Lessons"
            value="3"
          />

          <StatCard
            title="Completed"
            value="78%"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TodayTasks />
          </div>

          <div className="space-y-4">
            <UpcomingCard
              title="Math Lecture"
              time="Tomorrow 10:00 AM"
            />

            <UpcomingCard
              title="Programming Lesson"
              time="Today 6:00 PM"
            />

            <UpcomingCard
              title="Physics Exam"
              time="Friday"
            />
          </div>
        </div>
      </div>
    </>
  );
}
