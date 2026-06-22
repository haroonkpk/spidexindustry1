import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardLayout({ children, className = "" }: CardProps) {
  return (
    <div className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900 ${className}`}>
      {children}
    </div>
  );
}
