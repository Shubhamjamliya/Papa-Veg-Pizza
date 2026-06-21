// In-memory mock database for Pizza Franchise Products
// Standard Indian names, prices, categories, and WebP format image sources.

export const mockCategories = [
  { id: "cat-pizzas-classic", name: "Classic Pizzas" },
  { id: "cat-pizzas-gourmet", name: "Gourmet Pizzas" },
  { id: "cat-sides", name: "Sides & Appetizers" },
  { id: "cat-desserts", name: "Desserts" },
  { id: "cat-drinks", name: "Beverages" }
];

export const mockTaxCategories = [
  { id: "gst-5", name: "GST 5% (Food standard)" },
  { id: "gst-12", name: "GST 12% (Processed items)" },
  { id: "gst-18", name: "GST 18% (Aerated drinks/Services)" }
];

// Initial products mock database
export const initialProducts = [
  {
    _id: "prod-101",
    franchiseId: "FRAN-001",
    categoryId: "cat-pizzas-classic",
    name: "Double Cheese Margherita Pizza",
    slug: "double-cheese-margherita-pizza",
    sku: "PVP-MARG-01",
    shortDescription: "Classic cheese pizza with double mozzarella cheese burst.",
    description: "An absolute classic! A golden-crusted pizza topped with rich, slow-simmered tomato sauce, fresh basil, and an extra-generous layer of melted premium mozzarella cheese. A cheese lover's dream come true.",
    productType: "VEG",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80&fm=webp",
    galleryImages: [
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80&fm=webp",
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=400&q=80&fm=webp"
    ],
    basePrice: 249,
    preparationTime: 12,
    calories: 290,
    spiceLevel: 1,
    status: "ACTIVE",
    isFeatured: true,
    isBestSeller: true,
    isCustomizable: true,
    displayOrder: 1,
    taxCategory: "gst-5",
    createdBy: "Franchise Admin",
    createdAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    _id: "prod-102",
    franchiseId: "FRAN-001",
    categoryId: "cat-pizzas-gourmet",
    name: "Tandoori Paneer Overloaded Pizza",
    slug: "tandoori-paneer-overloaded-pizza",
    sku: "PVP-PANEER-02",
    shortDescription: "Spicy tandoori paneer cubes, red onions, capsicum and red paprika.",
    description: "A fiery fusion of succulent paneer cubes marinated in authentic Indian tandoori spices, baked to perfection with red capsicum, crunchy onions, red paprika, and a rich, creamy tandoori sauce swirl.",
    productType: "VEG",
    image: "https://images.unsplash.com/photo-1571066811602-71683a3f680d?auto=format&fit=crop&w=400&q=80&fm=webp",
    galleryImages: [
      "https://images.unsplash.com/photo-1571066811602-71683a3f680d?auto=format&fit=crop&w=400&q=80&fm=webp",
      "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=400&q=80&fm=webp"
    ],
    basePrice: 349,
    preparationTime: 15,
    calories: 340,
    spiceLevel: 3,
    status: "ACTIVE",
    isFeatured: true,
    isBestSeller: true,
    isCustomizable: true,
    displayOrder: 2,
    taxCategory: "gst-5",
    createdBy: "Franchise Admin",
    createdAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    _id: "prod-103",
    franchiseId: "FRAN-001",
    categoryId: "cat-pizzas-gourmet",
    name: "Fiery Chicken Tikka Pizza",
    slug: "fiery-chicken-tikka-pizza",
    sku: "PVP-CHICK-03",
    shortDescription: "Hot chicken tikka chunks, green chillies, onions, and spicy tomato sauce.",
    description: "For the adventurous spicy lovers! Tender chicken tikka pieces marinated in fiery hot spices, topped with sliced green chillies, red onions, capsicum, and premium mozzarella cheese, baked on our hand-tossed base.",
    productType: "NON_VEG",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80&fm=webp",
    galleryImages: [
      "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80&fm=webp"
    ],
    basePrice: 389,
    preparationTime: 14,
    calories: 380,
    spiceLevel: 5,
    status: "ACTIVE",
    isFeatured: false,
    isBestSeller: true,
    isCustomizable: true,
    displayOrder: 3,
    taxCategory: "gst-5",
    createdBy: "System Operator",
    createdAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    _id: "prod-104",
    franchiseId: "FRAN-001",
    categoryId: "cat-sides",
    name: "Cheesy Garlic Breadsticks",
    slug: "cheesy-garlic-breadsticks",
    sku: "PVP-GARLIC-04",
    shortDescription: "Baked garlic bread stuffed with mozzarella cheese and sweet corn.",
    description: "Crispy on the outside, soft and gooey on the inside! Freshly baked bread brushed with rich garlic butter, stuffed with sweet corn and melted mozzarella cheese, served with a side of creamy jalapeno dip.",
    productType: "VEG",
    image: "https://images.unsplash.com/photo-1573145959986-a142c6e68ea8?auto=format&fit=crop&w=400&q=80&fm=webp",
    galleryImages: [],
    basePrice: 149,
    preparationTime: 8,
    calories: 210,
    spiceLevel: 1,
    status: "ACTIVE",
    isFeatured: true,
    isBestSeller: false,
    isCustomizable: false,
    displayOrder: 4,
    taxCategory: "gst-5",
    createdBy: "Franchise Admin",
    createdAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    _id: "prod-105",
    franchiseId: "FRAN-001",
    categoryId: "cat-desserts",
    name: "Eggless Choco Lava Cake",
    slug: "eggless-choco-lava-cake",
    sku: "PVP-LAVA-05",
    shortDescription: "Warm chocolate cake with a rich liquid chocolate center.",
    description: "Indulge in our famous eggless chocolate cake, baked warm to create a molten center of thick liquid chocolate that flows out with your first bite. Perfect dessert to end your pizza feast.",
    productType: "EGG",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=400&q=80&fm=webp",
    galleryImages: [],
    basePrice: 99,
    preparationTime: 6,
    calories: 320,
    spiceLevel: 1,
    status: "ACTIVE",
    isFeatured: false,
    isBestSeller: true,
    isCustomizable: false,
    displayOrder: 5,
    taxCategory: "gst-12",
    createdBy: "System Operator",
    createdAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString()
  },
  {
    _id: "prod-106",
    franchiseId: "FRAN-001",
    categoryId: "cat-pizzas-classic",
    name: "Spicy Jalapeno Veg Delight",
    slug: "spicy-jalapeno-veg-delight",
    sku: "PVP-JALAP-06",
    shortDescription: "Spicy jalapenos, sweet corn, golden olives, and mozzarella.",
    description: "A delightful mix of spicy sliced jalapenos, sweet golden corn kernels, sliced black olives, and premium mozzarella cheese on a tangy herb tomato base sauce.",
    productType: "VEG",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=400&q=80&fm=webp",
    galleryImages: [],
    basePrice: 299,
    preparationTime: 10,
    calories: 275,
    spiceLevel: 2,
    status: "INACTIVE",
    isFeatured: false,
    isBestSeller: false,
    isCustomizable: true,
    displayOrder: 6,
    taxCategory: "gst-5",
    createdBy: "Franchise Admin",
    createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
  }
];

