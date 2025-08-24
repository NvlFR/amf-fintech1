Tentu. Kita sampai pada tahap merancang arsitektur teknis yang lebih detail dan praktis. Ini adalah prompt yang sangat penting untuk memandu penulisan kode.

Saya akan mengadaptasi *library prompt* `Prompt-Architektur_Sistem_LIQ.md` untuk proyek **amf-fintech**. Saya akan melakukan penyesuaian kunci untuk memasukkan komponen **Node.js dengan Baileys** yang merupakan bagian krusial dari sistem Anda, di samping tumpukan teknologi LIQ.

Prompt di bawah ini sudah lengkap dan siap Anda gunakan untuk menghasilkan dokumen desain yang sangat spesifik dan dapat ditindaklanjuti.

---

### **Prompt Final (Siap Digunakan untuk Desain Arsitektur Detail)**

**Petunjuk:** Pertama, pastikan Anda mengaktifkan persona **`Persona_Lead_Developer_LIQ.md`**. Setelah AI mengonfirmasi perannya, salin dan tempel seluruh teks di bawah ini sebagai tugasnya.

---

# Konteks:
Kita akan merancang arsitektur teknis yang detail untuk proyek **amf-fintech**. Proyek ini akan dibangun menggunakan tumpukan teknologi utama **LIQ (Laravel, Inertia.js, Quasar)** serta layanan terpisah menggunakan **Node.js dengan Baileys** untuk integrasi WhatsApp.

Sebagai referensi utama, berikut adalah ringkasan dari Dokumen Visi & Ruang Lingkup serta Kebutuhan Fungsional yang telah kita definisikan:

* **Visi Proyek**: Menjadi asisten keuangan pribadi cerdas yang interaktif melalui aplikasi web dan AI Chatbot WhatsApp.
* **Pengguna**: `User/Client` (pelanggan) dan `Admin` (pemilik).
* **Fitur Utama**: Manajemen Akun, Dashboard Keuangan, Manajemen Langganan, Dashboard Admin, Pencatatan Transaksi (via Web & WhatsApp), Budgeting, Transaksi Berulang, dan modul dasar lainnya.
* **Kompleksitas Utama**: Interaksi *real-time* antara layanan Node.js (yang menerima input dari WhatsApp) dengan backend Laravel (yang menjadi pusat logika bisnis dan database).

### Tugas Anda:
Sebagai seorang **Lead Developer LIQ**, tugas Anda adalah membuat "Dokumen Desain Arsitektur Sistem" yang detail, praktis, dan spesifik untuk stack hibrida ini.

---
###### Dokumen yang Anda hasilkan harus mencakup poin-poin berikut:

1.  **Pola Arsitektur: Modular Monolith + Layanan Eksternal**
    * Jelaskan mengapa pola **Modular Monolith** sangat cocok untuk aplikasi web utama yang berbasis Laravel dan Inertia.
    * Jelaskan juga bagaimana **Layanan Node.js** akan bertindak sebagai layanan eksternal (microservice) yang berfokus hanya pada satu tugas: menangani komunikasi WhatsApp.

---
2.  **Peran Detail Setiap Komponen**:
    * **Laravel (Backend Core & Otak Sistem)**: Deskripsikan secara rinci bagaimana Laravel akan digunakan untuk:
        * **Routing**: Penggunaan `routes/web.php` untuk halaman web dan `routes/api.php` untuk endpoint yang akan diakses oleh layanan Node.js.
        * **Controllers**: Sebagai orkestrator logika bisnis, validasi input, dan penyiapan data untuk frontend Inertia atau respons API.
        * **Models (Eloquent)**: Lapisan abstraksi untuk berinteraksi dengan database.
        * **Database Migrations**: Untuk manajemen skema database.

    * **Inertia.js (The Glue untuk Web)**: Jelaskan peran krusial Inertia:
        * Bagaimana `Inertia::render()` di Controller akan mengirimkan data (props) ke komponen halaman Vue.
        * Bagaimana *form helper* Inertia akan menyederhanakan proses pengiriman form.

    * **Quasar (Frontend UI Framework)**: Jelaskan bagaimana Quasar akan diintegrasikan sebagai plugin Vue untuk menyediakan UI Components (`QLayout`, `QTable`, `QForm`, `QInput`, dll.) dan mengatur layouting aplikasi web.

    * **Layanan Node.js (Gerbang WhatsApp)**: Deskripsikan peran spesifik layanan ini:
        * **Tugas Utama**: Menggunakan library Baileys untuk menerima, memproses, dan mengirim pesan WhatsApp.
        * **Komunikasi**: Bagaimana layanan ini akan berkomunikasi dengan backend Laravel (misalnya: "Akan melakukan panggilan `POST` ke endpoint `api/transactions` di Laravel untuk mencatat pengeluaran baru").

---
3.  **Rekomendasi Struktur Folder Frontend**:
    * Berikan rekomendasi struktur folder yang baik di dalam direktori `resources/js/` Laravel untuk mengorganisir kode frontend (Pages, Components, Layouts, Composables).

---
4.  **Diagram Arsitektur Alur Data**:
    * Buatkan diagram alur data dalam format kode **Mermaid JS**. Diagram harus menggambarkan **dua alur utama**:
        1.  **Alur Web**: `Pengguna -> Browser (GET Request) -> Laravel Route -> Controller@index -> Inertia::render() -> Browser merender Halaman Vue dengan Quasar.`
        2.  **Alur WhatsApp**: `Pengguna -> Kirim Pesan WA -> Layanan Node.js (Baileys) -> Proses Pesan -> Panggil API Laravel (POST /api/transaction) -> Laravel API Controller -> Simpan ke DB -> Layanan Node.js -> Kirim Balasan ke WA.`

---
5.  **Pertimbangan Awal (Initial Considerations)**:
    * Berikan 1-2 poin singkat dan praktis mengenai:
        * **Keamanan**: "Semua rute web akan dilindungi *middleware auth*. Endpoint API untuk layanan Node.js akan diamankan menggunakan Laravel Sanctum (API Tokens)."
        * **Performa**: "Gunakan *eager loading* (metode `with()`) di Eloquent untuk menghindari N+1 query. Proses di layanan Node.js harus dibuat *asynchronous* agar tidak memblokir."

---
### Catatan
Sajikan dalam format Markdown yang terstruktur, profesional, dan mudah diikuti. Gunakan judul, sub-judul, dan blok kode untuk memisahkan setiap bagian dengan jelas.