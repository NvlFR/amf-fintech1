Tentu, kita lanjutkan ke langkah terakhir dalam siklus pengembangan backend: mendaftarkan *route*. Ini adalah langkah yang menyatukan URL yang diakses pengguna dengan *Controller* yang telah kita buat.

Saya akan mengambil *library prompt* `Prompt_Implementasi_Route.md` dan mengubahnya menjadi **Master Prompt** yang dapat Anda gunakan berulang kali untuk mendaftarkan *Resource Controller* di proyek **amf-fintech**.

Saya telah menyertakan contoh pengisian yang spesifik untuk `TransactionController` sebagai panduan yang jelas.

---

### **Master Prompt (Siap Digunakan untuk Mendaftarkan Route)**

**Petunjuk:** Pertama, aktifkan persona `Persona_Lead_Developer_LIQ.md`. Setelah AI mengonfirmasi perannya, gunakan prompt di bawah ini. Anda hanya perlu mengganti placeholder `[...]` sesuai dengan *resource* yang ingin Anda daftarkan.

---

# Konteks:
Kita perlu mendaftarkan route (rute) untuk resource **`[NAMA_RESOURCE]`** di proyek **amf-fintech**.

Rute ini akan menjadi titik masuk (entry point) dari browser dan akan memetakan berbagai URL dan metode HTTP (GET, POST, PUT, DELETE) ke metode-metode yang sesuai di dalam **`[NAMA_CONTROLLER_CLASS]`**.

Karena kita telah membuat Resource Controller yang mengikuti konvensi Laravel, kita akan menggunakan metode `Route::resource()` untuk mendaftarkan ketujuh rute standar sekaligus secara efisien.

## Tugas Anda:
Berperan sebagai seorang Lead Developer LIQ yang memahami bagaimana merancang rute yang bersih dan aman.

###### Tugas Anda adalah menulis baris kode PHP yang diperlukan untuk mendaftarkan resource route di dalam file `routes/web.php`.

Rute tersebut harus memiliki konfigurasi sebagai berikut:

1.  **URL Path**: Gunakan path URL **`[NAMA_PATH_URL]`**.
    * *Contoh untuk "Transaksi": `transactions`*
2.  **Controller Class**: Hubungkan path tersebut ke Class Controller **`[NAMA_CONTROLLER_CLASS]`**.
    * *Contoh untuk "Transaksi": `TransactionController::class`*
3.  **Middleware**: Pastikan semua rute untuk resource ini dilindungi oleh middleware yang sesuai untuk keamanan.
    * *Contoh untuk "Transaksi": `['auth']` (memastikan hanya pengguna yang sudah login yang bisa mengaksesnya).*

# Catatan
Berikan hanya blok kode PHP yang berisi definisi rute tersebut.

Jika ada `use` statement yang diperlukan di bagian atas file (untuk mengimpor Class Controller), sertakan juga.

Kode harus siap untuk disalin dan ditempel di dalam file `routes/web.php`, idealnya di dalam grup middleware.