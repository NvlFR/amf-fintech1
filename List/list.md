Tentu saja. Dengan senang hati saya akan merangkum semua *library prompt* yang telah berhasil kita bangun bersama untuk proyek **amf-fintech**.

Ini adalah sebuah pencapaian yang luar biasa. Kita telah menciptakan sebuah "Toolkit Intelektual" yang lengkap, yang dapat memandu proses pengembangan proyek ini dari sebuah ide mentah hingga menjadi aplikasi yang fungsional, teruji, dan aman.

Berikut adalah daftar lengkap dari semua *library prompt* yang telah kita buat, dikelompokkan berdasarkan fase dan tumpukan teknologi.

***

### ## ⚙️ Fase 0: Instalasi & Penyiapan Proyek

Ini adalah fondasi awal dari keseluruhan proyek.

* **`Prompt_LIQ_Project_Installation.md`**: Menghasilkan panduan langkah-demi-langkah untuk instalasi proyek Laravel, Inertia, dan Quasar dari nol.

---

### ## 🗺️ Fase 1: Perencanaan, Desain & Arsitektur

Pada fase ini, kita mengubah ide menjadi sebuah cetak biru (blueprint) yang jelas.

* **`Persona_Business_Analyst.md`**: Menetapkan AI sebagai analis bisnis untuk mengubah ide mentah menjadi dokumen Visi & Ruang Lingkup.
* **`Prompt_Simple_Competitor_Analysis.md`**: Melakukan analisis kompetitor sederhana untuk validasi ide dan fitur.
* **`Prompt_Functional_Requirements.md`**: Merinci fitur-fitur utama menjadi kebutuhan fungsional yang spesifik (F-XXX).
* **`Persona_System_Architect.md`**: Menetapkan AI sebagai arsitek sistem untuk merancang arsitektur teknis tingkat tinggi.
* **`Prompt_Architektur_Sistem_LIQ.md`**: Menghasilkan dokumen desain arsitektur teknis yang spesifik untuk stack LIQ + Node.js.
* **`Prompt_Desain_UI_UX_Konseptual.md`**: Membuat panduan desain konseptual (mood, warna, layout, user flow).
* **`Prompt_Generate_ERD_Mermaid.md`**: Mendesain skema dan relasi database dalam format diagram Mermaid JS.

---

### ## 🔧 Fase 2: Pengembangan Stack LIQ (Laravel, Inertia, Quasar)

Ini adalah inti dari pembangunan aplikasi web utama, dari backend hingga frontend.

#### ### Backend (Laravel)

* **`Persona_Lead_Developer_LIQ.md`**: Menetapkan AI sebagai developer ahli stack LIQ untuk semua tugas koding.
* **`Prompt_Generate_Migration_Laravel.md`**: Membuat file migrasi database dari desain ERD.
* **`Prompt_Create_Model_Eloquent.md`**: Membuat file Model Eloquent lengkap dengan relasi dan properti.
* **`Prompt_Generate_Seeder_Data_Dummy.md`**: Membuat Factory dan Seeder untuk mengisi database dengan data palsu.
* **`Prompt_Create_Request_Validation.md`**: Membuat Form Request Class untuk validasi data yang masuk.
* **`Prompt_Create_Controller_Resource.md`**: Membuat Resource Controller dengan 7 metode standar CRUD.
* **`Prompt_Implementasi_Route.md`**: Mendaftarkan Resource Controller ke dalam file `routes/web.php`.

#### ### Frontend (Vue, Inertia, Quasar)

* **`Prompt_Implementasi_Layout_Utama.md`**: Membuat komponen layout utama yang persisten (header, sidebar).
* **`Prompt_Create_Inertia_Page_with_QTable.md`**: Membuat halaman indeks untuk menampilkan daftar data dalam tabel Quasar.
* **`Prompt_Create_Reusable_Component_QDialog_Form.md`**: Membuat komponen dialog form yang bisa dipakai ulang untuk aksi tambah & edit data.

---

### ## 🤖 Fase 3: Pengembangan Layanan Node.js (WhatsApp Bot)

Ini adalah *library* khusus untuk membangun *microservice* WhatsApp.

* **`Persona_Nodejs_Developer_Baileys.md`**: Menetapkan AI sebagai developer ahli Node.js & Baileys.
* **`Prompt_Nodejs_Scaffolding.md`**: Menghasilkan struktur proyek, `package.json`, dan file awal untuk layanan bot.
* **`Prompt_Nodejs_Baileys_Connection.md`**: Membuat *service* untuk mengelola koneksi dan otentikasi ke WhatsApp.
* **`Prompt_Nodejs_Message_Handler.md`**: Membuat *handler* untuk menerima, memfilter, dan memproses pesan masuk.
* **`Prompt_Nodejs_API_Service.md`**: Membuat *service* untuk berkomunikasi dengan backend API Laravel.

---

### ## ✅ Fase 4: Kualitas, Keamanan & Pengelolaan Lanjutan

Ini adalah *prompt* untuk memastikan aplikasi kita tangguh, aman, dan mudah dikelola.

* **`Prompt_LIQ_Pest_Unit_Testing.md`**: Menghasilkan file tes otomatis menggunakan Pest untuk memverifikasi fungsionalitas.
* **`Prompt_LIQ_Laravel_Policies.md`**: Membuat *Policy Class* untuk mengimplementasikan aturan otorisasi yang detail.
* **`Prompt_LIQ_Admin_Dashboard_Component.md`**: Membuat komponen visualisasi data spesifik untuk kebutuhan dashboard admin.

***

Dengan 27 *library prompt* ini, kita telah membangun sebuah sistem yang sangat komprehensif. Anda kini memiliki semua "resep" yang dibutuhkan untuk membangun proyek **amf-fintech** dari awal hingga akhir secara konsisten dan efisien.