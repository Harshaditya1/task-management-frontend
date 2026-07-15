import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

import {
  getAllTasks,
  updateTask,
  deleteTask,
} from "../services/taskService";

import TaskForm from "../components/TaskForm";
import EditTaskForm from "../components/EditTaskForm";
import TaskStats from "../components/TaskStats";
import TaskFilter from "../components/TaskFilter";
import ErrorMessage from "../components/ErrorMessage";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import LoadingState from "../components/LoadingState";
import EmptyState from "../components/EmptyState";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const [filter, setFilter] = useState("ALL");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all tasks from backend
  const fetchTasks = async () => {
    try {
      setError("");

      const data = await getAllTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setError(
        "Unable to load tasks. Make sure the backend server is running."
      );
    } finally {
      setLoading(false);
    }
  };

  // Change task status
  const handleStatusChange = async (task) => {
    try {
      setError("");

      const updatedTask = {
        title: task.title,
        description: task.description,
        completed: !task.completed,
      };

      await updateTask(task.id, updatedTask);
      await fetchTasks();
    } catch (error) {
      console.error("Error updating task status:", error);
      setError("Unable to update task status. Please try again.");
    }
  };

  // Open delete confirmation modal
  const handleDeleteClick = (task) => {
    setTaskToDelete(task);
  };

  // Delete task after confirmation
  const handleDeleteConfirm = async (id) => {
    try {
      setError("");

      await deleteTask(id);

      setTaskToDelete(null);

      if (editingTaskId === id) {
        setEditingTaskId(null);
      }

      await fetchTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
      setError("Unable to delete the task. Please try again.");
    }
  };

  // Cancel delete
  const handleDeleteCancel = () => {
    setTaskToDelete(null);
  };

  // Start editing a task
  const handleEditClick = (taskId) => {
    setEditingTaskId(taskId);
  };

  // Stop editing
  const handleEditCancel = () => {
    setEditingTaskId(null);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "COMPLETED") {
      return task.completed;
    }

    if (filter === "PENDING") {
      return !task.completed;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      
      {/* Navbar */}
      <Navbar />

      {/* Dashboard Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">

        {/* Header */}
<header className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
  <div>
    <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-400">
      Overview
    </p>

    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
      Task Dashboard
    </h1>

    <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
      Create, organize, and track your tasks from one simple workspace.
    </p>
  </div>

  <div className="flex items-center gap-2 text-sm text-slate-400">
    <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
    <span>Workspace active</span>
  </div>
</header>

        {/* API Error */}
        <ErrorMessage message={error} />

        {/* Task Statistics */}
        <TaskStats tasks={tasks} />

        {/* Create Task Form */}
        <TaskForm onTaskCreated={fetchTasks} />

        {/* Task Filters */}
        <TaskFilter
          filter={filter}
          setFilter={setFilter}
        />
        {/* Task List Header */}
<div className="mt-8 flex items-center justify-between">
  <div>
    <h2 className="text-xl font-semibold text-white">
      Your Tasks
    </h2>

    <p className="mt-1 text-sm text-slate-400">
      {filteredTasks.length}{" "}
      {filteredTasks.length === 1 ? "task" : "tasks"} found
    </p>
  </div>

  <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-400">
    {filter === "ALL"
      ? "All Tasks"
      : filter === "COMPLETED"
      ? "Completed"
      : "Pending"}
  </span>
</div>

        {/* Loading State */}
       {loading ? (
  <LoadingState />
) : filteredTasks.length === 0 ? (
  <div className="mt-8">
    <EmptyState hasFilters={tasks.length > 0 && filter !== "ALL"} />
  </div>
) : (

          /* Task List */
<div className="mt-6 grid gap-4">
  {filteredTasks.map((task) => (
    <article
      key={task.id}
      className="group rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition duration-300 hover:border-slate-700 hover:bg-slate-900 sm:p-6"
    >
      {editingTaskId === task.id ? (
        /* Edit Mode */
        <EditTaskForm
          task={task}
          onTaskUpdated={fetchTasks}
          onCancel={handleEditCancel}
        />
      ) : (
        <>
          {/* Task Header */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0 flex-1">
              <h2
                className={`text-lg font-semibold ${
                  task.completed
                    ? "text-slate-400"
                    : "text-white"
                }`}
              >
                {task.title}
              </h2>

              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                {task.description || "No description provided."}
              </p>
            </div>

            {/* Status Badge */}
            <span
              className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium ${
                task.completed
                  ? "bg-emerald-500/10 text-emerald-400"
                  : "bg-amber-500/10 text-amber-400"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  task.completed
                    ? "bg-emerald-400"
                    : "bg-amber-400"
                }`}
              />

              {task.completed ? "Completed" : "Pending"}
            </span>
          </div>

          {/* Task Actions */}
          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-800 pt-4">
            <button
              type="button"
              onClick={() => handleStatusChange(task)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition active:scale-[0.98] ${
                task.completed
                  ? "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                  : "bg-blue-600 text-white hover:bg-blue-500"
              }`}
            >
              {task.completed
                ? "Mark as Pending"
                : "Mark as Completed"}
            </button>

            <button
              type="button"
              onClick={() => handleEditClick(task.id)}
              className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-slate-600 hover:bg-slate-800 hover:text-white"
            >
              Edit
            </button>

            <button
              type="button"
              onClick={() => handleDeleteClick(task)}
              className="rounded-lg px-4 py-2 text-sm font-medium text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
            >
              Delete
            </button>
          </div>
        </>
      )}
        </article>
         ))}
     </div>
        )}
      </main>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        task={taskToDelete}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </div>
  );
}

export default Dashboard;