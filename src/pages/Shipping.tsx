import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Shipping = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zip: "",
    country: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically submit the form data to your backend
    toast({
      title: "Order Completed!",
      description: "Thank you for your order. We'll process it right away!",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-md mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Shipping Information</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
          <div className="space-y-4">
            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <Input
              name="address"
              placeholder="Shipping Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <Input
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <Input
              name="zip"
              placeholder="ZIP Code"
              value={formData.zip}
              onChange={handleChange}
              required
            />
            <Input
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          
          <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
            Complete Order
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;