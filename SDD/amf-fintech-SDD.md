
**Halaman Judul**
* Nama Proyek: amf-fintech
* Versi Dokumen: 1.0
* Tanggal: 24 Agustus 2025

**Daftar Isi**

---

### **1. Pendahuluan & Latar Belakang**

* **1.1. Visi & Ruang Lingkup Proyek**
### **Dokumen Visi & Ruang Lingkup Proyek: amf-fintech**

* **Versi:** 1.0
* **Tanggal:** 24 Agustus 2025
* **Disusun oleh:** Senior Business Analyst

***

### **1. Latar Belakang Masalah (Background & Problem Statement)**

Di era digital saat ini, kesadaran akan pentingnya manajemen keuangan pribadi semakin meningkat. Namun, terdapat kesenjangan signifikan antara kesadaran tersebut dengan praktik disiplin dalam kehidupan sehari-hari.

**Masalah Inti (Core Problem):**
Masalah utamanya adalah **friksi (hambatan) psikologis dan teknis dalam proses pencatatan dan analisis keuangan pribadi.** Individu, terutama dari kalangan profesional muda, seringkali menghadapi kendala berikut:

1.  **Kurangnya Waktu dan Motivasi:** Proses membuka aplikasi, memilih kategori, dan memasukkan angka secara manual terasa seperti pekerjaan tambahan yang membosankan dan memakan waktu. Hal ini menyebabkan inkonsistensi dalam pencatatan.
2.  **Kompleksitas Aplikasi Konvensional:** Banyak aplikasi keuangan yang ada di pasar menawarkan fitur yang sangat lengkap, namun dengan antarmuka yang kaku, rumit, dan tidak intuitif bagi pengguna awam. Hal ini menciptakan *learning curve* yang tinggi dan membuat pengguna merasa terintimidasi.
3.  **Interaksi yang Tidak Personal:** Aplikasi yang ada bersifat satu arah (pengguna memasukkan data, sistem menampilkan laporan). Tidak ada elemen interaktif atau "manusiawi" yang dapat memberikan umpan balik atau saran secara dinamis layaknya seorang konsultan.

Mengatasi masalah ini menjadi penting karena kegagalan dalam mengelola keuangan secara disiplin berdampak langsung pada kesehatan finansial individu, seperti kesulitan mencapai tujuan keuangan, terjebak dalam utang konsumtif, dan meningkatnya stres finansial. Proyek "amf-fintech" bertujuan untuk meruntuhkan hambatan ini dengan mengubah paradigma interaksi pengelolaan keuangan.

### **2. Visi Produk (Product Vision)**

> **"Memberdayakan setiap individu untuk mengendalikan masa depan finansial mereka dengan menyediakan asisten keuangan pribadi yang cerdas, intuitif, dan mudah diakses, menjadikan pengelolaan keuangan semudah dan senyaman berbicara dengan seorang ahli."**

### **3. Tujuan Proyek (Project Objectives)**

Berikut adalah 3 tujuan utama yang ingin dicapai melalui peluncuran versi pertama (MVP) dari proyek ini:

1.  **Validasi Konsep Interaksi AI Chatbot:** Membuktikan bahwa pendekatan berbasis percakapan (conversational) dapat secara signifikan mengurangi friksi dalam pencatatan transaksi dan meningkatkan keterlibatan (*engagement*) pengguna dibandingkan aplikasi tradisional. **Target:** Mencapai rata-rata 5 interaksi per pengguna aktif setiap minggunya dalam 3 bulan pertama pasca-peluncuran.
2.  **Membangun Fondasi Fungsional yang Stabil:** Meluncurkan platform MVP yang andal, mencakup siklus penuh dari registrasi pengguna, pencatatan transaksi inti melalui chatbot, visualisasi data pada dashboard, hingga proses pembayaran langganan yang berjalan mulus.
3.  **Akuisisi Pengguna Awal dan Validasi Model Bisnis:** Mendapatkan minimal 100 pengguna berbayar (*paid subscribers*) dalam 3 bulan pertama untuk membuktikan bahwa ada permintaan pasar terhadap solusi yang ditawarkan dan model bisnis berlangganan ini valid.

### **4. Pengguna Target (Target Audience)**

Proyek ini memiliki dua profil pengguna utama yang berbeda:

1.  **User/Client (Pelanggan)**
    * **Profil:** Profesional muda, karyawan, dan *freelancer* berusia 22-35 tahun yang melek teknologi namun tidak memiliki latar belakang atau waktu mendalam untuk mengelola keuangan. Mereka tinggal di perkotaan, memiliki pendapatan rutin, dan aktif menggunakan aplikasi digital untuk kebutuhan sehari-hari.
    * **Kebutuhan Utama:**
        * **Kemudahan & Kecepatan:** Cara yang sangat cepat untuk mencatat pengeluaran dan pemasukan di mana saja, kapan saja.
        * **Wawasan Instan:** Kemampuan untuk bertanya "Berapa sisa budget makan bulan ini?" atau "Apa pengeluaran terbesarku minggu lalu?" dan mendapatkan jawaban langsung.
        * **Panduan Sederhana:** Butuh arahan dasar dalam membuat anggaran (*budgeting*) tanpa harus membaca teori keuangan yang rumit.

2.  **Admin (Pemilik Proyek)**
    * **Profil:** Anda sebagai pemilik dan administrator utama sistem.
    * **Kebutuhan Utama:**
        * **Visibilitas Bisnis:** Dashboard terpusat untuk memantau metrik kunci seperti jumlah pengguna terdaftar, jumlah pelanggan aktif (berbayar), dan total pendapatan.
        * **Manajemen Pengguna:** Kemampuan untuk melihat daftar pengguna, status langganan mereka, dan riwayat pembayaran.
        * **Monitoring Sistem:** Memastikan sistem berjalan dengan baik dan mendapatkan gambaran umum tentang performa AI dan fitur lainnya.

### **5. Ruang Lingkup Awal (Initial Scope)**

Untuk memastikan proyek dapat diluncurkan dengan cepat dan fokus pada validasi ide inti, ruang lingkup untuk MVP didefinisikan secara cermat sebagai berikut:

#### **Fitur Utama yang Disarankan (In-Scope for MVP):**

1.  **Modul Manajemen Pengguna & Otentikasi**
    * Registrasi pengguna baru (via email & password).
    * Proses Login dan Logout yang aman.
    * Halaman profil sederhana (ubah nama, ubah password).
2.  **Inti Interaksi: AI Chatbot**
    * Antarmuka utama aplikasi adalah jendela chat.
    * Kemampuan chatbot untuk memproses input bahasa natural untuk:
        * Mencatat pemasukan (`"Aku dapat gaji 5 juta"`).
        * Mencatat pengeluaran (`"Tadi beli kopi 25 ribu"`).
        * Menjawab pertanyaan dasar tentang saldo & ringkasan (`"Sisa uangku berapa?"`, `"Total pengeluaran bulan ini?"`).
3.  **Dashboard Visualisasi Pengguna**
    * Tampilan ringkasan grafis sederhana.
    * Grafik pie chart untuk distribusi pengeluaran berdasarkan kategori.
    * Grafik garis untuk tren pemasukan vs pengeluaran bulanan.
4.  **Fitur Transaksi & Budgeting Dasar**
    * Pencatatan transaksi (otomatis dikategorikan oleh AI, dengan opsi koreksi manual).
    * Pembuatan anggaran bulanan sederhana berdasarkan kategori (misal: Budget Makanan, Transportasi).
    * Pencatatan transaksi berulang untuk otomatisasi (misal: gaji, tagihan bulanan).
5.  **Modul Langganan & Pembayaran**
    * Integrasi dengan satu *payment gateway* untuk memproses pembayaran langganan bulanan.
    * Manajemen status langganan (aktif, non-aktif/gagal bayar).
6.  **Dashboard Admin**
    * Tampilan metrik utama (jumlah pengguna, pelanggan aktif, MRR - Monthly Recurring Revenue).
    * Daftar semua pengguna dan status langganan mereka.

#### **Fitur yang Dikesampingkan (Out-of-Scope for Future Phases):**

