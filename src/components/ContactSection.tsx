import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Mail,
  Phone,
  Globe,
  Copy,
  Check,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

export const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('regaladokatrina026@gmail.com');
    setCopiedEmail(true);
    setCopiedPhone(false);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('+63 917 519 3651');
    setCopiedPhone(true);
    setCopiedEmail(false);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  return (
    <section id="contact" className="contact-compact-section">
      <div className="contact-ambient-glow" />

      <div className="contact-compact-container">
        <motion.div
          className="contact-compact-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact-compact-left">
            <div className="contact-badge-pill">
              <Sparkles size={12} className="text-rose-accent" />
              <span>LET'S CONNECT</span>
            </div>
            <h2 className="contact-compact-title">Ready to work together?</h2>
            <p className="contact-compact-desc">
              Available for dedicated administrative support, calendar &amp; inbox management, and reliable coordination.
            </p>

            <div className="contact-compact-actions">
              <motion.a
                href="mailto:regaladokatrina026@gmail.com?subject=Virtual%20Assistant%20Inquiry%20-%20Katrina%20Regalado"
                className="contact-compact-primary-btn"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={15} />
                <span>SEND AN EMAIL</span>
                <ArrowUpRight size={14} />
              </motion.a>

              <div className="contact-compact-status">
                <span className="online-indicator" />
                <span>Available for remote contracts · 24h reply</span>
              </div>
            </div>
          </div>

          <div className="contact-compact-divider" />

          <div className="contact-compact-right">
            <div className="compact-channel-box">
              <div className="compact-channel-icon">
                <Mail size={16} />
              </div>
              <div className="compact-channel-info">
                <span className="compact-channel-tag">DIRECT EMAIL</span>
                <a
                  href="mailto:regaladokatrina026@gmail.com"
                  className="compact-channel-val"
                  title="Send email"
                >
                  regaladokatrina026@gmail.com
                </a>
              </div>
              <motion.button
                type="button"
                className="compact-copy-btn"
                onClick={handleCopyEmail}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <Check size={12} className="text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </motion.button>
            </div>

            <div className="compact-channel-box">
              <div className="compact-channel-icon">
                <Phone size={16} />
              </div>
              <div className="compact-channel-info">
                <span className="compact-channel-tag">PHONE &amp; WHATSAPP</span>
                <a
                  href="tel:+639175193651"
                  className="compact-channel-val"
                >
                  +63 917 519 3651
                </a>
              </div>
              <motion.button
                type="button"
                className="compact-copy-btn"
                onClick={handleCopyPhone}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                title="Copy phone number"
              >
                {copiedPhone ? (
                  <>
                    <Check size={12} className="text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </motion.button>
            </div>

            <div className="compact-timezone-strip">
              <Globe size={13} className="compact-globe-icon" />
              <span>Philippines (GMT+8) · Flexible to US, UK &amp; Worldwide hours</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
