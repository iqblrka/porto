# Portfolio Muhammad Iqbal Rakha

Portfolio website pribadi untuk Muhammad Iqbal Rakha - Mahasiswa Teknik Informatika Politeknik Negeri Jember.

## 🚀 Live Demo

[https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)

## 📋 Fitur

- **Hero Section** - Perkenalan dengan animasi particle background
- **About Section** - Informasi akademik dan pencapaian
- **Skills Section** - Keahlian teknis dengan progress bar
- **Projects Section** - Galeri proyek dengan detail modal
- **Certifications Section** - Daftar sertifikasi dan pencapaian
- **Contact Section** - Form kontak dan informasi

## 🛠️ Tech Stack

- **Framework:** React + TypeScript + Vite
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animation:** CSS Animations + Intersection Observer
- **Icons:** Lucide React

## 📦 Instalasi

### 1. Clone Repository

```bash
git clone https://github.com/username/portfolio-iqbal-rakha.git
cd portfolio-iqbal-rakha
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browser.

### 4. Build untuk Production

```bash
npm run build
```

## 🚀 Deploy ke Vercel

### Opsi 1: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login ke Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

### Opsi 2: Deploy via GitHub Integration

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/portfolio-iqbal-rakha.git
   git push -u origin main
   ```

2. **Import ke Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Klik "Add New Project"
   - Import repository GitHub Anda
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Klik "Deploy"

3. **Selesai!** 🎉
   - Vercel akan otomatis build dan deploy
   - Setiap push ke branch `main` akan trigger redeploy

## 📁 Struktur Project

```
├── public/
├── src/
│   ├── components/ui/     # shadcn/ui components
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── vercel.json
```

## 🎨 Customisasi

### Mengubah Data Pribadi

Edit file di folder `src/sections/`:

- **Hero.tsx** - Nama dan headline
- **About.tsx** - Informasi akademik
- **Skills.tsx** - Daftar keahlian
- **Projects.tsx** - Daftar proyek
- **Certifications.tsx** - Daftar sertifikasi
- **Contact.tsx** - Informasi kontak

### Mengubah Warna

Edit `src/index.css`:

```css
:root {
  --background: 222 47% 6%;
  --foreground: 210 40% 98%;
  --primary: 217 91% 60%;
  /* ... */
}
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

**Dibuat dengan ❤️ oleh Muhammad Iqbal Rakha**
