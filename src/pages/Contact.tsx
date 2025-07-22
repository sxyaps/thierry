import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ChevronDown } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Atelier",
      details: ["123 Rue de la Paix", "75001 Paris, France"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+33 1 42 60 30 30"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@thierry-parfums.com"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Monday - Saturday: 10:00 - 19:00", "Sunday: 14:00 - 18:00"]
    }
  ];

  const faqs: FAQ[] = [
    {
      question: "How long do your fragrances last?",
      answer: "Our natural fragrances typically last 6-8 hours on the skin, with base notes lingering even longer. The longevity can vary depending on your skin type and the specific fragrance composition."
    },
    {
      question: "Do you offer custom fragrances?",
      answer: "Yes, we offer bespoke fragrance services for special occasions or personal preferences. Our master perfumer will work with you to create a unique scent that reflects your personality. Please contact us to schedule a consultation."
    },
    {
      question: "Can I sample fragrances before purchasing?",
      answer: "Absolutely! We offer sample sets and individual samples for all our fragrances. You can order samples online or visit our atelier for a personal consultation and testing experience."
    },
    {
      question: "Are your fragrances suitable for sensitive skin?",
      answer: "Our fragrances are made with natural ingredients and are generally well-tolerated. However, we recommend patch testing before full use if you have sensitive skin or known allergies to specific botanicals."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship worldwide. Shipping times and costs vary by destination. Please note that some countries have restrictions on alcohol-based products, which may affect delivery."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of purchase for unopened products. Due to the personal nature of fragrance, we cannot accept returns on opened bottles, but we're happy to help you find your perfect scent through our sampling program."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-24 bg-warm">
        <div className="section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-serif text-4xl md:text-6xl mb-6 text-primary">
              Get in Touch
            </h1>
            <p className="text-body text-lg max-w-2xl mx-auto leading-relaxed">
              We'd love to help you discover your perfect fragrance or answer
              any questions about our artisanal collection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-24 bg-white">
        <div className="section-padding">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="heading-serif text-3xl mb-8 text-luxury-white">
                  Visit Us
                </h2>
                
                <div className="space-y-8">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="flex items-start gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-luxury-charcoal flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-luxury-gold" />
                      </div>
                      <div>
                        <h3 className="font-medium text-luxury-white mb-1">
                          {item.title}
                        </h3>
                        {item.details.map((detail, i) => (
                          <p key={i} className="text-body text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="heading-serif text-3xl mb-8 text-luxury-white">
                  Send a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    className="bg-luxury-charcoal p-8 text-center border border-luxury-gold/20"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="heading-serif text-xl mb-4 text-luxury-white">
                      Thank You!
                    </h3>
                    <p className="text-body">
                      Your message has been sent. We'll get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-secondary mt-4"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-luxury-white mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-luxury-charcoal border border-luxury-charcoal-light text-luxury-white focus:border-luxury-gold outline-none transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-luxury-white mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-luxury-charcoal border border-luxury-charcoal-light text-luxury-white focus:border-luxury-gold outline-none transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-luxury-white mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-luxury-charcoal border border-luxury-charcoal-light text-luxury-white focus:border-luxury-gold outline-none transition-colors duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="fragrance">Fragrance Consultation</option>
                        <option value="custom">Custom Fragrance</option>
                        <option value="samples">Sample Request</option>
                        <option value="visit">Atelier Visit</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-luxury-white mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-luxury-charcoal border border-luxury-charcoal-light text-luxury-white focus:border-luxury-gold outline-none transition-colors duration-200 resize-vertical"
                        placeholder="Tell us about your fragrance preferences or how we can help you..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="btn-primary w-full md:w-auto"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-luxury-dark-brown">
        <div className="section-padding">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-serif text-3xl md:text-4xl mb-6 text-luxury-white">
              Find Our Atelier
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Located in the heart of Paris, our atelier welcomes visitors
              for personal consultations and fragrance discoveries.
            </p>
          </motion.div>

          <motion.div
            className="relative h-96 bg-luxury-charcoal flex items-center justify-center border border-luxury-gold/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Placeholder for Google Maps */}
            <div className="text-center">
              <MapPin className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
              <h3 className="heading-serif text-xl mb-2 text-luxury-white">
                Interactive Map
              </h3>
              <p className="text-body text-sm">
                Google Maps integration would be implemented here
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-luxury-black-light">
        <div className="section-padding max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-serif text-3xl md:text-4xl mb-6 text-luxury-white">
              Frequently Asked Questions
            </h2>
            <p className="text-body">
              Find answers to common questions about our fragrances and services.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-luxury-charcoal-light bg-luxury-charcoal/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-luxury-charcoal/50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium text-luxury-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-luxury-white-dark" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-body leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
