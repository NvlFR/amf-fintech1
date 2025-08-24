Tentu, mari kita lanjutkan dengan memperkuat keamanan aplikasi kita. Membuat *Policy* adalah cara terbaik di Laravel untuk memastikan bahwa pengguna hanya dapat mengakses dan memanipulasi data yang menjadi haknya.

Ini adalah isi lengkap untuk file **`Prompt_LIQ_Laravel_Policies.md`**. Anda bisa langsung menyimpannya.

-----

### **`Prompt_LIQ_Laravel_Policies.md` (Siap Digunakan)**

-----

### Deskripsi:

Gunakan *prompt* ini untuk memerintahkan AI membuat **Policy Class** di Laravel. *Policies* adalah kelas yang mengorganisir logika otorisasi untuk model tertentu. Ini adalah cara yang bersih dan terpusat untuk mengontrol tindakan apa yang dapat dilakukan pengguna terhadap sebuah *resource* (misalnya, memastikan pengguna A tidak bisa mengedit postingan milik pengguna B).

### ✅ Prasyarat:

1.  Persona `Persona_Lead_Developer_LIQ.md` sudah aktif.
2.  Model `User` sudah ada.
3.  Model yang akan dilindungi (misalnya, `Transaction`) sudah dibuat.

# Konteks:

Untuk meningkatkan keamanan proyek **amf-fintech**, kita perlu menerapkan aturan otorisasi yang ketat. Kita akan membuat sebuah *Policy* untuk model **`[NAMA_MODEL_YANG_DILINDUNGI]`** untuk memastikan bahwa semua operasi (lihat, buat, ubah, hapus) dilakukan oleh pengguna yang berhak.

Aturan utamanya adalah: **seorang pengguna hanya boleh mengelola datanya sendiri.**

### Tugas Anda:

Berperan sebagai seorang **Security-conscious Lead Developer** yang ahli dalam sistem otorisasi Laravel (Gates & Policies).

Tugas Anda adalah menulis kode PHP yang lengkap untuk sebuah *Policy Class* dengan nama **`[NAMA_POLICY_CLASS]`**.

##### *Policy* tersebut harus mendefinisikan logika untuk metode-metode otorisasi berikut:

*(Gunakan format di bawah ini untuk mendefinisikan aturan untuk setiap aksi. Jelaskan logikanya dalam bahasa sederhana.)*

```
--- CONTOH PENGISIAN UNTUK 'TransactionPolicy' ---
[
  {
    "method": "viewAny",
    "logic": "Return false. Pengguna tidak boleh melihat daftar transaksi milik semua orang sekaligus."
  },
  {
    "method": "view",
    "logic": "Return true HANYA JIKA user_id dari transaksi yang dilihat ($transaction->user_id) sama dengan ID pengguna yang sedang login (auth()->id())."
  },
  {
    "method": "create",
    "logic": "Return true. Asumsikan semua pengguna yang sudah login boleh membuat transaksi untuk dirinya sendiri."
  },
  {
    "method": "update",
    "logic": "Return true HANYA JIKA user_id dari transaksi yang akan diubah ($transaction->user_id) sama dengan ID pengguna yang sedang login."
  },
  {
    "method": "delete",
    "logic": "Return true HANYA JIKA user_id dari transaksi yang akan dihapus ($transaction->user_id) sama dengan ID pengguna yang sedang login."
  }
]
```

### Catatan

Berikan kode PHP yang lengkap untuk file *Policy* tersebut.

  * Pastikan untuk menyertakan `namespace`, `use` *statements* untuk `User` dan model terkait.
  * Implementasikan setiap *method* (`viewAny`, `view`, `create`, `update`, `delete`, `restore`, `forceDelete`) dengan logika yang telah didefinisikan di atas. Parameter *method* harus menggunakan *type-hint* yang benar (misalnya, `public function view(User $user, Transaction $transaction)`).
  * Sertakan juga instruksi dalam bentuk komentar di akhir tentang cara mendaftarkan *Policy* ini di dalam `app/Providers/AuthServiceProvider.php`.

Sajikan jawaban Anda dalam satu blok kode PHP yang rapi, siap untuk disimpan ke dalam file `app/Policies/[NAMA_POLICY_CLASS].php`.