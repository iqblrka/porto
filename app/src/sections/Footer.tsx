import { Code2, Heart, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { label: 'Beranda', href: '#' },
  { label: 'Tentang', href: '#about' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Proyek', href: '#projects' },
  { label: 'Sertifikasi', href: '#certifications' },
  { label: 'Kontak', href: '#contact' },
];

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, href: 'https://github.com', label: 'GitHub' },
  { icon: <Linkedin className="w-5 h-5" />, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: <Mail className="w-5 h-5" />, href: 'mailto:iqbal.rakha@email.com', label: 'Email' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">M. Iqbal Rakha</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Mahasiswa Teknik Informatika Politeknik Negeri Jember yang 
              passionate dalam pengembangan web, desktop, dan game.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:text-center">
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:text-right">
            <h4 className="text-white font-semibold mb-4">Terhubung</h4>
            <div className="flex md:justify-end gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Muhammad Iqbal Rakha. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
