# 🌾 AgriFarm

A modern web-based platform that connects farmers directly with consumers, eliminating middlemen and promoting fair crop pricing.

## ✨ Features

- **🏠 Home Page**: Beautiful hero section with gradient background and glassmorphism effects
- **👨‍🌾 Farmer Page**: Register crops with voice input using Web Speech API
- **🛒 Consumer Page**: Browse and search available crops with detailed information
- **🎨 Modern UI**: Green agriculture theme with smooth animations using Framer Motion
- **📱 Responsive Design**: Works seamlessly on all devices

## 🚀 Tech Stack

- **Frontend Framework**: React 19 with Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS 4 with custom utilities
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Voice Recognition**: Web Speech API

## 📁 Project Structure

```
AgriFarm/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with active route highlighting
│   │   ├── HeroSection.jsx     # Hero section with glassmorphism button
│   │   ├── FarmerForm.jsx      # Form with voice input for crop registration
│   │   ├── ConsumerList.jsx    # Crop listing with search functionality
│   │   └── Footer.jsx          # Footer with links and contact info
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── Farmer.jsx          # Farmer page
│   │   └── Consumer.jsx        # Consumer page
│   ├── App.jsx                 # Main app with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind imports and custom utilities
├── public/                     # Static assets
└── package.json
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd AgriFarm
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Usage

### For Farmers
1. Navigate to the "Farmer" page
2. Fill in your details (name, crop, quantity, location)
3. Use the microphone button for voice input (optional)
4. Submit to register your crop

### For Consumers
1. Navigate to the "Consumer" page
2. Browse available crops in the table
3. Use the search bar to filter by crop name, farmer, or location
4. View crop details including price and quantity

## 🎨 Design Features

- **Green Theme**: Agriculture-inspired color scheme (#2e7d32, #43a047)
- **Glassmorphism**: Blurred transparent backgrounds for modern UI
- **Glowing Effects**: Green glow on hover for buttons and interactive elements
- **Smooth Animations**: Page transitions and hover effects with Framer Motion
- **Mobile Responsive**: Optimized for all screen sizes

## 📝 Notes

- This is a frontend-only application with simulated data
- Voice recognition works in Chrome, Edge, and Safari browsers
- No backend/database required - all data is stored in React state
- Perfect for hackathons and rapid prototyping

## 🤝 Contributing

This is a hackathon project. Feel free to fork and enhance!

## 📄 License

MIT License - feel free to use this project for your own purposes.

---

Built with ❤️ for farmers and consumers