Untuk menjaga agar MVP tetap ramping dan fokus, fitur-fitur berikut secara sengaja **tidak disertakan** di versi pertama, namun menjadi kandidat kuat untuk pengembangan di fase selanjutnya:

1.  **Integrasi Perbankan Otomatis:** Menghubungkan rekening bank pengguna untuk menarik data transaksi secara otomatis. Ini adalah fitur kompleks yang memerlukan lisensi dan keamanan tingkat tinggi.
2.  **Modul Investasi Detail:** Fitur untuk melacak portofolio saham, reksa dana, atau aset kripto.
3.  **Manajemen Utang & Piutang:** Fungsionalitas lengkap untuk mencatat siapa berutang kepada siapa, beserta pengingat dan jadwal pembayaran.
4.  **Fitur Multi-Wallet / Multi-Account:** Kemampuan untuk mengelola beberapa akun keuangan (misal: dompet tunai, rekening bank A, e-wallet B).
5.  **Pembuatan Laporan Keuangan Lanjutan:** Fitur untuk mengunduh laporan dalam format PDF/Excel.
6.  **AI Advisor Proaktif:** Kemampuan AI untuk memberikan saran keuangan proaktif yang kompleks dan personal (`"Pengeluaranmu untuk Gofood lebih tinggi 20% dari rata-rata pengguna lain"`).

---


* **1.2. Analisis Pasar & Kompetitor**
Tentu. Sebagai Business Analyst Anda, saya akan menyajikan analisis kompetitor untuk proyek **amf-fintech**. Analisis ini akan membantu kita memahami posisi kita di pasar, memvalidasi fitur MVP, dan yang terpenting, mengidentifikasi peluang untuk membuat produk kita menonjol.

Berikut adalah laporan analisis kompetitor yang berfokus pada pasar Indonesia.

---

### **Laporan Analisis Kompetitor: Lanskap Aplikasi Keuangan Pribadi Indonesia**

Dokumen ini bertujuan untuk menganalisis pemain kunci di pasar aplikasi manajemen keuangan pribadi Indonesia untuk menginformasikan strategi produk "amf-fintech".

***

### **Analisis Kompetitor: Money Lover**

#### **1. Ringkasan Singkat**
Money Lover adalah aplikasi manajemen keuangan pribadi yang sangat populer secara global dan memiliki basis pengguna yang kuat di Indonesia. Proposisi nilai utamanya adalah sebagai **solusi serba ada (all-in-one)** yang sangat komprehensif untuk pengguna yang ingin melacak setiap aspek keuangan mereka secara detail.

#### **2. Fitur Unggulan (Key Features)**
* Pencatatan pemasukan dan pengeluaran dengan kategori yang detail.
* Manajemen multi-dompet/akun (tunai, rekening bank, kartu kredit, e-wallet).
* Fitur budgeting yang kuat dengan notifikasi saat mendekati batas.
* Pelacakan utang dan piutang.
* Mode "Perjalanan" untuk mengelola pengeluaran saat liburan.
* Laporan keuangan yang sangat detail dan dapat diekspor.
* Sinkronisasi dengan rekening bank (fitur premium).
* Tersedia di berbagai platform (iOS, Android, Web).

#### **3. Kelebihan yang Terlihat (Perceived Strengths)**
* **Kelengkapan Fitur:** Ekosistem fiturnya sangat matang dan mungkin yang paling lengkap di pasaran. Apapun kebutuhan pengguna, kemungkinan besar Money Lover memilikinya.
* **Kustomisasi Tinggi:** Pengguna dapat membuat kategori, sub-kategori, dan mengatur hampir semua aspek sesuai kebutuhan mereka.
* **Platform Agnostik:** Ketersediaan di web dan mobile memungkinkan pengguna mencatat dan memeriksa keuangan mereka di mana saja.

#### **4. Potensi Kelemahan atau Celah (Potential Weaknesses or Gaps)**
* **Terlalu Rumit (Overwhelming):** Kekuatan utamanya juga merupakan kelemahannya. Bagi pengguna pemula, banyaknya fitur, menu, dan opsi kustomisasi bisa terasa **intimidatif dan rumit**. Ini sejalan dengan masalah inti yang ingin kita selesaikan.
* **Antarmuka Fungsional, Bukan Interaktif:** Pengalaman pengguna berpusat pada pengisian formulir dan melihat data. Kurang ada elemen interaktif atau "cerdas" yang memandu pengguna. Proses pencatatan masih terasa seperti *data entry* manual yang kaku.

***

### **Analisis Kompetitor: Catatan Keuangan Harian**

#### **1. Ringkasan Singkat**
Aplikasi ini sangat populer di Indonesia dengan jutaan unduhan. Proposisi nilai utamanya adalah **kesederhanaan dan kemudahan penggunaan absolut**. Ia berfungsi sebagai pengganti digital dari buku kas tradisional, dengan fokus hanya pada pencatatan harian.

#### **2. Fitur Unggulan (Key Features)**
* Antarmuka yang sangat sederhana untuk menambah pemasukan dan pengeluaran.
* Kategori yang simpel dan mudah dipahami.
* Laporan harian, mingguan, bulanan dalam bentuk sederhana (grafik dasar).
* Tidak memerlukan login (dapat digunakan secara offline).
* Backup data ke Google Drive.
* Model bisnis gratis dengan dukungan iklan.

#### **3. Kelebihan yang Terlihat (Perceived Strengths)**
* **Sangat Mudah Digunakan:** Hampir tidak ada *learning curve*. Siapapun bisa langsung menggunakannya tanpa bingung.
* **Gratis:** Model bisnis berbasis iklan membuatnya sangat mudah diakses oleh semua kalangan pasar di Indonesia.
* **Ringan dan Cepat:** Aplikasi tidak membebani ponsel dan bekerja dengan sangat cepat.

#### **4. Potensi Kelemahan atau Celah (Potential Weaknesses or Gaps)**
* **Fitur Sangat Terbatas:** Kurangnya fitur budgeting, pencatatan transaksi berulang, atau manajemen multi-akun. Ini bukan alat untuk perencanaan keuangan, hanya untuk pencatatan.
* **Tidak Ada Wawasan (Insight):** Aplikasi ini hanya menampilkan data mentah. Tidak ada analisis atau wawasan cerdas yang membantu pengguna memahami perilaku keuangan mereka.
* **Potensi Pengguna "Lulus":** Ada celah besar bagi pengguna yang memulai dengan aplikasi ini dan kemudian membutuhkan fitur yang lebih canggih, namun tidak ingin melompat ke aplikasi serumit Money Lover.

***

### **Analisis Kompetitor: Finansialku**

#### **1. Ringkasan Singkat**
Finansialku memposisikan diri lebih dari sekadar aplikasi; mereka adalah **platform perencanaan keuangan**. Proposisi nilai utamanya adalah menggabungkan alat (aplikasi) dengan konten edukasi dan akses ke perencana keuangan bersertifikat.

#### **2. Fitur Unggulan (Key Features)**
* Pencatatan keuangan standar.
* Fitur "Financial Check-Up" untuk mengevaluasi kesehatan keuangan.
* Perencanaan tujuan keuangan (dana darurat, beli rumah, pensiun).
* Agregasi portofolio investasi.
* Artikel, kursus online, dan e-book tentang keuangan.
* Fitur konsultasi langsung (chat/call) dengan perencana keuangan (layanan premium).

#### **3. Kelebihan yang Terlihat (Perceived Strengths)**
* **Pendekatan Holistik:** Menjual solusi lengkap, bukan hanya alat. Ini membangun kepercayaan dan otoritas.
* **Target Pasar yang Jelas:** Menargetkan pengguna yang serius ingin merencanakan masa depan keuangan mereka dan bersedia membayar untuk keahlian.
* **Konten Edukasi yang Kuat:** Menjadi sumber informasi terpercaya yang menarik pengguna potensial.

