import { LogIn, LogOut, Moon, Sun, UserRoundPlus } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../AuthContext";
import { Button } from "../../components/ui/button";

interface NavbarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  toggleDarkMode,
  isDarkMode,
}) => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex items-center justify-between bg-white p-4 dark:bg-zinc-800">
      <div className="flex items-center space-x-4">
        <Link
          className="text-2xl font-bold text-zinc-900 dark:text-zinc-100"
          to="/"
        >
          CTFv
        </Link>
        <Link
          to="/users"
          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
        >
          Users
        </Link>
        <Link
          to="/teams"
          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
        >
          Teams
        </Link>
        {/* <Link
          to="/challenges"
          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
        >
          Challenges
        </Link> */}
        <Link
          to="/leaderboard"
          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
        >
          Leaderboard
        </Link>

        {user?.isAdmin === true ? (
          <>
            <Link
              to="/admin/dashboard"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              Admin Dashboard
            </Link>
            <Link
              to="/admin/challenges"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              Manage Challenges
            </Link>
          </>
        ) : (
          <Link
            to="/challenges"
            className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
          >
            Challenges
          </Link>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {user ? (
          <div className="flex items-center space-x-4">
            <Link
              to="/profile"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              Profile
            </Link>
            <Button
              variant="outline"
              onClick={logout}
              className="flex items-center space-x-2 dark:text-zinc-300"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </Button>
          </div>
        ) : (
          <div className="flex items-center space-x-2">
            <Link to="/register">
              <Button
                variant="outline"
                className="flex items-center space-x-2 dark:text-zinc-300"
              >
                <UserRoundPlus size={20} />
                <span>Register</span>
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="outline"
                className="flex items-center space-x-2 dark:text-zinc-300"
              >
                <LogIn size={20} />
                <span>Login</span>
              </Button>
            </Link>
          </div>
        )}

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleDarkMode}
          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </div>
    </nav>
  );
};
