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

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-secondary/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-4">
              Collaborate
            </p>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Our Global Partners
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We&apos;re proud to work alongside industry leaders who share our
              commitment to quality, innovation, and excellence. Together,
              we&apos;re creating a global community of premium textiles.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Showcase */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold mb-12">
            Trusted by Global Brands
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner) => (
              <Card
                key={partner.id}
                className="border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="relative h-40 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center p-6">
                  <Image
                    src={`https://randomuser.me/api/portraits/men/${partner.id}.jpg`}
                    alt={partner.name}
                    width={150}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-serif font-bold text-lg mb-2">
                    {partner.name}
                  </h3>
                  <Badge className="mb-3 text-xs">{partner.category}</Badge>
                  <p className="text-muted-foreground text-sm">
                    {partner.description}
                  </p>
                  {partner.yearsOfPartnership && (
                    <p className="text-xs text-accent mt-3 font-medium">
                      Partners since {partner.yearsOfPartnership}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="bg-primary/5 rounded-lg p-8 md:p-12 border border-border/50">
            <h3 className="text-2xl font-serif font-bold mb-8">
              Why Partner with Navya Fashion?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex gap-4">
                  <div className="text-2xl flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-2">
              Success Stories
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              What Our Partners Say
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
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.company}
                    </p>
                    <p className="text-xs text-accent mt-2">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">
              Partnership Tiers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the partnership model that works best for your business
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {partnershipTiers.map((tier) => (
              <Card
                key={tier.id}
                className={`border ${tier.featured ? "border-primary bg-primary/5 md:scale-105" : "border-border/50"}`}
              >
                <CardHeader>
                  {tier.featured && (
                    <Badge className="w-fit mb-3 bg-primary">Featured</Badge>
                  )}
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-serif font-bold text-primary">
                    {tier.minOrder}
                  </div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2 text-sm">
                        <span className="text-accent mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-4">Learn More</Button>
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
            Ready to Join Our Partnership?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Become part of our growing global network of premium textile
            partners.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}

const partners = [
  {
    id: 1,
    name: "Luxury Design House",
    category: "Premium Fashion",
    description: "Leading European luxury fashion brand",
    yearsOfPartnership: 2012,
    image: "",
  },
  {
    id: 2,
    name: "Global Textiles Ltd",
    category: "Distribution",
    description: "International textile distributor",
    yearsOfPartnership: 2015,
    image: "",
  },
  {
    id: 3,
    name: "Interior Elegance",
    category: "Interior Design",
    description: "Premium interior design studio",
    yearsOfPartnership: 2018,
    image: "",
  },
  {
    id: 4,
    name: "Fashion Forward",
    category: "Retail",
    description: "Contemporary fashion retailer",
    yearsOfPartnership: 2019,
    image: "",
  },
  {
    id: 5,
    name: "Artisan Collective",
    category: "Craft",
    description: "Sustainable fashion collective",
    yearsOfPartnership: 2020,
    image: "",
  },
  {
    id: 6,
    name: "Tech Fabrics",
    category: "Innovation",
    description: "Smart textile innovator",
    yearsOfPartnership: 2021,
    image: "",
  },
];

const benefits = [
  {
    id: 1,
    icon: "⭐",
    title: "Premium Quality Assurance",
    description:
      "Consistent, superior quality products backed by rigorous testing standards.",
  },
  {
    id: 2,
    icon: "🚀",
    title: "Dedicated Support",
    description:
      "Access to expert team for technical guidance and business support.",
  },
  {
    id: 3,
    icon: "💼",
    title: "Competitive Pricing",
    description:
      "Volume-based discounts and flexible payment terms for partners.",
  },
  {
    id: 4,
    icon: "🌐",
    title: "Global Reach",
    description:
      "Expand your market presence through our international network.",
  },
  {
    id: 5,
    icon: "📈",
    title: "Growth Opportunities",
    description:
      "Exclusive access to new collections and emerging market trends.",
  },
  {
    id: 6,
    icon: "🤝",
    title: "Long-term Partnership",
    description:
      "Sustainable, mutually beneficial relationships built on trust.",
  },
];

const testimonials = [
  {
    id: 1,
    quote:
      "Working with Navya Fashion has transformed our collection. Their quality and reliability are unmatched in the industry.",
    author: "Elena Rodriguez",
    company: "Luxury Design House",
    role: "Design Director",
  },
  {
    id: 2,
    quote:
      "The level of customization and support we receive is exceptional. They truly understand our business needs.",
    author: "Amit Singh",
    company: "Global Textiles Ltd",
    role: "CEO",
  },
  {
    id: 3,
    quote:
      "Navya Fashion is not just a supplier; they are a true partner in our success. Highly recommended!",
    author: "Sophie Martin",
    company: "Interior Elegance",
    role: "Founder",
  },
];

const partnershipTiers = [
  {
    id: 1,
    name: "Emerging Partner",
    description: "Perfect for growing businesses",
    minOrder: "₹50,000+",
    features: [
      "Access to core collections",
      "10% volume discount",
      "Monthly updates",
      "Standard support",
    ],
  },
  {
    id: 2,
    name: "Premium Partner",
    description: "Best for established brands",
    minOrder: "₹2,00,000+",
    featured: true,
    features: [
      "Full product access",
      "20% volume discount",
      "Priority support",
      "Exclusive previews",
      "Custom orders",
    ],
  },
  {
    id: 3,
    name: "Elite Partner",
    description: "For major retailers",
    minOrder: "₹5,00,000+",
    features: [
      "Unlimited access",
      "30% volume discount",
      "Dedicated account manager",
      "Custom designs",
      "Flexible terms",
    ],
  },
];
