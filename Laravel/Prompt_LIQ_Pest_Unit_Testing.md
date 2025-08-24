Tentu, mari kita lanjutkan dengan membangun *prompt* untuk pilar kualitas perangkat lunak: **pengujian otomatis**. Dengan ini, kita bisa memastikan setiap bagian dari aplikasi kita berjalan sebagaimana mestinya.

Ini adalah isi lengkap untuk file **`Prompt_LIQ_Pest_Unit_Testing.md`**. Anda bisa langsung menyimpannya.

-----

### **`Prompt_LIQ_Pest_Unit_Testing.md` (Siap Digunakan)**

-----

### Deskripsi:

Gunakan *prompt* ini untuk memerintahkan AI membuat *Unit Test* atau *Feature Test* menggunakan **Pest**, *framework testing* elegan yang ada di Laravel. *Prompt* ini akan memandu AI untuk menulis tes yang memverifikasi perilaku sebuah *method* di *Controller*, logika di *Model*, atau alur permintaan HTTP secara keseluruhan, memastikan kode kita bekerja dengan benar dan mencegah *bug* di masa depan (*regression*).

### ✅ Prasyarat:

1.  Persona `Persona_Lead_Developer_LIQ.md` sudah aktif.
2.  Anda sudah memiliki *Controller*, *Model*, atau *Class* lain yang fungsionalitasnya ingin diuji.

# Konteks:

Kita perlu memastikan kualitas dan keandalan kode di proyek **amf-fintech** dengan menulis tes otomatis.

Fokus kita saat ini adalah membuat tes untuk **`[NAMA_CLASS_ATAU_METHOD_YANG_DIUJI]`**. Tes ini harus mencakup beberapa skenario untuk memvalidasi perilaku yang diharapkan dan penanganan *error* yang benar.

### Tugas Anda:

Berperan sebagai seorang **QA Engineer** yang sangat ahli dalam menulis tes yang bersih, mudah dibaca, dan efektif menggunakan Pest di lingkungan Laravel.

Tugas Anda adalah menulis kode PHP yang lengkap untuk sebuah file tes Pest dengan nama **`[NAMA_FILE_TEST]`**.

##### Tes tersebut harus mencakup skenario-skenario berikut (gunakan format "it" atau "test" dari Pest untuk setiap skenario):

*(Gunakan format di bawah ini untuk mendeskripsikan setiap skenario tes yang Anda inginkan)*

```
--- CONTOH PENGISIAN UNTUK MENGUJI 'TransactionController@store' ---
[
  {
    "deskripsi_tes": "it should store a new transaction for an authenticated user with valid data",
    "skenario": [
      "Given: Saya adalah pengguna yang sudah login.",
      "And: Saya memiliki data transaksi yang valid (type, amount, description, date).",
      "When: Saya mengirim request POST ke route 'transactions.store' dengan data tersebut.",
      "Then: Data transaksi baru harus tersimpan di database.",
      "And: Saya harus di-redirect kembali ke halaman 'transactions.index' dengan pesan sukses."
    ]
  },
  {
    "deskripsi_tes": "it should fail validation with invalid data",
    "skenario": [
      "Given: Saya adalah pengguna yang sudah login.",
      "When: Saya mengirim request POST ke route 'transactions.store' dengan data amount yang kosong.",
      "Then: Validasi harus gagal.",
      "And: Saya harus dikembalikan ke halaman sebelumnya dengan error validasi untuk field 'amount'."
    ]
  },
  {
    "deskripsi_tes": "it should prevent unauthenticated users from creating a transaction",
    "skenario": [
      "Given: Saya adalah pengunjung (tidak login).",
      "When: Saya mencoba mengirim request POST ke route 'transactions.store'.",
      "Then: Saya harus di-redirect ke halaman login."
    ]
  }
]
```

### Catatan

Berikan kode PHP yang lengkap untuk file tes tersebut.

  * Pastikan untuk menyertakan `use` *statements* yang relevan (untuk *Model*, `actingAs`, dll.).
  * Gunakan fungsi-fungsi pembantu dari Laravel untuk tes, seperti `actingAs()` untuk simulasi login, `post()` untuk mengirim *request*, dan *assertions* seperti `assertDatabaseHas()` dan `assertRedirect()`.

Sajikan jawaban Anda dalam satu blok kode PHP yang rapi, siap untuk disimpan ke dalam file `tests/Feature/[NAMA_FILE_TEST].php`.