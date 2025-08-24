Tentu, mari kita bangun kerangka kerja untuk layanan Node.js kita. Fondasi yang baik akan membuat proses pengembangan selanjutnya jauh lebih mudah dan terstruktur.

Ini adalah isi lengkap untuk file **`Prompt_Nodejs_Scaffolding.md`**. Anda bisa langsung menyimpannya.

---

### **`Prompt_Nodejs_Scaffolding.md` (Siap Digunakan)**

---

### Deskripsi:
Gunakan prompt ini untuk memerintahkan AI membuat kerangka kerja (scaffolding) yang bersih dan terstruktur untuk sebuah layanan Node.js baru. Prompt ini akan menghasilkan struktur folder yang logis, daftar dependensi npm yang esensial, file `package.json` dengan skrip dasar, serta file-file awal yang diperlukan untuk memulai proyek.

### ✅ Prasyarat:
1.  Persona `Persona_Nodejs_Developer_Baileys.md` sudah aktif.

# Konteks:
Kita akan memulai pembangunan layanan WhatsApp Bot untuk proyek **amf-fintech**. Langkah pertama adalah menyiapkan fondasi proyek yang solid sebelum kita menulis logika inti. Tujuannya adalah untuk memiliki struktur yang rapi, dependensi yang tepat, dan konfigurasi dasar yang siap pakai.

### Tugas Anda:
Sebagai seorang Senior Node.js Developer, tugas Anda adalah menghasilkan semua aset yang diperlukan untuk inisialisasi proyek layanan WhatsApp Bot.

##### Mohon sediakan hal-hal berikut secara berurutan:

1.  **Struktur Folder yang Direkomendasikan:**
    * Tampilkan struktur folder dan file awal dalam format hierarki (pohon) yang mudah dibaca.

2.  **Daftar Dependensi (`package.json`):**
    * Buat kerangka file `package.json` yang lengkap.
    * Sertakan **dependencies** berikut: `@whiskeysockets/baileys`, `axios`, `dotenv`, `pino`, `pino-pretty`.
    * Sertakan **devDependencies** berikut: `nodemon`.
    * Buat skrip dasar: `start` (untuk produksi) dan `dev` (untuk pengembangan dengan `nodemon`).

3.  **File Konfigurasi Lingkungan (`.env.example`):**
    * Buat konten untuk file `.env.example` yang mendefinisikan variabel-variabel yang akan dibutuhkan oleh aplikasi, seperti URL dan token API untuk backend Laravel.

4.  **File Titik Masuk (`src/index.js`):**
    * Buat kode awal untuk file `src/index.js`. Kode ini harus sudah mengonfigurasi `dotenv` dan memiliki fungsi `main` asinkron sebagai titik awal eksekusi logika aplikasi.

### Catatan
Sajikan setiap bagian (Struktur Folder, `package.json`, `.env.example`, `src/index.js`) secara terpisah. Gunakan blok kode Markdown yang sesuai untuk konten file.