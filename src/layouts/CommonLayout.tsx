import React from "react";
import { NavLink } from "react-router-dom";

interface IProps {
  title: string;
  children: React.ReactNode;
}

export default function CommonLayout({ title, children }: IProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="z-30 flex-shrink-0 w-64 overflow-y-auto bg-white p-4 shadow-sm">
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className="block p-3 hover:bg-purple-600 hover:text-white font-semibold text-base rounded-md"
                activeClassName="bg-purple-600 text-white"
              >
                Home
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="flex justify-center flex-grow overflow-x-auto">
        <div className="max-w-xl">
          <h1 className="text-2xl font-bold my-6">{title}</h1>

          {children}
        </div>
      </main>
    </div>
  );
}