#### **4. Potensi Kelemahan atau Celah (Potential Weaknesses or Gaps)**
* **Aplikasi Sebagai Pendukung:** Aplikasi mereka adalah sarana untuk layanan utama (konsultasi). Pengalaman pengguna pada aplikasi itu sendiri mungkin bukan fokus utama dan bisa terasa kurang mulus dibandingkan aplikasi yang murni berfokus pada *user experience*.
* **Hambatan Harga dan Komitmen:** Model premium yang berfokus pada konsultasi memiliki harga yang jauh lebih tinggi, menciptakan penghalang bagi pengguna yang hanya butuh alat pencatatan cerdas tanpa komitmen konsultasi penuh.
* **Fokus pada Perencanaan, Bukan Kemudahan Pencatatan Harian:** Penekanan lebih pada perencanaan jangka panjang, sementara friksi dalam pencatatan harian yang "membosankan" belum tentu teratasi.

---

### **Ringkasan Strategis untuk amf-fintech**

Berdasarkan analisis di atas, berikut adalah kesimpulan strategis yang dapat kita ambil:

#### **5. Fitur Standar Industri (Table Stakes)**
Untuk dianggap sebagai pemain yang serius di pasar ini, MVP "amf-fintech" **wajib** memiliki fitur-fitur berikut, karena ini adalah ekspektasi dasar pengguna:

* **Pencatatan Pemasukan & Pengeluaran:** Fungsi inti yang tidak bisa ditawar.
* **Manajemen Kategori:** Kemampuan untuk mengelompokkan transaksi.
* **Dashboard & Laporan Visual Sederhana:** Pengguna harus bisa melihat ringkasan keuangan mereka (misalnya, via *pie chart*).
* **Manajemen Akun Pengguna:** Proses registrasi dan login yang aman.
* **Dasar-Dasar Budgeting:** Kemampuan untuk menetapkan anggaran bulanan untuk kategori tertentu.

Berita baiknya, daftar fitur MVP kita saat ini sudah mencakup semua poin ini.

#### **6. Peluang Diferensiasi (Opportunity for Differentiation)**

Pasar saat ini terpolarisasi antara **"Sangat Simpel & Gratis"** (Catatan Keuangan Harian) dan **"Sangat Lengkap & Rumit"** (Money Lover) atau **"Sangat Komprehensif & Mahal"** (Finansialku). Di sinilah letak peluang emas kita.

**Diferensiasi utama "amf-fintech" adalah pada PENGALAMAN PENGGUNA (User Experience) melalui INTERAKSI PERCAKAPAN.**

1.  **Menyerang "Rasa Malas" Secara Langsung:** Kompetitor fokus pada *apa* yang bisa dicatat, kita fokus pada *bagaimana* cara mencatatnya. Dengan AI Chatbot, kita mengubah proses *data entry* yang kaku menjadi percakapan yang cepat dan natural (`"Makan siang di warteg 15 ribu pake gopay"`). Ini adalah keunggulan unik yang tidak dimiliki oleh kompetitor utama dan langsung mengatasi masalah inti pengguna.

2.  **Menjadi "Jembatan Cerdas":** Kita dapat memposisikan **amf-fintech** sebagai pilihan ideal bagi pengguna yang sudah "lulus" dari aplikasi super-simpel tetapi merasa terintimidasi oleh aplikasi yang terlalu kompleks. Kita menawarkan fitur yang cukup kuat (budgeting, laporan) tetapi disajikan melalui antarmuka yang paling sederhana dan intuitif: **percakapan**.

**Saran Strategis:**
Gandakan fokus pada **kualitas dan kecerdasan AI Chatbot**. Ini bukan sekadar fitur tambahan, melainkan **inti dari produk kita**. Pastikan chatbot dapat menangani berbagai variasi input bahasa sehari-hari, dapat mengkategorikan transaksi secara otomatis dengan akurat, dan memberikan jawaban instan atas pertanyaan keuangan pengguna. Pengalaman yang mulus di sini akan menjadi alasan utama pengguna memilih dan bertahan dengan "amf-fintech".

---

### **2. Kebutuhan & Spesifikasi Sistem**
*Tujuan: Merinci kebutuhan fungsional dan non-fungsional secara terukur.*

* **2.1. Kebutuhan Fungsional**
### **Dokumen Spesifikasi Kebutuhan Fungsional: amf-fintech (MVP)**

**Versi:** 1.0
**Tanggal:** 24 Agustus 2025

---

**[F-001] Manajemen Akun Pengguna**
**Deskripsi:** Menyediakan fungsionalitas bagi pengguna untuk membuat dan mengelola akun mereka, serta proses otentikasi untuk mengakses sistem.
**Kriteria/Sub-Kebutuhan:**
- F-001.1: Sistem harus menyediakan halaman registrasi di mana pengguna baru dapat mendaftar menggunakan Nama, Alamat Email, dan Password.
- F-001.2: Alamat email yang didaftarkan harus unik di dalam sistem. Sistem akan menampilkan pesan error jika email sudah terdaftar.
- F-001.3: Field password harus memiliki validasi kekuatan minimum (contoh: minimal 8 karakter, kombinasi huruf dan angka).
- F-001.4: Sistem harus menyediakan halaman login di mana pengguna terdaftar dapat masuk menggunakan email dan password mereka.
- F-001.5: Jika login gagal (kombinasi email/password salah), sistem harus menampilkan pesan error yang jelas.
- F-001.6: Setelah berhasil login, pengguna akan diarahkan ke Dashboard Keuangan Pengguna.
- F-001.7: Sistem harus menyediakan fungsi "Logout" untuk mengakhiri sesi pengguna dengan aman.
- F-001.8: Pengguna harus dapat mengakses halaman "Profil" untuk melihat dan mengubah nama mereka.
- F-001.9: Di halaman "Profil", pengguna harus dapat mengubah password mereka setelah memasukkan password lama yang valid.

**[F-002] Pencatatan Transaksi via AI Chatbot**
**Deskripsi:** Memungkinkan pengguna untuk mencatat transaksi pemasukan dan pengeluaran melalui antarmuka percakapan (chatbot) menggunakan bahasa natural.
**Kriteria/Sub-Kebutuhan:**
- F-002.1: Sistem harus menyediakan antarmuka chat sebagai fitur utama setelah pengguna login.
- F-002.2: Chatbot harus dapat memproses input teks dari pengguna untuk mengidentifikasi tiga elemen utama: **Jenis Transaksi** (pemasukan/pengeluaran), **Jumlah Nominal**, dan **Deskripsi/Kategori**.
- F-002.3: Chatbot harus mampu menginterpretasikan bahasa sehari-hari (contoh: "Tadi jajan kopi 25rb", "dapat gaji 5 juta", "bayar parkir 5000").
- F-002.4: Jika chatbot tidak dapat menentukan kategori secara otomatis, ia harus memberikan beberapa pilihan kategori yang paling relevan kepada pengguna untuk dipilih.
- F-002.5: Sebelum menyimpan, chatbot harus memberikan konfirmasi ringkasan transaksi kepada pengguna (contoh: "Oke, catat pengeluaran Rp 25.000 untuk kategori 'Kopi'. Benar?").
- F-002.6: Setelah pengguna mengkonfirmasi, sistem harus menyimpan data transaksi tersebut ke dalam database, terhubung dengan akun pengguna yang sedang aktif.
- F-002.7: Pengguna harus dapat bertanya kepada chatbot tentang informasi dasar seperti "saldo bulan ini" atau "total pengeluaran hari ini", dan chatbot akan memberikan jawaban numerik sederhana.

**[F-003] Dashboard Keuangan Pengguna**
**Deskripsi:** Menyediakan ringkasan visual dari kondisi keuangan pengguna dalam periode waktu tertentu.
**Kriteria/Sub-Kebutuhan:**
- F-003.1: Dashboard harus menampilkan ringkasan utama untuk periode bulan berjalan (default): **Total Pemasukan**, **Total Pengeluaran**, dan **Arus Kas Bersih** (Pemasukan - Pengeluaran).
- F-003.2: Sistem harus menampilkan grafik lingkaran (*pie chart*) yang memvisualisasikan persentase pengeluaran berdasarkan kategori untuk periode yang dipilih.
- F-003.3: Sistem harus menampilkan daftar 5-10 transaksi terakhir yang dilakukan oleh pengguna.
- F-003.4: Pengguna harus dapat mengubah periode waktu data yang ditampilkan di dashboard (pilihan: Bulan Ini, Bulan Lalu, Tahun Ini).

