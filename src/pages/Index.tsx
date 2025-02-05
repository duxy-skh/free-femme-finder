import AnnouncementBanner from "@/components/AnnouncementBanner";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    title: "Sephora Favorits - Dare to relax",
    image: "/sephora.avif",
    description: "For the start of the year, Sephora Favorites is offering you a wellness box to start the year 2025"
  },
  {
    title: "MyProtein - Women’s Fat Loss Bundle",
    image: "/myprotein.avif",
    description: "Introducing the Women’s Fat Loss Bundle, a collection of products scientifically selected to help you get the most out of your New Year cut!"
  },
  {
    title: "MethodProducts - Body Wash",
    image: "/methodproducts",
    description: "balance your day with method’s berry balance body wash."
  },
  {
    title: "Kinnd - Nail Polish Set",
    image: "/kinnd.webp",
    description: "Nails – Your Ultimate Quick Dry Nail Polish Collection"
  },
  {
    title: "Give Me Cosmetics - The Full Haircare Set",
    image: "/givemecosmetics.webp",
    description: "Repair & Restore Dry, Damaged Hair with our most nourishing Haircare!"
  },
  {
    title: "AlyaSkin - Supercharged Skincare Bundle",
    image: "/alyaskin.webp",
    description: "Supercharge your skin care routine with this bundle of our absolute favourite products!"
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
