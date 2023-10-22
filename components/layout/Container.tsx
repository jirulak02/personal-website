export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`m-auto max-w-6xl px-3 ${className || ""}`}>{children}</div>;
}
