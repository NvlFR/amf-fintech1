Tentu, mari kita bangun "cangkang" atau kerangka utama dari aplikasi kita. *Layout* ini akan memastikan semua halaman memiliki tampilan dan navigasi yang konsisten.

Saya akan mengambil *library prompt* `Prompt_Implementasi_Layout_Utama.md` dan mengubahnya menjadi **Master Prompt** yang spesifik untuk proyek **amf-fintech**. Prompt ini akan menjadi fondasi dari seluruh antarmuka pengguna Anda.

Saya telah menyertakan contoh daftar menu navigasi yang relevan dengan fitur-fitur yang telah kita diskusikan untuk **amf-fintech**.

-----

### **Master Prompt (Siap Digunakan untuk Membuat Layout Utama)**

**Petunjuk:** Pertama, aktifkan persona `Persona_Lead_Developer_LIQ.md`. Setelah AI mengonfirmasi perannya, gunakan prompt di bawah ini untuk membuat komponen layout utama aplikasi Anda.

-----

# Konteks:

Kita akan membuat komponen Layout Utama untuk proyek **amf-fintech**. Ini akan menjadi "kerangka" atau "cangkang" persisten untuk semua halaman Inertia kita.

Layout ini akan berisi elemen-elemen yang konsisten di seluruh aplikasi, seperti header dan sidebar navigasi, menggunakan Quasar Framework dan Inertia.js.

### Tugas Anda:

Berperan sebagai seorang Lead Developer LIQ yang ahli dalam membuat layout yang responsif dan fungsional.

Tugas Anda adalah menulis kode yang lengkap untuk sebuah Layout Component dengan nama file **`MainLayout.vue`**.

##### Layout tersebut harus memiliki struktur dan fungsionalitas sebagai berikut:

1.  **Bagian Script (`<script setup>`):**

      * Impor `ref` dari `vue`, `<Link>` dari `@inertiajs/vue3`.
      * Buat sebuah `const` array bernama `menuLinks` yang berisi objek-objek untuk setiap item menu navigasi.
        ```
        --- CONTOH PENGISIAN UNTUK NAVIGASI 'amf-fintech' ---
        [
          { label: 'Dashboard', icon: 'dashboard', route: 'dashboard' },
          { label: 'Transaksi', icon: 'receipt_long', route: 'transactions.index' },
          { label: 'Anggaran (Budget)', icon: 'account_balance_wallet', route: 'budgets.index' },
          { label: 'Langganan', icon: 'workspace_premium', route: 'subscription.show' },
          { label: 'Pengaturan', icon: 'settings', route: 'profile.edit' }
        ]
        ```

2.  **Bagian Template (`<template>`):**

      * Gunakan komponen `<QLayout view="lHh Lpr lFf">` sebagai komponen akar.
      * Buat sebuah `<QHeader elevated>` dengan `<QToolbar>` di dalamnya.
          * Sertakan sebuah `<QBtn>` untuk men-*toggle* sidebar navigasi.
          * Tambahkan sebuah `<QToolbarTitle>` yang berisi judul aplikasi: **amf-fintech**.
      * Buat sebuah `<QDrawer>` untuk sidebar navigasi.
      * Di dalam drawer, gunakan `v-for` untuk me-*render* `menuLinks` di dalam sebuah `<QList>`.
      * Setiap item menu harus berupa komponen `<Link>` dari Inertia yang membungkus `<QItem clickable>`.
      * Gunakan `route().current(link.route)` untuk menentukan state `:active` pada `<QItem>`.
      * Setiap `<QItem>` harus berisi `<QIcon>` dan `<QItemLabel>`.
      * Di dalam `<QPageContainer>`, tempatkan tag `<slot />` untuk merender konten halaman.

### Catatan

Berikan kode yang lengkap untuk Single File Component (.vue), termasuk `<script setup>` dan `<template>`.

Sajikan jawaban Anda dalam satu blok kode Vue yang rapi, siap untuk disimpan ke dalam file `resources/js/Layouts/MainLayout.vue`.