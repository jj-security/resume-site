// app/reading_list/page.tsx

export default function ReadingList() {
  return (
    <main className="bg-background min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-primary mb-10">
          Reading List
        </h1>

        <div className="space-y-8">

          <section className="bg-panel border border-border p-6 rounded-lg">
            <ul className="list-disc list-inside space-y-3 text-muted">
              <li>
                <span className="text-foreground font-medium">Analogia</span> — George Dyson
              </li>

              <li>
                <span className="text-foreground font-medium">Superintelligence</span> — Nick Bostrom
              </li>
            </ul>
          </section>

        </div>
      </div>
    </main>
  );
}
