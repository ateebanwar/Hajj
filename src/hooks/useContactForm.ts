import { useState } from "react";
import { openWhatsApp } from "@/lib/utils";

export const useContactForm = (onSubmit?: () => void) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    package: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate WhatsApp message
    let message = `Hi, I would like to inquire about Hajj/Umrah packages.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nPackage Interest: ${formData.package}`;
    if (formData.message.trim()) {
      message += `\nMessage: ${formData.message}`;
    }
    openWhatsApp(message);
    // Reset form
    setFormData({ name: "", phone: "", package: "", message: "" });
    // Call optional callback
    if (onSubmit) onSubmit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      package: value
    }));
  };

  return {
    formData,
    handleSubmit,
    handleChange,
    handleSelectChange,
  };
};