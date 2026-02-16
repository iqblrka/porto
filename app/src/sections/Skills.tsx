import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { 
  Code2, 
  Smartphone, 
  Brain,
  Gamepad2,
  Palette,
  Monitor
} from 'lucide-react';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: 'Web Development',
    description: 'Pengembangan aplikasi web modern dan responsif',
    skills: [
      { name: 'PHP', level: 90 },
      { name: 'HTML/CSS/JavaScript', level: 85 },
      { name: 'MySQL', level: 80 },
      { name: 'Web Design', level: 75 },
    ],
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: 'Desktop Application',
    description: 'Pengembangan aplikasi desktop dengan Java',
    skills: [
      { name: 'Java', level: 90 },
      { name: 'NetBeans', level: 85 },
      { name: 'C / C#', level: 70 },
      { name: 'OOP', level: 85 },
    ],
  },
  {
    icon: <Gamepad2 className="w-6 h-6" />,
    title: 'Game Development',
    description: 'Pengembangan game edukasi dan simulasi',
    skills: [
      { name: 'Unity', level: 80 },
      { name: 'Game Programming', level: 75 },
      { name: 'Game Design', level: 70 },
      { name: 'C# for Game', level: 75 },
    ],
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI & Data Analytics',
    description: 'Implementasi AI dan analisis data',
    skills: [
      { name: 'Google Gemini AI', level: 80 },
      { name: 'AI for Marketing', level: 75 },
      { name: 'Data Analytics', level: 70 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: 'Mobile Development',
    description: 'Pengembangan aplikasi mobile',
    skills: [
      { name: 'Android Studio', level: 75 },
      { name: 'Java Mobile', level: 70 },
      { name: 'Mobile App Design', level: 65 },
    ],
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: 'Design & UX',
    description: 'Desain antarmuka dan pengalaman pengguna',
    skills: [
      { name: 'User Experience (UX)', level: 80 },
      { name: 'Infographics', level: 75 },
      { name: 'Vibe Coding', level: 70 },
      { name: 'VS Code', level: 90 },
    ],
  },
];

const techStack = [
  { name: 'Java', color: 'from-orange-400 to-red-500' },
  { name: 'PHP', color: 'from-purple-400 to-indigo-500' },
  { name: 'MySQL', color: 'from-blue-400 to-blue-600' },
  { name: 'C', color: 'from-blue-500 to-cyan-500' },
  { name: 'C#', color: 'from-purple-500 to-pink-500' },
  { name: 'Unity', color: 'from-gray-400 to-gray-600' },
  { name: 'NetBeans', color: 'from-orange-500 to-yellow-500' },
  { name: 'VS Code', color: 'from-blue-500 to-cyan-500' },
  { name: 'Android Studio', color: 'from-green-400 to-green-600' },
  { name: 'Git', color: 'from-orange-400 to-red-500' },
  { name: 'AI/Gemini', color: 'from-blue-400 to-purple-500' },
  { name: 'UX Design', color: 'from-pink-400 to-rose-500' },
];

function SkillCard({ category, delay }: { category: SkillCategory; delay: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Card className="glass p-6 h-full hover:bg-white/10 transition-all duration-300 group">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center text-blue-400 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
            {category.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{category.title}</h3>
            <p className="text-xs text-gray-500">{category.description}</p>
          </div>
        </div>

        <div className="space-y-3">
          {category.skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-300">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100 + 300}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-cyan-500/10 text-cyan-400 mb-4">
            Keahlian
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Skill & <span className="text-gradient">Teknologi</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Kumpulan teknologi dan keahlian yang saya kuasai selama perjalanan akademik
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              category={category}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Tech stack cloud */}
        <div
          className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-xl font-semibold text-white text-center mb-8">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${tech.color} text-white text-sm font-medium opacity-0 animate-fade-in`}
                style={{
                  animation: isVisible ? `fadeIn 0.5s ease forwards ${index * 50 + 600}ms` : 'none',
                }}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
