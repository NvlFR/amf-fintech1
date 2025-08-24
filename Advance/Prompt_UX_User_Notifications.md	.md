Tentu, mari kita lanjutkan dengan menambahkan sentuhan yang membuat aplikasi terasa lebih hidup dan komunikatif. Sistem notifikasi adalah fitur kunci untuk meningkatkan interaksi dengan pengguna.

Ini adalah isi lengkap untuk file **`Prompt_UX_User_Notifications.md`**. Anda bisa langsung menyimpannya.

---

### **`Prompt_UX_User_Notifications.md` (Siap Digunakan)**

---

### Deskripsi:
Gunakan *prompt* ini untuk memerintahkan AI mengimplementasikan sistem notifikasi pengguna secara *full-stack*. *Prompt* ini akan memandu AI untuk membuat semua bagian yang diperlukan: dari sisi **backend** di Laravel (menggunakan sistem Notifikasi bawaan dan *channel database*) hingga sisi **frontend** di Vue/Quasar (menampilkan ikon lonceng dengan daftar notifikasi).

### ✅ Prasyarat:
1.  Persona `Persona_Lead_Developer_LIQ.md` sudah aktif.
2.  Sistem otentikasi pengguna sudah berfungsi.
3.  Komponen `MainLayout.vue` sudah ada.

# Konteks:
Untuk meningkatkan pengalaman pengguna di proyek **amf-fintech**, kita akan membangun sistem notifikasi. Tujuannya adalah untuk memberikan informasi penting kepada pengguna secara proaktif di dalam aplikasi.

Sebagai kasus penggunaan pertama, kita akan mengimplementasikan notifikasi untuk **memberi tahu pengguna 7 hari sebelum langganan mereka berakhir**, mendorong mereka untuk melakukan perpanjangan.

### Tugas Anda:
Berperan sebagai seorang **Full-Stack Developer** yang terampil dalam mengintegrasikan backend Laravel dengan frontend Vue/Inertia.

Tugas Anda adalah menulis semua kode yang diperlukan untuk mengimplementasikan sistem notifikasi ini dari awal hingga akhir.

##### Mohon sediakan kode untuk dua bagian utama berikut:

#### Bagian 1: Backend (Laravel)

1.  **Migration Notifikasi:**
    * Sediakan perintah `php artisan` yang diperlukan untuk membuat tabel `notifications` di database.

2.  **Notification Class:**
    * Buat sebuah *Notification Class* baru dengan nama `SubscriptionEndingSoon`.
    * Konfigurasikan *class* ini agar menggunakan *channel* `database`.
    * Di dalam metode `toArray()`, definisikan data yang akan disimpan, misalnya: `{ message: 'Langganan Anda akan berakhir dalam 7 hari.', url: '/billing' }`.

3.  **Controller & Route:**
    * Buat sebuah *Controller* baru bernama `NotificationController`.
    * Di dalamnya, buat metode `index()` yang mengambil semua notifikasi yang belum dibaca (`unreadNotifications`) untuk pengguna yang sedang login.
    * Buat juga metode `markAsRead()` yang menandai semua notifikasi sebagai sudah dibaca.
    * Daftarkan dua *route* API yang aman (`middleware('auth')`) yang menunjuk ke metode-metode tersebut (misalnya, `GET /api/notifications` dan `POST /api/notifications/mark-as-read`).

#### Bagian 2: Frontend (Vue/Quasar)

1.  **Modifikasi `MainLayout.vue`:**
    * Ambil kode dari `MainLayout.vue` yang sudah ada, lalu modifikasi bagian `<script setup>` dan `<template>`-nya.
    * **Di dalam `<script setup>`:**
        * Gunakan `onMounted` untuk mengambil data notifikasi dari *endpoint* `/api/notifications` menggunakan `axios`. Simpan hasilnya di dalam sebuah `ref`.
        * Buat fungsi untuk menandai notifikasi sebagai sudah dibaca dengan memanggil *endpoint* `/api/notifications/mark-as-read`.
    * **Di dalam `<template>` (di bagian `QHeader`):**
        * Tambahkan sebuah `<QBtn>` dengan ikon lonceng (`notifications`).
        * Tambahkan `<QBadge>` di atas tombol tersebut untuk menampilkan jumlah notifikasi yang belum dibaca.
        * Bungkus tombol dengan `<QMenu>` yang akan muncul saat diklik.
        * Di dalam menu, gunakan `v-for` untuk menampilkan daftar notifikasi dalam sebuah `<QList>`. Setiap item harus berupa `<QItem>` yang bisa diklik dan menggunakan `<Link>` dari Inertia untuk mengarah ke URL yang sesuai dari data notifikasi.

### Catatan
Sajikan jawaban Anda secara berurutan. Berikan kode untuk setiap file (Notification Class, Controller, Routes, dan `MainLayout.vue`) dalam blok kode terpisah yang diberi judul dengan nama filenya. Ini akan mempermudah proses implementasi.