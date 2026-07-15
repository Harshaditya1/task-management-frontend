function DeleteConfirmModal({ task, onConfirm, onCancel }) {
  if (!task) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-md rounded-2xl border border-slate-700/70 bg-slate-900 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Warning Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10">
          <span className="text-xl text-red-400">!</span>
        </div>

        {/* Modal Content */}
        <div className="mt-5">
          <h2 className="text-xl font-semibold text-white">
            Delete this task?
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            You are about to permanently delete{" "}
            <span className="font-semibold text-white">
              &quot;{task.title}&quot;
            </span>
            .
          </p>

          <p className="mt-2 text-sm text-red-400/80">
            This action cannot be undone.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={() => onConfirm(task.id)}
            className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500 active:scale-[0.98]"
          >
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmModal;