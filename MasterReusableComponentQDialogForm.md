Tentu, mari kita lanjutkan dengan membuat salah satu komponen paling berguna dalam aplikasi CRUD: *form* dalam bentuk *dialog* yang bisa dipakai ulang. Ini akan membuat kode *frontend* kita lebih bersih dan efisien.

Saya akan mengambil *library prompt* `Prompt_Create_Reusable_Component_QDialog_Form.md` dan mengubahnya menjadi **Master Prompt** yang dapat Anda gunakan untuk membuat komponen *dialog form* untuk berbagai fitur di proyek **amf-fintech**.

Saya telah menyertakan contoh pengisian yang sangat detail untuk membuat `TransactionFormDialog.vue`, yang akan menangani proses tambah dan edit data transaksi.

-----

### **Master Prompt (Siap Digunakan untuk Membuat Dialog Form Komponen)**

**Petunjuk:** Pertama, aktifkan persona `Persona_Lead_Developer_LIQ.md`. Setelah AI mengonfirmasi perannya, gunakan prompt di bawah ini. Anda hanya perlu mengganti placeholder `[...]` sesuai dengan *resource* yang komponennya ingin Anda buat. Gunakan bagian "CONTOH PENGISIAN" sebagai panduan.

-----

# Konteks:

Kita akan membuat Komponen Vue yang Dapat Digunakan Ulang (Reusable Component) untuk proyek **amf-fintech**.

Komponen ini akan menjadi sebuah Dialog Form yang menggunakan Quasar `QDialog` dan `QForm`. Tujuannya adalah agar kita bisa menggunakan form yang sama untuk aksi 'Tambah Data Baru' dan 'Edit Data', yang biasanya dipicu dari halaman indeks.

Komponen ini harus mandiri dan mengelola state-nya sendiri menggunakan `useForm` dari Inertia.js.

-----

#### **CONTOH PENGISIAN UNTUK FITUR "TRANSAKSI"**

  * `[NAMA_FILE_VUE]`: `TransactionFormDialog.vue`
  * `[NAMA_PROP_MODEL]`: `transaction`
  * `[ROUTE_NAME_UPDATE]`: `transactions.update`
  * `[ROUTE_NAME_STORE]`: `transactions.store`

-----

### Tugas Anda:

Berperan sebagai seorang Lead Developer LIQ yang ahli dalam *component-based design* dan manajemen state form dengan Inertia di Vue 3.

Tugas Anda adalah menulis kode yang lengkap untuk sebuah Reusable Form Dialog Component dengan nama file **`[NAMA_FILE_VUE]`**.

##### Komponen tersebut harus memiliki fungsionalitas sebagai berikut:

1.  **Props:**

      * Gunakan `defineModel<boolean>()` agar visibilitas dialog bisa dikontrol dari komponen induk menggunakan `v-model`.
      * Buat sebuah prop bernama **`[NAMA_PROP_MODEL]`** (tipe: Object, default: null). Prop ini akan diisi dengan data saat mode edit.

2.  **Bagian Script (`<script setup>`):**

      * Inisialisasi `useForm({...})`. Definisikan semua field yang ada di dalam form.
        ```
        --- CONTOH PENGISIAN FORM UNTUK 'TRANSAKSI' ---
        // Inisialisasi useForm dengan field:
        // type (default: 'expense'), amount (default: 0), 
        // description (default: ''), transaction_date (default: null)
        ```
      * Buat `computed property` bernama `isEditMode` yang akan bernilai `true` jika prop **`[NAMA_PROP_MODEL]`** tidak `null`.
      * Gunakan `watch` untuk mengamati prop **`[NAMA_PROP_MODEL]`**. Jika prop berubah, perbarui nilai-nilai di dalam `form` Inertia. Jika `null`, reset form.
      * Buat sebuah fungsi `submit()` yang melakukan `form.put()` ke `route('[ROUTE_NAME_UPDATE]')` saat `isEditMode` true, dan `form.post()` ke `route('[ROUTE_NAME_STORE]')` saat false. Saat `onSuccess`, tutup dialog.

3.  **Bagian Template (`<template>`):**

      * Gunakan komponen `<QDialog>` yang `v-model`-nya sudah terikat.
      * Gunakan struktur `<QCard>`, `<QCardSection>`, dan `<QForm @submit.prevent="submit">`.
      * Buat judul `card` yang dinamis: `{{ isEditMode ? 'Edit Data' : 'Tambah Data Baru' }}`.
      * Buat *input* untuk setiap field form menggunakan komponen Quasar.
        ```
        --- CONTOH PENGISIAN INPUT UNTUK FORM 'TRANSAKSI' ---
        // - QSelect untuk 'type' dengan opsi 'income' dan 'expense'.
        // - QInput untuk 'amount' dengan tipe 'number'.
        // - QInput untuk 'description'.
        // - QInput dengan QDate untuk 'transaction_date'.
        // Tampilkan error validasi dari Inertia untuk masing-masing input.
        ```
      * Di dalam `<QCardActions>`, buat tombol "Simpan" dengan state *loading* dari `form.processing` dan tombol "Batal" untuk menutup dialog.

### Catatan

Berikan kode yang lengkap untuk Single File Component (.vue). Sajikan dalam satu blok kode Vue yang rapi, siap untuk disimpan ke dalam file `resources/js/Components/[NAMA_FILE_VUE]`.