**[F-004] Fitur Budgeting**
**Deskripsi:** Memungkinkan pengguna untuk menetapkan anggaran pengeluaran bulanan untuk kategori tertentu dan melacak kemajuannya.
**Kriteria/Sub-Kebutuhan:**
- F-004.1: Pengguna harus dapat mengakses halaman khusus untuk membuat dan mengelola budget.
- F-004.2: Untuk membuat budget baru, pengguna harus memilih **Kategori Pengeluaran** dan memasukkan **Jumlah Anggaran** untuk periode satu bulan.
- F-004.3: Sistem harus menampilkan daftar semua budget yang aktif, beserta progress bar visual yang menunjukkan jumlah yang sudah terpakai dibandingkan total anggaran (contoh: "Transportasi: Rp 350.000 / Rp 800.000").
- F-004.4: Setiap kali transaksi pengeluaran baru dicatat, sistem harus secara otomatis memperbarui progress budget pada kategori yang sesuai.
- F-004.5: Pengguna harus dapat mengedit atau menghapus budget yang sudah ada.

**[F-005] Pencatatan Transaksi Berulang**
**Deskripsi:** Memberikan kemampuan kepada pengguna untuk mengotomatisasi pencatatan transaksi yang terjadi secara rutin.
**Kriteria/Sub-Kebutuhan:**
- F-005.1: Pengguna harus dapat membuat "Jadwal Transaksi Berulang".
- F-005.2: Formulir pembuatan jadwal harus mencakup field: Deskripsi, Jumlah Nominal, Jenis (Pemasukan/Pengeluaran), Kategori, Tanggal Mulai, dan Frekuensi (Pilihan: Mingguan, Bulanan).
- F-005.3: Sistem harus secara otomatis membuat catatan transaksi baru sesuai jadwal yang telah ditetapkan oleh pengguna.
- F-005.4: Pengguna harus dapat melihat daftar semua jadwal transaksi berulang yang aktif, serta dapat mengedit atau menghapusnya.

**[F-006] Manajemen Langganan**
**Deskripsi:** Mengelola siklus hidup langganan pengguna, mulai dari pembayaran hingga status akun.
**Kriteria/Sub-Kebutuhan:**
- F-006.1: Sistem harus terintegrasi dengan minimal satu *payment gateway* pihak ketiga untuk memproses pembayaran.
- F-006.2: Pengguna non-pelanggan akan melihat halaman untuk memilih paket langganan dan melakukan pembayaran.
- F-006.3: Setelah pembayaran berhasil diverifikasi oleh *payment gateway*, sistem harus secara otomatis memperbarui status akun pengguna menjadi "Aktif" atau "Premium".
- F-006.4: Pengguna dengan status "Aktif" akan mendapatkan akses penuh ke semua fitur aplikasi.
- F-006.5: Di halaman profil, pengguna harus dapat melihat status langganan mereka saat ini dan tanggal perpanjangan berikutnya.
- F-006.6: Jika pembayaran perpanjangan otomatis gagal, status akun pengguna akan diubah menjadi "Non-Aktif" dan akses ke fitur premium akan dibatasi sampai pembayaran berhasil.

**[F-007] Dashboard Admin**
**Deskripsi:** Menyediakan antarmuka terpusat bagi administrator untuk memonitor aktivitas dan metrik kunci aplikasi.
**Kriteria/Sub-Kebutuhan:**
- F-007.1: Akses ke Dashboard Admin harus dilindungi oleh proses login yang terpisah dan hanya bisa diakses oleh peran "Admin".
- F-007.2: Dashboard harus menampilkan metrik bisnis utama secara *real-time* atau mendekati *real-time*:
    - Jumlah Pengguna Terdaftar
    - Jumlah Pelanggan Aktif (Berbayar)
    - Pendapatan Berulang Bulanan (MRR - Monthly Recurring Revenue)
- F-007.3: Admin harus dapat melihat daftar semua pengguna yang terdaftar di sistem.
- F-007.4: Informasi yang ditampilkan dalam daftar pengguna harus mencakup: Nama, Email, Tanggal Registrasi, dan Status Langganan (Aktif/Non-Aktif).
- F-007.5: Admin harus memiliki fungsionalitas pencarian untuk menemukan pengguna berdasarkan alamat email.

* **2.2. Kebutuhan Non-Fungsional**
    Tentu, sebagai System Architect senior, saya akan menyusun **Dokumen Desain Arsitektur Sistem** untuk proyek **amf-fintech** berdasarkan konteks dan tumpukan teknologi yang telah Anda tentukan. Dokumen ini akan menjadi cetak biru teknis bagi tim pengembang.

-----

### **Dokumen Desain Arsitektur Sistem: amf-fintech**

  * **Versi:** 1.0
  * **Tanggal:** 24 Agustus 2025
  * **Disusun oleh:** Senior System Architect

-----

### 1\. Analisis dan Rekomendasi Pola Arsitektur

#### Analisis Kebutuhan

Proyek `amf-fintech` memiliki karakteristik unik yang memengaruhi pilihan arsitektur:

1.  **Dua Platform Interaksi:** Pengguna berinteraksi melalui dua jalur yang sangat berbeda: aplikasi web (interaksi kaya, visual) dan WhatsApp (interaksi berbasis teks, real-time, event-driven).
2.  **Tumpukan Teknologi Heterogen:** Kebutuhan ini secara eksplisit dipenuhi oleh dua teknologi yang berbeda: **Laravel (PHP)** untuk aplikasi web tradisional dan **Node.js** untuk layanan chatbot yang bersifat *long-running* dan *I/O-bound*.
3.  **Fokus MVP:** Skala awal adalah MVP, yang berarti kecepatan pengembangan dan kesederhanaan operasional adalah prioritas. Namun, sistem harus siap untuk berkembang.

#### Rekomendasi Pola Arsitektur: **Modular Monolith dengan Layanan Pendukung (Modular Monolith with a Supporting Service)**

Saya tidak merekomendasikan arsitektur *Microservices* murni untuk tahap MVP karena kompleksitas operasionalnya yang tinggi (deployment, service discovery, distributed tracing) akan memperlambat pengembangan. Sebaliknya, arsitektur *Monolithic* murni juga tidak cocok karena sulit untuk menggabungkan proses *long-running* Node.js ke dalam siklus request/response PHP-FPM secara efisien.

Pola yang paling sesuai adalah pendekatan hybrid:

  * **Aplikasi Web Utama (Laravel):** Akan dibangun sebagai **Modular Monolith**. Artinya, aplikasi ini adalah satu unit deployment tunggal, namun secara internal kodenya diorganisir ke dalam modul-modul yang logis dan independen (misalnya: Modul Akun, Modul Transaksi, Modul Langganan). Ini memberikan kemudahan pengembangan monolitik dengan kejelasan struktur kode microservices.
  * **Layanan Chatbot (Node.js):** Akan berfungsi sebagai **Layanan Pendukung (Supporting Service)** yang terpisah. Ini adalah aplikasi mandiri yang hanya memiliki satu tanggung jawab: mengelola koneksi dengan WhatsApp dan menerjemahkan pesan menjadi aksi di sistem utama.

#### Justifikasi Pilihan

Pola ini dipilih karena memberikan keseimbangan terbaik:

  * **Kecepatan Pengembangan:** Tim dapat fokus mengembangkan sebagian besar logika bisnis dalam satu codebase (Laravel), yang mempercepat iterasi.
  * **Penggunaan Teknologi yang Tepat:** Memungkinkan kita menggunakan Node.js untuk tugas yang paling cocok baginya (asynchronous I/O, koneksi persisten) dan Laravel untuk kekuatannya (pengembangan API yang cepat, ekosistem yang matang, keamanan).
  * **Isolasi Kegagalan:** Jika layanan WhatsApp (Node.js) mengalami masalah atau perlu di-restart, aplikasi web utama (Laravel) tetap dapat beroperasi tanpa gangguan, dan sebaliknya.
  * **Jalur Evolusi yang Jelas:** Arsitektur ini sangat mudah untuk dievolusikan. Jika di masa depan salah satu modul di dalam Laravel (misalnya, modul reporting) menjadi sangat kompleks, modul tersebut dapat diekstraksi keluar menjadi layanan terpisah (microservice) tanpa harus merombak keseluruhan sistem.

