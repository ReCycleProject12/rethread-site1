import React from "react";
export function Badge({ variant = 'secondary', className = '', children }) {
  const styles = variant === 'secondary' ? 'bg-neutral-100 text-neutral-800' : 'bg-emerald-600 text-white';
  return <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full ${styles} ${className}`}>{children}</span>;
}
