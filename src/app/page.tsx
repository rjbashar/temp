'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Higher Colleges of Technology</h1>
          <h2 className="text-2xl font-semibold mb-2">Faculty of Engineering</h2>
          <h3 className="text-xl">Programming Lab Tutorials</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <Link href="/python" 
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">
              Python Programming{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                →
              </span>
            </h2>
            <p className="text-sm opacity-60">EGN 1273</p>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Learn Python programming through hands-on examples and practical exercises.
            </p>
          </Link>

          <Link href="/cpp"
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className="mb-3 text-2xl font-semibold">
              C++ Programming{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                →
              </span>
            </h2>
            <p className="text-sm opacity-60">ECT 124</p>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Master C++ programming with comprehensive tutorials and exercises.
            </p>
          </Link>
        </div>
      </main>

      <footer className="row-start-3 text-center text-sm opacity-50">
        <p>Created by Dr. Bashar Alrjoub | {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
