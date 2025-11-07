"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function ProductsPage() {
  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState("newest");

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const toggleMaterial = (material: string) => {
    setSelectedMaterials((prev) =>
      prev.includes(material)
        ? prev.filter((m) => m !== material)
        : [...prev, material],
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedMaterials([]);
    setPriceRange([0, 10000]);
    setSearchQuery("");
    setSortBy("newest");
  };

  const filteredProducts = useMemo(() => {
    const filtered = [...products].filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);
      const matchesMaterial =
        selectedMaterials.length === 0 ||
        selectedMaterials.includes(product.material);
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return (
        matchesSearch && matchesCategory && matchesMaterial && matchesPrice
      );
    });

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
      default:
        filtered.sort((a, b) => b.id - a.id);
    }

    return filtered;
  }, [searchQuery, selectedCategories, selectedMaterials, priceRange, sortBy]);

  const activeFiltersCount =
    selectedCategories.length +
    selectedMaterials.length +
    (searchQuery ? 1 : 0);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-secondary/30 border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-serif font-bold mb-2">
            Our Collections
          </h1>
          <p className="text-muted-foreground">
            Explore our curated selection of premium fabrics and textiles
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground mb-4">
                  Filters
                </h3>

                {/* Search */}
                <div className="mb-6">
                  <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>

                {/* Active Filters Badge */}
                {activeFiltersCount > 0 && (
                  <div className="mb-6 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {activeFiltersCount} filter
                      {activeFiltersCount !== 1 ? "s" : ""} active
                    </span>
                    <button
                      onClick={clearFilters}
                      className="text-xs text-primary hover:underline font-medium"
                    >
                      Clear All
                    </button>
                  </div>
                )}

                {/* Category Filter */}
                <Collapsible
                  defaultOpen
                  className="border-b border-border pb-6"
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full hover:text-primary transition-colors">
                    <span className="text-sm font-semibold">Category</span>
                    <ChevronDown className="size-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-4 space-y-3">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center gap-3">
                        <Checkbox
                          id={`cat-${category}`}
                          checked={selectedCategories.includes(category)}
                          onCheckedChange={() => toggleCategory(category)}
                        />
                        <Label
                          htmlFor={`cat-${category}`}
                          className="cursor-pointer"
                        >
                          {category}
                        </Label>
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Material Filter */}
                <Collapsible
                  defaultOpen
                  className="border-b border-border py-6"
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full hover:text-primary transition-colors">
                    <span className="text-sm font-semibold">Material</span>
                    <ChevronDown className="size-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-4 space-y-3">
                    {materials.map((material) => (
                      <div key={material} className="flex items-center gap-3">
                        <Checkbox
                          id={`mat-${material}`}
                          checked={selectedMaterials.includes(material)}
                          onCheckedChange={() => toggleMaterial(material)}
                        />
                        <Label
                          htmlFor={`mat-${material}`}
                          className="cursor-pointer"
                        >
                          {material}
                        </Label>
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Price Range Filter */}
                {/* <Collapsible defaultOpen className="pt-6">
                  <CollapsibleTrigger className="flex items-center justify-between w-full hover:text-primary transition-colors">
                    <span className="text-sm font-semibold">Price Range</span>
                    <ChevronDown className="size-4" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-4 space-y-4">
                    <Slider
                      min={0}
                      max={10000}
                      step={100}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Min: </span>
                        <span className="font-semibold text-primary">
                          ₹{priceRange[0]}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Max: </span>
                        <span className="font-semibold text-primary">
                          ₹{priceRange[1]}
                        </span>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible> */}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Sort Bar */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-border">
              <p className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} product
                {filteredProducts.length !== 1 ? "s" : ""}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="rating">Top Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="group overflow-hidden hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 h-64 flex items-center justify-center">
                      <Image
                        src={`/${product.image}`}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.isNew && (
                        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                          New
                        </Badge>
                      )}
                      {product.discount > 0 && (
                        <Badge
                          variant="destructive"
                          className="absolute top-4 left-4"
                        >
                          -{product.discount}%
                        </Badge>
                      )}
                    </div>
                    <CardContent className="pt-4">
                      <div className="mb-3">
                        <Badge variant="outline" className="text-xs mb-2">
                          {product.material}
                        </Badge>
                        <h3 className="font-serif font-bold text-lg group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {product.description}
                      </p>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={
                                i < product.rating
                                  ? "text-accent text-sm"
                                  : "text-muted text-sm"
                              }
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">
                          ({product.reviews})
                        </span>
                      </div>

                      {/* Price */}
                      {/* <div className="flex items-baseline gap-2 mb-4">
                        <span className="font-serif font-bold text-xl text-primary">
                          ₹{product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm line-through text-muted-foreground">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>

                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Add to Cart
                      </Button> */}
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground mb-4">
                  No products found matching your filters
                </p>
                <Button variant="outline" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

