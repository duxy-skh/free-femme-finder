import AnnouncementBanner from "@/components/AnnouncementBanner";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    title: "Sephora Favorits - Dare to relax",
    image: "/sephora.avif",
    description: "For the start of the year, Sephora Favorites is offering you a wellness box to start the year 2025"
  },
  {
    title: "Vitamin C Serum",
    image: "/placeholder.svg",
    description: "Brightening serum for radiant skin"
  },
  {
    title: "Hydrating Mask",
    image: "/placeholder.svg",
    description: "Deep hydration treatment for all skin types"
  },
  {
    title: "Eye Cream",
    image: "/placeholder.svg",
    description: "Reduces dark circles and puffiness"
  },
  {
    title: "Night Cream",
    image: "/placeholder.svg",
    description: "Overnight repair and rejuvenation"
  },
  {
    title: "Facial Cleanser",
    image: "/placeholder.svg",
    description: "Gentle daily cleanser for sensitive skin"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnnouncementBanner />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">
            Exclusive Beauty Products
          </h1>
          <p className="text-xl text-gray-600">
            Claim your FREE luxury skincare products today!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
