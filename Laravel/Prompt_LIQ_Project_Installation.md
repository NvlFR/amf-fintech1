Tentu, mari kita buat *prompt* "Langkah Nol" yang sangat penting ini. Ini akan menjadi panduan definitif untuk memulai proyek `amf-fintech` dari awal.

Ini adalah isi lengkap untuk file **`Prompt_LIQ_Project_Installation.md`**. Anda bisa langsung menyimpannya.

---

### **`Prompt_LIQ_Project_Installation.md` (Siap Digunakan)**

---

### Deskripsi:
Gunakan *prompt* ini untuk memerintahkan AI menghasilkan sebuah panduan instalasi yang lengkap dan terstruktur, langkah-demi-langkah. Tujuannya adalah untuk menuntun seorang developer melalui semua proses yang diperlukan untuk menyiapkan proyek Laravel baru dari nol, mengintegrasikannya dengan Inertia.js (menggunakan Laravel Breeze), dan kemudian memasang serta mengonfigurasi Quasar Framework sebagai *library* UI utamanya.

### ✅ Prasyarat:
1.  Lingkungan pengembangan lokal sudah terpasang (PHP, Composer, Node.js/NPM, dan sebuah server database seperti MySQL/PostgreSQL).

# Konteks:
Kita akan membuat dokumentasi instalasi resmi untuk proyek **amf-fintech**. Siapapun yang akan mengerjakan proyek ini harus memulai dengan fondasi yang sama dan konsisten.

Tugas kita adalah menghasilkan sebuah panduan tunggal yang berisi semua perintah *bash* dan instruksi konfigurasi kode yang diperlukan untuk mengubah direktori kosong menjadi proyek LIQ (Laravel, Inertia, Quasar) yang siap dikembangkan.

### Tugas Anda:
Berperan sebagai seorang **DevOps Engineer** atau **Senior Full-Stack Developer** yang sedang menulis panduan "Getting Started" untuk anggota tim baru.

Tugas Anda adalah membuat **Panduan Instalasi Proyek** yang sangat jelas dan mudah diikuti.

##### Panduan tersebut harus disajikan dalam format langkah-demi-langkah yang berurutan, mencakup tahap-tahap berikut:

1.  **Tahap 1: Inisialisasi Proyek Laravel**
    * Perintah `composer` untuk membuat proyek Laravel baru.
    * Instruksi untuk masuk ke direktori proyek.
    * Instruksi untuk menyalin file `.env.example` menjadi `.env`.
    * Perintah `php artisan key:generate`.
    * Instruksi untuk mengonfigurasi koneksi database di file `.env`.

2.  **Tahap 2: Instalasi Otentikasi & Inertia.js (Laravel Breeze)**
    * Perintah `composer` untuk menginstal `laravel/breeze`.
    * Perintah `php artisan breeze:install` dengan *stack* **Vue**.

3.  **Tahap 3: Integrasi Quasar Framework**
    * Perintah `npm` untuk menginstal `quasar` dan `@quasar/extras`.
    * Instruksi untuk membuat file baru di `resources/js/quasar.js` dan mengisi kode untuk inisialisasi *plugin* Quasar.
    * Instruksi untuk memodifikasi file `resources/js/app.js` agar mengimpor dan menggunakan *plugin* Quasar yang baru dibuat.

4.  **Tahap 4: Konfigurasi Layout Utama dengan Quasar**
    * Instruksi untuk memodifikasi file *layout* bawaan Breeze (misal: `resources/js/Layouts/AuthenticatedLayout.vue`) agar menggunakan komponen dasar dari Quasar seperti `<QLayout>`, `<QPageContainer>`, dan `<QPage>` untuk membungkus `<slot />`.

5.  **Tahap 5: Finalisasi**
    * Perintah `npm install` untuk menginstal semua dependensi JavaScript.
    * Perintah `php artisan migrate` untuk menjalankan migrasi database awal (tabel `users`, dll.).
    * Perintah `npm run dev` untuk menjalankan Vite *development server*.
    * Perintah `php artisan serve` untuk menjalankan server PHP.

### Catatan
Sajikan jawaban Anda sebagai sebuah dokumen panduan yang utuh. Gunakan judul untuk setiap tahap, penjelasan singkat untuk setiap langkah, dan blok kode yang jelas untuk semua perintah *bash* atau potongan kode yang perlu disalin. Tujuannya adalah agar pengguna bisa menyalin dan menempelkan perintah satu per satu tanpa kebingungan.