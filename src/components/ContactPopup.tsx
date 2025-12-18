import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ContactForm from "./ContactForm";


interface ContactPopupProps {
  children: React.ReactNode;
}

const ContactPopup = ({ children }: ContactPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-center">Send Us a Message</DialogTitle>
        </DialogHeader>
        <ContactForm onSubmit={handleClose} className="space-y-6 mt-4" />
      </DialogContent>
    </Dialog>
  );
};

export default ContactPopup;