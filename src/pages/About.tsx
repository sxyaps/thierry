import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-warm">
        <div className="section-padding">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-serif text-4xl md:text-6xl mb-8 text-primary">
              Our Philosophy
            </h1>
            <p className="text-body text-xl leading-relaxed">
              We believe that fragrance is the most intimate form of luxury—
              a personal signature that speaks before you do, lingers after you leave,
              and becomes part of who you are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Artisanal Process */}
      <section className="py-24 bg-luxury-black-light">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-serif text-3xl md:text-4xl mb-8 text-luxury-white">
                The Art of Natural Perfumery
              </h2>
              <div className="space-y-6 text-body">
                <p>
                  Every Thierry fragrance begins with a story, a moment of inspiration
                  captured in the finest natural essences. Our master perfumers source
                  rare ingredients from their countries of origin—Bulgarian rose petals,
                  Sicilian bergamot, Mysore sandalwood, and Madagascar vanilla.
                </p>
                <p>
                  Our commitment to natural perfumery means no synthetic fixatives,
                  no artificial enhancers—just pure, authentic scents that evolve
                  beautifully on your skin throughout the day.
                </p>
                <p>
                  Each fragrance is hand-blended in small batches, ensuring that
                  every bottle maintains the integrity and complexity that only
                  artisanal craftsmanship can deliver.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=600&h=800&fit=crop&q=80"
                alt="Perfume laboratory"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/60 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-luxury-dark-brown">
        <div className="section-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-serif text-3xl md:text-4xl mb-6 text-luxury-white">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Sustainability",
                description: "We source our ingredients ethically, supporting local communities and preserving traditional cultivation methods for future generations."
              },
              {
                title: "Authenticity",
                description: "Every fragrance tells a genuine story. We never compromise on quality or use shortcuts that diminish the artistry of fine perfumery."
              },
              {
                title: "Exclusivity",
                description: "Our limited production ensures that each fragrance remains special, personal, and truly distinctive in a world of mass-produced scents."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="heading-serif text-xl mb-4 text-luxury-white">
                  {value.title}
                </h3>
                <p className="text-body leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-luxury-charcoal">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=600&fit=crop&q=80"
                alt="Thierry Dubois, Master Perfumer"
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-6 left-6 bg-luxury-black/90 backdrop-blur-sm p-4">
                <p className="font-medium text-luxury-white">Thierry Dubois</p>
                <p className="text-sm text-luxury-white-dark">Master Perfumer & Founder</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="heading-serif text-3xl md:text-4xl mb-8 text-luxury-white">
                A Legacy of Scent
              </h2>
              <div className="space-y-6 text-body">
                <p>
                  Born in Grasse, the perfume capital of the world, Thierry Dubois
                  grew up surrounded by the intoxicating scents of jasmine and rose
                  fields. His grandfather, a renowned perfumer, taught him that
                  fragrance is not just about smell—it's about emotion, memory,
                  and the ineffable quality that makes someone unforgettable.
                </p>
                <p>
                  After training at the prestigious École Supérieure du Parfum
                  and working with legendary houses in Paris, Thierry founded
                  his atelier with a simple mission: to create fragrances that
                  honor the traditions of French perfumery while expressing
                  the individuality of modern life.
                </p>
                <p>
                  "A great fragrance should be like a beautiful melody—
                  complex enough to discover something new with each encounter,
                  yet harmonious enough to feel like home."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scrolling Text Animation */}
      <section className="py-16 bg-luxury-deep-charcoal overflow-hidden">
        <motion.div
          className="whitespace-nowrap"
          animate={{ x: [-1000, 1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <span className="heading-serif text-4xl md:text-6xl text-luxury-gold/20 uppercase tracking-wider">
            Artisanal • Natural • Exclusive • Timeless • Luxury • 
          </span>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-luxury-black-light">
        <div className="section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="heading-serif text-3xl md:text-4xl mb-6 text-luxury-white">
              Experience the Difference
            </h2>
            <p className="text-body text-lg mb-8 leading-relaxed">
              Visit our atelier in the heart of the city to experience our
              fragrances firsthand and discover your perfect scent through
              a personal consultation with our perfume experts.
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
