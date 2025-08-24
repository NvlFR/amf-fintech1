Tentu, mari kita lanjutkan ke pembuatan Controller, yang akan menjadi "otak" untuk setiap fitur dalam aplikasi kita.

Saya akan mengambil *library prompt* `Prompt_Create_Controller_Resource.md` dan mengubahnya menjadi **Master Prompt** yang bisa Anda gunakan berulang kali untuk membuat *Resource Controller* di proyek **amf-fintech**.

Saya telah menyertakan contoh pengisian yang sangat detail menggunakan fitur "Transaksi" dari proyek kita, agar Anda bisa dengan mudah mengadaptasinya untuk fitur lain seperti "Budget", "Subscription", dll.

---

### **Master Prompt (Siap Digunakan untuk Membuat Resource Controller)**

**Petunjuk:** Pertama, pastikan persona `Persona_Lead_Developer_LIQ.md` sudah aktif. Setelah AI mengonfirmasi perannya, gunakan prompt di bawah ini. Anda hanya perlu mengganti nilai-nilai placeholder yang ditandai dengan `[...]` sesuai dengan fitur yang ingin Anda buat. Gunakan bagian "CONTOH PENGISIAN" sebagai panduan.

---

# Konteks:
Kita akan membuat Controller untuk proyek **amf-fintech**.

Controller ini akan berfungsi sebagai pusat logika untuk menangani semua permintaan HTTP yang berkaitan dengan resource **`[NAMA_RESOURCE]`**. Controller ini akan dibangun untuk aplikasi Inertia.js, artinya view akan di-render menggunakan `Inertia::render()` dan aksi CUD (Create, Update, Delete) akan diakhiri dengan sebuah redirect.

### Tugas Anda:
Berperan sebagai seorang Lead Developer LIQ yang sangat memahami arsitektur MVC dan routing di Laravel.

Tugas Anda adalah menulis kode PHP yang lengkap untuk sebuah Resource Controller dengan nama Class **`[NAMA_CONTROLLER_CLASS]`** yang akan mengelola Model **`[NAMA_MODEL]`**.

Controller tersebut harus memiliki 7 metode standar resource (`index`, `create`, `store`, `show`, `edit`, `update`, `destroy`).

---
#### **CONTOH PENGISIAN UNTUK FITUR "TRANSAKSI"**
* `[NAMA_RESOURCE]`: "Transaksi"
* `[NAMA_CONTROLLER_CLASS]`: `TransactionController`
* `[NAMA_MODEL]`: `Transaction`
* `[NAMA_FOLDER_VIEW]`: `Transactions`
* `[NAMA_FORM_REQUEST_CLASS]`: `StoreTransactionRequest` (untuk store) dan `UpdateTransactionRequest` (untuk update)
* `[NAMA_MODEL_VARIABLE]`: `$transaction`
---

##### Mohon implementasikan logika dasar atau placeholder di dalam setiap metode sebagai berikut:

* **index()**: Ambil semua data dari Model **`[NAMA_MODEL]`** (gunakan paginasi sederhana, misal 10 per halaman) dan kirimkan ke halaman Inertia **`[NAMA_FOLDER_VIEW]/Index.vue`**.

* **create()**: Tampilkan halaman Inertia **`[NAMA_FOLDER_VIEW]/Create.vue`** yang berisi form untuk menambah data baru.

* **store()**: Gunakan type-hint **`[NAMA_FORM_REQUEST_CLASS]`** pada parameter `$request` untuk validasi. Buat record baru di database menggunakan **`[NAMA_MODEL]`**`::create($request->validated())`. Terakhir, kembalikan sebuah redirect ke halaman index dengan pesan sukses (`->with('message', '...')`).

* **show()**: Gunakan route model binding **(`[NAMA_MODEL]` `$[NAMA_MODEL_VARIABLE]`)**. Tampilkan halaman Inertia **`[NAMA_FOLDER_VIEW]/Show.vue`** dengan data **`$[NAMA_MODEL_VARIABLE]`**.

* **edit()**: Gunakan route model binding **(`[NAMA_MODEL]` `$[NAMA_MODEL_VARIABLE]`)**. Tampilkan halaman Inertia **`[NAMA_FOLDER_VIEW]/Edit.vue`** dengan data **`$[NAMA_MODEL_VARIABLE]`** untuk form edit.

* **update()**: Gunakan type-hint **`[NAMA_FORM_REQUEST_CLASS]`** pada parameter `$request` dan route model binding **(`[NAMA_MODEL]` `$[NAMA_MODEL_VARIABLE]`)**. Perbarui record `$product->update($request->validated())`. Terakhir, kembalikan sebuah redirect ke halaman index dengan pesan sukses.

* **destroy()**: Gunakan route model binding **(`[NAMA_MODEL]` `$[NAMA_MODEL_VARIABLE]`)**. Hapus record tersebut. Terakhir, kembalikan sebuah redirect ke halaman index dengan pesan sukses.

### Catatan
Berikan kode PHP yang lengkap untuk file Controller.

Pastikan untuk menyertakan `namespace`, `use` statements yang relevan (untuk Request, Inertia, Model, dll.), `class`, dan kerangka lengkap dari 7 metode yang telah diisi sesuai instruksi.

Sajikan jawaban Anda dalam satu blok kode PHP yang rapi, siap untuk disimpan ke dalam file `app/Http/Controllers/[NAMA_CONTROLLER_CLASS].php`.