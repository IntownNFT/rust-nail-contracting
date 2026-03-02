import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Coming Soon",
    location: "Carrollton, TX",
    text: "Customer testimonial placeholder — real reviews will be added here once available.",
  },
  {
    name: "Coming Soon",
    location: "Dallas, TX",
    text: "Customer testimonial placeholder — real reviews will be added here once available.",
  },
  {
    name: "Coming Soon",
    location: "Plano, TX",
    text: "Customer testimonial placeholder — real reviews will be added here once available.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sand-dark">
            What Clients Say
          </p>
          <h2 className="mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
            Testimonials
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-warm-border">
              <CardContent className="pt-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-sand text-sand"
                    />
                  ))}
                </div>
                <p className="italic text-muted-foreground">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-4 border-t border-warm-border pt-4">
                  <p className="font-semibold text-charcoal">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
