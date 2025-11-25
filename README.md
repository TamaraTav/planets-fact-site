# Planets Fact Site

A modern, interactive web application that provides detailed information about all 8 planets in our solar system. Built with React, TypeScript, and Tailwind CSS.

## [Design (Figma)](https://www.figma.com/file/cK01u0ixdKe2K8ezCz21YQ/planets-fact-site?type=design&node-id=0-1&t=09Jrypmuh8gKS4JO-0)

## Features

- 🌍 **8 Planets Information** - Explore Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune
- 📱 **Responsive Design** - Fully responsive layout for mobile, tablet, and desktop devices
- 🎨 **Interactive UI** - Smooth transitions and animations using Framer Motion
- 🔍 **Three View Modes** - Overview, Internal Structure, and Surface Geology for each planet
- 🎯 **Dynamic Routing** - React Router for seamless navigation between planets
- ⚡ **Fast Performance** - Built with Vite for optimal build times and hot module replacement

## Technologies Used

- **Vite** - Next generation frontend tooling
- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vercel** - Deployment platform

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/planets-fact-site.git
cd planets-fact-site
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

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
planets-fact-site/
├── public/
│   ├── assets/          # Images and icons
│   └── preview/         # Design preview images
├── src/
│   ├── components/      # React components
│   │   ├── Header.tsx
│   │   └── Planet.tsx
│   ├── data/           # JSON data for planets
│   │   └── data.json
│   ├── interfaces/     # TypeScript interfaces
│   │   └── Planet.ts
│   ├── App.tsx         # Main app component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Design Preview

![Desktop Preview](./public/preview/preview.jpg)
![Mobile Preview](./public/preview/mobile-preview.png)

## Features in Detail

### Planet Information

Each planet page displays:

- Overview content
- Internal structure details
- Surface geology information
- Rotation time
- Revolution time
- Radius
- Average temperature

### Responsive Navigation

- Desktop: Horizontal navigation bar with planet names
- Mobile: Hamburger menu with planet icons and names

### Interactive Elements

- Hover effects on navigation items
- Active state indicators
- Smooth transitions between views
- Mobile-friendly touch interactions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contributing

Contributions, issues, and feature requests are welcome!

## Author

Built with ❤️ by [Tamara Tava](https://www.linkedin.com/in/tamara-tava/) for space enthusiasts
