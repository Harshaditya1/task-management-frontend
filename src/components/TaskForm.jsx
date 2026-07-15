import { useState } from "react";
import { createTask } from "../services/taskService";

function TaskForm({ onTaskCreated }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createTask(formData);

      setFormData({
        title: "",
        description: "",
        completed: false,
      });

      await onTaskCreated();
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:p-6"
    >
      {/* Form Header */}
      <div className="border-b border-slate-800 pb-5">
        <h2 className="text-xl font-semibold text-white">
          Create New Task
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Add a new task to your workspace.
        </p>
      </div>

      {/* Form Fields */}
      <div className="mt-5 space-y-5">
        <div>
          <label
            htmlFor="task-title"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Task Title
          </label>

          <input
            id="task-title"
            type="text"
            placeholder="e.g. Complete project documentation"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
              })
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            required
          />
        </div>

        <div>
          <label
            htmlFor="task-description"
            className="mb-2 block text-sm font-medium text-slate-300"
          >
            Description
            <span className="ml-2 text-xs font-normal text-slate-500">
              Optional
            </span>
          </label>

          <textarea
            id="task-description"
            placeholder="Add details about your task..."
            rows="4"
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
            className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/10 transition hover:bg-blue-500 active:scale-[0.98]"
        >
          + Create Task
        </button>
      </div>
    </form>
  );
}

export default TaskForm;