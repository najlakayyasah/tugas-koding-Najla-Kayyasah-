import { motion } from 'framer-motion';

const frontEnd = [
  {
    name: "React",
    percent: 95,
    desc: "Berpengalaman dalam membangun aplikasi interaktif dan reusable component."
  },
  {
    name: "TypeScript",
    percent: 90,
    desc: "Menggunakan typing untuk meningkatkan keamanan dan maintainability kode."
  },
  {
    name: "Next.js",
    percent: 88,
    desc: "Mampu menggunakan SSR, routing, dan optimasi performa."
  },
  {
    name: "Tailwind CSS",
    percent: 95,
    desc: "Mahir membuat UI modern, responsive, dan cepat."
  },
  {
    name: "Vue.js",
    percent: 75,
    desc: "Memahami dasar Vue seperti component dan directive."
  }
];

const backendSkills = [
  {
    name: "Node.js",
    percent: 90,
    desc: "Berpengalaman dalam membangun REST API dan aplikasi backend menggunakan Node.js serta framework seperti Express."
  },
  {
    name: "Python",
    percent: 85,
    desc: "Digunakan untuk pengolahan data, scripting, serta pengembangan backend yang efisien dan scalable."
  },
  {
    name: "PostgreSQL",
    percent: 88,
    desc: "Mampu merancang dan mengelola database relasional dengan performa tinggi menggunakan PostgreSQL."
  }
];

const toolsSkills = [
  {
    name: "Git",
    percent: 95,
    desc: "Menggunakan Git untuk version control, kolaborasi tim, serta manajemen source code secara efisien."
  },
  {
    name: "Docker",
    percent: 80,
    desc: "Menggunakan Docker untuk membuat dan menjalankan aplikasi dalam container yang konsisten di berbagai environment."
  },
  {
    name: "AWS",
    percent: 75,
    desc: "Memanfaatkan layanan AWS untuk deployment, hosting, dan pengelolaan infrastruktur aplikasi."
  },
  {
    name: "Figma",
    percent: 85,
    desc: "Menggunakan Figma untuk desain UI/UX, prototyping, dan kolaborasi desain secara real-time."
  }
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section style={{
      backgroundImage: "url('bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }} id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block">Keahlian</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Skills &amp; Teknologi
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 shadow-lg glass max-w-6xl mx-auto border border-white/10 rounded-2xl overflow-hidden">
  
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 md:border-b-0 md:border-r border-dark/100"
          >
            <div className="flex justify-center items-center gap-3 mb-6">
              <h3 className="font-display text-gradient text-xl font-bold">Frontend</h3>
            </div>
            <div className="space-y-4">
              {frontEnd.map((skill, index) => (
                <div key={index} className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-gradient">{skill.percent}%</span>
                  </div>

                  <p className="text-sm text-gray-400 mt-1">{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 md:border-b-0 md:border-r border-dark/100"
          >
            <div className="flex justify-center items-center gap-3 mb-6">
              <h3 className="font-display text-gradient text-xl font-bold">Backend</h3>
            </div>
            <div className="space-y-4">
              {backendSkills.map((skill, index) => (
                <div key={index} className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-gradient">{skill.percent}%</span>
                  </div>

                  <p className="text-sm text-gray-400 mt-1">{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6"
          >
            <div className="flex justify-center items-center gap-3 mb-6">
              <h3 className="font-display text-gradient text-xl font-bold">Tools &amp; Lainnya</h3>
            </div>
            <div className="space-y-4">
              {toolsSkills.map((skill, index) => (
                <div key={index} className="mb-5">
                  <div className="flex justify-between mb-1">
                    <span className="font-semibold text-gray-700">{skill.name}</span>
                    <span className="text-gradient">{skill.percent}%</span>
                  </div>

                  <p className="text-sm text-gray-400 mt-1">{skill.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
