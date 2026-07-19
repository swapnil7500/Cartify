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