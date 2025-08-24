Tentu, kita akan melangkah ke tahap perincian fungsional. Ini adalah langkah penting untuk memastikan tim developer memahami dengan tepat apa yang harus dibangun.

Saya akan mengambil *library prompt* `Prompt_Functional_Requirements.md` dan mengisinya dengan informasi spesifik dari proyek **amf-fintech** kita, terutama daftar fitur MVP yang sudah kita diskusikan sebelumnya.

Prompt di bawah ini sudah siap Anda gunakan untuk menghasilkan Dokumen Spesifikasi Kebutuhan Fungsional yang detail.

-----

### **Prompt Final (Siap Digunakan untuk Spesifikasi Kebutuhan Fungsional)**

**Petunjuk:** Pastikan Anda berada dalam sesi chat di mana AI sudah berperan sebagai **Business Analyst / System Analyst**, lalu salin dan tempel seluruh teks di bawah ini.

-----

# Konteks:

Kita akan melanjutkan ke tahap perencanaan detail untuk proyek **amf-fintech**. Sekarang kita perlu memecah setiap fitur yang telah kita sepakati dalam dokumen Visi & Ruang Lingkup menjadi kebutuhan-kebutuhan yang lebih spesifik dan dapat diukur.

Berikut adalah daftar fitur 'In-Scope' yang telah kita definisikan untuk versi pertama **(MVP)**:

  * Manajemen Akun Pengguna (Registrasi, Login, Profil)
  * Antarmuka AI Chatbot
  * Dashboard Keuangan Pengguna
  * Manajemen Langganan
  * Dashboard Admin
  * Pencatatan Transaksi (Pemasukan & Pengeluaran)
  * Fitur Budgeting
  * Pencatatan Transaksi Berulang
  * Modul Dasar Investasi, Utang/Piutang, dan Tabungan

-----

### Tugas Anda:

Sebagai seorang System Analyst, tugas Anda adalah mengubah daftar fitur di atas menjadi sebuah "Dokumen Spesifikasi Kebutuhan Fungsional (Functional Requirements Specification)" yang detail dan terstruktur.

-----

##### Ikuti aturan pemformatan berikut dengan ketat:

1.  Gunakan ID Unik: Setiap kebutuhan fungsional utama harus memiliki ID unik dengan format F-XXX (contoh: F-001, F-002) untuk kemudahan pelacakan (traceability).

2.  Berikan Deskripsi: Untuk setiap ID, berikan deskripsi singkat (1-2 kalimat) yang menjelaskan tujuan dari fungsionalitas tersebut.

3.  Detailkan Sub-Kebutuhan/Kriteria: Di bawah setiap deskripsi, buat daftar poin (sub-requirements atau kriteria) yang merinci aksi, aturan, atau kondisi spesifik yang harus dipenuhi oleh sistem. Gunakan ID turunan jika perlu (contoh: F-001.1, F-001.2).

-----

### Contoh Format yang Diharapkan:

```
**[F-001] Judul Kebutuhan Fungsional**
**Deskripsi:** Penjelasan singkat tentang tujuan utama dari fitur ini.
**Kriteria/Sub-Kebutuhan:**
- F-001.1: Sistem harus memungkinkan pengguna [Peran Pengguna] untuk membuat data baru.
- F-001.2: Form untuk membuat data baru harus berisi field A (wajib), B (opsional), dan C (pilihan dari daftar).
- F-001.3: Setelah data berhasil disimpan, sistem harus menampilkan notifikasi sukses dan mengarahkan pengguna kembali ke halaman daftar.
```

-----

## Catatan:

Sajikan seluruh dokumen dalam format Markdown yang terstruktur dan rapi sesuai contoh di atas. Mulai dari F-001 untuk fitur pertama dalam daftar, dan lanjutkan secara berurutan.