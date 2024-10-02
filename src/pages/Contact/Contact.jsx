import { useState } from "react";
import Button from "../../components/Button";

const Contact = () => {
  const [message, setMessage] = useState(""); // State untuk textarea
  const [name, setName] = useState(""); // State untuk nama
  const [email, setEmail] = useState(""); // State untuk email
  const [isSubmitted, setIsSubmitted] = useState(""); // State untuk notifikasi

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      // Jika semua field terisi
      setIsSubmitted("succsess");
      setTimeout(() => setIsSubmitted(false), 3000); // Notifikasi hilang setelah 3 detik
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    } else {
      setIsSubmitted("error");
      setTimeout(() => setIsSubmitted(false), 3000); // Notifikasi hilang setelah 3 detik
    }
  };

  return (
    <>
      {/* Contact Section */}
      <div className="container mx-auto py-10" id="contact">
        <h1 className="text-3xl font-semibold text-center mb-8">Message Me</h1>

        {/* Notifikasi pesan terkirim */}
        {isSubmitted === "succsess" && <div className="mb-6 text-center bg-green-200 text-green-800 p-2 rounded-lg">Your message has been sent!</div>}
        {/* Notifikasi pesan ada yang kosong */}
        {isSubmitted === "error" && <div className="mb-6 text-center bg-red-200 text-red-800 p-2 rounded-lg">Please fill out all fields.</div>}

        <form onSubmit={handleSubmit} className="w-full sm:w-2/3 mx-auto bg-white dark:bg-main p-6 rounded-lg shadow-lg">
          {/* Input Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name
            </label>
            <input type="text" className="input" placeholder="Your Name" value={name} id="name" onChange={(e) => setName(e.target.value)} />
          </div>

          {/* Input Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input type="email" className="input" placeholder="Your Email" value={email} id="email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          {/* Textarea Message */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Message
            </label>
            <textarea className="input h-[150px]" name="textarea" id="message" placeholder="Your Message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
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
