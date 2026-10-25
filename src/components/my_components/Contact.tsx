// src/components/Contact.tsx
import { useState } from "react";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";
import emailjs from "emailjs-com";
import Section from "./Section";
import { profile, socialLinks } from "@/Data/Profile";

type Status = "idle" | "sending" | "success" | "error";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        "service_smw8q4s", // EmailJS service ID
        "template_ou197aq", // EmailJS template ID
        { name, email, message, from_name: name, reply_to: email },
        "r8j80mz2x3TILzu0N" // EmailJS public key
      )
      .then(
        () => {
          setStatus("success");
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("error");
        }
      );
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together">
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-lg leading-relaxed">
            Have a role, project or idea in mind? I'd love to hear from you.
            Drop a message here or reach out directly.
          </p>
          <div className="mt-8 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 font-medium text-slate-900 transition hover:text-indigo-600 dark:text-white dark:hover:text-indigo-400"
            >
              <span className="rounded-lg bg-indigo-50 p-2.5 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <FiMail size={18} />
              </span>
              <span className="break-all">{profile.email}</span>
            </a>
            <p className="flex items-center gap-3 font-medium text-slate-900 dark:text-white">
              <span className="rounded-lg bg-indigo-50 p-2.5 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <FiMapPin size={18} />
              </span>
              {profile.location}
            </p>
          </div>
          <div className="mt-8 flex gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="icon-link"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="input"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="input"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me a bit about what you have in mind…"
              className="input resize-y"
              required
            />
          </div>
          <button type="submit" disabled={status === "sending"} className="btn-primary w-full sm:w-auto">
            <FiSend /> {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "success" && (
            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              Message sent successfully! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm font-medium text-red-600 dark:text-red-400">
              Failed to send message. Please try again or email me directly.
            </p>
          )}
        </form>
      </div>
    </Section>
  );
};

export default Contact;
