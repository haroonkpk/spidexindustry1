import React from "react";

interface AuthShellProps {
  eyebrow: string;
  title: string;
  description: string;
  footer: React.ReactNode;
  children: React.ReactNode;
}

export default function AuthShell({
  eyebrow,
  title,
  description,
  footer,
  children,
}: AuthShellProps) {
  return (
    <main className="container mx-auto px-4 py-20">
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
        <div className="bg-primary/5 px-8 py-10 text-center sm:px-12 sm:py-14">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
            {title}
          </h1>
          <p className="muted mx-auto mt-4 max-w-2xl">{description}</p>
        </div>

        <div className="p-8 sm:p-10">
          {children}
          <div className="mt-8">{footer}</div>
        </div>
      </div>
    </main>
  );
}
