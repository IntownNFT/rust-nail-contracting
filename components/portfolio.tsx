import { Play } from "lucide-react";

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sand-dark">
            See Our Work
          </p>
          <h2 className="mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
            Recent Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Browse some of our recent projects across the Greater Dallas area.
            Videos coming soon!
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="group flex aspect-video items-center justify-center rounded-xl border border-warm-border bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col items-center gap-3 text-muted-foreground">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sand/10 transition-colors group-hover:bg-sand/20">
                  <Play className="h-6 w-6 text-sand-dark" />
                </div>
                <span className="text-sm font-medium">Project {i}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
