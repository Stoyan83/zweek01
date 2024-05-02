'use client'
import { useState } from 'react';
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

const initialFormData = {
  name: '',
  email: '',
  message: ''
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <div className="pt-5">
          <Input
            id="name"
            className="font-medium max-sm:w-[300px] max-sm:h-[36px] text-xl pl-6 tracking-[-0.29px] h-[72px] lg:w-[555px]"
            type="text"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="pt-5">
          <Input
            id="email"
            className="font-medium text-xl pl-6 max-sm:w-[300px] max-sm:h-[36px] tracking-[-0.29px] h-[72px] lg:w-[555px]"
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="pt-5">
          <Input
            id="message"
            className="font-medium text-xl  max-sm:h-[70px] max-sm:w-[300px] lg-pb-24 pl-6 tracking-[-0.29px] h-[190px] lg:w-[555px] "
            type="text"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </div>
      <Button green arrowIcon type="submit">
        Send message
      </Button>
    </form>
  );
};

export default ContactForm;