-----

### 2\. Tumpukan Teknologi yang Ditentukan (Tech Stack)

Berikut adalah rincian tumpukan teknologi yang akan digunakan beserta justifikasinya.

  * **Aplikasi Web Utama (LIQ Stack):**

      * **Backend: Laravel (PHP):** Pilihan yang sangat baik sebagai inti sistem. Laravel menyediakan fondasi yang kokoh untuk keamanan (autentikasi, otorisasi), antrian (queueing), dan pembuatan REST API yang akan digunakan oleh layanan Node.js.
      * **Frontend Framework: Inertia.js:** Jembatan modern antara backend monolitik dan frontend SPA (Single Page Application). Ini memungkinkan kita membangun antarmuka yang reaktif dan cepat seperti Vue/React tanpa perlu membangun dan mengelola API terpisah untuk frontend.
      * **UI Library: Quasar Framework:** Pustaka komponen Vue yang sangat lengkap dan matang. Menggunakan Quasar akan secara drastis mempercepat pembangunan UI yang konsisten dan responsif untuk dashboard pengguna dan admin.

  * **Layanan Chatbot (Integrasi WhatsApp):**

      * **Runtime: Node.js:** Pilihan terbaik untuk aplikasi yang membutuhkan koneksi jaringan yang persisten dan menangani banyak operasi I/O secara bersamaan (menerima dan mengirim pesan WhatsApp).
      * **Library: Baileys WhatsApp Web API:** Pustaka open-source yang paling populer dan matang untuk berinteraksi dengan WhatsApp Web.

  * **Database:**

      * **Rekomendasi: PostgreSQL**
      * **Alasan:**
        1.  **Integritas Data:** Untuk aplikasi fintech, integritas dan kebenaran data adalah hal mutlak. PostgreSQL dikenal lebih ketat dalam hal tipe data dan *constraints* dibandingkan MySQL.
        2.  **Fitur Lanjutan:** PostgreSQL memiliki dukungan superior untuk tipe data kompleks seperti `JSONB`, yang sangat berguna untuk menyimpan metadata transaksi yang tidak terstruktur. Ia juga memiliki fitur *indexing* yang lebih kuat, yang akan sangat membantu saat kita perlu membuat laporan dan analitik keuangan yang kompleks di masa depan.
        3.  **Skalabilitas:** PostgreSQL memiliki reputasi yang sangat baik untuk skalabilitas dan keandalan dalam menangani beban kerja yang besar dan set data yang kompleks.

  * **Justifikasi & Strategi Integrasi:**
    Kombinasi Laravel dan Node.js adalah contoh klasik dari "menggunakan alat yang tepat untuk pekerjaan yang tepat". Keduanya akan berkomunikasi melalui **Internal REST API** yang aman.

      * **Pola Komunikasi:** Layanan Node.js akan bertindak sebagai **klien** dan aplikasi Laravel sebagai **server**.
      * **Mekanisme:** Laravel akan mengekspos serangkaian *endpoint* API internal (misalnya, dengan prefix `/api/internal/v1/...`). Layanan Node.js, setelah menerima pesan dari WhatsApp dan memprosesnya, akan memanggil *endpoint* ini (misalnya, `POST /api/internal/v1/transactions`) untuk membuat, membaca, atau memperbarui data.
      * **Keamanan:** Komunikasi ini tidak boleh diekspos ke internet publik. Ia harus diamankan menggunakan API Key/Token statis dan idealnya, kedua layanan berjalan dalam jaringan pribadi yang sama (VPC - Virtual Private Cloud) dan saling berkomunikasi melalui alamat IP pribadi.

-----

### 3\. Desain Arsitektur Tingkat Tinggi

#### Komponen Utama

1.  **Aplikasi Web LIQ (Client & Server):** Ini adalah inti dari sistem `amf-fintech`, dibangun dengan Laravel. Komponen ini bertanggung jawab atas:
      * Menyajikan antarmuka pengguna (dashboard, profil, dll.) melalui Inertia.js dan Quasar.
      * Menangani logika bisnis inti (manajemen akun, budgeting, reporting).
      * Menyediakan Internal REST API untuk diakses oleh layanan lain.
      * Menjadi satu-satunya komponen yang memiliki akses tulis/baca langsung ke database.
2.  **Layanan WhatsApp (Node.js):** Komponen spesialis yang terisolasi. Bertanggung jawab atas:
      * Memelihara koneksi persisten ke server WhatsApp menggunakan Baileys.
      * Mendengarkan *event* pesan masuk dari pengguna.
      * Melakukan pemrosesan bahasa alami (NLP) tingkat dasar untuk menerjemahkan teks menjadi data terstruktur (misal: "beli kopi 25rb" -\> `{type: "expense", amount: 25000, description: "kopi"}`).
      * Memanggil Internal REST API Laravel untuk menyimpan data.
      * Mengirim pesan balasan/konfirmasi kembali ke pengguna melalui WhatsApp.
3.  **Database (PostgreSQL):** Satu-satunya sumber kebenaran (*single source of truth*) untuk semua data aplikasi, termasuk data pengguna, transaksi, budget, dan langganan.
4.  **Layanan Eksternal:**
      * **Payment Gateway (misalnya, Midtrans, Xendit):** Untuk memproses pembayaran langganan pengguna. Komunikasi akan dilakukan dari sisi backend Laravel.

#### Alur Data Utama: Pencatatan Transaksi via WhatsApp

Berikut adalah alur data langkah demi langkah:

1.  **Input Pengguna:** Pengguna mengirim pesan "Tadi bayar parkir 5000" ke nomor WhatsApp `amf-fintech`.
2.  **Penerimaan Pesan:** **Layanan WhatsApp (Node.js)** menerima pesan tersebut melalui koneksi Baileys.
3.  **Pemrosesan:** Layanan mengidentifikasi pengguna berdasarkan nomor pengirim, lalu mem-parsing pesan untuk mengekstrak data transaksi.
4.  **Panggilan API:** Layanan Node.js membuat permintaan `POST` ke endpoint `https://api.amf-fintech.com/api/internal/v1/transactions` di **Aplikasi Web (Laravel)** dengan membawa payload JSON dan token autentikasi.
5.  **Logika Bisnis & Persistensi:** Laravel menerima permintaan, memvalidasi token, lalu menjalankan logika bisnis (membuat record transaksi baru, mengaitkannya dengan pengguna yang benar, dan memperbarui data budget terkait).
6.  **Penyimpanan Data:** Laravel menyimpan record transaksi baru ke dalam tabel `transactions` di **Database (PostgreSQL)**.
7.  **Respon API:** Laravel mengembalikan respon sukses (`201 Created`) ke layanan Node.js.
8.  **Konfirmasi ke Pengguna:** Setelah menerima respon sukses, layanan Node.js mengirim pesan balasan ke pengguna via WhatsApp: "✅ Transaksi 'bayar parkir' sebesar Rp 5.000 berhasil dicatat."
9.  **Visualisasi di Web:** Kemudian, saat pengguna membuka dashboard web, browser akan meminta data ke Laravel. Laravel akan mengambil data transaksi terbaru (termasuk yang baru saja dicatat via WhatsApp) dari PostgreSQL dan menampilkannya di dashboard.

-----

### 4\. Diagram Arsitektur

Berikut adalah diagram arsitektur tingkat tinggi dalam format Mermaid JS yang merepresentasikan desain di atas.

