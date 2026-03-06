"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="container-page flex min-h-screen flex-col items-center justify-center gap-8 text-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-heading-xl text-[var(--text-primary)]">
          Something went wrong
        </h1>
        <p className="text-body-lg text-[var(--text-secondary)] max-w-md">
          An unexpected error occurred. Please try again.
        </p>
      </div>
      <Button variant="teal" size="brand-default" onClick={reset}>
        Try again
      </Button>
    </main>
  );
}
