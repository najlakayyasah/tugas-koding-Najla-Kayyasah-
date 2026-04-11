import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, Coffee, Rocket, ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const stats = [
    { icon: Video, value: '100+', label: 'Video Konten' },
    { icon: Coffee, value: '1000+', label: 'Cangkir Kopi' },
  ];

  const accordionData = [
    {
      title: "About Me",
      content: "Saya adalah Najla Kayyasah, seorang Web Developer dan Content Creator yang memiliki ketertarikan besar dalam dunia teknologi dan pengembangan aplikasi web. Saya berfokus pada pembuatan website yang tidak hanya menarik secara visual, tetapi juga memiliki performa yang baik dan mudah digunakan. Dengan kemampuan dalam berbagai teknologi modern, saya terus belajar dan mengembangkan diri untuk mengikuti perkembangan industri digital yang dinamis."
    },
    {
      title: "Content Creator",
      content: "Selain mengembangkan aplikasi web, saya juga aktif sebagai content creator yang berbagi pengetahuan, pengalaman, dan inspirasi di bidang teknologi. Saya percaya bahwa teknologi dapat memberikan dampak positif jika digunakan dengan tepat, sehingga saya berkomitmen untuk menciptakan solusi digital yang bermanfaat sekaligus memberikan nilai tambah bagi banyak orang."
    },
    
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block tracking-widest uppercase text-sm">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-primary mx-auto rounded-full" 
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left Side: Image with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 aspect-square rounded-2xl overflow-hidden glass shadow-2xl">
              <div 
                style={{
                  backgroundImage: `url(bg1.jpeg)`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }} 
                className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 transition-transform duration-700 hover:scale-110"
              />
            </div>
            {/* Experience Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 z-20 p-6 glass rounded-2xl shadow-card border border-white/20"
            >
              <p className="font-display font-bold text-3xl text-primary">5+</p>
              <p className="text-xs font-semibold uppercase tracking-tighter text-muted-foreground">Tahun Pengalaman</p>
            </motion.div>
            
            {/* Background Decorative Element */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right Side: Content & Accordion */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="font-display text-2xl md:text-4xl font-bold">
                Membangun Masa Depan Melalui <span className="text-primary">Baris Kode</span>
              </h3>
              
              {/* Accordion Component */}
              <div className="space-y-3 pt-4">
                {accordionData.map((item, i) => (
                  <div key={i} className="border-b border-primary/10">
                    <button
                      onClick={() => setActiveAccordion(activeAccordion === i ? null : i)}
                      className="w-full py-4 flex justify-between items-center text-left hover:text-primary transition-colors"
                    >
                      <span className="font-bold text-lg">{item.title}</span>
                      <ChevronDown 
                        className={`transition-transform duration-300 ${activeAccordion === i ? 'rotate-180 text-primary' : ''}`} 
                      />
                    </button>
                    <AnimatePresence>
                      {activeAccordion === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pb-4 text-muted-foreground leading-relaxed">
                            {item.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Stats Grid with Hover Effects */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-5 glass rounded-2xl text-center border border-white/10 hover:border-blue-500/50 transition-all shadow-sm hover:border-blue-500/10"
                >
                  <stat.icon className="h-7 w-7 text-blue-500 mx-auto mb-3" />
                  <p className="font-display text-2xl font-extrabold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}