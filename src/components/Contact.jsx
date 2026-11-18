import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import SectionLabel from './SectionLabel';
import './Contact.css';

const EMAIL = 'nishantjadhav.cs@gmail.com';
const WHATSAPP_NUMBER = '918928755993';
// FormSubmit's AJAX endpoint delivers the message by email without leaving the page.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${EMAIL}`;

const ease = [0.22, 1, 0.36, 1];

const swap = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -16 },
  transition: { duration: 0.3, ease: 'easeOut' },
};

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.8, ease, delay },
});

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'sent' | 'error'
  const [senderName, setSenderName] = useState('');
  const [copied, setCopied] = useState(false);

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

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); fall back to opening the mail app
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-inner">
        <SectionLabel label="Contact" />

        <div className="contact-grid">
          {/* Left: the closing statement and direct ways to reach me */}
          <div className="contact-info">
            <motion.h3 className="contact-statement" {...rise()}>
              Have a project in mind?
            </motion.h3>
            <motion.p className="contact-lede" {...rise(0.1)}>
              Tell me what you&apos;re building. I usually reply within a day or two.
            </motion.p>

            <motion.div className="contact-email" {...rise(0.2)}>
              <span className="contact-label">Email</span>
              <div className="contact-email-row">
                <a href={`mailto:${EMAIL}`} className="contact-email-link">{EMAIL}</a>
                <button
                  type="button"
                  className={`contact-copy ${copied ? 'is-copied' : ''}`}
                  onClick={copyEmail}
                  aria-live="polite"
                >
                  {copied ? 'Copied' : 'Copy'}
                </button>
              </div>
            </motion.div>

            <motion.dl className="contact-facts" {...rise(0.3)}>
              <div>
                <dt className="contact-label">WhatsApp</dt>
                <dd>
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="contact-text-link">
                    Message me ↗
                  </a>
                </dd>
              </div>
              <div>
                <dt className="contact-label">Based in</dt>
                <dd>Mumbai, India</dd>
              </div>
            </motion.dl>
          </div>

          {/* Right: form */}
          <motion.div className="contact-form-wrapper" {...rise(0.15)}>
            <AnimatePresence mode="wait" initial={false}>
              {status === 'sent' ? (
                <motion.div key="sent" className="contact-success" role="status" {...swap}>
                  <CheckCircle2 size={40} className="contact-success-icon" aria-hidden="true" />
                  <h4>Message sent.</h4>
                  <p>
                    Thanks{senderName ? `, ${senderName}` : ''}. I&apos;ve got your message and will get back to you within a day or two.
                  </p>
                  <button type="button" className="contact-text-link contact-reset" onClick={() => setStatus('idle')}>
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" ref={formRef} className="contact-form" onSubmit={handleSubmit} {...swap}>
                  <input type="text" name="_honey" className="contact-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />

                  <div className="contact-field">
                    <label htmlFor="name" className="contact-label">Name</label>
                    <input type="text" id="name" name="name" placeholder="Your name" autoComplete="name" required />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="email" className="contact-label">Email</label>
                    <input type="email" id="email" name="email" placeholder="you@company.com" autoComplete="email" required />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="message" className="contact-label">Project</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="What do you need, and roughly when?"
                      required
                    ></textarea>
                  </div>

                  <div className="contact-actions">
                    <button type="submit" className="contact-submit" disabled={status === 'sending'}>
                      {status === 'sending' ? (
                        <>
                          <span>Sending</span>
                          <Loader2 size={18} className="contact-spin" aria-hidden="true" />
                        </>
                      ) : (
                        <span>Send message →</span>
                      )}
                    </button>
                    <button type="button" className="contact-text-link" onClick={sendViaWhatsapp}>
                      Send via WhatsApp ↗
                    </button>
                  </div>

                  {status === 'error' && (
                    <p className="contact-error" role="alert">
                      <AlertCircle size={18} aria-hidden="true" />
                      <span>
                        Couldn&apos;t send right now. Try WhatsApp or email me at{' '}
                        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                      </span>
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
