function ErrorMessage({ message }) {
  if (!message) {
    return null;
  }

  return (
    <div
      role="alert"
      className="mt-6 flex items-start gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4"
    >
      {/* Error Icon */}
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/10">
        <span className="text-sm font-bold text-red-400">!</span>
      </div>

      {/* Error Content */}
      <div>
        <p className="text-sm font-semibold text-red-300">
          Something went wrong
        </p>

        <p className="mt-1 text-sm leading-6 text-red-400/80">
          {message}
        </p>
      </div>
    </div>
  );
}

export default ErrorMessage;