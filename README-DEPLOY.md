# Shatya Gian — Portfolio 2026 (Dark Neon Studio)

Folder ini berisi source situs versi baru. Semua file statis — tidak butuh build tool.

## Isi folder

```
index.html                      halaman utama
styles.css                      seluruh styling (design system Dark Neon Studio)
app.js                          filter project, galeri + zoom gambar, player video, menu mobile, reveal, katalog interaktif, cursor/counter/parallax
robots.txt / sitemap.xml        indexing search engine
assets/images/                  gambar .webp/jpg/png (termasuk og-cover.jpg, apple-touch-icon.png)
assets/catalog/                 12 halaman katalog (webp, 1130×1598)
assets/fonts/                   Space Grotesk + DM Mono (self-host, WOFF2)
assets/documents/               CV PDF + katalog PDF (versi unduh)
assets/video/                   poster webp (MP4 disajikan dari Vercel Blob)
assets/vendor/                  page-flip 2.0.7 (library buku interaktif, lokal)
shatya-gian-portfolio-2026-deploy.zip   paket siap upload (tanpa folder _original)
_original/                      backup versi lama + PDF katalog asli (jangan diupload)
```

## Preview lokal

**Cara 1 (paling cepat):** klik dua kali `index.html`.
Semua konten tampil; di Chrome akan muncul peringatan preload font saat dibuka via `file://`, tapi font tetap termuat. Ini normal dan hilang saat situs online.

**Cara 2 (paling akurat, butuh Node.js):**

```powershell
cd "H:\Portfolio 2026"
npx serve .
```

Buka URL yang muncul (biasanya `http://localhost:3000`).

## Publikasi

### Live sekarang — Vercel

**URL produksi:** <https://shatyagianrproject.vercel.app>

Project: `shatya-gian/portfolio-2026`. Static site, tanpa build step.

Update setelah ganti foto atau edit file:

```powershell
cd "H:\Portfolio 2026"
npx.cmd vercel@latest deploy --prod
```

URL tidak berubah. Sekitar 20 detik. Login Vercel sudah tersimpan di mesin ini.

**Kalau foto diganti dengan nama file yang sama:** browser menyimpan cache gambar sampai 1 hari. Supaya foto baru langsung terlihat tanpa hard-refresh, naikkan angka versi di URL-nya. Contoh untuk hero:

```html
<link rel="preload" href="assets/images/img-001.webp?v=3" as="image" type="image/webp">
<img src="assets/images/img-001.webp?v=3" ...>
```

Sebutkan saja ke saya foto mana yang diganti, nanti saya urus versi + ukuran `width`/`height`-nya.

File yang tidak ikut ter-upload diatur di `.vercelignore` (`_original/`, `*.zip`, `.git/`, README ini). Jadi backup dan paket zip tetap lokal.

### Opsi lain — Netlify Drop (tanpa terminal)

1. Buka <https://app.netlify.com/drop>
2. Drag **`shatya-gian-portfolio-2026-deploy.zip`** (atau folder `assets` + 3 file di atas) ke halaman itu.
3. Login/klaim dengan akun gratis agar URL-nya permanen dan publik.
4. Ganti nama situs di **Site settings → Change site name** (mis. `shatya-gian-portfolio`).
5. Domain sendiri: **Domain management → Add custom domain**.

Catatan: drop tanpa akun menghasilkan link yang masih terproteksi password sampai diklaim.

### Opsi B — Cloudflare Pages

1. Login <https://dash.cloudflare.com> → **Workers & Pages → Create → Pages → Upload assets**.
2. Upload isi zip (bukan file zip-nya).
3. URL gratis `*.pages.dev`, bandwidth tak terbatas.

### Opsi C — GitHub Pages

1. Buat repo baru, upload `index.html`, `styles.css`, `app.js`, dan folder `assets`.
2. **Settings → Pages → Source: Deploy from a branch → main / root**.
3. URL: `https://<username>.github.io/<repo>/`.

## Yang berubah dari versi lama

- Palet: krem `#F7F3EA` + terakota `#A8331C` → dark `#08080D` + neon lime `#C6FF3D` + cyan `#4FE3FF` (Dark Neon Studio)
- Font: Instrument Serif + Inter Tight → Space Grotesk + DM Mono (self-host, WOFF2)
- Gaya: nuansa digital creative/tech — glow neon, grid teknis, marquee, kartu interaktif, contact panel lime kontras
- Animasi (ringan, 60fps): scroll reveal dengan blur halus, marquee teks, hover glow + pointer highlight pada galeri, custom cursor & parallax ringan di desktop, counter angka, scan line hero — otomatis nonaktif saat `prefers-reduced-motion`
- Konten & fitur dipertahankan: project cards, filter, detail/galeri inline + zoom, video recap/teaser/AI promotion (tanpa UI download), katalog flip book, About/Expertise, dan seluruh copy
- Cache-bust: `styles.css?v=8`, `app.js?v=8`
- SEO: Open Graph image (`og-cover.jpg`), canonical, JSON-LD Person, `robots.txt`, `sitemap.xml`, `apple-touch-icon`
- Cache font (`assets/fonts/`) dan library (`assets/vendor/`) 1 tahun `immutable` di `vercel.json`; gambar/video 1 hari

## Aksesibilitas & performa

- Kontras teks terendah 5.16:1 (target WCAG AA 4.5:1)
- Tap target minimum 44px
- `prefers-reduced-motion` didukung
- Semua gambar punya `width`/`height` dan `alt`
- Aset kecil (font, gambar, poster, library) self-hosted; video MP4 disajikan dari Vercel Blob
- Total aset repo lebih ringan karena seluruh MP4 tidak disimpan di repo
- Semua MP4 ada di Vercel Blob (`https://bae6uxmcmapaqoni.public.blob.vercel-storage.com/video/`); repo hanya menyimpan poster dan aset kecil
- Vercel Blob Hobby: 1 GB storage + 10 GB transfer/bulan; jika terlampaui, akses Blob diblokir sampai 30 hari

## Rollback

Salin isi `_original/` kembali ke root folder ini untuk kembali ke versi lama.
