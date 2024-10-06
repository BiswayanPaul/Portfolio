// src/components/Contact.tsx
import { useState } from "react"; // Import useState for managing form state
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Social Media Icons
import emailjs from "emailjs-com"; // Import EmailJS for sending emails

interface ContactProps {
  dark: boolean; // Accept the dark prop
}

const Contact = ({ dark }: ContactProps) => {
  const [name, setName] = useState(""); // State for name
  const [email, setEmail] = useState(""); // State for email
  const [message, setMessage] = useState(""); // State for message
  const [status, setStatus] = useState(""); // State for form submission status

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission

    const templateParams = {
      name,
      email,
      message,
    };

    // Sending email using EmailJS
    emailjs
      .send(
        "service_smw8q4s", // Replace with your service ID
        "template_ou197aq", // Replace with your template ID
        templateParams,
        "r8j80mz2x3TILzu0N" // Replace with your user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      className={`min-h-screen flex flex-col items-center justify-center py-16 transition-colors duration-500 ${
        dark ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h2 className="text-5xl font-bold mb-6 transition-colors duration-500">
        Contact Me
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
        I’d love to hear from you! Reach out via email or social media.
      </p>
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`p-2 rounded border ${
              dark ? "bg-gray-700 text-gray-100" : "bg-gray-200 text-gray-900"
            }`}
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`p-2 rounded border ${
              dark ? "bg-gray-700 text-gray-100" : "bg-gray-200 text-gray-900"
            }`}
            required
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="message" className="mb-2">
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={`p-2 rounded border ${
              dark ? "bg-gray-700 text-gray-100" : "bg-gray-200 text-gray-900"
            }`}
            required
          />
        </div>
        <button
          type="submit"
          className={`p-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300`}
        >
          Submit
        </button>
      </form>
      {status && <p className="text-lg">{status}</p>}
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
        Email: biswayanpaulju@gmail.com
      </p>
      <div className="flex space-x-4">
        {/* Social Media Links */}
        <a
          href="https://github.com/BiswayanPaul"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-800 dark:text-gray-200 hover:text-blue-500 transition-colors duration-300 ${
            dark ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/biswayan-paul-8852411ba/"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-800 dark:text-gray-200 hover:text-blue-700 transition-colors duration-300 ${
            dark ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://x.com/paul_biswayan"
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-800 dark:text-gray-200 hover:text-blue-400 transition-colors duration-300 ${
            dark ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <FaTwitter size={30} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
