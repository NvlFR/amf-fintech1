Tentu, kita lanjutkan ke pembuatan Model Eloquent. Ini adalah bagian penting yang akan menjadi jembatan antara kode aplikasi kita dengan tabel-tabel di database.

Saya akan mengambil *library prompt* `Prompt_Create_Model_Eloquent.md` dan mengubahnya menjadi **Master Prompt** yang bisa Anda gunakan berulang kali untuk membuat setiap Model Eloquent yang dibutuhkan oleh proyek **amf-fintech**.

Saya telah menyertakan contoh pengisian yang spesifik menggunakan model `Transaction` dari proyek kita untuk memberikan panduan yang sangat jelas.

-----

### **Master Prompt (Siap Digunakan untuk Membuat Model Eloquent)**

**Petunjuk:** Pertama, pastikan persona `Persona_Lead_Developer_LIQ.md` sudah aktif. Setelah AI mengonfirmasi perannya, gunakan prompt di bawah ini. Anda hanya perlu mengganti `[NAMA_TABEL]`, `[NAMA_MODEL]`, dan mengisi spesifikasi `$fillable`, relasi, serta properti lainnya sesuai model yang ingin Anda buat.

-----

# Konteks:

Kita akan membuat Model Eloquent untuk proyek **amf-fintech**.

Model ini akan menjadi representasi dari tabel **`[budgets]`** di dalam aplikasi kita. Tugasnya adalah untuk menangani semua interaksi data dengan tabel tersebut, termasuk mendefinisikan atribut yang bisa diisi dan relasinya dengan model lain.

### Tugas Anda:

Berperan sebagai seorang Lead Developer LIQ yang sangat memahami best practice dalam penulisan Model Eloquent di Laravel.

Tugas Anda adalah menulis kode PHP yang lengkap untuk sebuah Model Eloquent dengan nama Class **`[budgets]`**.

##### Model tersebut harus memiliki konfigurasi sebagai berikut:

1.  **Atribut yang Bisa Diisi (Fillable Attributes):**

      * Atur properti `protected $fillable` untuk mengizinkan mass assignment pada kolom-kolom berikut:
        ```
        --- CONTOH PENGISIAN UNTUK MODEL 'Transaction' ---
        [
        'user_id',
        'type',
        'amount',
        'description',
        'transaction_date'
        ]
        ```

2.  **Relasi Eloquent (Eloquent Relationships):**

      * Definisikan metode-metode publik berikut untuk merepresentasikan relasi database.
        ```
        --- CONTOH PENGISIAN UNTUK MODEL 'Transaction' ---
        [
        - user: belongsTo, User::class
        ]
        ```

3.  **(Opsional) Properti Tambahan:**

      * Jika diperlukan, tambahkan properti lain seperti `$casts`, `$hidden`, atau `$with`.
        ```
        --- CONTOH PENGISIAN UNTUK MODEL 'Transaction' ---
        $casts = [
            'amount' => 'decimal:2',
            'transaction_date' => 'date'
        ]
        ```

### Catatan

Berikan kode PHP yang lengkap untuk file Model tersebut.

Pastikan untuk menyertakan `namespace`, `use` statements yang relevan (terutama untuk model lain dalam relasi), `class`, dan semua properti serta metode relasi yang telah didefinisikan.

Sajikan jawaban Anda dalam satu blok kode PHP yang rapi, siap untuk disimpan ke dalam file `app/Models/[NAMA_MODEL].php`.