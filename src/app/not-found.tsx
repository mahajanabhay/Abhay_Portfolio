import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center px-6 py-20 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">

        <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          404
        </p>

        <h1 className="mt-6 text-7xl font-medium tracking-[-0.07em] md:text-[10rem]">
          Lost<span className="text-[#ff5c35]">.</span>
        </h1>

        <p className="mt-8 max-w-lg text-xl text-neutral-600">
          This page doesn&apos;t exist. Maybe it wandered off somewhere.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex rounded-full bg-black px-6 py-3 text-sm text-white"
        >
          Back home
        </Link>

      </div>
    </main>
  );
}