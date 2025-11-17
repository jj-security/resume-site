// app/reading_list/page.tsx

export default function ReadingList() {
  return (
    <main className="bg-background min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold text-primary mb-10">
          Reading List
        </h1>

        <h3 className="text-secondary mb-10">
          Below is a list of the books I have recently read and enjoyed.
        </h3>

        <div className="space-y-8">

          <section className="bg-panel border border-border p-6 rounded-lg">
            <ul className="list-disc list-inside space-y-3 text-muted">

              <li>
                <a
                  href="https://www.amazon.com/Analogia-Emergence-Technology-Programmable-Control/dp/0374104867"
                  target="_blank"
                  className="text-primary hover:text-primary-light underline font-medium"
                >
                  Analogia: The Emergence of Technology Beyond Programmable Control
                </a>{" "}
                — George Dyson
              </li>

              <li>
                <a
                  href="https://www.amazon.com/Superintelligence-Dangers-Strategies-Nick-Bostrom/dp/0198739834"
                  target="_blank"
                  className="text-primary hover:text-primary-light underline font-medium"
                >
                  Superintelligence: Paths, Dangers, Strategies
                </a>{" "}
                — Nick Bostrom
              </li>

            </ul>
          </section>

        </div>
      </div>
    </main>
  );
}
