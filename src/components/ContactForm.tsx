import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/hooks/useContactForm";

interface ContactFormProps {
  onSubmit?: () => void;
  className?: string;
}

const ContactForm = ({ onSubmit, className }: ContactFormProps) => {
  const { formData, handleSubmit, handleChange, handleSelectChange } = useContactForm(onSubmit);

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Your Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your phone number"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="package">Package Interest</Label>
        <Select value={formData.package} onValueChange={handleSelectChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select a package" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hajj">Hajj Packages</SelectItem>
            <SelectItem value="umrah">Umrah Packages</SelectItem>
            <SelectItem value="custom">Custom Package</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your requirements..."
        />
      </div>

      <Button type="submit" className="w-full">
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;