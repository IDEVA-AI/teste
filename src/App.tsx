import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BarChart3, 
  ShieldCheck, 
  TrendingUp, 
  Globe, 
  ArrowRight, 
  Menu, 
  X, 
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
            <BarChart3 className="text-white w-6 h-6" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-slate-900">ELITE<span className="text-slate-500">CONSULT</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Services', 'About', 'Case Studies', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
              {item}
            </a>
          ))}
          <button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
            Get Started
          </button>
        </div>

        <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(true)}>
          <Menu />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-slate-900">
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-8 mt-12">
              {['Services', 'About', 'Case Studies', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-')}`} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-display font-bold text-slate-900"
                >
                  {item}
                </a>
              ))}
              <button className="bg-slate-900 text-white py-4 rounded-xl text-lg font-bold mt-4">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-100 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              Trusted by Fortune 500
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">Financial</span> Intelligence.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
              We provide high-end accounting and strategic consulting for businesses that demand excellence. Transform your financial data into a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group">
                Book a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-50 transition-all">
                View Services
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/${i + 10}/100/100`} 
                    className="w-10 h-10 rounded-full border-2 border-white object-cover"
                    alt="Client"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-sm text-slate-500 font-medium">
                Joined by <span className="text-slate-900 font-bold">500+</span> global enterprises
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-slate-300">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                alt="Modern Office" 
                className="w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-20 max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-emerald-600 w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Growth Rate</p>
                  <p className="text-xl font-display font-bold text-slate-900">+124%</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-emerald-500 rounded-full" />
                </div>
                <p className="text-[10px] text-slate-500 font-medium">Outperforming market average by 42%</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Strategic Tax Planning",
      desc: "Sophisticated tax optimization strategies for high-net-worth individuals and corporations.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "bg-blue-50 text-blue-600",
      size: "col-span-1 md:col-span-2 lg:col-span-2"
    },
    {
      title: "Global Compliance",
      desc: "Navigating complex international regulations with precision.",
      icon: <Globe className="w-8 h-8" />,
      color: "bg-emerald-50 text-emerald-600",
      size: "col-span-1"
    },
    {
      title: "Audit & Assurance",
      desc: "Uncompromising accuracy and transparency in financial reporting.",
      icon: <CheckCircle2 className="w-8 h-8" />,
      color: "bg-amber-50 text-amber-600",
      size: "col-span-1"
    },
    {
      title: "M&A Advisory",
      desc: "Expert guidance through complex mergers, acquisitions, and divestitures.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "bg-indigo-50 text-indigo-600",
      size: "col-span-1 md:col-span-2 lg:col-span-2"
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Expertise</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of financial services designed to scale with your ambitions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5 }}
              className={`${service.size} bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group`}
            >
              <div className={`${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
              <button className="text-slate-900 font-bold flex items-center gap-2 group/btn">
                Learn More 
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=600" 
                alt="Team" 
                className="rounded-2xl aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600" 
                alt="Meeting" 
                className="rounded-2xl aspect-[3/4] object-cover mt-8"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Built on a Foundation of <span className="italic text-slate-500 font-normal">Trust</span> and Excellence.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Founded in 2008, EliteConsult has grown from a boutique firm to a global leader in financial strategy. Our mission is to empower leaders with the clarity they need to make world-changing decisions.
            </p>
            <div className="space-y-6">
              {[
                { title: "Integrity First", desc: "Our reputation is our most valuable asset." },
                { title: "Data-Driven", desc: "We leverage advanced analytics for every recommendation." },
                { title: "Global Perspective", desc: "Local expertise with a worldwide reach." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center mt-1">
                    <CheckCircle2 className="text-white w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="100" cy="0" r="80" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="100" cy="0" r="60" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="100" cy="0" r="40" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Ready to elevate your business?</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-md">
              Contact our team of experts today for a confidential consultation about your financial future.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">Email Us</p>
                  <p className="text-xl font-medium">hello@eliteconsult.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">Call Us</p>
                  <p className="text-xl font-medium">+1 (555) 000-1234</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm uppercase tracking-widest font-bold">Visit Us</p>
                  <p className="text-xl font-medium">One Financial Plaza, NY</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 text-slate-900">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none transition-all" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Company</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none transition-all" placeholder="Acme Corp" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-slate-900 outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center">
                <BarChart3 className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight text-slate-900">ELITE<span className="text-slate-500">CONSULT</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Providing world-class financial intelligence and strategic consulting since 2008. We empower global leaders with clarity and precision.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:border-slate-900 transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-4">
              {['Services', 'About Us', 'Case Studies', 'Insights', 'Careers'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-500 hover:text-slate-900 text-sm transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-500">
                <MapPin size={18} className="text-slate-900 shrink-0" />
                <span>One Financial Plaza, 42nd Floor<br />New York, NY 10005</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Phone size={18} className="text-slate-900 shrink-0" />
                <span>+1 (555) 000-1234</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-500">
                <Mail size={18} className="text-slate-900 shrink-0" />
                <span>contact@eliteconsult.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-slate-500 text-sm mb-4">Subscribe to receive our monthly financial insights.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full bg-white border border-slate-200 rounded-full py-3 px-5 text-sm outline-none focus:ring-2 focus:ring-slate-900 transition-all"
              />
              <button className="absolute right-1.5 top-1.5 bg-slate-900 text-white p-2 rounded-full hover:bg-slate-800 transition-colors">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} EliteConsult Global Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-slate-900 text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-400 hover:text-slate-900 text-xs transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-slate-900 selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
