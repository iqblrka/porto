import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, MapPin, Calendar, Award, BookOpen, Trophy } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

function StatCard({ icon, value, label, delay }: StatProps) {
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
      <Card className="glass p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 group">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4 group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
          {icon}
        </div>
        <div className="text-2xl sm:text-3xl font-bold text-white mb-1">{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </Card>
    </div>
  );
}

export default function About() {
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

  const stats = [
    { icon: <Trophy className="w-6 h-6 text-yellow-400" />, value: 'Juara 3', label: 'KMIPN VII 2025', delay: 0 },
    { icon: <BookOpen className="w-6 h-6 text-cyan-400" />, value: '10+', label: 'Sertifikasi', delay: 100 },
    { icon: <Award className="w-6 h-6 text-teal-400" />, value: '4+', label: 'Proyek', delay: 200 },
    { icon: <GraduationCap className="w-6 h-6 text-purple-400" />, value: 'Politeknik', label: 'Negeri Jember', delay: 300 },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 mb-4">
            Tentang Saya
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Perjalanan <span className="text-gradient"> Akademik</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Mahasiswa Teknik Informatika dengan semangat tinggi dalam teknologi dan inovasi
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - Image/Visual */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative">
              {/* Main card */}
              <Card className="glass p-8 relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl font-bold">
                    MIR
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Muhammad Iqbal Rakha</h3>
                    <p className="text-gray-400">Teknik Informatika</p>
                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>Politeknik Negeri Jember</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-400">Institusi</span>
                    <span className="text-white font-medium">Politeknik Negeri Jember</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-400">Program Studi</span>
                    <span className="text-white font-medium">Teknik Informatika</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-400">Fokus</span>
                    <span className="text-white font-medium">Web & Desktop App</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-400">Prestasi</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                      Juara 3 KMIPN VII
                    </span>
                  </div>
                </div>
              </Card>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-2xl -z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full -z-10 blur-xl" />
            </div>
          </div>

          {/* Right - Bio */}
          <div
            className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              Cerita Singkat
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Saya adalah mahasiswa Teknik Informatika di Politeknik Negeri Jember 
                yang memiliki passion mendalam dalam dunia teknologi. Saya aktif 
                mengembangkan berbagai aplikasi web, desktop, dan game yang berfokus 
                pada solusi nyata untuk masyarakat.
              </p>
              <p>
                Salah satu pencapaian terbesar saya adalah meraih Juara 3 dalam 
                Kompetisi Mahasiswa Informatika Politeknik Nasional (KMIPN) VII 2025 
                kategori Pengembangan Aplikasi Permainan (PAP) Narration & Storytelling 
                yang diselenggarakan di Politeknik Negeri Padang.
              </p>
              <p>
                Saya juga aktif mengikuti berbagai sertifikasi untuk meningkatkan 
                kompetensi, termasuk di bidang AI, Data Analytics, UX Design, dan 
                Software Development. Saya selalu terbuka untuk kolaborasi dan 
                peluang baru dalam dunia teknologi.
              </p>
            </div>

            {/* Quick info */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Lokasi</div>
                  <div className="text-white font-medium">Jember, Indonesia</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Status</div>
                  <div className="text-white font-medium">Aktif - Mahasiswa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