```mermaid
graph TD
    subgraph "Pengguna"
        User_Web[<i class='fa fa-user'></i> Pengguna Web]
        User_WA[<i class='fa fa-user'></i> Pengguna WhatsApp]
    end

    subgraph "Infrastruktur amf-fintech (Cloud/VPC)"
        subgraph "Aplikasi Web Utama (LIQ Stack)"
            LB_Web[Load Balancer]
            Laravel_App[Laravel Backend <br> (Modular Monolith, API Internal)]
        end

        subgraph "Layanan Chatbot"
            NodeJS_Service[Node.js Service <br> (Baileys WhatsApp API)]
        end

        Database[(<i class='fa fa-database'></i> PostgreSQL DB)]

        LB_Web --> Laravel_App
        Laravel_App -- "SQL Queries" --> Database
        NodeJS_Service -- "Internal REST API Call <br> (HTTPS + API Key)" --> Laravel_App
    end

    subgraph "Internet & Layanan Eksternal"
        Browser[<i class='fa fa-window-maximize'></i> Browser Client <br> (Quasar UI via Inertia)]
        WhatsApp_API[<i class='fab fa-whatsapp'></i> WhatsApp Servers]
        Payment_Gateway[<i class='fa fa-credit-card'></i> Payment Gateway]
    end

    User_Web --> Browser
    Browser -- "HTTPS Requests" --> LB_Web

    User_WA -- "Pesan WhatsApp" <--> WhatsApp_API
    WhatsApp_API -- "Webhook/Events" <--> NodeJS_Service

    Laravel_App -- "Server-to-Server API" --> Payment_Gateway
```

-----

### 5\. Pertimbangan Non-Fungsional

  * **Skalabilitas (Scalability):**

      * Arsitektur ini memiliki skalabilitas yang baik. **Aplikasi Web (Laravel)** bersifat *stateless* dan dapat dengan mudah di-scale out secara horizontal dengan menambahkan lebih banyak server di belakang *load balancer*.
      * **Layanan WhatsApp (Node.js)** lebih rumit untuk di-scale karena koneksi Baileys bersifat *stateful*. Scaling dapat dilakukan secara vertikal (menambah resource CPU/RAM) atau, jika diperlukan, secara horizontal dengan strategi *sharding* (misalnya, satu instance Node.js melayani grup nomor telepon tertentu).
      * Prioritas scaling pertama kemungkinan besar adalah **Aplikasi Web (Laravel)** karena akan melayani lebih banyak jenis permintaan (web & API internal).

  * **Keamanan (Security):**

      * **Titik Kritis:** Keamanan **Internal REST API** antara Node.js dan Laravel adalah yang paling vital.
      * **Langkah Mitigasi:**
        1.  **Otentikasi Layanan-ke-Layanan:** Gunakan *shared secret* atau *API token* yang kuat dan dirotasi secara berkala.
        2.  **Firewall/Network Policy:** Konfigurasikan aturan jaringan agar endpoint API internal hanya dapat diakses dari alamat IP privat milik Layanan WhatsApp. Jangan pernah mengeksposnya ke internet publik.
        3.  **Input Validation:** Laravel harus melakukan validasi ketat terhadap semua data yang diterima dari layanan Node.js, jangan pernah mempercayai input secara implisit.
        4.  **Standar Keamanan Web:** Terapkan semua praktik keamanan standar pada aplikasi Laravel (proteksi CSRF, XSS, SQL Injection) yang sebagian besar sudah ditangani oleh framework.

  * **Performa (Performance):**

      * **Potensi Bottleneck:**
        1.  **Latensi Jaringan Internal:** Waktu yang dibutuhkan untuk panggilan API dari Node.js ke Laravel. Ini dapat diminimalkan dengan menempatkan kedua layanan di zona ketersediaan (*availability zone*) yang sama di penyedia cloud.
        2.  **Query Database:** Seiring bertambahnya data transaksi, query untuk analitik di dashboard dapat menjadi lambat. Perlu strategi *indexing* yang agresif pada tabel `transactions` di PostgreSQL.
        3.  **Pemrosesan NLP di Node.js:** Jika logika untuk mem-parsing pesan menjadi terlalu kompleks, ini dapat meningkatkan waktu respon chatbot. Untuk MVP, jaga agar tetap sederhana.

  * **Maintainability (Pemeliharaan):**

      * Pemisahan tanggung jawab antara aplikasi web dan layanan chatbot adalah keuntungan besar untuk pemeliharaan. Tim yang berbeda dapat bekerja secara paralel pada codebase yang terpisah.
      * Deployment dapat dilakukan secara independen. Perubahan pada UI dashboard tidak memerlukan restart layanan chatbot. Peningkatan versi library Baileys tidak akan memengaruhi aplikasi web. Hal ini mengurangi risiko dan menyederhanakan siklus rilis.

---

### **3. Arsitektur Sistem**
*Tujuan: Menjelaskan desain teknis tingkat tinggi dan bagaimana semua komponen saling terhubung.*

* **3.1. Pola Arsitektur & Tumpukan Teknologi**
Tentu, saya siap. Berikut adalah Dokumen Desain Arsitektur Sistem untuk proyek **amf-fintech**.

-----

# Dokumen Desain Arsitektur Sistem: amf-fintech

**Proyek**: amf-fintech  
**Stack Utama**: Laravel, Inertia.js, Quasar (LIQ)  
**Layanan Tambahan**: Node.js + Baileys (WhatsApp Gateway)  
**Lead Developer**: (Anda)

Dokumen ini merinci arsitektur teknis yang akan diimplementasikan, mencakup pola arsitektur, peran setiap komponen teknologi, struktur kode, alur data, serta pertimbangan awal mengenai keamanan dan performa.

-----

## 1\. Pola Arsitektur: Modular Monolith + Layanan Eksternal

Untuk proyek **amf-fintech**, kita akan mengadopsi pendekatan hibrida yang menggabungkan kekuatan monolit untuk kecepatan pengembangan dengan fleksibilitas layanan eksternal untuk tugas spesifik.

### Modular Monolith (Aplikasi Web Utama)

Pola **Modular Monolith** sangat ideal untuk aplikasi inti kita yang dibangun dengan Laravel dan Inertia.js.

  * **Mengapa Cocok?**: Pendekatan ini memungkinkan kita untuk mengembangkan aplikasi sebagai satu *codebase* tunggal (monolit), yang secara signifikan menyederhanakan proses development, testing, dan deployment awal. Namun, secara internal, kode akan diorganisir ke dalam **modul-modul yang terpisah berdasarkan domain bisnis** (misalnya: `Users`, `Transactions`, `Subscriptions`, `Budgeting`).
  * **Keuntungan**:
      * **Pengembangan Cepat**: Tidak ada kompleksitas komunikasi antar-layanan (network overhead) seperti pada microservices murni.
      * **Konsistensi Data**: Transaksi database bersifat *atomic* karena semua modul berbagi database yang sama.
      * **Terkelola**: Dengan memisahkan kode ke dalam modul, kita mencegah aplikasi menjadi *"big ball of mud"* dan menjaga kode tetap terorganisir seiring pertumbuhan proyek.

### Layanan Eksternal (Gerbang WhatsApp)

Layanan **Node.js** akan dibangun sebagai sebuah *microservice* yang terpisah dan memiliki satu tanggung jawab tunggal (*single responsibility*).

  * **Fokus Tunggal**: Tugasnya hanya satu, yaitu menjadi jembatan antara pengguna di WhatsApp dan backend Laravel. Layanan ini akan menerima pesan, mem-parsingnya, meneruskannya ke API Laravel, dan mengirimkan balasan kembali.
  * **Teknologi Tepat Guna**: **Node.js** sangat efisien untuk menangani operasi I/O-bound dan koneksi *real-time* seperti yang dibutuhkan oleh Baileys untuk WhatsApp, membuatnya pilihan yang lebih baik daripada PHP untuk tugas spesifik ini.
  * **Skalabilitas & Ketahanan**: Layanan ini dapat di-deploy, di-update, dan di-scale secara independen dari aplikasi web utama. Jika layanan WhatsApp mengalami masalah, aplikasi web inti tetap dapat berjalan tanpa gangguan.

-----

## 2\. Peran Detail Setiap Komponen

### Laravel (Backend Core & Otak Sistem) 🧠

