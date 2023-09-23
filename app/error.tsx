"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="absolute top-1/2 flex w-full -translate-y-1/2 flex-col space-y-3 p-3 text-center">
      <h2 className="font-semibold">Something went wrong!</h2>
      <button
        className="m-auto rounded-3xl border-2 border-lime-800 bg-lime-800 p-4 py-2 text-lg text-neutral-100 hover:bg-neutral-100 hover:text-lime-800 focus:bg-neutral-300 sm:text-xl md:text-2xl"
        onClick={() => reset()}
      >
        Try again
      </button>
      <p>If trying again doesn't help, please navigate back.</p>
    </div>
  );
}
