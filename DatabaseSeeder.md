Tentu, mari kita siapkan proses *seeding* data. Memiliki data dummy yang realistis sangat penting agar pengembangan antarmuka (UI) dan pengujian fitur bisa berjalan lancar.

Saya akan mengambil *library prompt* `Prompt_Generate_Seeder_Data_Dummy.md` dan mengubahnya menjadi **Master Prompt** yang bisa Anda gunakan berulang kali untuk mengisi setiap tabel dalam proyek **amf-fintech** Anda.

Saya telah menyertakan contoh pengisian yang spesifik untuk `Transaction` sebagai panduan yang jelas.

-----

### **Master Prompt (Siap Digunakan untuk Membuat Seeder & Factory)**

**Petunjuk:** Pertama, aktifkan persona `Persona_Lead_Developer_LIQ.md`. Setelah AI mengonfirmasi perannya, gunakan prompt di bawah ini. Anda hanya perlu mengganti `[NAMA_MODEL]`, `[NAMA_TABEL]`, `[NAMA_SEEDER_CLASS]`, `[JUMLAH_DATA]`, dan mengisi spesifikasi kolom sesuai model yang ingin Anda buatkan seedernya.

-----

# Konteks:

Kita perlu mengisi database proyek **amf-fintech** dengan data dummy agar bisa melakukan pengembangan dan pengujian dengan data yang realistis.

Kita akan membuat seeder untuk Model **`[NAMA_MODEL]`** yang terhubung dengan tabel **`[NAMA_TABEL]`**.

### Tugas Anda:

Berperan sebagai seorang Lead Developer LIQ yang ahli dalam database seeding dan Model Factories di Laravel.

##### Tugas Anda adalah menulis kode PHP yang lengkap untuk dua file utama (Factory dan Seeder) untuk mengisi data dummy:

1.  **Buat sebuah Model Factory:**

      * Buat sebuah model factory yang terasosiasi dengan model `[NAMA_MODEL]`.
      * Di dalam metode `definition()`, gunakan library Faker bawaan Laravel untuk menghasilkan data yang terlihat nyata untuk setiap atribut/kolom yang bisa diisi (fillable).
      * Berikut adalah panduan untuk menghasilkan data di setiap kolom:
        *(Salin format di bawah ini dan isi sesuai kebutuhan model Anda. Hapus contoh jika tidak diperlukan)*
        ```
        --- CONTOH PENGISIAN UNTUK MODEL 'Transaction' ---
        [
        - user_id: Ambil ID user secara acak. Caranya: User::inRandomOrder()->first()->id. Pastikan UserSeeder sudah dijalankan lebih dulu.
        - type: Pilih secara acak antara 'income' dan 'expense'. Caranya: fake()->randomElement(['income', 'expense']).
        - amount: Gunakan angka acak antara 5000 dan 2000000. Caranya: fake()->numberBetween(5000, 2000000).
        - description: Gunakan beberapa kata acak. Caranya: fake()->words(3, true).
        - transaction_date: Gunakan tanggal acak dalam 90 hari terakhir. Caranya: fake()->dateTimeBetween('-90 days', 'now').
        ]
        ```

2.  **Buat sebuah Database Seeder:**

      * Buat sebuah database seeder class dengan nama **`[NAMA_SEEDER_CLASS]`** (contoh: TransactionSeeder).
      * Di dalam metode `run()`, panggil factory yang baru saja kita definisikan untuk membuat **`[JUMLAH_DATA]`** record data baru di database.
      * Terakhir, berikan instruksi untuk memanggil seeder class ini dari file `database/seeders/DatabaseSeeder.php`.

### Catatan

Berikan kode PHP yang lengkap untuk setiap bagian secara terpisah dan berurutan:

  * Kode untuk file Factory (misal: `database/factories/TransactionFactory.php`).
  * Kode untuk file Seeder Class (misal: `database/seeders/TransactionSeeder.php`).
  * Baris kode yang perlu ditambahkan ke dalam metode `run()` di `database/seeders/DatabaseSeeder.php`.

Sajikan semuanya dalam blok kode PHP yang rapi dengan nama file sebagai judulnya.