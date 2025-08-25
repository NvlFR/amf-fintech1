Tentu, kita sekarang masuk ke tahap implementasi database. Ini adalah langkah di mana kita mengubah desain ERD menjadi kode nyata menggunakan Laravel.

Saya akan mengambil _library prompt_ `Prompt_Generate_Migration_Laravel.md` dan mengubahnya menjadi **Master Prompt** yang bisa Anda gunakan berulang kali untuk membuat setiap file migration yang dibutuhkan oleh proyek **amf-fintech**.

Saya telah menyertakan contoh pengisian yang spesifik untuk salah satu tabel `amf-fintech` (`transactions`) agar Anda lebih mudah menggunakannya untuk tabel-tabel lain.

---

### **Master Prompt (Siap Digunakan untuk Membuat File Migration Laravel)**

**Petunjuk:** Pertama, aktifkan persona `Persona_Lead_Developer_LIQ.md`. Setelah AI mengonfirmasi perannya, gunakan prompt di bawah ini. Anda hanya perlu mengganti `[NAMA_TABEL]` dan mengisi spesifikasi kolom sesuai tabel yang ingin Anda buat.

---

# Konteks:

Kita akan membuat file migration untuk mendefinisikan skema tabel secara konkret di dalam proyek Laravel **amf-fintech**.

Sebagai acuan, kita akan menggunakan desain dari ERD yang telah dibuat.

**Desain Database ERD untuk amf-fintech:**

    ```mermaid

erDiagram
    users {
        int id PK "Primary Key"
        string name
        string email "Unique"
        string password
        string subscription_status "e.g., 'active', 'inactive', 'trial'"
        datetime subscription_ends_at "Nullable"
    }

    subscriptions {
        int id PK "Primary Key"
        int user_id FK "Foreign Key to users.id"
        string package_type "e.g., 'monthly', 'yearly'"
        date start_date
        date end_date
        string payment_status "e.g., 'paid', 'pending', 'failed'"
    }

    transactions {
        int id PK "Primary Key"
        int user_id FK "Foreign Key to users.id"
        string type "Enum: 'income', 'expense'"
        decimal amount
        string description
        date transaction_date
    }

    budgets {
        int id PK "Primary Key"
        int user_id FK "Foreign Key to users.id"
        string name "e.g., 'Anggaran Makanan'"
        decimal total_amount
        date start_date
        date end_date
    }

    users ||--o{ subscriptions : "has"
    users ||--o{ transactions : "records"
    users ||--o{ budgets : "creates"

---

---

### Tugas Anda:

Berperan sebagai seorang Lead Developer LIQ yang sangat ahli dengan Laravel Schema Builder.

Tugas Anda adalah menulis kode PHP yang lengkap untuk sebuah file migration Laravel yang akan membuat tabel bernama **`[budgets]`**.

##### Berikut adalah spesifikasi detail untuk kolom-kolom dan relasi tabel tersebut. Mohon ikuti dengan sangat teliti:


```
--- CONTOH PENGISIAN UNTUK TABEL 'transactions' ---
[
- id: (Primary Key)
- user_id: foreignId, constrained('users')->onDelete('cascade')
- type: enum(['income', 'expense'])
- amount: decimal(15, 2), unsigned()
- description: string(255)
- transaction_date: date()
- timestamps: (Gunakan ->timestamps())
]
```

---

### Catatan

Berikan kode PHP yang lengkap dan siap pakai untuk sebuah file migration.

- Pastikan untuk menyertakan `namespace`, `use Schema`, `class`, serta metode `up()` dan `down()` yang sudah terisi dengan benar.
- Metode `down()` harus berisi `Schema::dropIfExists('[NAMA_TABEL]');`.
- Sajikan jawaban Anda dalam satu blok kode PHP yang rapi, seolah-olah saya bisa langsung menyalin dan menyimpannya ke dalam file `database/migrations/YYYY_MM_DD_HHMMSS_create_[nama_tabel]_table.php`.
