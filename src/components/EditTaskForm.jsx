import { useState } from "react";
import { updateTask } from "../services/taskService";

function EditTaskForm({ task, onTaskUpdated, onCancel }) {
  const [formData, setFormData] = useState({
    title: task.title,
    description: task.description,
    completed: task.completed,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateTask(task.id, formData);
      await onTaskUpdated();
      onCancel();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Edit Header */}
      <div className="mb-5 border-b border-slate-800 pb-4">
        <h3 className="text-lg font-semibold text-white">
          Edit Task
        </h3>

        <p className="mt-1 text-sm text-slate-400">
          Update the task details below.
        </p>
      </div>

      {/* Form Fields */}
      <div className="space-y-4">
        <div>
          <label
            htmlFor={`edit-title-${task.id}`}
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Task Title
          </label>

          <input
            id={`edit-title-${task.id}`}
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            required
          />
        </div>

        <div>
          <label
            htmlFor={`edit-description-${task.id}`}
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Description
            <span className="ml-2 text-xs font-normal text-slate-500">
              Optional
            </span>
          </label>

          <textarea
            id={`edit-description-${task.id}`}
            rows="4"
            value={formData.description || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
            className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="mt-5 flex flex-wrap gap-3 border-t border-slate-800 pt-4">
        <button
          type="submit"
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 active:scale-[0.98]"
        >
          Save Changes
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditTaskForm;