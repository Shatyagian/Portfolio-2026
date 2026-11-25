# Shatya Gian — Portfolio 2026

Portfolio digital-creative berbasis **HTML, CSS, dan JavaScript murni**. Tidak ada build step: semua aset (font, gambar, video, dan library) disimpan lokal di dalam repo sehingga situs bisa dibuka langsung atau di-deploy sebagai static site.

**Live site:** <https://shatyagianrproject.vercel.app>

## Ringkasan

Versi 2026 memakai design system **Dark Neon Studio**: palet gelap `#08080D` dengan aksen neon lime `#C6FF3D` dan cyan `#4FE3FF`, tipografi **Space Grotesk** + **DM Mono** (self-host WOFF2), grid teknis, glow halus, marquee, dan kartu interaktif.

Halaman-halaman utama:

- Intro — *Ideas into visual stories*
- Expertise
- Product Catalog Showcase — flipbook katalog 12 halaman
- Work — 9 project card dengan filter kategori
- Performance — *measured*, termasuk indeks konten kreatif (IPK) dari Instagram Insights `@mkg_indonesia` (20 Sep–19 Nov 2026)
- Experience, Credentials, Online, dan Contact

## Fitur

- Filter project dan detail project dalam dialog + zoom gambar
- Player video untuk recap, teaser, dan motion (tanpa tombol download)
- Katalog interaktif memakai `page-flip` 2.0.7 yang disimpan lokal
- Reveal saat scroll, counter angka, marquee, custom cursor, dan parallax ringan
- Semua animasi otomatis dinonaktifkan ketika `prefers-reduced-motion` aktif
- SEO: canonical, Open Graph, JSON-LD Person, `robots.txt`, `sitemap.xml`, `apple-touch-icon`
- Tidak ada request ke layanan eksternal

## Struktur

```text
index.html            halaman utama
styles.css            design system + seluruh styling
app.js                filter, galeri, video, katalog, menu, animasi
vercel.json           header cache untuk Vercel
robots.txt            aturan indexing
sitemap.xml           peta situs
assets/
  images/             gambar .webp/.jpg/.png, og-cover, ikon
  fonts/              Space Grotesk + DM Mono (WOFF2, self-host)
  catalog/            12 halaman katalog (webp)
  documents/          CV PDF + katalog PDF untuk unduhan
  video/              recap, teaser, motion, dan poster webp
  vendor/             page-flip 2.0.7 (lokal)
README-DEPLOY.md      catatan deploy lengkap
```

## Jalankan lokal

Cara paling cepat: buka `index.html` langsung di browser.

Cara yang lebih akurat (disarankan):

```powershell
cd "H:\Portfolio 2026"
npx serve .
```

Lalu buka URL yang muncul, biasanya <http://localhost:3000>.

## Deploy

Situs sudah live di Vercel sebagai static site tanpa build command:

```powershell
cd "H:\Portfolio 2026"
npx.cmd vercel@latest deploy --prod
```

Setup hosting lain juga dimungkinkan karena tidak ada proses build — cukup upload `index.html`, `styles.css`, `app.js`, dan folder `assets/`. Detail lengkap ada di [`README-DEPLOY.md`](README-DEPLOY.md).

Repo GitHub ini hanya menyimpan source. GitHub Pages sengaja tidak diaktifkan.

## Catatan repo

Yang **tidak** ikut ke repo:

- `_original/` — backup versi lama
- `*.zip` — paket deploy
- `assets/video/vid*.mp4` dan `assets/video/TEASER Presimposium.mp4` — video sumber berukuran besar
- `.vercel/` — konfigurasi lokal Vercel
- `Shatya-Gian-Portfolio-Behance.jpg` / `.pdf` — export Behance yang dibuat lokal

Semua file tersebut tetap ada di folder kerja lokal.

## Kontak

Untuk kolaborasi atau pertanyaan, gunakan panel **Contact** di <https://shatyagianrproject.vercel.app>.

© 2026 Shatya Gian.
