# Cartify 🛒

A full-stack MERN e-commerce website built as an internship project — from product browsing to cart, checkout, and user authentication, backed by a real Node.js/Express API and MongoDB database.

---

## 🚀 Live Demo

- **Frontend:** https://cartify-gules-theta.vercel.app/
- **Backend API:** https://cartify-backend-skk6.onrender.com

## 📂 Repository

GitHub: https://github.com/swapnil7500/Cartify

---

## ✨ Features

- Browse products with a responsive product grid
- Detailed product pages with stock status
- Add to cart, update quantities, remove items — with a live running total
- User registration and login secured with JWT authentication and hashed passwords
- Persistent login across page refreshes
- Checkout flow with shipping address and order placement
- Orders saved to MongoDB, tied to the logged-in user
- Clean, professional UI with a custom logo, gradient navbar, and full footer

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- React Router DOM
- Axios
- Context API (Cart & Auth global state)

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Tokens) for authentication
- bcrypt.js for password hashing

**Database**
- MongoDB Atlas (cloud-hosted)

---

## 📁 Project Structure

```
Cartify/
├── frontend/
│   ├── src/
│   │   ├── components/     # Navbar, Footer, ProductCard
│   │   ├── pages/          # Home, ProductDetails, Cart, Checkout, Login, Register
│   │   ├── context/        # CartContext, AuthContext
│   │   ├── api/            # Axios instance
│   │   └── App.jsx
│   └── package.json
│
└── backend/
    ├── config/              # Database connection
    ├── models/              # User, Product, Order schemas
    ├── controllers/         # Business logic
    ├── routes/               # API endpoints
    ├── middleware/          # Auth protection
    ├── seed.js              # Sample product data
    ├── server.js
    └── package.json
```

---

## ⚙️ Getting Started (Run Locally)

### Prerequisites
- Node.js installed
- A MongoDB Atlas account (free tier works)

### 1. Clone the repository
```bash
git clone https://github.com/swapnil7500/Cartify.git
cd Cartify
```

### 2. Backend setup
```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```
MONGO_URI=mongodb_atlas_connection_string
JWT_SECRET= ****####????***
PORT=5000
```

Seed the database with sample products:
```bash
node seed.js
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend setup
Open a new terminal:
```bash
cd frontend
npm install
npm run dev
```

The app will be running at `http://localhost:5173`, connected to the backend at `http://localhost:5000`.

---

## 🔑 API Endpoints

| Method | Endpoint              | Description                    | Protected |
|--------|-----------------------|--------------------------------|-----------|
| POST   | /api/auth/register    | Register a new user            | No        |
| POST   | /api/auth/login       | Login existing user            | No        |
| GET    | /api/products         | Get all products                | No        |
| GET    | /api/products/:id     | Get single product              | No        |
| POST   | /api/products         | Create product                  | Admin     |
| PUT    | /api/products/:id     | Update product                  | Admin     |
| DELETE | /api/products/:id     | Delete product                  | Admin     |
| POST   | /api/orders           | Place an order                  | Yes       |
| GET    | /api/orders/my-orders | Get logged-in user's orders     | Yes       |
| GET    | /api/orders           | Get all orders                  | Admin     |

---

## 🖼️ Screenshots

some screen shots will add soon!!!!!!

---

## 📌 Future Enhancements

- Product search and category filters
- Wishlist functionality
- Product reviews and ratings
- Real payment gateway integration
- Order tracking status updates

---

## 👤 Author

**Swapnil Gupta**
3rd Year B.Tech CSE Student, AKGEC, Ghaziabad

- GitHub: [swapnil7500](https://github.com/swapnil7500)
- LinkedIn: [Swapnil Gupta](https://www.linkedin.com/in/swapnil-gupta-dev/)
- Email: swapnilsureshgupta365@gmail.com
- Phone: +91 93051 18567

---

## 📄 License

This project was built for educational and internship purposes.