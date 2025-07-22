import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFeaturedFragrances } from '../data/fragrances';

const Home = () => {
  const featuredFragrances = getFeaturedFragrances();

  const scrollToFeatured = () => {
    document.getElementById('featured')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div
            className="w-full h-full bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: 'url("/homepage.jpg")',
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white section-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="heading-serif text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="text-white">L'Art du</span>
              <br />
              <span className="text-gold">Parfum</span>
            </h1>
            
            <motion.p
              className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Discover our collection of artisanal fragrances,
              <br />
              crafted with the finest natural ingredients
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <Link
                to="/fragrances"
                className="btn-primary"
              >
                Explore Collection
              </Link>
              <button
                onClick={scrollToFeatured}
                className="btn-secondary"
              >
                Discover More
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.button
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          onClick={scrollToFeatured}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </section>

      {/* Brand Statement */}
      <section className="py-24 bg-warm">
        <div className="section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="heading-serif text-3xl md:text-5xl mb-8 text-primary">
              Crafted for the Extraordinary
            </h2>
            <p className="text-secondary text-lg md:text-xl leading-relaxed">
              At Thierry, we believe fragrance is more than scent—it's an expression of your essence.
              Our master perfumers blend tradition with innovation, creating distinctive fragrances
              that tell your unique story. Each bottle represents hours of meticulous craftsmanship
              and the finest natural ingredients sourced from around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Fragrances */}
      <section id="featured" className="py-24 bg-white">
        <div className="section-padding">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-serif text-3xl md:text-5xl mb-6 text-primary">
              Featured Scents
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Discover our most beloved fragrances, each one a masterpiece
              of olfactory artistry
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredFragrances.map((fragrance, index) => (
              <motion.div
                key={fragrance.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden mb-6">
                  <motion.img
                    src={fragrance.image}
                    alt={fragrance.name}
                    className="w-full h-80 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="text-center">
                  <h3 className="heading-serif text-xl mb-2 text-primary group-hover:text-gold transition-colors duration-300">
                    {fragrance.name}
                  </h3>
                  <p className="text-secondary text-sm mb-4 line-clamp-2">
                    {fragrance.description}
                  </p>
                  <p className="text-gold font-medium text-lg">
                    ${fragrance.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/fragrances" className="btn-primary">
              View All Fragrances
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-accent text-primary">
        <div className="section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="heading-serif text-3xl md:text-5xl mb-6">
              Begin Your Scent Journey
            </h2>
            <p className="text-lg mb-8 text-secondary leading-relaxed">
              Experience the art of fine fragrance. Visit our atelier or explore
              our collection online to find your signature scent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Visit Our Atelier
              </Link>
              <Link
                to="/about"
                className="btn-secondary"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
