Tentu, kita lanjutkan ke validasi. Ini adalah langkah penting untuk memastikan data yang masuk ke database kita bersih dan sesuai aturan, yang akan menjaga aplikasi tetap aman dan bebas dari bug.

Saya akan mengambil *library prompt* `Prompt_Create_Request_Validation.md` dan mengubahnya menjadi **Master Prompt** yang dapat Anda gunakan berulang kali untuk membuat *Form Request Classes* di proyek **amf-fintech**.

Saya telah menyertakan contoh pengisian yang spesifik untuk `StoreTransactionRequest`, yang akan digunakan saat pengguna membuat transaksi baru, sebagai panduan yang jelas.

-----

### **Master Prompt (Siap Digunakan untuk Membuat Form Request Validation)**

**Petunjuk:** Pertama, aktifkan persona `Persona_Lead_Developer_LIQ.md`. Setelah AI mengonfirmasi perannya, gunakan prompt di bawah ini. Anda hanya perlu mengganti `[NAMA_RESOURCE]`, `[NAMA_FORM_REQUEST_CLASS]`, dan mengisi aturan otorisasi serta validasi sesuai kebutuhan.

-----

# Konteks:

Kita akan membuat sebuah Form Request Class di proyek **amf-fintech**.

Tujuan utama kelas ini adalah untuk menampung semua logika otorisasi (siapa yang boleh melakukan request ini) dan validasi (aturan untuk data yang masuk) untuk resource **`[NAMA_RESOURCE]`**. Ini akan digunakan di dalam metode Controller untuk menjaga kode tetap rapi (clean code).

### Tugas Anda:

Berperan sebagai seorang Lead Developer LIQ yang sangat mengutamakan keamanan dan kualitas kode melalui validasi yang ketat.

Tugas Anda adalah menulis kode PHP yang lengkap untuk sebuah Form Request Class dengan nama **`[NAMA_FORM_REQUEST_CLASS]`**.

##### Kelas tersebut harus memiliki konfigurasi sebagai berikut:

1.  **Metode authorize():**

      * Tentukan logika otorisasi untuk request ini.
        ```
        --- CONTOH PENGISIAN UNTUK 'StoreTransactionRequest' ---
        // Asumsikan semua pengguna yang sudah login boleh membuat transaksi untuk dirinya sendiri.
        Return true; 
        ```

2.  **Metode rules():**

      * Definisikan aturan-aturan validasi untuk setiap field yang diterima dari form.
        ```
        --- CONTOH PENGISIAN UNTUK 'StoreTransactionRequest' ---
        [
        'type' => 'required|in:income,expense',
        'amount' => 'required|numeric|min:0',
        'description' => 'required|string|max:255',
        'transaction_date' => 'required|date'
        ]
        ```

### Catatan

Berikan kode PHP yang lengkap untuk file Form Request tersebut.

Pastikan untuk menyertakan `namespace`, `use` statements, class yang mengekstensi `FormRequest`, serta metode `authorize()` dan `rules()` yang sudah terisi dengan benar.

Sajikan jawaban Anda dalam satu blok kode PHP yang rapi, siap untuk disimpan ke dalam file `app/Http/Requests/[NAMA_FORM_REQUEST_CLASS].php`.