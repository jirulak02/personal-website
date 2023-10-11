import Link from "next/link";

export default function Button({
  children,
  href,
  target,
  submitButton,
  isSubmitting,
  onClick,
}: {
  children: string;
  href?: string;
  target?: string;
  submitButton?: boolean;
  isSubmitting?: boolean;
  onClick?: () => void;
}) {
  if (href) {
    return (
      <div className="text-center">
        <Link href={href} target={target} className="inline-block rounded-2xl">
          <div className="rounded-2xl border-2 border-priColor bg-priColor px-4 py-2 text-lg text-neutral-100 hover:bg-transparent hover:text-priColor sm:text-xl md:text-2xl">
            {children}
          </div>
        </Link>
      </div>
    );
  }

  if (submitButton) {
    return (
      <div className="text-center">
        <button
          type="submit"
          {...(isSubmitting && { disabled: true })}
          className={`rounded-2xl border-2 px-4 py-2 text-lg sm:text-xl md:text-2xl ${
            isSubmitting
              ? "cursor-not-allowed border-gray-300 bg-gray-400 text-gray-300"
              : "border-priColor bg-priColor text-neutral-100 hover:bg-transparent hover:text-priColor"
          }`}
        >
          {children}
        </button>
      </div>
    );
  }

  if (onClick) {
    return (
      <div className="text-center">
        <button
          type="button"
          className="rounded-2xl border-2 border-priColor bg-priColor px-4 py-2 text-lg text-neutral-100 hover:bg-transparent hover:text-priColor sm:text-xl md:text-2xl"
          onClick={onClick}
        >
          {children}
        </button>
      </div>
    );
  }

  return <></>;
}
