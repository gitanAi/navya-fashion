"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle, Edit2, Plus, Trash2, Search } from "lucide-react"

export default function AdminDashboard() {
  const [products, setProducts] = useState(initialProducts)
  const [searchQuery, setSearchQuery] = useState("")
  const [editingProduct, setEditingProduct] = useState<(typeof initialProducts)[0] | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    material: "",
    price: "",
    description: "",
    stock: "",
  })

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const openAddDialog = () => {
    setEditingProduct(null)
    setFormData({
      name: "",
      category: "",
      material: "",
      price: "",
      description: "",
      stock: "",
    })
    setIsDialogOpen(true)
  }

  const openEditDialog = (product: (typeof initialProducts)[0]) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      category: product.category,
      material: product.material,
      price: product.price.toString(),
      description: product.description,
      stock: product.stock.toString(),
    })
    setIsDialogOpen(true)
  }

  const handleSaveProduct = () => {
    if (!formData.name || !formData.category || !formData.price) {
      alert("Please fill in all required fields")
      return
    }

    if (editingProduct) {
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id
            ? {
                ...p,
                name: formData.name,
                category: formData.category,
                material: formData.material,
                price: Number.parseFloat(formData.price),
                description: formData.description,
                stock: Number.parseInt(formData.stock),
              }
            : p,
        ),
      )
    } else {
      const newProduct = {
        id: Math.max(...products.map((p) => p.id)) + 1,
        name: formData.name,
        category: formData.category,
        material: formData.material,
        price: Number.parseFloat(formData.price),
        description: formData.description,
        stock: Number.parseInt(formData.stock),
        createdAt: new Date().toLocaleDateString(),
      }
      setProducts([...products, newProduct])
    }

    setIsDialogOpen(false)
    setFormData({
      name: "",
      category: "",
      material: "",
      price: "",
      description: "",
      stock: "",
    })
  }

  const handleDeleteProduct = (id: number) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id))
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="border-b border-border bg-secondary/30 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-serif font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your products and inventory</p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-serif font-bold text-primary">{products.length}</div>
              <p className="text-xs text-muted-foreground mt-1">Active items in inventory</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-serif font-bold text-destructive">
                {products.filter((p) => p.stock < 10).length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Items below minimum threshold</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium">Total Inventory Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-serif font-bold text-primary">
                ₹{products.reduce((sum, p) => sum + p.price * p.stock, 0).toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Current stock value</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Add Button */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-muted-foreground size-4" />
            <Input
              placeholder="Search products by name or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button onClick={openAddDialog} className="bg-primary hover:bg-primary/90">
                <Plus className="size-4 mr-2" />
                Add Product
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>{editingProduct ? "Edit Product" : "Add New Product"}</DialogTitle>
                <DialogDescription>
                  {editingProduct
                    ? "Update the product details below."
                    : "Fill in the product details to add it to your inventory."}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Product Name *</Label>
                  <Input
                    id="name"
                    placeholder="e.g., Premium Silk Dupion"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(val) => setFormData({ ...formData, category: val })}
                  >
                    <SelectTrigger id="category" className="mt-1">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Luxury Silks">Luxury Silks</SelectItem>
                      <SelectItem value="Contemporary Weaves">Contemporary Weaves</SelectItem>
                      <SelectItem value="Cotton Blends">Cotton Blends</SelectItem>
                      <SelectItem value="Linen Collections">Linen Collections</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="material">Material</Label>
                  <Select
                    value={formData.material}
                    onValueChange={(val) => setFormData({ ...formData, material: val })}
                  >
                    <SelectTrigger id="material" className="mt-1">
                      <SelectValue placeholder="Select material" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Silk">Silk</SelectItem>
                      <SelectItem value="Cotton">Cotton</SelectItem>
                      <SelectItem value="Linen">Linen</SelectItem>
                      <SelectItem value="Wool">Wool</SelectItem>
                      <SelectItem value="Synthetic Blend">Synthetic Blend</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="price">Price (₹) *</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="1000"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="stock">Stock Quantity</Label>
                  <Input
                    id="stock"
                    type="number"
                    placeholder="50"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Product description..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="flex gap-3 justify-end pt-4">
                <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleSaveProduct} className="bg-primary hover:bg-primary/90">
                  {editingProduct ? "Update Product" : "Add Product"}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        {/* Products Table */}
        <Card>
          <CardHeader>
            <CardTitle>Products</CardTitle>
            <CardDescription>
              Showing {filteredProducts.length} of {products.length} products
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredProducts.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Product Name</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Material</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-right">Stock</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProducts.map((product) => (
                      <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.name}</TableCell>
                        <TableCell>{product.category}</TableCell>
                        <TableCell>{product.material}</TableCell>
                        <TableCell className="text-right font-semibold">₹{product.price}</TableCell>
                        <TableCell className="text-right">{product.stock}</TableCell>
                        <TableCell>
                          {product.stock === 0 ? (
                            <Badge variant="destructive">Out of Stock</Badge>
                          ) : product.stock < 10 ? (
                            <Badge
                              variant="outline"
                              className="border-destructive text-destructive flex items-center gap-1 w-fit"
                            >
                              <AlertCircle className="size-3" />
                              Low Stock
                            </Badge>
                          ) : (
                            <Badge variant="secondary">In Stock</Badge>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex gap-2 justify-end">
                            <Button
                              variant="ghost"
                              size="icon-sm"
                              onClick={() => openEditDialog(product)}
                              className="hover:bg-primary/10"
                            >
                              <Edit2 className="size-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon-sm"
                              onClick={() => handleDeleteProduct(product.id)}
                              className="hover:bg-destructive/10 text-destructive"
                            >
                              <Trash2 className="size-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">
                  {searchQuery ? "No products found matching your search." : "No products added yet."}
                </p>
                {searchQuery && (
                  <Button variant="outline" onClick={() => setSearchQuery("")}>
                    Clear Search
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

const initialProducts = [
  {
    id: 1,
    name: "Premium Silk Dupion",
    category: "Luxury Silks",
    material: "Silk",
    price: 2500,
    description: "Luxurious silk dupion with rich texture and sheen",
    stock: 15,
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    name: "Organic Cotton Sateen",
    category: "Cotton Blends",
    material: "Cotton",
    price: 1200,
    description: "Soft and breathable organic cotton sateen",
    stock: 8,
    createdAt: "2024-01-10",
  },
  {
    id: 3,
    name: "Belgian Linen Weave",
    category: "Linen Collections",
    material: "Linen",
    price: 1800,
    description: "Premium Belgian linen with natural texture",
    stock: 25,
    createdAt: "2024-01-05",
  },
  {
    id: 4,
    name: "Wool Blend Jacquard",
    category: "Contemporary Weaves",
    material: "Wool",
    price: 2200,
    description: "Contemporary jacquard pattern in premium wool blend",
    stock: 3,
    createdAt: "2024-01-01",
  },
  {
    id: 5,
    name: "Silk Charmeuse",
    category: "Luxury Silks",
    material: "Silk",
    price: 3200,
    description: "Elegant charmeuse silk with subtle sheen",
    stock: 0,
    createdAt: "2023-12-28",
  },
]
