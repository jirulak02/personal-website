import Link from "next/link";

export default function ExternalLink({
  children,
  href,
  friendly,
}: {
  children: string;
  href: string;
  friendly?: boolean;
}) {
  return (
    <Link
      href={href}
      className="flex max-w-fit items-center gap-1 underline"
      target="_blank"
      rel={friendly ? "" : "noopener noreferrer"}
    >
      {children}
      <svg width="15" height="15" aria-hidden="true" viewBox="0 0 24 24">
        <path
          fill="rgb(var(--foreground-rgb))"
          d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
        ></path>
      </svg>
    </Link>
  );
}
