Tentu, setelah bot berhasil terhubung, langkah logis berikutnya adalah membuatnya "mendengar" dan bereaksi terhadap pesan masuk. Mari kita buat prompt untuk itu.

Ini adalah isi lengkap untuk file **`Prompt_Nodejs_Message_Handler.md`**. Anda bisa langsung menyimpannya.

---

### **`Prompt_Nodejs_Message_Handler.md` (Siap Digunakan)**

---

### Deskripsi:
Gunakan prompt ini untuk memerintahkan AI mengimplementasikan logika inti dari bot: penanganan pesan masuk. Prompt ini akan memandu AI untuk membuat *event listener* untuk event `'messages.upsert'` dari Baileys, yang dieksekusi setiap kali ada pesan baru. Logika ini akan mencakup pemfilteran pesan untuk memastikan hanya pesan yang relevan dari pengguna yang diproses.

### ✅ Prasyarat:
1.  Persona `Persona_Nodejs_Developer_Baileys.md` sudah aktif.
2.  Kode untuk koneksi Baileys (hasil dari `Prompt_Nodejs_Baileys_Connection.md`) sudah ada, karena *listener* ini akan ditempelkan pada *instance socket* yang aktif.

# Konteks:
Layanan WhatsApp Bot kita untuk proyek **amf-fintech** sudah bisa terhubung ke WhatsApp. Sekarang, kita perlu menambahkan kemampuan untuk "mendengar" pesan yang dikirim oleh pengguna.

Tugas kita adalah membuat *handler* yang efisien. *Handler* ini harus bisa membedakan mana pesan baru yang valid dari pengguna dan mana "noise" (seperti notifikasi, pesan dari bot sendiri, atau pesan lama saat sinkronisasi). Setelah pesan valid teridentifikasi, *handler* akan mengekstrak informasi penting (pengirim dan isi teks) dan meneruskannya ke modul lain untuk diproses lebih lanjut.

### Tugas Anda:
Sebagai seorang Senior Node.js Developer, tugas Anda adalah menulis kode untuk **event listener `'messages.upsert'`**. Kode ini nantinya akan diintegrasikan ke dalam fungsi `connectToWhatsApp()` di file `src/services/whatsapp.service.js`.

##### Fungsionalitas dari *event listener* tersebut harus mencakup:

1.  **Struktur Listener:**
    * Buat sebuah *event listener* `async` untuk `sock.ev.on('messages.upsert', async (m) => { ... })`.

2.  **Logika Pemfilteran Pesan (Penting):**
    * Di dalam *listener*, ambil pesan yang paling relevan dari `m.messages[0]`.
    * Terapkan serangkaian pengecekan untuk memvalidasi pesan:
        * **Abaikan pesan dari bot sendiri:** Cek jika `message.key.fromMe` adalah `true`, dan jika iya, hentikan proses (`return`).
        * **Abaikan pesan tanpa konten:** Cek jika `message.message` kosong (null/undefined), dan jika iya, hentikan proses. Ini untuk menghindari notifikasi sistem (misal: "Anda telah ditambahkan ke grup").
        * **Fokus pada pesan teks:** Untuk MVP, kita hanya akan memproses pesan teks sederhana. Cek jika tipe pesan adalah `'conversation'`. Jika bukan, hentikan proses.

3.  **Ekstraksi Informasi:**
    * Jika sebuah pesan lolos dari semua filter, ekstrak informasi berikut ke dalam variabel yang jelas:
        * `senderJid`: Alamat JID pengirim (dari `message.key.remoteJid`).
        * `messageText`: Isi dari pesan teks (dari `message.message.conversation`).

4.  **Logging & Penerusan (Forwarding):**
    * Tampilkan pesan yang berhasil difilter ke konsol menggunakan `logger` atau `console.log` untuk keperluan *debugging*.
    * Panggil sebuah fungsi (yang akan kita buat di prompt selanjutnya) bernama `processCommand(senderJid, messageText)`. Ini memisahkan logika "mendengar" dari logika "memproses".

### Catatan
Berikan kode JavaScript yang lengkap hanya untuk blok *event listener* `'messages.upsert'`. Pastikan kode tersebut bersih, memiliki komentar yang menjelaskan setiap langkah pemfilteran, dan siap untuk diintegrasikan ke dalam file layanan WhatsApp yang sudah ada.