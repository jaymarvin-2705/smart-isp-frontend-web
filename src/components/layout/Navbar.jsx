import { FaBell, FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-6">

      <div>

        <h2 className="text-xl font-semibold">
          Dashboard
        </h2>

      </div>

      <div className="flex items-center gap-5">

        <FaBell size={20} />

        <div className="flex items-center gap-2">

          <FaUserCircle size={28} />

          <span>Administrator</span>

        </div>

      </div>

    </header>
  );
}