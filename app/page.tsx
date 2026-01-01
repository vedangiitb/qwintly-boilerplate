// DESC_START
// The page component is used to render the home page.
//  DESC_END

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <main className="p-8 text-center">
        <h1 className="text-3xl font-semibold">Boilerplate</h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Edit <code>app/page.tsx</code> to get started.
        </p>
      </main>
    </div>
  );
}