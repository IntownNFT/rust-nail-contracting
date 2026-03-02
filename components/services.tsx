import {
  Fence,
  Cuboid as Deck,
  Paintbrush,
  Home,
  TreePine,
  Wrench,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const services = [
  {
    icon: Fence,
    title: "Fencing",
    description:
      "Custom wood, vinyl, and metal fences built to last. Privacy, security, and curb appeal for your property.",
  },
  {
    icon: Deck,
    title: "Decks",
    description:
      "Beautiful, durable decks and patios designed for outdoor living. From simple platforms to multi-level builds.",
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description:
      "Interior and exterior painting with premium materials. Clean lines, lasting finishes, and attention to detail.",
  },
  {
    icon: Home,
    title: "Interior Renovation",
    description:
      "Kitchen and bath remodels, flooring, drywall, and full interior makeovers tailored to your vision.",
  },
  {
    icon: TreePine,
    title: "Landscaping",
    description:
      "Transform your yard with professional landscaping, hardscaping, drainage solutions, and garden design.",
  },
  {
    icon: Wrench,
    title: "Exterior Renovation & Repair",
    description:
      "Siding, trim, fascia, gutters, and structural repairs. We restore and protect your home's exterior.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-sand-dark">
            What We Do
          </p>
          <h2 className="mt-2 text-3xl font-bold text-charcoal sm:text-4xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From fences and decks to full renovations, we bring skilled
            craftsmanship to every project in the Greater Dallas area.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-warm-border transition-shadow hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-sand/10">
                  <service.icon className="h-6 w-6 text-sand-dark" />
                </div>
                <CardTitle className="text-charcoal">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
