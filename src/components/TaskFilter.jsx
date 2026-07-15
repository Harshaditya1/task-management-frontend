function TaskFilter({ filter, setFilter }) {
  const filters = ["ALL", "PENDING", "COMPLETED"];

  return (
    <section className="mt-8">
      <div className="mb-3">
        <h2 className="text-lg font-semibold text-white">
          Your Tasks
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Filter tasks by their current status.
        </p>
      </div>

      <div className="inline-flex flex-wrap gap-1 rounded-xl border border-slate-800 bg-slate-900/70 p-1.5">
        {filters.map((item) => {
          const isActive = filter === item;

          return (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item.charAt(0) + item.slice(1).toLowerCase()}
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default TaskFilter;