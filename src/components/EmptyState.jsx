function EmptyState({ hasFilters = false }) {
  return (
    <div className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-900/40 px-6 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl">
        {hasFilters ? "🔍" : "📋"}
      </div>

      <h3 className="text-lg font-semibold text-white">
        {hasFilters ? "No matching tasks found" : "No tasks yet"}
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-400">
        {hasFilters
          ? "Try changing your search or filter options to find the task you're looking for."
          : "Create your first task to start organizing and tracking your work."}
      </p>
    </div>
  );
}

export default EmptyState;