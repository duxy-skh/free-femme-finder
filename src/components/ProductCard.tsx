
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  image: string;
  description: string;
}

const ProductCard = ({ title, image, description }: ProductCardProps) => {
  const handleClaim = () => {
    if (window.CPABuildLock) {
      window.CPABuildLock();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-green-600 font-bold">FREE</span>
          <span className="text-gray-400 line-through">$29.99</span>
        </div>
        <Button 
          onClick={handleClaim}
          className="w-full bg-secondary hover:bg-secondary/90"
        >
          Claim Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
