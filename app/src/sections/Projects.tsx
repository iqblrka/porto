import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Star, GitFork, Trophy } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
  stars: number;
  forks: number;
  featured: boolean;
  period: string;
  achievement?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'SimpelSi - Sistem Pelaporan Sampah Ilegal',
    description: 'Aplikasi pelaporan sampah liar untuk mempermudah masyarakat Nganjuk melaporkan sampah yang tidak pada tempatnya.',
    longDescription: 'SimpelSi adalah aplikasi pelaporan sampah ilegal yang dirancang untuk mempermudah masyarakat Kabupaten Nganjuk dalam melaporkan sampah liar yang tidak dibuang pada tempatnya. Aplikasi ini dilengkapi dengan fitur pelaporan real-time, tracking status laporan, dan integrasi dengan pihak berwenang untuk penanganan cepat. Dibangun menggunakan PHP, MySQL, dan teknologi web modern.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=800&h=500&fit=crop',
    tags: ['PHP', 'MySQL', 'Web Development', 'Mobile App'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    stars: 45,
    forks: 12,
    featured: true,
    period: 'Sep 2025 - Des 2025',
  },
  {
    id: 2,
    title: 'FarmCode Simulator',
    description: 'Permainan edukasi pertanian untuk anak-anak usia 9-12 tahun. Juara 3 KMIPN VII 2025.',
    longDescription: 'FarmCode Simulator adalah game edukasi pertanian yang dirancang khusus untuk anak-anak usia 9-12 tahun. Game ini mengajarkan konsep dasar pertanian, kewirausahaan, dan pemrograman melalui gameplay yang interaktif dan menyenangkan. Proyek ini meraih Juara 3 dalam Kompetisi Mahasiswa Informatika Politeknik Nasional (KMIPN) VII 2025 kategori Pengembangan Aplikasi Permainan (PAP) Narration & Storytelling. Dibangun menggunakan Unity dan C#.',
    image: 'https://images.unsplash.com/photo-1592155931584-901ac15763e3?w=800&h=500&fit=crop',
    tags: ['Unity', 'C#', 'Game Development', 'Game Design'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    stars: 68,
    forks: 23,
    featured: true,
    period: 'Jul 2025 - Sep 2025',
    achievement: 'Juara 3 KMIPN VII 2025',
  },
  {
    id: 3,
    title: 'Go-Book - Aplikasi Desktop Kasir UMKM',
    description: 'Aplikasi desktop untuk pengelolaan kasir dan administrasi keuangan UMKM toko kelontong.',
    longDescription: 'Go-Book adalah aplikasi desktop yang dirancang khusus untuk membantu pengelolaan kasir dan administrasi keuangan bagi Usaha Mikro, Kecil, dan Menengah (UMKM), khususnya toko kelontong. Aplikasi ini menyediakan fitur pencatatan transaksi, manajemen stok barang, laporan keuangan harian/bulanan, dan manajemen pelanggan. Dibangun menggunakan Java dan NetBeans.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
    tags: ['Java', 'NetBeans', 'Desktop App', 'MySQL'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    stars: 38,
    forks: 15,
    featured: true,
    period: 'Feb 2025 - Jul 2025',
  },
  {
    id: 4,
    title: 'Cuci Dosa - Aplikasi Kasir Cuci Mobil',
    description: 'Platform untuk membantu UMKM cuci mobil mengelola keuangan dan pencatatan transaksi.',
    longDescription: 'Cuci Dosa (singkatan dari "Deteksi Kotoran Sampai Abiiezz") adalah platform untuk membantu individu/pelaku usaha UMKM Cuci Mobil yang mengelola keuangan dan memudahkan pencatatan transaksi. Dengan menggunakan platform ini, pengguna dapat dengan mudah mencatat dan melacak setiap transaksi keuangan mereka, mulai dari pemasukan hingga pengeluaran. Dibangun menggunakan Java dan NetBeans.',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=500&fit=crop',
    tags: ['Java', 'NetBeans', 'Desktop App', 'Finance'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    stars: 32,
    forks: 9,
    featured: false,
    period: 'Jul 2024 - Des 2024',
  },
];

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
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
      <Dialog>
        <DialogTrigger asChild>
          <Card className="glass overflow-hidden group cursor-pointer hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Featured badge */}
              {project.featured && (
                <Badge className="absolute top-3 right-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
                  Featured
                </Badge>
              )}

              {/* Achievement badge */}
              {project.achievement && (
                <Badge className="absolute top-3 left-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 flex items-center gap-1">
                  <Trophy className="w-3 h-3" />
                  {project.achievement}
                </Badge>
              )}
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
              <div className="text-xs text-gray-500 mb-2">{project.period}</div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2 flex-1">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-400">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  <span>{project.stars}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="w-4 h-4" />
                  <span>{project.forks}</span>
                </div>
              </div>
            </div>
          </Card>
        </DialogTrigger>

        <DialogContent className="glass border-white/10 max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-gray-400">
              {project.period} • {project.tags.join(', ')}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />

            {project.achievement && (
              <div className="mb-4 p-3 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                <div className="flex items-center gap-2 text-yellow-400">
                  <Trophy className="w-5 h-5" />
                  <span className="font-semibold">{project.achievement}</span>
                </div>
              </div>
            )}

            <p className="text-gray-300 leading-relaxed mb-6">
              {project.longDescription}
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-medium text-white mb-3">Teknologi</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-white/10 text-gray-300 hover:bg-white/20"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                onClick={() => window.open(project.demo, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
              <Button
                variant="outline"
                className="flex-1 border-white/20 text-white hover:bg-white/10"
                onClick={() => window.open(project.github, '_blank')}
              >
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function Projects() {
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

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Background decoration */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 mb-4">
            Proyek
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hasil <span className="text-gradient">Karya</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Kumpulan proyek yang telah saya kerjakan selama perkuliahan dan kompetisi
          </p>
        </div>

        {/* Featured projects */}
        <div className="mb-12">
          <h3
            className={`text-xl font-semibold text-white mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Proyek Unggulan
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} delay={index * 100} />
            ))}
          </div>
        </div>

        {/* Other projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3
              className={`text-xl font-semibold text-white mb-6 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Proyek Lainnya
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} delay={index * 100 + 400} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
