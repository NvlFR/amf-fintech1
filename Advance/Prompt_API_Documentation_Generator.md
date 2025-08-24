Tentu, mari kita lanjutkan ke langkah terakhir untuk membuat proyek ini profesional dan mudah dikelola: dokumentasi. Dokumentasi API yang baik adalah kunci untuk pemeliharaan jangka panjang.

Ini adalah isi lengkap untuk file **`Prompt_API_Documentation_Generator.md`**. Anda bisa langsung menyimpannya.

-----

### **`Prompt_API_Documentation_Generator.md` (Siap Digunakan)**

-----

### Deskripsi:

Gunakan *prompt* ini untuk memerintahkan AI menghasilkan dokumentasi API yang bersih, jelas, dan terstruktur dalam format **Markdown**. Dokumentasi ini akan berfungsi sebagai "kontrak" atau *single source of truth* yang menjelaskan bagaimana klien (seperti layanan Node.js kita) harus berinteraksi dengan *endpoint* di backend Laravel.

### ✅ Prasyarat:

1.  Anda sudah memiliki *endpoint* API yang fungsional (Route & Controller).
2.  Anda sudah mendefinisikan *Form Request Validation* untuk *endpoint* tersebut.

# Konteks:

Untuk memastikan layanan Node.js dan aplikasi Laravel di proyek **amf-fintech** dapat berkomunikasi tanpa masalah, kita perlu membuat dokumentasi yang jelas untuk setiap *endpoint* API yang ada.

Saat ini, kita akan fokus untuk mendokumentasikan *endpoint* paling krusial yang digunakan oleh bot WhatsApp kita: **Endpoint untuk membuat transaksi baru**.

### Tugas Anda:

Berperan sebagai seorang **Technical Writer** yang ahli dalam membuat dokumentasi API yang mudah dipahami oleh developer lain.

Tugas Anda adalah membuat **Dokumentasi API** dalam format Markdown untuk *endpoint* yang saya spesifikasikan di bawah ini.

##### Mohon buat dokumentasi yang mencakup semua bagian berikut:

*(Gunakan format di bawah ini untuk mendefinisikan endpoint yang ingin Anda dokumentasikan)*

```
--- CONTOH PENGISIAN UNTUK ENDPOINT 'CREATE TRANSACTION' ---
{
  "endpoint": "POST /api/transactions",
  "deskripsi": "Membuat entri transaksi baru (pemasukan atau pengeluaran) untuk pengguna yang terotentikasi.",
  "otentikasi": "Wajib. Request harus menyertakan 'Authorization' header dengan Bearer Token yang valid (didapat dari Laravel Sanctum).",
  "request_body": [
    { "field": "type", "type": "string", "validation": "required|in:income,expense", "description": "Jenis transaksi." },
    { "field": "amount", "type": "number", "validation": "required|numeric|min:0", "description": "Jumlah nominal transaksi." },
    { "field": "description", "type": "string", "validation": "required|string|max:255", "description": "Deskripsi singkat transaksi." },
    { "field": "transaction_date", "type": "string", "validation": "required|date", "description": "Tanggal transaksi dalam format YYYY-MM-DD." }
  ],
  "contoh_request": {
    "type": "expense",
    "amount": 75000,
    "description": "Makan siang dan kopi",
    "transaction_date": "2025-08-24"
  },
  "response_sukses": {
    "status_code": "201 Created",
    "body": {
      "message": "Transaction created successfully",
      "data": {
        "id": 123,
        "user_id": 1,
        "type": "expense",
        "amount": "75000.00",
        "description": "Makan siang dan kopi",
        "transaction_date": "2025-08-24T00:00:00.000000Z",
        "created_at": "...",
        "updated_at": "..."
      }
    }
  },
  "response_error": {
    "status_code": "422 Unprocessable Content",
    "body": {
      "message": "The amount field is required.",
      "errors": {
        "amount": [
          "The amount field is required."
        ]
      }
    }
  }
}
```

### Catatan

Sajikan jawaban Anda sebagai sebuah dokumen Markdown yang lengkap dan rapi. Gunakan judul (`##`), sub-judul (`###`), tabel (untuk *request body*), dan blok kode (untuk contoh JSON) agar dokumentasi sangat mudah dibaca dan dipahami.