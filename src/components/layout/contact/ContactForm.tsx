'use client'
import { useState } from 'react';
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Modal from '@/components/ui/Modal';


const initialFormData = {
  name: '',
  email: '',
  message: ''
};

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (formData.name && formData.email && formData.message) {
      setIsModalOpen(true);
      setModalMessage("Your message has been sent successfully!");
      setFormData(initialFormData);
    } else {
      setIsModalOpen(true);
      setModalMessage("Please fill out all fields.");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage("");
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
            required
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
            required
          />
        </div>

        <div className="pt-5">
          <Input
            id="message"
            className="font-medium text-xl  max-sm:h-[70px] max-sm:w-[300px] pb-32 pl-6 tracking-[-0.29px] h-[190px] lg:w-[555px] "
            type="text"
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <Button green arrowIcon type="submit">
        Send message
      </Button>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
        {modalMessage}
      </Modal>
    </form>
  );
};

export default ContactForm;
