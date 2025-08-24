Tentu, mari kita lanjutkan ke perancangan struktur database. Ini adalah fondasi dari seluruh aplikasi kita.

Saya akan mengambil *library prompt* `Prompt_Generate_ERD_Mermaid.md` dan mengisinya dengan entitas-entitas data yang relevan untuk proyek **amf-fintech**. Prompt ini dirancang untuk menghasilkan diagram visual yang akan sangat membantu tim developer.

---

### **Prompt Final (Siap Digunakan untuk Membuat ERD Database)**

**Petunjuk:** Pertama, aktifkan persona yang relevan (misalnya, `Persona_System_Architect` atau `Persona_Lead_Developer_LIQ`). Setelah AI mengonfirmasi perannya, kirimkan seluruh teks di bawah ini sebagai tugasnya.

---

# Konteks:
Kita akan merancang struktur dan relasi database untuk proyek **amf-fintech**.

Berdasarkan kebutuhan fungsional yang telah kita definisikan, sistem ini perlu menyimpan dan mengelola data untuk entitas-entitas berikut:

* **users**: Untuk menyimpan data pengguna. Perlu data nama, email, password, status langganan, dan tanggal akhir langganan.
* **subscriptions**: Untuk mencatat histori langganan setiap pengguna. Perlu data ID pengguna, jenis paket, tanggal mulai, tanggal berakhir, dan status pembayaran.
* **transactions**: Untuk mencatat semua pemasukan dan pengeluaran. Perlu data ID pengguna, tipe (pemasukan/pengeluaran), jumlah, deskripsi/kategori, dan tanggal transaksi.
* **budgets**: Untuk menyimpan anggaran yang dibuat pengguna. Perlu data ID pengguna, nama anggaran (mis. "Anggaran Makanan"), jumlah total, dan periode (tanggal mulai & selesai).

---
### Tugas Anda:
Berperanlah sebagai seorang Database **Administrator (DBA)** atau **Data Modeler** yang berpengalaman.

Tugas Anda adalah membuat sebuah Entity-Relationship Diagram **(ERD)** yang jelas dan akurat menggunakan **sintaks Mermaid JS**.

##### ERD yang Anda buat harus mencakup:

1.  Semua Entitas sebagai Tabel: Pastikan semua entitas yang saya sebutkan di atas direpresentasikan sebagai tabel dalam diagram.
2.  Atribut **(Kolom)** dan Tipe Data: Untuk setiap tabel, daftarkan atribut-atribut utamanya beserta tipe datanya. Tandai dengan jelas mana yang merupakan Primary Key (PK) dan mana yang Foreign Key **(FK)**.
3.  Relasi dan Kardinalitas: Gambarkan hubungan antar tabel dengan menggunakan notasi kardinalitas Mermaid yang benar. Berikan label pada relasi untuk menjelaskan hubungannya.
    * Gunakan `||--o{` untuk relasi one-to-many.
    * Gunakan `||--||` untuk relasi one-to-one.
    * Gunakan `}o--o{` untuk relasi many-to-many.

---
Pastikan Anda mempertimbangkan relasi logis seperti:
"Satu **user** bisa memiliki BANYAK **subscriptions**. Satu **user** juga bisa memiliki BANYAK **transactions**. Demikian pula, satu **user** bisa membuat BANYAK **budgets**."

---
### Catatan
Berikan hanya blok kode Mermaid JS yang lengkap dan siap pakai, yang diawali dengan `erDiagram`. Jangan tambahkan penjelasan atau teks lain di luar blok kode, agar saya bisa langsung menyalin dan menempelkannya ke dalam renderer.