Laravel akan menjadi pusat dari seluruh logika bisnis, manajemen data, dan otentikasi.

  * **Routing**:

      * `routes/web.php`: Akan menangani semua rute yang diakses melalui browser. Rute-rute ini akan dilindungi oleh *middleware* `web` (session, CSRF protection, etc.) dan `auth`. Setiap rute akan memanggil sebuah metode Controller yang mengembalikan respons Inertia.
      * `routes/api.php`: Didedikasikan khusus untuk *endpoint* yang akan diakses oleh layanan Node.js. Rute-rute ini akan bersifat *stateless* dan diamankan menggunakan Laravel Sanctum (API Tokens).

  * **Controllers**:

      * Berperan sebagai orkestrator. Mereka menerima HTTP Request, melakukan validasi data menggunakan Form Requests, memanggil logika bisnis (yang bisa ditempatkan di dalam *Action classes* atau *Service classes*), dan menyiapkan data.
      * Untuk rute web, Controller akan mengembalikan `Inertia::render('PageName', $props)` untuk merender komponen Vue di frontend.
      * Untuk rute API, Controller akan mengembalikan respons JSON standar.

  * **Models (Eloquent)**:

      * Merupakan lapisan abstraksi database kita. Setiap model akan merepresentasikan sebuah tabel (misal: `User`, `Transaction`, `Account`) dan berisi definisi relasi, *accessors/mutators*, dan *query scopes* untuk interaksi data yang bersih dan efisien.

  * **Database Migrations**:

      * Kita akan menggunakan migrasi Laravel untuk mendefinisikan dan mengelola skema database secara terprogram. Ini memastikan konsistensi struktur database di semua lingkungan pengembangan dan produksi.

### Inertia.js (The Glue untuk Web) 🔗

Inertia.js adalah jembatan elegan yang menghubungkan backend monolitik Laravel kita dengan frontend modern Vue.js, memberikan pengalaman *Single-Page Application* (SPA) tanpa perlu membangun API terpisah untuk frontend.

  * **`Inertia::render()`**: Saat pengguna mengunjungi sebuah URL, Controller Laravel akan mengambil data yang diperlukan dan meneruskannya sebagai *props* ke komponen halaman Vue melalui `Inertia::render('PageName', ['data' => $data])`. Inertia akan menangani sisanya, memastikan komponen yang benar dirender di browser tanpa *full page reload*.
  * **Form Helper**: Kita akan memanfaatkan *form helper* bawaan Inertia (`useForm`) di frontend. Ini menyederhanakan pengiriman form, menangani *state* (seperti `processing`), dan secara otomatis menampilkan *validation errors* yang dikirim dari Laravel dengan sangat mudah.

### Quasar (Frontend UI Framework) 🎨

Quasar akan bertindak sebagai *plugin* Vue 3 dan menjadi fondasi utama untuk membangun antarmuka pengguna (UI) aplikasi web kita.

  * **UI Components**: Menyediakan koleksi komponen siap pakai yang sangat lengkap dan sesuai dengan Material Design (seperti `QLayout`, `QDrawer`, `QTable`, `QCard`, `QInput`, `QBtn`). Ini mempercepat pengembangan UI secara drastis.
  * **Layouting**: `QLayout` akan digunakan untuk membangun struktur utama aplikasi (header, sidebar, content area) yang konsisten dan responsif di berbagai perangkat.

### Layanan Node.js (Gerbang WhatsApp) 💬

Layanan ini adalah *endpoint* khusus untuk interaksi via WhatsApp.

  * **Tugas Utama**: Menggunakan library **Baileys**, layanan ini akan terus-menerus mendengarkan pesan masuk. Ketika pesan diterima (misalnya: "pengeluaran 50000 untuk kopi"), layanan ini akan mem-parsing teks tersebut untuk mengekstrak data penting (jenis transaksi, jumlah, deskripsi).
  * **Komunikasi**: Setelah data diekstrak, layanan akan membuat panggilan API yang aman (menggunakan token) ke backend Laravel. Contoh: `POST https://amf-fintech.com/api/transactions` dengan *payload* `{ "type": "expense", "amount": 50000, "description": "kopi", "user_whatsapp_id": "62812xxxx" }`. Setelah menerima konfirmasi dari Laravel, layanan akan memformat pesan balasan ("✅ Transaksi berhasil dicatat\!") dan mengirimkannya kembali ke pengguna melalui WhatsApp.

-----

## 3\. Rekomendasi Struktur Folder Frontend

Untuk menjaga kode frontend tetap terorganisir di dalam direktori `resources/js/`, saya merekomendasikan struktur berikut:

```
resources/
└── js/
    ├── Pages/                // Komponen Halaman utama (dirender oleh Inertia)
    │   ├── Dashboard.vue
    │   ├── Profile/
    │   │   └── Edit.vue
    │   ├── Transactions/
    │   │   ├── Index.vue
    │   │   └── Create.vue
    │   └── Auth/
    │       ├── Login.vue
    │       └── Register.vue
    │
    ├── Components/           // Komponen UI yang dapat digunakan kembali
    │   ├── UI/               // Komponen UI dasar/generik
    │   │   ├── AppLogo.vue
    │   │   └── PrimaryButton.vue
    │   └── Transactions/     // Komponen spesifik untuk modul transaksi
    │       └── TransactionTable.vue
    │
    ├── Layouts/              // Komponen layout utama aplikasi
    │   ├── AuthenticatedLayout.vue
    │   └── GuestLayout.vue
    │
    ├── Composables/          // Logika reaktif yang dapat digunakan kembali
    │   ├── useNotifications.js
    │   └── useCurrencyFormatter.js
    │
    ├── app.js                // Entry point utama aplikasi Vue
    └── bootstrap.js          // Inisialisasi library (axios, dll.)
```

-----

## 4\. Diagram Arsitektur Alur Data

Berikut adalah diagram Mermaid JS yang menggambarkan dua alur utama dalam sistem.

```mermaid
graph TD
    subgraph Alur Web (Browser)
        A1(Pengguna) --> B1{Browser};
        B1 -->|1. GET /dashboard| C1(Laravel Route: web.php);
        C1 --> D1(DashboardController@index);
        D1 -->|2. Ambil Data dari DB| E1[(Database)];
        D1 -->|3. Inertia::render('Dashboard', props)| F1{Inertia.js};
        F1 -->|4. Kirim HTML Shell + Props JSON| B1;
        B1 -->|5. Render Halaman Vue + Quasar| G1(Tampilan Dashboard);
    end

    subgraph Alur WhatsApp
        A2(Pengguna) -->|1. Kirim Pesan WA| B2{WhatsApp Server};
        B2 --> C2(Layanan Node.js + Baileys);
        C2 -->|2. Proses & Ekstrak Data Pesan| C2;
        C2 -->|3. POST /api/transactions (dengan token)| D2(Laravel Route: api.php);
        D2 --> E2(TransactionApiController@store);
        E2 -->|4. Validasi & Simpan ke DB| F2[(Database)];
        E2 -->|5. Return JSON {success: true}| C2;
        C2 -->|6. Buat Pesan Balasan| C2;
        C2 -->|7. Kirim Balasan ke WA| B2;
        B2 --> A2;
    end
```

-----

## 5\. Pertimbangan Awal (Initial Considerations)

### Keamanan 🔐

  * **Web**: Semua rute dalam `routes/web.php` yang memerlukan login akan dilindungi oleh *middleware* `auth` dan `verified` dari Laravel.
  * **API**: *Endpoint* di `routes/api.php` yang diakses oleh layanan Node.js akan diamankan menggunakan **Laravel Sanctum**. Layanan Node.js akan memiliki *API token* yang valid untuk melakukan otentikasi pada setiap permintaannya.

### Performa ⚡

  * **Backend**: Untuk mencegah *N+1 query problem* yang umum terjadi, kita akan secara disiplin menggunakan ***eager loading*** (metode `with()` dan `load()`) pada Eloquent saat mengambil data yang memiliki relasi.
  * **Layanan Eksternal**: Logika pemrosesan pesan di layanan Node.js harus sepenuhnya ***asynchronous*** untuk memastikan layanan tetap responsif dan dapat menangani banyak pesan masuk secara bersamaan tanpa *blocking*.

