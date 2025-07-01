export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="m-auto max-w-6xl grow flex flex-col justify-between px-3">{children}</div>;
}
