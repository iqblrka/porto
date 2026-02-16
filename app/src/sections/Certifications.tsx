import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar,
  Trophy,
  Code,
  Database,
  Palette,
  Sparkles
} from 'lucide-react';

interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  category: 'ai' | 'programming' | 'design' | 'competition' | 'data';
  featured: boolean;
  link?: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: 'Juara 3 KMIPN VII - Kategori PAP Narration & Storytelling',
    issuer: 'Politeknik Negeri Padang',
    date: 'Okt 2025',
    credentialId: '554/PL9/KM.01.02/2025',
    category: 'competition',
    featured: true,
  },
  {
    id: 2,
    title: 'Data Analytics: SQL',
    issuer: 'Ioda Academy',
    date: 'Des 2025',
    credentialId: '032/VL/I-A/BRSQL-03/XII/2025',
    category: 'data',
    featured: true,
  },
  {
    id: 3,
    title: 'Belajar Dasar AI',
    issuer: 'Dicoding Indonesia',
    date: 'Des 2025',
    credentialId: 'EYX4K5LJ5PDL',
    category: 'ai',
    featured: true,
  },
  {
    id: 4,
    title: 'Belajar Prinsip Pemrograman SOLID',
    issuer: 'Dicoding Indonesia',
    date: 'Des 2025',
    credentialId: 'L4PQ2L7D2ZO1',
    category: 'programming',
    featured: false,
  },
  {
    id: 5,
    title: 'Memulai Pemrograman Dengan C',
    issuer: 'Dicoding Indonesia',
    date: 'Des 2025',
    credentialId: 'RVZKGQ08QXD5',
    category: 'programming',
    featured: false,
  },
  {
    id: 6,
    title: 'Memulai Pemrograman Dengan Java',
    issuer: 'Dicoding Indonesia',
    date: 'Okt 2024',
    credentialId: 'KEXLY102MZG2',
    category: 'programming',
    featured: false,
  },
  {
    id: 7,
    title: 'Remote Job Search Strategies with Gemini AI',
    issuer: 'Ioda Academy',
    date: 'Des 2025',
    credentialId: 'STR-XII-2025-2319',
    category: 'ai',
    featured: false,
  },
  {
    id: 8,
    title: 'Berinovasi dengan AI',
    issuer: 'Yayasan Plan International Indonesia',
    date: 'Des 2025',
    category: 'ai',
    featured: false,
  },
  {
    id: 9,
    title: 'Vibe Code This: AI-Powered Branded Infographics Tool',
    issuer: 'LinkedIn',
    date: 'Des 2025',
    category: 'ai',
    featured: false,
  },
  {
    id: 10,
    title: 'Getting Started in User Experience',
    issuer: 'LinkedIn',
    date: 'Des 2025',
    category: 'design',
    featured: false,
  },
];

const categoryIcons = {
  ai: <Sparkles className="w-5 h-5" />,
  programming: <Code className="w-5 h-5" />,
  design: <Palette className="w-5 h-5" />,
  competition: <Trophy className="w-5 h-5" />,
  data: <Database className="w-5 h-5" />,
};

const categoryColors = {
  ai: 'from-purple-500 to-pink-500',
  programming: 'from-blue-500 to-cyan-500',
  design: 'from-pink-500 to-rose-500',
  competition: 'from-yellow-500 to-orange-500',
  data: 'from-green-500 to-emerald-500',
};

const categoryLabels = {
  ai: 'Artificial Intelligence',
  programming: 'Programming',
  design: 'Design & UX',
  competition: 'Competition',
  data: 'Data Analytics',
};

function CertificationCard({ cert, delay }: { cert: Certification; delay: number }) {
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
      <Card className="glass p-5 h-full hover:bg-white/10 transition-all duration-300 group">
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categoryColors[cert.category]} flex items-center justify-center text-white shrink-0`}>
            {categoryIcons[cert.category]}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <Badge variant="secondary" className="text-xs bg-white/5 text-gray-400">
                {categoryLabels[cert.category]}
              </Badge>
              {cert.featured && (
                <Badge className="text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                  Featured
                </Badge>
              )}
            </div>
            <h3 className="text-white font-semibold mb-1 line-clamp-2 group-hover:text-blue-400 transition-colors">
              {cert.title}
            </h3>
            <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {cert.date}
              </div>
              {cert.credentialId && (
                <span className="truncate">ID: {cert.credentialId}</span>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
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

  const filteredCerts = activeCategory === 'all' 
    ? certifications 
    : certifications.filter(c => c.category === activeCategory);

  const categories = ['all', 'competition', 'ai', 'programming', 'data', 'design'];

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-yellow-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-yellow-500/10 text-yellow-400 mb-4">
            Sertifikasi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Lisensi & <span className="text-gradient">Sertifikasi</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Kumpulan sertifikasi dan pencapaian yang telah saya raih
          </p>
        </div>

        {/* Category filters */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat === 'all' ? 'Semua' : categoryLabels[cat as keyof typeof categoryLabels]}
            </button>
          ))}
        </div>

        {/* Certifications grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {filteredCerts.map((cert, index) => (
            <CertificationCard key={cert.id} cert={cert} delay={index * 50} />
          ))}
        </div>

        {/* Stats */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { label: 'Total', value: certifications.length },
            { label: 'AI', value: certifications.filter(c => c.category === 'ai').length },
            { label: 'Programming', value: certifications.filter(c => c.category === 'programming').length },
            { label: 'Data', value: certifications.filter(c => c.category === 'data').length },
            { label: 'Design', value: certifications.filter(c => c.category === 'design').length },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-xl glass">
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
