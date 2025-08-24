// Impor konfigurasi yang sudah terpusat dari file config
const config = require('./config');

// Impor layanan utama (contoh)
// const whatsappService = require('./services/whatsapp.service');

/**
 * Fungsi utama (main entry point) untuk menjalankan aplikasi.
 */
const main = async () => {
  try {
    // Gunakan konfigurasi yang sudah diimpor
    console.log(`[APP] Memulai layanan WhatsApp Bot dengan log level: ${config.app.logLevel}`);

    // Di sini kita akan memulai koneksi WhatsApp
    // await whatsappService.connect();

    console.log('[APP] Layanan berhasil diinisialisasi dan menunggu koneksi...');

  } catch (error) {
    console.error('[APP] Terjadi kesalahan fatal saat memulai aplikasi:', error);
    process.exit(1);
  }
};

// Panggil fungsi utama untuk memulai eksekusi
main();