// Filter options
const categories = [
  "Luxury Silks",
  "Contemporary Weaves",
  "Cotton Blends",
  "Linen Collections",
];
const materials = ["Silk", "Cotton", "Linen", "Wool", "Synthetic Blend"];

// Sample products data
const products = [
  {
    id: 1,
    name: "Premium Silk Dupion",
    category: "Luxury Silks",
    material: "Silk",
    price: 2500,
    originalPrice: 3200,
    description: "Luxurious silk dupion with rich texture and sheen",
    rating: 5,
    reviews: 24,
    discount: 20,
    isNew: true,
    image: "premiumfabrics.webp",
  },
  {
    id: 2,
    name: "Organic Cotton Sateen",
    category: "Cotton Blends",
    material: "Cotton",
    price: 1200,
    description: "Soft and breathable organic cotton sateen",
    rating: 4,
    reviews: 18,
    discount: 0,
    isNew: false,
    image: "pr1.webp",
  },
  {
    id: 3,
    name: "Belgian Linen Weave",
    category: "Linen Collections",
    material: "Linen",
    price: 1800,
    description: "Premium Belgian linen with natural texture",
    rating: 5,
    reviews: 31,
    discount: 0,
    isNew: true,
    image: "pr2.webp",
  },
  {
    id: 4,
    name: "Wool Blend Jacquard",
    category: "Contemporary Weaves",
    material: "Wool",
    price: 2200,
    originalPrice: 2800,
    description: "Contemporary jacquard pattern in premium wool blend",
    rating: 4,
    reviews: 12,
    discount: 15,
    isNew: false,
    image: "pr3.webp",
  },
  {
    id: 5,
    name: "Silk Charmeuse",
    category: "Luxury Silks",
    material: "Silk",
    price: 3200,
    description: "Elegant charmeuse silk with subtle sheen",
    rating: 5,
    reviews: 42,
    discount: 0,
    isNew: false,
    image: "ppremiumfabrics.webp",
  },
  {
    id: 6,
    name: "Cotton Linen Blend",
    category: "Cotton Blends",
    material: "Synthetic Blend",
    price: 950,
    description: "Breathable cotton linen blend for everyday elegance",
    rating: 4,
    reviews: 15,
    discount: 10,
    isNew: true,
    image: "pr4.webp",
  },
  {
    id: 7,
    name: "Raw Silk Noil",
    category: "Luxury Silks",
    material: "Silk",
    price: 2100,
    originalPrice: 2600,
    description: "Textured raw silk with natural variations",
    rating: 4,
    reviews: 28,
    discount: 15,
    isNew: false,
    image: "pr5.webp",
  },
  {
    id: 8,
    name: "Modern Jacquard",
    category: "Contemporary Weaves",
    material: "Synthetic Blend",
    price: 1650,
    description: "Contemporary patterns in sustainable fabric blend",
    rating: 5,
    reviews: 19,
    discount: 0,
    isNew: false,
    image: "pr6.webp",
  },
  {
    id: 9,
    name: "Pure Linen Canvas",
    category: "Linen Collections",
    material: "Linen",
    price: 1400,
    description: "Heavy-weight pure linen canvas for upholstery",
    rating: 4,
    reviews: 11,
    discount: 0,
    isNew: true,
    image: "pr7.webp",
  },
];
