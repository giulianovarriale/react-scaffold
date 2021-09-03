import React from "react";

interface IProps {
  children: React.ReactNode;
}

export default function DeepFocusLayout({ children }: IProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <main className="flex-1 max-w-md bg-white rounded-lg shadow-xl p-8">
        {children}
      </main>
    </div>
  );
}
