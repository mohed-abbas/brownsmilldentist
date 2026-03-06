import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container-page flex min-h-screen flex-col items-center justify-center gap-8 text-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-display-section text-[var(--text-primary)]">404</h1>
        <p className="text-heading-md text-[var(--text-primary)]">
          Page not found
        </p>
        <p className="text-body-lg text-[var(--text-secondary)] max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
      </div>
      <Button variant="teal" size="brand-default" asChild>
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  );
}
