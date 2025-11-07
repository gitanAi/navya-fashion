import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
            {/* Hero Content */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <p className="text-sm font-semibold tracking-widest text-accent uppercase">
                  Premium Textiles Since 2018
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-pretty leading-tight">
                  Weaving <span className="text-primary">Elegance</span>, One
                  Fabric at a Time
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                  Discover Navya Fashion&apos;s exquisite collection of premium
                  textiles and fabrics, crafted with passion in Surat.
                  Experience luxury in every thread.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/products">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                  >
                    Explore Collections
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                <div>
                  <p className="text-2xl font-serif font-bold text-primary">
                    5+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Years Experience
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-primary">
                    500+
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Design Variants
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-primary">
                    100%
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Premium Quality
                  </p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden md:block">
              <div className="absolute -inset-2 bg-gradient-to-br from-accent to-primary/30 rounded-2xl blur-2xl opacity-20" />
              <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 aspect-square flex items-center justify-center border border-border/50">
                <Image
                  src="/premiumfabrics.webp"
                  alt="Premium Fabric Collection"
                  width={500}
                  height={500}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2">
              Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Crafted Excellence
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every fabric tells a story of quality, innovation, and dedication
              to craftsmanship
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.id}
                className="border border-border/50 hover:border-accent/50 transition-colors"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Preview Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
            <div>
              <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2">
                Collections
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Curated for Every Occasion
              </h2>
              <p className="text-muted-foreground max-w-lg">
                From everyday elegance to special occasions, our collections
                span diverse styles and textures to meet every need.
              </p>
            </div>
            <Link href="/products">
              <Button variant="outline" size="lg">
                View All Collections →
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                href={`/products?category=${collection.id}`}
              >
                <Card className="cursor-pointer group border border-border/50 hover:border-primary/50 transition-colors overflow-hidden">
                  <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 h-64 flex items-center justify-center">
                    <Image
                      src={`/${collection.image}`}
                      alt={collection.name}
                      width={600}
                      height={400}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-serif font-bold mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {collection.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2">
              Client Stories
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border border-border/50">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-serif font-bold">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Let our expert team help you find the perfect fabric for your
            project. Contact us today.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Get Your Quote Now
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

// Data
const features = [
  {
    id: 1,
    icon: "✨",
    title: "Premium Quality",
    description:
      "Hand-selected fabrics sourced from the finest mills worldwide, ensuring exceptional durability and beauty.",
  },
  {
    id: 2,
    icon: "🎨",
    title: "Custom Designs",
    description:
      "Bring your vision to life with our bespoke design services and unlimited customization options.",
  },
  {
    id: 3,
    icon: "⚡",
    title: "Fast Delivery",
    description:
      "Efficient production and logistics ensure your fabrics arrive on time, every time.",
  },
];

const collections = [
  {
    id: "luxury",
    name: "Luxury Silks",
    image: "pr1.webp",
    description:
      "Exquisite silk fabrics perfect for formal wear and premium upholstery.",
  },
  {
    id: "contemporary",
    name: "Contemporary Weaves",
    image: "pr2.webp",
    description:
      "Modern patterns and sustainable materials for the conscious designer.",
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "Navya Fashion's fabrics have transformed our product line. The quality and attention to detail are unmatched.",
    author: "Priya Sharma",
    company: "Premium Apparel Co.",
  },
  {
    id: 2,
    quote:
      "Working with Navya Fashion has been a game-changer. Their expertise and support are invaluable.",
    author: "Raj Patel",
    company: "Design Studios India",
  },
  {
    id: 3,
    quote:
      "The consistency in quality and the range of designs available is exceptional. Highly recommended!",
    author: "Meera Gupta",
    company: "Interior Design House",
  },
];
