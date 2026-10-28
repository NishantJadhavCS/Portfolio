import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from './BrandIcons';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import './Contact.css';

const EMAIL = 'nishantjadhav.cs@gmail.com';
const WHATSAPP_NUMBER = '918928755993';
// FormSubmit's AJAX endpoint delivers the message by email without leaving the page.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

const swap = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
  transition: { duration: 0.3, ease: 'easeOut' },
};

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'
  const [senderName, setSenderName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Honeypot: real visitors never see this field, bots fill it in.
    if (data._honey) return;

    setStatus('sending');
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
          _subject: `New portfolio message from ${data.name}`,
          _replyto: data.email,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || String(result.success) !== 'true') throw new Error(result.message);

      setSenderName(data.name.split(' ')[0]);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const sendViaWhatsapp = () => {
    const form = formRef.current;
    // Email is optional here: the reply happens in WhatsApp.
    if (!form.elements.name.reportValidity() || !form.elements.message.reportValidity()) return;

    const { name, email, message } = form.elements;
    const intro = `Hi Nishant, I'm ${name.value.trim()}${email.value ? ` (${email.value.trim()})` : ''}.`;
    const text = `${intro}

${message.value.trim()}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="contact-section">
      <Reveal className="contact-container">
        {/* Left Side: Info */}
        <div className="contact-info">
          <SectionHeader
            eyebrow="Get in Touch"
            title="Let's"
            highlight="Talk"
            description="Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."
            align="left"
            reveal={false}
            className="contact-header"
          />
          
          <div className="contact-details">
            <div className="detail-item">
              <i><Mail size={20} /></i>
              <span>{EMAIL}</span>
            </div>
            <div className="detail-item">
              <i><MapPin size={20} /></i>
              <span>Mumbai, Maharashtra, India</span>
            </div>
          </div>

          <div className="contact-socials">
            <a href="https://github.com/NishantJadhavCS" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href="https://www.linkedin.com/in/nishant-jadhav10/" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
            <a href="https://www.instagram.com/nishnt__10/" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-wrapper">
          <AnimatePresence mode="wait" initial={false}>
            {status === 'sent' ? (
              <motion.div key="sent" className="contact-success" role="status" {...swap}>
                <CheckCircle2 size={56} className="contact-success-icon" />
                <h3>Message sent!</h3>
                <p>
                  Thanks{senderName ? `, ${senderName}` : ''}. I&apos;ve got your message and will get back to you within a day or two.
                </p>
                <button type="button" className="contact-reset-btn" onClick={() => setStatus('idle')}>
                  Send another message
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" ref={formRef} className="contact-form" onSubmit={handleSubmit} {...swap}>
                <input type="text" name="_honey" className="contact-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="What's your name?"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Where can I reach you?"
                    autoComplete="email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hi..."
                    required
                  ></textarea>
                </div>

                <div className="form-actions">
                  <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                    {status === 'sending' ? (
                      <>
                        <span>Sending...</span>
                        <Loader2 size={18} className="spin" />
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                  <button type="button" className="whatsapp-btn" onClick={sendViaWhatsapp}>
                    <WhatsappIcon size={18} />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>

                {status === 'error' && (
                  <p className="form-error" role="alert">
                    <AlertCircle size={18} />
                    <span>
                      Couldn&apos;t send right now. Try WhatsApp or email me at{' '}
                      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                    </span>
                  </p>
                )}
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;