* **3.2. Desain Database**
    ```mermaid
erDiagram
    users {
        int id PK "Primary Key"
        string name
        string email "Unique"
        string password
        string subscription_status "e.g., 'active', 'inactive', 'trial'"
        datetime subscription_ends_at "Nullable"
    }

    subscriptions {
        int id PK "Primary Key"
        int user_id FK "Foreign Key to users.id"
        string package_type "e.g., 'monthly', 'yearly'"
        date start_date
        date end_date
        string payment_status "e.g., 'paid', 'pending', 'failed'"
    }

    transactions {
        int id PK "Primary Key"
        int user_id FK "Foreign Key to users.id"
        string type "Enum: 'income', 'expense'"
        decimal amount
        string description
        date transaction_date
    }

    budgets {
        int id PK "Primary Key"
        int user_id FK "Foreign Key to users.id"
        string name "e.g., 'Anggaran Makanan'"
        decimal total_amount
        date start_date
        date end_date
    }

    users ||--o{ subscriptions : "has"
    users ||--o{ transactions : "records"
    users ||--o{ budgets : "creates"


---

### **4. Desain & Implementasi Detail (Backend)**
*Tujuan: Dokumentasi teknis level kode untuk backend.*

* **4.1. Aplikasi Utama (LIQ Stack)**
    * **4.1.1. Skema Database (Migrations)**
        * *(Kumpulan output dari `Prompt_Generate_Migration_Laravel.md`)*

    **Tabel Migrations users**
    ```php
    <?php

    use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Support\Facades\Schema;

    return new class extends Migration
    {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            // Primary Key
            $table->id();

            // Kolom dari ERD
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->enum('subscription_status', ['active', 'inactive', 'trial'])->default('inactive');
            $table->timestamp('subscription_ends_at')->nullable();

            // Kolom standar Laravel untuk verifikasi email dan "remember me"
            $table->timestamp('email_verified_at')->nullable();
            $table->rememberToken();
            
            // Kolom created_at dan updated_at
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
    };
    ```

    **Tabel Migrations subscriptions**

    ```php
    <?php

    use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Support\Facades\Schema;

    return new class extends Migration
    {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('subscriptions', function (Blueprint $table) {
            // Primary Key
            $table->id();

            // Foreign Key ke tabel 'users'
            // Jika user dihapus, semua data subscription yang terkait juga akan terhapus (onDelete('cascade'))
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');

            // Kolom dari ERD
            $table->enum('package_type', ['monthly', 'yearly']);
            $table->date('start_date');
            $table->date('end_date');
            $table->enum('payment_status', ['paid', 'pending', 'failed'])->default('pending');

            // Kolom created_at dan updated_at
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('subscriptions');
    }
    };
    ```

    **Tabel Migrations transactions**


    ```php
    <?php

    use Illuminate\Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Support\Facades\Schema;

    return new class extends Migration
    {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            // Primary Key
            $table->id();

            // Foreign Key ke tabel 'users'
            // Jika user dihapus, semua data transaksi yang terkait juga akan terhapus
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');

            // Kolom dari spesifikasi
            $table->enum('type', ['income', 'expense']);
            $table->decimal('amount', 15, 2)->unsigned();
            $table->string('description', 255);
            $table->date('transaction_date');

            // Kolom created_at dan updated_at
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
    };
    ```

    **Tabel Migrations budgets**


    ```php
    <?php

    use Illuminate.Database\Migrations\Migration;
    use Illuminate\Database\Schema\Blueprint;
    use Illuminate\Support\Facades\Schema;

    return new class extends Migration
    {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('budgets', function (Blueprint $table) {
            // Primary Key
            $table->id();

            // Foreign Key ke tabel 'users'
            // Jika user dihapus, semua data budget yang terkait juga akan terhapus
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');

            // Kolom dari ERD
            $table->string('name');
            $table->decimal('total_amount', 15, 2)->unsigned();
            $table->date('start_date');
            $table->date('end_date');

            // Kolom created_at dan updated_at
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::dropIfExists('budgets');
    }
    };
    ```


    * **4.1.2. Model (Eloquent)**
        * *(Kumpulan output dari `Prompt_Create_Model_Eloquent.md`)*


    ```php
    users
    <?php
    namespace App\Models;

    // use Illuminate\Contracts\Auth\MustVerifyEmail;
    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Relations\HasMany;
    use Illuminate\Foundation\Auth\User as Authenticatable;
    use Illuminate\Notifications\Notifiable;

    class User extends Authenticatable
    {
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'subscription_status',
        'subscription_ends_at',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'subscription_ends_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    /**
     * Get the subscriptions for the user.
     */
    public function subscriptions(): HasMany
    {
        return $this->hasMany(Subscription::class);
    }

    /**
     * Get the transactions for the user.
     */
    public function transactions(): HasMany
    {
        return $this->hasMany(Transaction::class);
    }

    /**
     * Get the budgets for the user.
     */
    public function budgets(): HasMany
    {
        return $this->hasMany(Budget::class);
    }
    }

---
```php
    <?php
    model Subscription
    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Relations\BelongsTo;

    class Subscription extends Model
    {
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'package_type',
        'start_date',
        'end_date',
        'payment_status',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'start_date' => 'date',
            'end_date' => 'date',
        ];
    }

    /**
     * Get the user that owns the subscription.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    }
```
---
 ```php

    <?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Relations\BelongsTo;

    class Transaction extends Model
    {
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'type',
        'amount',
        'description',
        'transaction_date',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'amount' => 'decimal:2',
            'transaction_date' => 'date',
        ];
    }

    /**
     * Get the user that owns the transaction.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    }
```
---    
    
```php

<?php

    namespace App\Models;

    use Illuminate\Database\Eloquent\Factories\HasFactory;
    use Illuminate\Database\Eloquent\Model;
    use Illuminate\Database\Eloquent\Relations\BelongsTo;

    class Budget extends Model
    {
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'name',
        'total_amount',
        'start_date',
        'end_date',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'total_amount' => 'decimal:2',
            'start_date' => 'date',
            'end_date' => 'date',
        ];
    }

    /**
     * Get the user that owns the budget.
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
```

---



* **4.1.3. Logika Validasi (Form Requests)**
        * *(Kumpulan output dari `Prompt_Create_Request_Validation.md`)*
    * **4.1.4. Controller & Routing**
        * *(Kumpulan output dari `Prompt_Create_Controller_Resource.md` dan `Prompt_Implementasi_Route.md`)*
    * **4.1.5. Aturan Otorisasi (Policies)**
        * *(Kumpulan output dari `Prompt_LIQ_Laravel_Policies.md`)*

* **4.2. Layanan WhatsApp (Node.js)**
    * *(Sumber: Kumpulan output dari prompt `Prompt_Nodejs_*`)*
    * Struktur Proyek, Logika Koneksi, Penanganan Pesan, dan Layanan API.

* **4.3. Dokumentasi API**
    * *(Sumber: Output dari `Prompt_API_Documentation_Generator.md`)*
    * Penjelasan "kontrak" API antara layanan Node.js dan Laravel.

---

### **5. Desain Antarmuka & Pengalaman Pengguna (UI/UX)**
*Tujuan: Panduan untuk tim frontend dalam membangun antarmuka.*

* **5.1. Panduan Desain Konseptual**
    * *(Sumber: Output dari `Prompt_Desain_UI_UX_Konseptual.md`)*
    * Filosofi Desain, Palet Warna, Tipografi, dan Struktur Layout Utama.

* **5.2. Komponen & Halaman Kunci**
    * *(Kumpulan output dari prompt `Prompt_Implementasi_Layout_Utama.md`, `Prompt_Create_Inertia_Page_with_QTable.md`, dll.)*
    * Kode atau deskripsi untuk komponen-komponen utama.

---

### **6. Strategi Pengujian**
*Tujuan: Mendokumentasikan bagaimana kualitas aplikasi akan dijamin.*

* **6.1. Skenario Tes Fungsional**
    * *(Sumber: Kumpulan output dari `Prompt_LIQ_Pest_Unit_Testing.md`)*
    * Daftar kasus uji untuk fitur-fitur kritis.

---

### **7. Panduan Deployment**
*Tujuan: Prosedur standar untuk meluncurkan aplikasi ke server produksi.*

* **7.1. Prosedur Deployment Langkah-demi-Langkah**
    * *(Sumber: Output dari `Prompt_DevOps_Deployment_Guide.md`)*

***