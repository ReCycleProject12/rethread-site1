import React from "react";
export function Card({ className = "", children }) {
  return <div className={`bg-white border shadow-sm ${className}`}>{children}</div>;
}
export function CardHeader({ children }) {
  return <div className="p-6 pb-2">{children}</div>;
}
export function CardTitle({ className = "", children }) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}
export function CardContent({ className = "", children }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}
