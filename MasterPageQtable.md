Tentu, mari kita bangun antarmuka (frontend) untuk menampilkan data kita. Ini adalah langkah di mana pengguna akan melihat hasil kerja dari backend yang telah kita siapkan.

Saya akan mengambil *library prompt* `Prompt_Create_Inertia_Page_with_QTable.md` dan mengubahnya menjadi **Master Prompt** yang dapat Anda gunakan berulang kali untuk membuat halaman indeks (halaman daftar data) di proyek **amf-fintech**.

Saya telah menyertakan contoh pengisian yang sangat detail untuk menampilkan daftar "Transaksi", yang merupakan salah satu fitur inti dari aplikasi kita.

-----

### **Master Prompt (Siap Digunakan untuk Membuat Halaman Indeks Inertia dengan QTable)**

**Petunjuk:** Pertama, aktifkan persona `Persona_Lead_Developer_LIQ.md`. Setelah AI mengonfirmasi perannya, gunakan prompt di bawah ini. Anda hanya perlu mengganti placeholder `[...]` sesuai dengan *resource* yang halamannya ingin Anda buat. Gunakan bagian "CONTOH PENGISIAN" sebagai panduan.

-----

# Konteks:

Kita akan membuat halaman frontend untuk proyek **amf-fintech** menggunakan Vue 3, Quasar, dan Inertia.js.

Halaman ini akan berfungsi sebagai halaman utama (indeks) untuk menampilkan daftar data **`[NAMA_RESOURCE_JAMAK]`** yang dikirim dari controller **`[NAMA_CONTROLLER_CLASS]`**`@index`.

Data tersebut akan kita tampilkan dalam sebuah tabel yang interaktif dan responsif menggunakan komponen `QTable` dari Quasar.

-----

#### **CONTOH PENGISIAN UNTUK FITUR "TRANSAKSI"**

  * `[NAMA_RESOURCE_JAMAK]`: "Transaksi"
  * `[NAMA_CONTROLLER_CLASS]`: `TransactionController`
  * `[NAMA_FILE_VUE]`: `Transactions/Index.vue`
  * `[NAMA_PROP_DATA]`: `transactions`

-----

### Tugas Anda:

Berperan sebagai seorang Lead Developer LIQ yang sangat ahli dalam membangun antarmuka dengan Vue 3 Composition API (`<script setup>`) dan Quasar Framework.

Tugas Anda adalah menulis kode yang lengkap untuk sebuah Inertia Page Component dengan nama file **`[NAMA_FILE_VUE]`**.

##### Komponen tersebut harus memiliki konfigurasi sebagai berikut:

1.  **Bagian Script (`<script setup>`):**

      * Gunakan `defineProps` untuk mendefinisikan prop yang diterima dari controller Laravel. Prop utama harus bernama **`[NAMA_PROP_DATA]`**. Asumsikan prop ini adalah objek paginasi Laravel.
      * Buat sebuah `const columns` yang berisi array konfigurasi kolom untuk `QTable`.
        ```
        --- CONTOH PENGISIAN UNTUK KOLOM TABEL 'TRANSAKSI' ---
        [
        - Kolom dengan label 'Tanggal', mengambil dari field 'transaction_date'.
        - Kolom dengan label 'Deskripsi', mengambil dari field 'description'.
        - Kolom dengan label 'Tipe', mengambil dari field 'type'.
        - Kolom dengan label 'Jumlah', mengambil dari field 'amount', dan format tampilannya sebagai mata uang Rupiah.
        ]
        ```
      * Pastikan Anda menambahkan satu kolom di akhir dengan `name: 'actions'` dan `label: 'Aksi'`.

2.  **Bagian Template (`<template>`):**

      * Gunakan komponen Quasar `<QPage>` sebagai pembungkus utama.
      * Tambahkan judul halaman (misalnya: `<h1>Daftar [NAMA_RESOURCE_JAMAK]</h1>`) dan sebuah tombol `<QBtn>` "Tambah Baru" yang mengarahkan ke halaman create (gunakan komponen `<Link>` dari Inertia).
      * Implementasikan komponen `<QTable>` dengan props:
          * `:rows` di-binding ke `[NAMA_PROP_DATA].data`.
          * `:columns` di-binding ke `const columns`.
          * `row-key="id"`.
      * Gunakan slot `#body-cell-actions` untuk mendefinisikan kolom 'Aksi', yang berisi tombol `<QBtn>` "Edit" dan "Hapus" yang dibungkus dengan komponen `<Link>` Inertia.

### Catatan

Berikan kode yang lengkap untuk Single File Component (`.vue`), termasuk bagian `<script setup>` dan `<template>`.

Sajikan jawaban Anda dalam satu blok kode Vue yang rapi, siap untuk disimpan ke dalam file `resources/js/Pages/[NAMA_FILE_VUE]`.