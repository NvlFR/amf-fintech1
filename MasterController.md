Tentu, mari kita lanjutkan ke pembuatan Controller, yang akan menjadi "otak" untuk setiap fitur dalam aplikasi kita.

Saya akan mengambil *library prompt* `Prompt_Create_Controller_Resource.md` dan mengubahnya menjadi **Master Prompt** yang bisa Anda gunakan berulang kali untuk membuat *Resource Controller* di proyek **amf-fintech**.

Saya telah menyertakan contoh pengisian yang sangat detail menggunakan fitur "Transaksi" dari proyek kita, agar Anda bisa dengan mudah mengadaptasinya untuk fitur lain seperti " Users", "Subscription", dll.

---

### **Master Prompt (Siap Digunakan untuk Membuat Resource Controller)**

**Petunjuk:** Pertama, pastikan persona `Persona_Lead_Developer_LIQ.md` sudah aktif. Setelah AI mengonfirmasi perannya, gunakan prompt di bawah ini. Anda hanya perlu mengganti nilai-nilai placeholder yang ditandai dengan `[...]` sesuai dengan fitur yang ingin Anda buat. Gunakan bagian "CONTOH PENGISIAN" sebagai panduan.

---

# Konteks:
Kita akan membuat Controller untuk proyek **amf-fintech**.

Controller ini akan berfungsi sebagai pusat logika untuk menangani semua permintaan HTTP yang berkaitan dengan resource **`[ Users]`**. Controller ini akan dibangun untuk aplikasi Inertia.js, artinya view akan di-render menggunakan `Inertia::render()` dan aksi CUD (Create, Update, Delete) akan diakhiri dengan sebuah redirect.

### Tugas Anda:
Berperan sebagai seorang Lead Developer LIQ yang sangat memahami arsitektur MVC dan routing di Laravel.

Tugas Anda adalah menulis kode PHP yang lengkap untuk sebuah Resource Controller dengan nama Class **`[ UsersController]`** yang akan mengelola Model **`[ Users]`**.

Controller tersebut harus memiliki 7 metode standar resource (`index`, `create`, `store`, `show`, `edit`, `update`, `destroy`).

---
#### **CONTOH PENGISIAN UNTUK FITUR " Users"**
* `[NAMA_RESOURCE]`: " Users"
* `[NAMA_CONTROLLER_CLASS]`: ` UsersController`
* `[NAMA_MODEL]`: ` Users`
* `[NAMA_FOLDER_VIEW]`: ` Userss`
* `[NAMA_FORM_REQUEST_CLASS]`: `Store UsersRequest` (untuk store) dan `Update UsersRequest` (untuk update)
* `[NAMA_MODEL_VARIABLE]`: `$ Users`
---

##### Mohon implementasikan logika dasar atau placeholder di dalam setiap metode sebagai berikut:

* **index()**: Ambil semua data dari Model **`[ Users]`** (gunakan paginasi sederhana, misal 10 per halaman) dan kirimkan ke halaman Inertia **`Pages/Features/ Userss/Index.vue`**.

* **create()**: Tampilkan halaman Inertia **`Pages/Features/ Userss/Editor.vue`** yang berisi form untuk menambah data baru.

* **store()**: Gunakan type-hint **`[Store UsersRequest]`** pada parameter `$request` untuk validasi. Buat record baru di database menggunakan **`[ Users]`**`::create($request->validated())`. Terakhir, kembalikan sebuah redirect ke halaman index dengan pesan sukses (`->with('message', '...')`).

* **show()**: Gunakan route model binding **(`[Budgte]` `$[ users]`)**. Tampilkan halaman Inertia **`Pages/Features/ Userss//Detail.vue`** dengan data **`$[ users]`**.

* **edit()**: Gunakan route model binding **(`[ Users]` `$[ users]`)**. Tampilkan halaman Inertia **`Pages/Features/ Userss/Editor.vue`** dengan data **`$[ users]`** untuk form edit.

* **update()**: Gunakan type-hint **`[Update UsersRequest]`** pada parameter `$request` dan route model binding **(`[ Users]` `$[ users]`)**. Perbarui record `$product->update($request->validated())`. Terakhir, kembalikan sebuah redirect ke halaman index dengan pesan sukses.

* **destroy()**: Gunakan route model binding **(`[ Users]` `$[budgte]`)**. Hapus record tersebut. Terakhir, kembalikan sebuah redirect ke halaman index dengan pesan sukses.

### Catatan
Berikan kode PHP yang lengkap untuk file Controller.

Pastikan untuk menyertakan `namespace`, `use` statements yang relevan (untuk Request, Inertia, Model, dll.), `class`, dan kerangka lengkap dari 7 metode yang telah diisi sesuai instruksi.

Sajikan jawaban Anda dalam satu blok kode PHP yang rapi, siap untuk disimpan ke dalam file `app/Modules/Users/Http/Controllers/[ UsersContoller].php`.