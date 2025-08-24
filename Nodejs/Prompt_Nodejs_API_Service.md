Tentu. Ini adalah bagian terakhir yang akan menghubungkan bot WhatsApp kita dengan "otak" utamanya di backend Laravel. Mari kita buat prompt untuk layanan komunikasinya.

Ini adalah isi lengkap untuk file **`Prompt_Nodejs_API_Service.md`**. Anda bisa langsung menyimpannya.

---

### **`Prompt_Nodejs_API_Service.md` (Siap Digunakan)**

---

### Deskripsi:
Gunakan prompt ini untuk memerintahkan AI membuat sebuah *service module* khusus di Node.js yang bertugas untuk melakukan semua komunikasi dengan backend REST API Laravel. Dengan memisahkan logika panggilan API ke dalam satu file, kode menjadi lebih bersih, lebih mudah dikelola, dan lebih mudah untuk diuji. Prompt ini akan memandu AI untuk menggunakan `axios` dengan konfigurasi *best practice*.

### ✅ Prasyarat:
1.  Persona `Persona_Nodejs_Developer_Baileys.md` sudah aktif.
2.  Anda sudah tahu *endpoint* API di sisi Laravel yang perlu dipanggil, termasuk URL dan metode otentikasinya.

# Konteks:
Layanan WhatsApp Bot kita untuk proyek **amf-fintech** sudah bisa menerima dan mem-parsing perintah dari pengguna. Langkah terakhir dalam alur logika ini adalah mengirim data yang sudah diproses tersebut ke backend Laravel untuk disimpan di database.

Kita akan membuat sebuah *API Service* yang terpusat. *Service* ini akan menggunakan `axios` untuk mengirim permintaan HTTP `POST` ke *endpoint* `/api/transactions` di Laravel. Konfigurasi penting seperti URL dasar API dan token otentikasi akan diambil dari *environment variables* untuk keamanan dan fleksibilitas.

### Tugas Anda:
Sebagai seorang Senior Node.js Developer, tugas Anda adalah menulis kode yang lengkap untuk sebuah **API Service** yang akan berkomunikasi dengan backend Laravel.

##### Kode tersebut harus ditempatkan dalam file `src/services/api.service.js` dan memiliki fungsionalitas sebagai berikut:

1.  **Impor Dependensi:**
    * Impor `axios`.

2.  **Konfigurasi Instance Axios:**
    * Buat sebuah *instance* `axios` yang sudah dikonfigurasi sebelumnya (misal: `const apiClient = axios.create({...})`).
    * Konfigurasi *instance* ini harus mencakup:
        * `baseURL`: Mengambil nilainya dari `process.env.LARAVEL_API_URL`.
        * `headers`:
            * `'Content-Type': 'application/json'`
            * `'Accept': 'application/json'`
            * `'Authorization': \`Bearer ${process.env.LARAVEL_API_TOKEN}\``

3.  **Fungsi untuk Mengirim Transaksi:**
    * Buat sebuah fungsi `async function postTransaction(data)`. `data` adalah objek JavaScript yang berisi detail transaksi (misal: `{ type, amount, description, ... }`).
    * Di dalam fungsi ini, gunakan blok `try...catch` untuk menangani panggilan API dan potensi *error*.
    * **Di dalam `try`:**
        * Lakukan panggilan `await apiClient.post('/transactions', data)`.
        * Log pesan sukses ke konsol.
        * Kembalikan (`return`) hasil dari panggilan API.
    * **Di dalam `catch`:**
        * Log pesan *error* yang detail ke konsol (misal: `error.response.data`).
        * Lempar kembali (`throw`) *error* tersebut agar bisa ditangani oleh fungsi yang memanggilnya.

4.  **Ekspor Modul:**
    * Ekspor fungsi `postTransaction` agar bisa diimpor dan digunakan oleh *message handler* kita.

### Catatan
Berikan kode JavaScript yang lengkap untuk file `src/services/api.service.js`. Pastikan kode tersebut aman, efisien, dan siap pakai, dengan penanganan *error* yang baik.