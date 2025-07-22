import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { fragrances, type Fragrance } from '../data/fragrances';

const Fragrances = () => {
  const [selectedFragrance, setSelectedFragrance] = useState<Fragrance | null>(null);

  const openModal = (fragrance: Fragrance) => {
    setSelectedFragrance(fragrance);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedFragrance(null);
    document.body.style.overflow = 'auto';
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
              Our Collection
            </h1>
            <p className="text-body text-lg max-w-2xl mx-auto leading-relaxed">
              Each fragrance in our collection is a carefully crafted composition,
              designed to evoke emotion and create lasting memories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fragrances.map((fragrance, index) => (
              <motion.div
                key={fragrance.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => openModal(fragrance)}
              >
                <div className="relative overflow-hidden mb-6 bg-accent">
                  <motion.img
                    src={fragrance.image}
                    alt={fragrance.name}
                    className="w-full h-80 object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
                  
                  {/* Hover Overlay */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <button className="btn-primary text-sm">
                      View Details
                    </button>
                  </motion.div>

                  {/* Featured Badge */}
                  {fragrance.featured && (
                    <div className="absolute top-4 left-4 bg-gold text-white px-3 py-1 text-xs font-medium uppercase tracking-wide">
                      Featured
                    </div>
                  )}
                </div>
                
                <div className="text-center">
                  <h3 className="heading-serif text-xl mb-2 text-primary group-hover:text-gold transition-colors duration-300">
                    {fragrance.name}
                  </h3>
                  <p className="text-body text-sm mb-4 line-clamp-2">
                    {fragrance.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-xs text-secondary/60 uppercase tracking-wide">
                      Top Notes:
                    </span>
                    <span className="text-xs text-secondary">
                      {fragrance.notes.top.slice(0, 2).join(', ')}
                    </span>
                  </div>
                  <p className="text-gold font-medium text-lg">
                    ${fragrance.price}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedFragrance && (
          <motion.div
            className="fixed inset-0 bg-primary/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 z-10 p-2 bg-primary/80 backdrop-blur-sm rounded-full hover:bg-primary transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-white" />
                </button>

                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-full min-h-[400px]">
                    <img
                      src={selectedFragrance.image}
                      alt={selectedFragrance.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12">
                    <h2 className="heading-serif text-3xl md:text-4xl mb-4 text-primary">
                      {selectedFragrance.name}
                    </h2>
                    
                    <p className="text-body text-lg mb-8 leading-relaxed">
                      {selectedFragrance.description}
                    </p>

                    {/* Fragrance Notes */}
                    <div className="space-y-4 mb-8">
                      <div>
                        <h4 className="font-medium text-primary mb-2 uppercase tracking-wide text-sm">
                          Top Notes
                        </h4>
                        <p className="text-body text-sm">
                          {selectedFragrance.notes.top.join(', ')}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2 uppercase tracking-wide text-sm">
                          Heart Notes
                        </h4>
                        <p className="text-body text-sm">
                          {selectedFragrance.notes.middle.join(', ')}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-primary mb-2 uppercase tracking-wide text-sm">
                          Base Notes
                        </h4>
                        <p className="text-body text-sm">
                          {selectedFragrance.notes.base.join(', ')}
                        </p>
                      </div>
                    </div>

                    {/* Price and Actions */}
                    <div className="border-t border-accent pt-6">
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-2xl font-medium text-gold">
                          ${selectedFragrance.price}
                        </span>
                        <span className="text-sm text-secondary/60">
                          50ml Eau de Parfum
                        </span>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button className="btn-primary flex-1">
                          Add to Cart
                        </button>
                        <button className="btn-secondary flex-1">
                          Request Sample
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Fragrances;
