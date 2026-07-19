import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/Product.js";

dotenv.config();
connectDB();

const sampleProducts = [
  {
    name: "Wireless Headphones",
    description: "Comfortable over-ear wireless headphones with noise cancellation.",
    price: 1999,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Electronics",
    stock: 25,
  },
  {
    name: "Running Shoes",
    description: "Lightweight running shoes with breathable mesh upper.",
    price: 2499,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    category: "Footwear",
    stock: 40,
  },
  {
    name: "Smart Watch",
    description: "Fitness-tracking smartwatch with heart rate monitor.",
    price: 3499,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
    category: "Electronics",
    stock: 15,
  },
  {
    name: "Backpack",
    description: "Durable water-resistant backpack with laptop compartment.",
    price: 1499,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    category: "Accessories",
    stock: 30,
  },
  {
    name: "Sunglasses",
    description: "UV-protection polarized sunglasses with classic frame.",
    price: 899,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    category: "Accessories",
    stock: 50,
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable waterproof speaker with 12-hour battery life.",
    price: 1799,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
    category: "Electronics",
    stock: 20,
  },
  {
    name: "Leather Wallet",
    description: "Genuine leather bifold wallet with RFID protection.",
    price: 699,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop",
    category: "Accessories",
    stock: 60,
  },
  {
    name: "Coffee Mug",
    description: "Ceramic mug, microwave and dishwasher safe, 350ml.",
    price: 299,
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    category: "Home",
    stock: 100,
  },
  {
    name: "Denim Jacket",
    description: "Classic fit denim jacket, machine washable.",
    price: 2199,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    category: "Clothing",
    stock: 35,
  },
  {
    name: "Yoga Mat",
    description: "Non-slip yoga mat with carrying strap, 6mm thick.",
    price: 799,
    image: "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=400&h=400&fit=crop",
    category: "Fitness",
    stock: 45,
  },
  {
    name: "Desk Lamp",
    description: "Adjustable LED desk lamp with touch control and USB port.",
    price: 1299,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
    category: "Home",
    stock: 28,
  },
  {
    name: "Water Bottle",
    description: "Insulated stainless steel bottle, keeps drinks cold 24 hours.",
    price: 599,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
    category: "Fitness",
    stock: 70,
  },
];

const seedData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(sampleProducts);
    console.log("Sample products inserted successfully");
    process.exit();
  } catch (error) {
    console.error("Seeding failed:", error.message);
    process.exit(1);
  }
};

seedData();