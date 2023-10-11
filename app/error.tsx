"use client";

import Header from "@/components/layout/Header";
import Button from "@/components/ui/Button";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <>
      <Header normal={false} />
      <div className="absolute top-1/2 flex w-full -translate-y-1/2 flex-col space-y-3 p-3 text-center">
        <h2 className="font-semibold">Something went wrong!</h2>
        <Button onClick={() => reset()}>Try again</Button>
        <p>If trying again doesn't help, please navigate back.</p>
      </div>
    </>
  );
}
