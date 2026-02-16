import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Instagram,
  Twitter,
  CheckCircle,
  Loader2
} from 'lucide-react';
import { toast } from 'sonner';

const socialLinks = [
  { icon: <Github className="w-5 h-5" />, label: 'GitHub', href: 'https://github.com', color: 'hover:text-gray-400' },
  { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-500' },
  { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: 'https://instagram.com', color: 'hover:text-pink-500' },
  { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: 'https://twitter.com', color: 'hover:text-sky-500' },
];

const contactInfo = [
  { icon: <Mail className="w-5 h-5" />, label: 'Email', value: 'iqbal.rakha@email.com' },
  { icon: <Phone className="w-5 h-5" />, label: 'Telepon', value: '+62 8xx-xxxx-xxxx' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Lokasi', value: 'Jember, Indonesia' },
];

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Pesan berhasil dikirim! Saya akan menghubungi Anda segera.');

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-teal-500/10 text-teal-400 mb-4">
            Kontak
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Mari <span className="text-gradient">Berkolaborasi</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi saya
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left - Contact Info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <Card className="glass p-6 h-full">
              <h3 className="text-xl font-semibold text-white mb-6">
                Informasi Kontak
              </h3>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{info.label}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                <h4 className="text-sm font-medium text-white mb-4">
                  Ikuti Saya
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-lg glass flex items-center justify-center text-gray-400 ${social.color} hover:bg-white/10 transition-all duration-300`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability badge */}
              <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <div>
                    <div className="text-sm font-medium text-green-400">
                      Tersedia untuk Kolaborasi
                    </div>
                    <div className="text-xs text-gray-500">
                      Respon dalam 24 jam
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right - Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <Card className="glass p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-white mb-6">
                Kirim Pesan
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-gray-300">
                      Nama Lengkap
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-300">
                    Subjek
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project Collaboration"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">
                    Pesan
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Ceritakan tentang project atau ide Anda..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-6 text-lg font-medium transition-all duration-300 ${
                    isSubmitted
                      ? 'bg-green-500 hover:bg-green-500'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Mengirim...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Terkirim!
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Kirim Pesan
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
