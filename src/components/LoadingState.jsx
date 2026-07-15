function LoadingState() {
  return (
    <div className="flex min-h-[240px] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />

        <p className="text-sm font-medium text-slate-400">
          Loading tasks...
        </p>
      </div>
    </div>
  );
}

export default LoadingState;