function TaskStats({ tasks }) {
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  return (
    <section className="mt-8 grid gap-4 sm:grid-cols-3">
      
      {/* Total Tasks */}
      <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-900">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-400">
            Total Tasks
          </p>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-lg text-blue-400">
            📋
          </div>
        </div>

        <h3 className="mt-4 text-3xl font-bold tracking-tight text-white">
          {totalTasks}
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          All tasks in your workspace
        </p>
      </div>

      {/* Pending Tasks */}
      <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:bg-slate-900">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-400">
            Pending Tasks
          </p>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-lg text-amber-400">
            ⏳
          </div>
        </div>

        <h3 className="mt-4 text-3xl font-bold tracking-tight text-amber-400">
          {pendingTasks}
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          Tasks waiting to be completed
        </p>
      </div>

      {/* Completed Tasks */}
      <div className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-slate-900">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-400">
            Completed Tasks
          </p>

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-lg text-emerald-400">
            ✓
          </div>
        </div>

        <h3 className="mt-4 text-3xl font-bold tracking-tight text-emerald-400">
          {completedTasks}
        </h3>

        <p className="mt-1 text-xs text-slate-500">
          Successfully completed tasks
        </p>
      </div>

    </section>
  );
}

export default TaskStats;