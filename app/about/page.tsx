import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-4">
              Our Story
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Crafting Excellence Since 2018
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Navya Fashion was founded with a vision to bring authentic,
              premium textiles to the world. For over two decades, we&apos;ve
              been dedicated to weaving tradition with innovation, creating
              fabrics that tell stories of craftsmanship and elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-12">Our Journey</h2>

          <div className="space-y-8">
            {timeline.map((event) => (
              <div key={event.id} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary mt-2 mb-4" />
                  <div className="w-0.5 h-20 bg-border" />
                </div>
                <div className="pb-8">
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/30">
                    {event.year}
                  </Badge>
                  <h3 className="text-xl font-serif font-bold mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground max-w-2xl">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.id} className="border border-border/50">
                <CardHeader>
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2">
              Our Team
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Meet the Visionaries
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our talented team combines decades of textile expertise with
              innovative design thinking
            </p>
          </div>

          <div className="flex gap-6 place-content-center justify-center">
            {teamMembers.map((member) => (
              <Card
                key={member.id}
                className="text-center overflow-hidden hover:border-primary/50 transition-colors"
              >
                <CardContent className="pt-6">
                  <h3 className="font-serif font-bold text-lg mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
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
            Interested in Partnering with Us?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s explore how we can work together to create something
            extraordinary.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/partners">
              <Button size="lg" variant="secondary">
                Explore Partnerships
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const timeline = [
  {
    id: 1,
    year: "2018",
    title: "Foundation",
    description:
      "Navya Fashion was established in Surat with a mission to revolutionize the textile industry through quality and innovation.",
  },
  {
    id: 4,
    year: "2020",
    title: "Digital Transformation",
    description:
      "Embraced digital technology to enhance customer experience and streamline production.",
  },
];

const values = [
  {
    id: 1,
    icon: "🎨",
    title: "Innovation",
    description:
      "We constantly push boundaries to create new designs and production techniques that set industry standards.",
  },
  {
    id: 2,
    icon: "✨",
    title: "Quality",
    description:
      "Every fabric is meticulously crafted to ensure exceptional durability, beauty, and performance.",
  },
  {
    id: 3,
    icon: "🌍",
    title: "Sustainability",
    description:
      "We are committed to responsible production practices that protect our environment for future generations.",
  },
];

const teamMembers = [
  {
    id: 1,
    name: "Tarak lunagariya",
    role: "Founder & CEO",
    bio: "10+ years in textile industry, visionary leader",
  },
  {
    id: 3,
    name: "Ramesh",
    role: "Operations Manager",
    bio: "Supply chain expert, efficiency focused",
  },
];
