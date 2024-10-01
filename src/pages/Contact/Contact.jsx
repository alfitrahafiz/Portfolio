import { useState } from "react";
import Button from "../../components/Button";

const Contact = () => {
  const [message, setMessage] = useState(""); // State untuk textarea
  const [name, setName] = useState(""); // State untuk nama
  const [email, setEmail] = useState(""); // State untuk email
  const [isSubmitted, setIsSubmitted] = useState(false); // State untuk notifikasi

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      // Jika semua field terisi
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000); // Notifikasi hilang setelah 3 detik
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <>
      {/* Contact Section */}
      <div className="container mx-auto py-10" id="contact">
        <h1 className="text-3xl font-semibold text-center mb-8">Message Me</h1>

        {/* Notifikasi pesan terkirim */}
        {isSubmitted && <div className="mb-6 text-center bg-green-200 text-green-800 p-2 rounded-lg">Your message has been sent!</div>}

        <form onSubmit={handleSubmit} className="w-full sm:w-2/3 mx-auto bg-white dark:bg-darkBg p-6 rounded-lg shadow-lg">
          {/* Input Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              className="input w-full border-2 border-border dark:border-darkBorder px-4 py-2 rounded-base focus:outline-none focus:ring-2 focus:ring-main"
              placeholder="Your Name"
              value={name}
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Input Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              className="input w-full border-2 border-border dark:border-darkBorder px-4 py-2 rounded-base focus:outline-none focus:ring-2 focus:ring-main"
              placeholder="Your Email"
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Textarea Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              className="input w-full h-[150px] border-2 border-border dark:border-darkBorder px-4 py-2 rounded-base focus:outline-none focus:ring-2 focus:ring-main"
              name="textarea"
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button onClick={handleSubmit}>Send Message</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
