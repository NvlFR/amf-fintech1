Tentu, mari kita buat *prompt* terakhir untuk melengkapi *library* LIQ kita. Kali ini kita akan fokus pada komponen visual untuk dashboard admin, yang penting untuk memonitor kondisi aplikasi.

Ini adalah isi lengkap untuk file **`Prompt_LIQ_Admin_Dashboard_Component.md`**. Anda bisa langsung menyimpannya.

-----

### **`Prompt_LIQ_Admin_Dashboard_Component.md` (Siap Digunakan)**

-----

### Deskripsi:

Gunakan *prompt* ini untuk memerintahkan AI membuat sebuah komponen Vue/Quasar yang dapat digunakan ulang, khusus untuk keperluan **Dashboard Admin**. Berbeda dengan komponen CRUD biasa, *prompt* ini berfokus pada visualisasi data agregat, seperti kartu statistik (`Statistic Card`), diagram (`Chart`), atau daftar aktivitas terbaru.

### ✅ Prasyarat:

1.  Persona `Persona_Lead_Developer_LIQ.md` sudah aktif.
2.  Anda sudah memiliki *endpoint* di backend yang menyediakan data yang sudah diagregasi (misalnya, *endpoint* yang mengembalikan jumlah total pengguna).

# Konteks:

Kita akan membangun komponen untuk halaman Dashboard Admin di proyek **amf-fintech**. Tujuannya adalah untuk memberikan admin gambaran cepat (*at-a-glance view*) tentang metrik-metrik penting aplikasi.

Komponen pertama yang akan kita buat adalah **`Statistic Card`** yang bisa dipakai ulang untuk menampilkan berbagai data seperti "Total Pengguna", "Pelanggan Aktif", "Pendapatan Bulan Ini", dll.

### Tugas Anda:

Berperan sebagai seorang **Frontend Developer** yang ahli dalam visualisasi data dan desain dasbor menggunakan Quasar Framework.

Tugas Anda adalah menulis kode yang lengkap untuk sebuah komponen Vue dengan nama **`[NAMA_FILE_KOMPONEN]`**.

##### Komponen tersebut harus memiliki spesifikasi sebagai berikut:

*(Gunakan format di bawah ini untuk mendefinisikan komponen yang Anda inginkan)*

```
--- CONTOH PENGISIAN UNTUK MEMBUAT 'StatisticCard.vue' ---
{
  "nama_komponen": "StatisticCard",
  "tipe_komponen": "Sebuah 'Statistic Card' menggunakan Quasar QCard yang menampilkan sebuah metrik tunggal.",
  "props": [
    { "nama": "title", "tipe": "String", "deskripsi": "Judul kartu, misal: 'Pengguna Terdaftar'." },
    { "nama": "value", "tipe": "String | Number", "deskripsi": "Nilai utama yang akan ditampilkan dengan teks besar." },
    { "nama": "icon", "tipe": "String", "deskripsi": "Nama ikon dari Quasar Material Icons." },
    { "nama": "color", "tipe": "String", "deskripsi": "Warna aksen untuk ikon dan latar belakang (misal: 'primary', 'green-6')." }
  ],
  "struktur_tampilan": [
    "Komponen utama adalah <QCard>.",
    "Di dalamnya, gunakan <QCardSection horizontal> untuk membagi kartu menjadi dua bagian.",
    "Bagian kiri berisi <QIcon> yang menampilkan prop 'icon' dengan ukuran besar dan warna dari prop 'color'.",
    "Bagian kanan berisi nilai metrik. Tampilkan prop 'value' dengan font yang sangat besar dan tebal, dan di bawahnya tampilkan prop 'title' dengan font yang lebih kecil."
  ]
}

```

### Catatan

Berikan kode yang lengkap untuk *Single File Component* (`.vue`), termasuk bagian `<script setup>` dan `<template>`.

  * Gunakan `defineProps` untuk mendefinisikan semua *props* yang telah dispesifikasikan.
  * Implementasikan struktur tampilan di dalam `<template>` menggunakan komponen-komponen Quasar sesuai deskripsi.

Sajikan jawaban Anda dalam satu blok kode Vue yang rapi, siap untuk disimpan ke dalam file `resources/js/Components/Admin/[NAMA_FILE_KOMPONEN].vue`.