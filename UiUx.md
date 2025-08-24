Tentu, mari kita lanjutkan ke tahap yang sangat penting dan menarik: merancang pengalaman dan antarmuka pengguna (UI/UX). Ini akan menjadi panduan untuk 'wajah' dari aplikasi kita.

Saya akan mengambil *library prompt* `Prompt_Desain_UI_UX_Konseptual.md` dan mengisinya secara spesifik untuk proyek **amf-fintech**, berdasarkan semua informasi yang telah kita kumpulkan sejauh ini.

Prompt di bawah ini sudah lengkap dan siap Anda gunakan untuk menghasilkan panduan desain konseptual.

---

### **Prompt Final (Siap Digunakan untuk Desain UI/UX Konseptual)**

**Petunjuk:** Anda bisa memulai sesi chat baru dengan instruksi persona terlebih dahulu, misalnya *"Berperanlah sebagai seorang UI/UX Designer konseptual."*, lalu kirimkan seluruh teks di bawah ini sebagai tugasnya.

---

# Konteks:
Kita sekarang memasuki tahap perancangan antarmuka (UI) dan pengalaman pengguna (UX) untuk proyek **amf-fintech**.

Fondasi kita adalah Dokumen Visi & Kebutuhan Fungsional yang telah ada. Seperti yang kita definisikan, pengguna target kita adalah **individu di Indonesia yang mencari cara mudah dan modern untuk mengelola keuangan pribadi, namun sering merasa aplikasi yang ada terlalu rumit atau membosankan**. Mereka menginginkan aplikasi yang terasa **sederhana, intuitif, dan memotivasi**.

Sebagai referensi, berikut adalah fitur-fitur utama yang perlu kita rancang alur dan tampilannya:
* Dashboard Keuangan Pengguna
* Halaman Pencatatan Transaksi (Pemasukan & Pengeluaran)
* Halaman Pembuatan dan Monitoring Budget
* Antarmuka AI Chatbot
* Proses Registrasi & Login Pengguna

# Tugas Anda:
Berperanlah sebagai seorang UI/UX Designer konseptual. Tugas Anda adalah membuat "Dokumen Panduan Desain UI/UX Konseptual". Ingat, ini bukan tentang membuat gambar, melainkan memberikan deskripsi dan panduan yang jelas untuk tim developer frontend.

Dokumen yang Anda hasilkan harus mencakup bagian-bagian berikut:

### 1. Filosofi Desain & Identitas Visual (Design System Foundation):
* **Mood & Feel:** Deskripsikan dalam 3-5 kata sifat, suasana atau perasaan yang ingin diciptakan oleh desain aplikasi ini (misalnya: Profesional, Terpercaya, Tenang, Cepat, Ramah).
* **Palet Warna:** Sarankan palet warna yang terdiri dari:
    * **Warna Primer:** Untuk aksi utama (tombol, link aktif).
    * **Warna Sekunder:** Untuk elemen pendukung.
    * **Warna Aksen:** Untuk notifikasi atau elemen yang butuh perhatian khusus.
    * **Warna Netral:** Untuk teks dan latar belakang.
    Jelaskan secara singkat psikologi atau alasan pemilihan warna tersebut dalam konteks aplikasi keuangan.
* **Tipografi:** Sarankan sepasang jenis font (Google Fonts lebih disarankan) yang cocok dengan mood aplikasi: satu untuk Judul (Headings) dan satu untuk isi teks (Body).

### 2. Struktur & Layout Utama Aplikasi:
* Deskripsikan struktur layout utama yang akan konsisten di seluruh aplikasi. Apakah menggunakan *sidebar navigasi* di kiri? *Header* dengan menu dropdown? *Tab navigasi* di bagian bawah (untuk mobile-first)?
* Jelaskan komponen utama dari layout tersebut: Header, Sidebar/Navbar, Content Area, Footer (jika ada).

### 3. Deskripsi Wireframe untuk Halaman-Halaman Kunci:
Untuk setiap fitur utama yang saya sebutkan di konteks, pilih satu halaman kuncinya dan berikan deskripsi wireframe tekstual.
* Jelaskan tata letak elemen-elemen penting di halaman tersebut secara logis (dari atas ke bawah, kiri ke kanan).
* **Contoh (untuk Halaman Dashboard):** *"Di bagian paling atas terdapat sapaan 'Selamat Pagi, [Nama Pengguna]!'. Di bawahnya, ada komponen Card utama yang besar menampilkan 'Total Saldo Saat Ini'. Di sampingnya, ada dua tombol aksi cepat: '+ Pemasukan' dan '- Pengeluaran'. Di bawahnya lagi, area konten terbagi dua: bagian kiri menampilkan grafik lingkaran 'Alokasi Pengeluaran Bulan Ini', dan bagian kanan menampilkan daftar 'Transaksi Terakhir'."*

### 4. Alur Pengguna (User Flow) untuk Proses Kritis:
* Pilih satu proses paling penting dalam aplikasi ini: **"Proses Pencatatan Pengeluaran Baru Melalui Form"**.
* Deskripsikan alur langkah-demi-langkahnya dari sudut pandang pengguna, termasuk layar atau dialog (pop-up) yang mereka lihat di setiap langkah hingga proses tersebut selesai.

### Catatan
Sajikan dalam format Markdown yang terstruktur dan naratif, seolah-olah Anda sedang menyerahkan dokumen ini kepada seorang Frontend Developer sebagai panduan kerja mereka.