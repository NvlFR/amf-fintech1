Tentu saja. Mari kita bangun jembatan dari lingkungan pengembangan lokal ke dunia nyata. Ini adalah *prompt* untuk membuat panduan *deployment* yang akan menuntun kita meluncurkan proyek **amf-fintech**.

Ini adalah isi lengkap untuk file **`Prompt_DevOps_Deployment_Guide.md`**. Anda bisa langsung menyimpannya.

---

### **`Prompt_DevOps_Deployment_Guide.md` (Siap Digunakan)**

---

### Deskripsi:
Gunakan *prompt* ini untuk memerintahkan AI menghasilkan sebuah panduan *deployment* yang lengkap, dari awal hingga akhir. Tujuannya adalah untuk membuat dokumentasi yang jelas dan dapat ditindaklanjuti untuk meluncurkan aplikasi `amf-fintech` (baik bagian LIQ maupun layanan Node.js) ke sebuah server produksi standar, seperti *Virtual Private Server* (VPS) yang menjalankan Ubuntu.

### ✅ Prasyarat:
1.  Anda memiliki sebuah server (VPS) dengan akses root/sudo.
2.  Kode proyek sudah ada di dalam sebuah repositori Git (misalnya, GitHub, GitLab).
3.  Anda memiliki nama domain yang sudah diarahkan ke alamat IP server Anda (opsional, tetapi direkomendasikan untuk SSL).

# Konteks:
Proyek **amf-fintech** sudah siap untuk diluncurkan. Kita perlu membuat sebuah panduan teknis yang akan digunakan untuk melakukan *deployment* ke server produksi. Panduan ini harus mencakup semua langkah: dari penyiapan server dasar, konfigurasi *web server*, *deployment* kode aplikasi Laravel dan Node.js, hingga menjalankan layanan secara permanen dan mengamankannya dengan SSL.

### Tugas Anda:
Berperan sebagai seorang **DevOps Engineer** yang berpengalaman dalam melakukan *deployment* aplikasi web modern.

Tugas Anda adalah menghasilkan **Panduan Deployment Lengkap** untuk proyek `amf-fintech` di server Ubuntu.

##### Panduan tersebut harus mencakup tahap-tahap berikut secara berurutan dan detail:

1.  **Tahap 1: Penyiapan Awal Server**
    * Perintah untuk memperbarui server (`apt update && apt upgrade`).
    * Perintah untuk menginstal semua perangkat lunak yang dibutuhkan: Nginx, MySQL Server, Git.
    * Perintah untuk menginstal PHP dan ekstensi yang umum dibutuhkan oleh Laravel (misal: `php-fpm`, `php-mysql`, `php-mbstring`, `php-xml`, `php-curl`).
    * Perintah untuk menginstal Composer.
    * Perintah untuk menginstal Node.js (disarankan menggunakan NVM) dan manajer proses seperti Supervisor.

2.  **Tahap 2: Deployment Aplikasi Laravel (LIQ)**
    * Instruksi untuk membuat direktori proyek (misal: `/var/www/amf-fintech`).
    * Perintah `git clone` untuk mengambil kode dari repositori.
    * Perintah `composer install --no-dev --optimize-autoloader` untuk menginstal dependensi PHP.
    * Instruksi untuk membuat dan mengonfigurasi file `.env` untuk lingkungan produksi (termasuk `APP_ENV=production`, `APP_DEBUG=false`, dan detail database).
    * Perintah `php artisan` kunci untuk produksi: `key:generate`, `storage:link`, `migrate --force`, `config:cache`, `route:cache`, `view:cache`.
    * Perintah untuk mengatur kepemilikan dan izin folder yang benar (`chown`, `chmod`).

3.  **Tahap 3: Konfigurasi Web Server (Nginx)**
    * Kode lengkap untuk membuat file konfigurasi Nginx baru untuk domain proyek. Konfigurasi ini harus menunjuk ke direktori `/public`, menangani permintaan PHP melalui FPM, dan menyertakan pengaturan keamanan dasar.
    * Perintah untuk mengaktifkan konfigurasi tersebut (`ln -s ...`) dan me-*restart* Nginx.

4.  **Tahap 4: Deployment Layanan Node.js (WhatsApp Bot)**
    * Instruksi untuk masuk ke direktori layanan Node.js.
    * Perintah `npm install --production` untuk menginstal dependensi.
    * Instruksi untuk membuat dan mengonfigurasi file `.env` untuk layanan ini (berisi `LARAVEL_API_URL` dan `LARAVEL_API_TOKEN`).

5.  **Tahap 5: Menjalankan Layanan Node.js dengan Supervisor**
    * Kode lengkap untuk membuat file konfigurasi Supervisor baru (`.conf`). Konfigurasi ini harus memastikan skrip Node.js (`index.js`) berjalan secara terus-menerus dan otomatis dimulai ulang jika gagal.
    * Perintah untuk memuat dan mengaktifkan konfigurasi Supervisor yang baru.

6.  **Tahap 6: Keamanan dengan SSL (Let's Encrypt)**
    * Perintah untuk menginstal Certbot.
    * Perintah `certbot --nginx` untuk secara otomatis mendapatkan dan menginstal sertifikat SSL gratis.

### Catatan
Sajikan jawaban sebagai sebuah panduan naratif yang terstruktur. Setiap tahap harus memiliki judul yang jelas. Setiap langkah di dalam tahap harus disertai penjelasan singkat dan blok kode yang berisi perintah *shell* yang tepat. Tujuannya adalah agar pengguna dapat mengikuti panduan ini dari atas ke bawah tanpa keraguan.