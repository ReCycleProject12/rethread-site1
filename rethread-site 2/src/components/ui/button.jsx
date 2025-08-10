import React from "react";
export function Button({ asChild, className = "", children, ...props }) {
  const Comp = asChild ? 'a' : 'button';
  return (
    <Comp className={`inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-md shadow-sm bg-emerald-600 text-white hover:bg-emerald-700 active:scale-[0.99] transition ${className}`} {...props}>
      {children}
    </Comp>
  );
}
export function OutlineButton({ asChild, className = "", children, ...props }) {
  const Comp = asChild ? 'a' : 'button';
  return (
    <Comp className={`inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-md border border-neutral-300 hover:bg-neutral-50 transition ${className}`} {...props}>
      {children}
    </Comp>
  );
}
