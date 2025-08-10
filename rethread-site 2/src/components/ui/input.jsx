import React from "react";
export function Input(props) {
  return <input {...props} className={`w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/40 ${props.className||''}`} />;
}
export function Textarea(props) {
  return <textarea {...props} className={`w-full rounded-md border border-neutral-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600/40 ${props.className||''}`}></textarea>;
}
