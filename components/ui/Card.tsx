import Reveal from "../animations/Reveal";

export type CardProps = {
  children: React.ReactNode;
  className?: string;
  white?: boolean;
  noPadding?: boolean;
  special?: boolean;
};

export default function Card({ children, className, white, noPadding, special }: CardProps) {
  return (
    <div className={className}>
      {special ? (
        <Reveal>
          <div
            className={`shadow-shadowColor space-y-4 rounded-3xl shadow-lg bg-${
              white ? "bgColor" : "secColor"
            } ${!noPadding && "p-6"}`}
          >
            {children}
          </div>
        </Reveal>
      ) : (
        <div
          className={`shadow-shadowColor space-y-4 rounded-3xl shadow-lg bg-${
            white ? "bgColor" : "secColor"
          } ${!noPadding && "p-6"}`}
        >
          {children}
        </div>
      )}
    </div>
  );
}
