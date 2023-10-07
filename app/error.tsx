"use client";

import Header from "@/components/layout/Header";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <>
      <Header normal={false} />
      <div className="absolute top-1/2 flex w-full -translate-y-1/2 flex-col space-y-3 p-3 text-center">
        <h2 className="font-semibold">Something went wrong!</h2>
        <button
          className="hover:bg-bgColor focus:bg-secColor border-priColor bg-priColor hover:text-priColor m-auto rounded-3xl border-2 p-4 py-2 text-lg text-neutral-100 sm:text-xl md:text-2xl"
          onClick={() => reset()}
        >
          Try again
        </button>
        <p>If trying again doesn't help, please navigate back.</p>
      </div>
    </>
  );
}
