function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-xl font-bold text-white">
            TaskFlow
          </h1>
          <p className="text-xs text-slate-500">
            Task Management System
          </p>
        </div>

        <span className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm text-slate-400">
          Dashboard
        </span>
      </div>
    </nav>
  );
}

export default Navbar;