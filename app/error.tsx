"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="text-center absolute top-1/2 -translate-y-1/2 w-full flex flex-col space-y-3 p-3">
      <h2 className="font-semibold">Something went wrong!</h2>
      <button
        className="m-auto p-4 text-lg sm:text-xl md:text-2xl py-2 rounded-3xl bg-lime-800 text-neutral-100 border-2 border-lime-800 hover:bg-neutral-100 hover:text-lime-800 focus:bg-neutral-300"
        onClick={() => reset()}
      >
        Try again
      </button>
      <p>If trying again doesn't help, please navigate back.</p>
    </div>
  );
}
