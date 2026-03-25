import { FormEvent, useMemo, useState } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const isValid = useMemo(() => {
    return name.trim().length > 0 && validateEmail(email.trim()) && message.trim().length > 0;
  }, [name, email, message]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValid) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Simulate an async submit (no external service integrated)
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus("success");
    setName("");
    setEmail("");
    setMessage("");

    // Auto-clear success state after a short time
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-form">
            <h2>Contact Form</h2>
            <p className="contact-form-subtitle">
             Interested in working together or have any questions?
             Feel free to reach out — I’d love to hear from you.
            </p>

            <form onSubmit={handleSubmit} className="contact-form-fields">
              <div className="field-row">
                <label htmlFor="contact-name">Full name</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="field-row">
                <label htmlFor="contact-email">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="field-row">
                <label htmlFor="contact-message">Your Message</label>
                <textarea
                  id="contact-message"
                  placeholder="Tell me a little about your project"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  required
                />
              </div>

              {(status === "error" || status === "success") && (
                <div className={`contact-form-status ${status}`}> 
                  {status === "error" && <span>Please fill in all fields with valid data.</span>}
                  {status === "success" && <span>Message sent! I’ll get back to you soon.</span>}
                </div>
              )}

              <button type="submit" className="contact-submit" disabled={!isValid || status === "submitting"}>
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:krishray2005@gmail.com" data-cursor="disable">
                krishray2005@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>BTech in Computer Science</p>

            <h4>Social</h4>
            <a
              href="https://github.com/krish1172"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/krish-ray-684b8b313/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>

            <div className="contact-credit">
              <h2>
                Designed and Developed <br /> by <span>Krish Kumar Ray</span>
              </h2>
              <h5>
                <MdCopyright /> 2026
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
