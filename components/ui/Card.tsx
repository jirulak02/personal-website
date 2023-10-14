import Reveal from "../animations/Reveal";

export default function Card({
  children,
  className,
  white,
  noPadding,
  reveal,
}: {
  children: React.ReactNode;
  className?: string;
  white?: boolean;
  noPadding?: boolean;
  reveal?: boolean;
}) {
  return (
    <div className={className}>
      {reveal ? (
        <Reveal>
          <div
            className={`space-y-4 rounded-3xl shadow-lg shadow-shadowColor bg-${
              white ? "bgColor" : "secColor"
            } ${!noPadding && "p-6"}`}
          >
            {children}
          </div>
        </Reveal>
      ) : (
        <div
          className={`space-y-4 rounded-3xl shadow-lg shadow-shadowColor bg-${
            white ? "bgColor" : "secColor"
          } ${!noPadding && "p-6"}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
