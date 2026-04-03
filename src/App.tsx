import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Hand, 
  Footprints, 
  Sparkles, 
  Palette, 
  Star, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  Facebook, 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown,
  MessageCircle,
  Menu as MenuIcon,
  X,
  User,
  Baby,
  Wind,
  PlusCircle
} from 'lucide-react';
import { SERVICES, REVIEWS, GALLERY_IMAGES, MENU_CATEGORIES } from './constants';
import { getSalonLocationData } from './services/geminiService';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Menu', href: '#menu' },
    { name: 'Galeria', href: '#gallery' },
    { name: 'Avaliações', href: '#reviews' },
    { name: 'Contacto', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'glass py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img src="/images/logo.jpg" alt="THE NAIL SPA" className="h-10 w-auto" />
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest hover:text-spa-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+258826218719"
            className="bg-spa-dark text-white px-6 py-2 rounded-full text-sm uppercase tracking-widest hover:bg-spa-gold transition-all duration-300"
          >
            Ligar Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-spa-dark" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl p-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-serif"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-spa-dark text-white w-full py-3 rounded-full uppercase tracking-widest text-center"
            >
              Contactar
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/images/hero-bg.jpg" 
          alt="Luxury Spa Background" 
          className="w-full h-full object-cover brightness-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-white" />
      </motion.div>

      <div className="relative z-10 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-8xl text-white mb-6 tracking-tighter"
        >
          The Nail Spa
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-spa-pink mb-10 font-light tracking-widest uppercase"
        >
          Cuidados de unhas de luxo no coração de Maputo
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a 
            href="#contact"
            className="bg-white text-spa-dark px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-spa-gold hover:text-white transition-all duration-300 shadow-lg"
          >
            Contactar / Marcação
          </a>
          <a 
            href="#menu"
            className="bg-transparent border border-white text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-spa-dark transition-all duration-300"
          >
            Ver Serviços
          </a>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown size={20} className="opacity-50" />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/images/about-nails.jpg" 
              alt="Nail Care" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-spa-blush rounded-2xl -z-10 hidden md:block" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-spa-gold uppercase tracking-[0.4em] text-xs mb-4 block">A Nossa História</span>
          <h2 className="text-4xl md:text-5xl mb-8 leading-tight">Elegância em Cada Detalhe</h2>
          <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
            <p>
              Localizado no coração vibrante de Maputo, o The Nail Spa é mais do que apenas um salão—é um santuário para aqueles que apreciam as coisas boas da vida.
            </p>
            <p>
              Especializamo-nos em serviços de unhas de alta qualidade, entregues num ambiente relaxante e luxuoso. A nossa equipa de técnicos especialistas dedica-se à precisão, ao cuidado e a proporcionar uma experiência de spa sem paralelo.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 bg-spa-gold rounded-full" />
                <span>Produtos Internacionais Premium</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 bg-spa-gold rounded-full" />
                <span>Protocolos de Higiene Rigorosos</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 bg-spa-gold rounded-full" />
                <span>Ambiente Zen Relaxante</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hand': return <Hand size={32} />;
      case 'Footprints': return <Footprints size={32} />;
      case 'Sparkles': return <Sparkles size={32} />;
      case 'Palette': return <Palette size={32} />;
      default: return <Sparkles size={32} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-spa-beige">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-spa-gold uppercase tracking-[0.4em] text-xs mb-4 block"
        >
          O Que Oferecemos
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl"
        >
          Serviços de Luxo
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group"
          >
            <div className="text-spa-gold mb-6 group-hover:scale-110 transition-transform duration-500">
              {getIcon(service.icon)}
            </div>
            <h3 className="text-xl mb-4">{service.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0].id);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Hand': return <Hand size={20} />;
      case 'User': return <User size={20} />;
      case 'Baby': return <Baby size={20} />;
      case 'Wind': return <Wind size={20} />;
      case 'Palette': return <Palette size={20} />;
      case 'PlusCircle': return <PlusCircle size={20} />;
      default: return <Sparkles size={20} />;
    }
  };

  const activeData = MENU_CATEGORIES.find(c => c.id === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-spa-gold uppercase tracking-[0.4em] text-xs mb-4 block">Selecção</span>
          <h2 className="text-4xl md:text-5xl mb-12">Menu de Serviços</h2>
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm uppercase tracking-widest transition-all duration-300 border ${
                  activeCategory === cat.id 
                    ? 'bg-spa-dark text-white border-spa-dark shadow-lg scale-105' 
                    : 'bg-transparent text-gray-400 border-gray-200 hover:border-spa-gold hover:text-spa-gold'
                }`}
              >
                {getCategoryIcon(cat.icon)}
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl shadow-xl"
          >
            <h3 className="text-3xl mb-8 border-b border-spa-beige pb-6 text-center">{activeData?.name}</h3>
            
            {activeData?.type === 'table' && (
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-spa-gold uppercase tracking-widest text-xs border-b border-spa-beige">
                      {activeData.headers?.map((h, i) => (
                        <th key={i} className="pb-4 font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-spa-beige">
                    {activeData.items.map((item: any, i: number) => (
                      <tr key={i} className="group hover:bg-spa-pink/30 transition-colors">
                        <td className="py-4 font-medium text-spa-dark">{item.service}</td>
                        <td className="py-4 text-gray-500">{item.polish}</td>
                        <td className="py-4 text-gray-500">{item.gel}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeData?.type === 'list' && (
              <div className="space-y-6">
                {activeData.items.map((item: any, i: number) => (
                  <div key={i} className="flex justify-between items-center group hover:translate-x-2 transition-transform">
                    <span className="text-lg text-spa-dark">{item.name}</span>
                    <div className="flex-grow mx-4 border-b border-dotted border-gray-300" />
                    <span className="text-spa-gold font-serif text-xl">{item.price}</span>
                  </div>
                ))}
              </div>
            )}

            {activeData?.type === 'grid' && (
              <div className="grid sm:grid-cols-2 gap-8">
                {activeData.items.map((item: any, i: number) => (
                  <div key={i} className="flex justify-between items-center p-4 rounded-xl hover:bg-spa-pink/30 transition-colors border border-transparent hover:border-spa-blush">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-spa-gold font-serif">{item.price}</span>
                  </div>
                ))}
              </div>
            )}

            {activeData?.type === 'massage-grid' && (
              <div className="space-y-8">
                <p className="text-center text-spa-gold italic text-sm">{activeData.note}</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="text-spa-gold uppercase tracking-widest text-xs border-b border-spa-beige">
                        {activeData.headers?.map((h, i) => (
                          <th key={i} className="pb-4 font-medium">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-spa-beige">
                      {activeData.items.map((item: any, i: number) => (
                        <tr key={i} className="group hover:bg-spa-pink/30 transition-colors">
                          <td className="py-4 font-medium text-spa-dark">{item.type}</td>
                          <td className="py-4 text-gray-500">{item.hand}</td>
                          <td className="py-4 text-gray-500">{item.foot}</td>
                          <td className="py-4 text-gray-500">{item.neck}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-end mb-12">
        <div>
          <span className="text-spa-gold uppercase tracking-[0.4em] text-xs mb-4 block">Visuais</span>
          <h2 className="text-4xl md:text-5xl">A Galeria</h2>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full border border-spa-dark flex items-center justify-center hover:bg-spa-dark hover:text-white transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
            className="w-12 h-12 rounded-full border border-spa-dark flex items-center justify-center hover:bg-spa-dark hover:text-white transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar px-6 pb-10"
      >
        {GALLERY_IMAGES.map((img) => (
          <motion.div 
            key={img.id}
            whileHover={{ scale: 1.02 }}
            className="min-w-[300px] md:min-w-[400px] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          >
            <img 
              src={img.url} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-spa-pink">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-spa-gold uppercase tracking-[0.4em] text-xs mb-4 block">Testemunhos</span>
        <h2 className="text-4xl md:text-5xl mb-16">Experiências dos Clientes</h2>
        
        <div className="relative h-[300px] md:h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="#c5a059" color="#c5a059" />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-serif italic text-gray-700 mb-8 leading-relaxed">
                "{REVIEWS[current].comment}"
              </p>
              <span className="text-spa-dark font-medium tracking-widest uppercase text-sm">
                — {REVIEWS[current].name}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {REVIEWS.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${current === i ? 'w-8 bg-spa-gold' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const BusinessInfo = () => {
  const infoItems = [
    { icon: <Star key="rating" size={20} />, label: 'Classificação', value: '4.6 (129 avaliações)' },
    { icon: <MapPin key="address" size={20} />, label: 'Endereço', value: '150 Avenida Friedrich Engels, Maputo' },
    { icon: <Phone key="phone" size={20} />, label: 'Telefone', value: '+258 82 621 8719' },
    { icon: <Clock key="hours" size={20} />, label: 'Horário', value: 'Aberto · Fecha às 20h' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div className="space-y-12">
          <div>
            <span className="text-spa-gold uppercase tracking-[0.4em] text-xs mb-4 block">Visite-nos</span>
            <h2 className="text-4xl md:text-5xl mb-8">Localização e Horário</h2>
            <p className="text-gray-500 text-lg">
              Experimente o luxo no coração da capital de Moçambique. Estamos convenientemente localizados para o seu conforto.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {infoItems.map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-spa-gold shrink-0">{item.icon}</div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-gray-400 block mb-1">{item.label}</span>
                  <span className="text-spa-dark font-medium">{item.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-[400px] md:h-full rounded-2xl overflow-hidden shadow-2xl border-8 border-spa-beige">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.265691081682!2d32.59325997613568!3d-25.96101195431671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69a4e3b1c6c5b%3A0x7d6b8b8b8b8b8b8b!2s150%20Av.%20Friedrich%20Engels%2C%20Maputo!5e0!3m2!1sen!2smz!4v1712123456789!5m2!1sen!2smz" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.5) contrast(1.1) brightness(1.1)' }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-spa-beige">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-8">Contacte-nos para a sua Marcação</h2>
          <p className="text-gray-600 text-lg mb-12">
            Pronta para uma transformação? Entre em contacto connosco através do WhatsApp, telefone ou visite as nossas redes sociais. Estamos ansiosos por mimá-la.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
              <Phone className="text-spa-gold mb-4" size={32} />
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Telefone</h4>
              <p className="text-lg font-medium">+258 82 621 8719</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm flex flex-col items-center text-center">
              <MapPin className="text-spa-gold mb-4" size={32} />
              <h4 className="text-xs uppercase tracking-widest text-gray-400 mb-2">Endereço</h4>
              <p className="text-lg font-medium">150 Avenida Friedrich Engels, Maputo</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+258826218719"
              className="flex items-center justify-center gap-3 bg-spa-dark text-white px-8 py-4 rounded-full font-medium hover:bg-spa-gold transition-all shadow-lg min-w-[200px]"
            >
              <Phone size={20} />
              Ligar agora
            </a>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=-25.96101195431671,32.59325997613568"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white text-spa-dark px-8 py-4 rounded-full font-medium hover:bg-spa-gold hover:text-white transition-all shadow-lg min-w-[200px]"
            >
              <MapPin size={20} />
              Ver localização
            </a>
            <a 
              href="https://www.instagram.com/thenails_manipedi?igsh=MTJ6NjluMWV4MzFxeg=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all shadow-lg min-w-[200px]"
            >
              <Instagram size={20} />
              Abrir Instagram
            </a>
            <a 
              href="https://www.facebook.com/share/14fHZQwQqoS/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-all shadow-lg min-w-[200px]"
            >
              <Facebook size={20} />
              Abrir Facebook
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-spa-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <img src="/images/logo.jpg" alt="THE NAIL SPA" className="h-12 w-auto mb-6 brightness-0 invert" />
            <p className="text-gray-400 max-w-md leading-relaxed">
              Prestamos serviços de unhas de alto nível com precisão, cuidado e um ambiente relaxante no coração de Maputo.
            </p>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 text-spa-gold">Links Rápidos</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Galeria</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 text-spa-gold">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/thenails_manipedi?igsh=MTJ6NjluMWV4MzFxeg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-spa-gold hover:border-spa-gold transition-all">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com/share/14fHZQwQqoS/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-spa-gold hover:border-spa-gold transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2026 THE NAIL SPA. TODOS OS DIREITOS RESERVADOS.</p>
          <p>DESENHADO PARA O LUXO</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Menu />
      <Gallery />
      <Reviews />
      <BusinessInfo />
      <Contact />
      <Footer />
    </div>
  );
}
