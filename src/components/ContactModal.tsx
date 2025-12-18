import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("Form submitted");
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-serif text-center text-primary">Contact Us</DialogTitle>
                    <DialogDescription className="text-center">
                        Send us a message and we'll get back to you shortly.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your Name" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email </Label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" type="tel" placeholder="+1 (234) 567-890" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="How can we help you?" required />
                    </div>
                    <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Send Message
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ContactModal;
