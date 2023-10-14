import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="m-auto max-w-6xl px-3">{children}</div>;
}
