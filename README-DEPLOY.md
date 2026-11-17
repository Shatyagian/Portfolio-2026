# Shatya Gian — Portfolio 2026 (Editorial Light)

Folder ini berisi source situs versi baru. Semua file statis — tidak butuh build tool.

## Isi folder

```
index.html                      halaman utama
styles.css                      seluruh styling (design system Editorial Light)
app.js                          filter project, galeri + zoom gambar, player video, menu mobile, reveal, katalog interaktif
assets/images/                  21 gambar .webp
assets/catalog/                 12 halaman katalog (webp, 1130×1598)
assets/fonts/                   Instrument Serif + Inter Tight (self-host, WOFF2)
assets/documents/               CV PDF + katalog PDF (versi unduh, 1,9 MB)
assets/video/                   3 video recap (mp4 720×1280, ±8,5 MB) + 1 teaser (mp4 1280×720, 12 MB) + poster webp
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

- Palet: dark `#0e0e0e` + merah `#971616` → krem `#F7F3EA` + terakota `#A8331C`
- Font: League Spartan + Quicksand → Instrument Serif + Inter Tight
- Layout: nomor section jadi rail sticky di kiri, hero asimetris, kartu project tanpa kotak gelap, filter jadi tab underline, timeline jadi tabel, contact jadi panel terakota
- Radius 1.15rem → 2px, shadow diminimalkan, tambah pola garis & bidang aksen
- Section baru **03 What I Do / Expertise** (setelah Profile): 4 kategori keahlian dengan 24 poin
- Section **04 Catalog**: katalog digital implant 12 halaman yang bisa dibuka, dibalik, dan diunduh sebagai PDF
- Kartu **01 Video Recap** (3 video vertikal) + **02 Teaser Presimposium** (16:9) di Selected Work; player di dialog, tanpa opsi unduhan

## Aksesibilitas & performa

- Kontras teks terendah 5.16:1 (target WCAG AA 4.5:1)
- Tap target minimum 44px
- `prefers-reduced-motion` didukung
- Semua gambar punya `width`/`height` dan `alt`
- Tidak ada request eksternal — font, gambar, dan library lokal semua
- Total aset ±45 MB (termasuk 4 video 720p + katalog 12 halaman + PDF unduhan)
- File video asli (`assets/video/vid*.mp4`, `assets/video/TEASER Presimposium.mp4`) tidak ikut deploy; hanya versi web yang diunggah

## Rollback

Salin isi `_original/` kembali ke root folder ini untuk kembali ke versi lama.