// Initial product variants database
export const initialVariants = [
  // Double Cheese Margherita
  { _id: "var-101", productId: "prod-101", name: "Small", size: "Small", price: 149, servingPersons: 1, calories: 180, isDefault: false, status: "ACTIVE" },
  { _id: "var-102", productId: "prod-101", name: "Medium", size: "Medium", price: 249, servingPersons: 2, calories: 290, isDefault: true, status: "ACTIVE" },
  { _id: "var-103", productId: "prod-101", name: "Large", size: "Large", price: 399, servingPersons: 4, calories: 450, isDefault: false, status: "ACTIVE" },
  
  // Tandoori Paneer Overloaded
  { _id: "var-201", productId: "prod-102", name: "Small Tandoori", size: "Small", price: 199, servingPersons: 1, calories: 210, isDefault: false, status: "ACTIVE" },
  { _id: "var-202", productId: "prod-102", name: "Medium Tandoori", size: "Medium", price: 349, servingPersons: 2, calories: 340, isDefault: true, status: "ACTIVE" },
  { _id: "var-203", productId: "prod-102", name: "Large Tandoori", size: "Large", price: 549, servingPersons: 4, calories: 520, isDefault: false, status: "ACTIVE" },

  // Fiery Chicken Tikka
  { _id: "var-301", productId: "prod-103", name: "Small Chicken", size: "Small", price: 229, servingPersons: 1, calories: 240, isDefault: false, status: "ACTIVE" },
  { _id: "var-302", productId: "prod-103", name: "Medium Chicken", size: "Medium", price: 389, servingPersons: 2, calories: 380, isDefault: true, status: "ACTIVE" },
  { _id: "var-303", productId: "prod-103", name: "Large Chicken", size: "Large", price: 599, servingPersons: 4, calories: 610, isDefault: false, status: "ACTIVE" }
];

// Initial store product pricing override
export const initialStorePricing = [
  // Connaught Place pricing overrides (ST-001)
  { _id: "sp-101", storeId: "ST-001", productId: "prod-101", price: 269, status: "ACTIVE" }, // CP is more expensive
  { _id: "sp-102", storeId: "ST-001", productId: "prod-102", price: 369, status: "ACTIVE" },
  
  // Indiranagar pricing overrides (ST-002)
  { _id: "sp-201", storeId: "ST-002", productId: "prod-101", price: 259, status: "ACTIVE" },
  
  // Salt Lake pricing (ST-003) - not available override example
  { _id: "sp-301", storeId: "ST-003", productId: "prod-106", price: 299, status: "INACTIVE" }
];

// Product images database
export const initialProductImages = [
  { _id: "img-101", productId: "prod-101", imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80&fm=webp", type: "THUMBNAIL", displayOrder: 1 },
  { _id: "img-102", productId: "prod-101", imageUrl: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=400&q=80&fm=webp", type: "GALLERY", displayOrder: 2 },
  { _id: "img-201", productId: "prod-102", imageUrl: "https://images.unsplash.com/photo-1571066811602-71683a3f680d?auto=format&fit=crop&w=400&q=80&fm=webp", type: "THUMBNAIL", displayOrder: 1 },
  { _id: "img-301", productId: "prod-103", imageUrl: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80&fm=webp", type: "THUMBNAIL", displayOrder: 1 }
];
