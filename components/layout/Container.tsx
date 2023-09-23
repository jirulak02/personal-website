import { Children } from "@/app/layout";

export default function Container({ children }: Children) {
  return <div className="m-auto max-w-6xl px-3">{children}</div>;
}
