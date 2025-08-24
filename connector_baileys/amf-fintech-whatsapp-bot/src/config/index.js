// Muat environment variables dari file .env
require('dotenv').config();

// Kumpulkan semua konfigurasi ke dalam satu objek yang rapi
const config = {
  api: {
    baseUrl: process.env.API_BASE_URL,
    LARAVEL_API_TOKEN: process.env.API_SECRET_KEY,
  },
  app: {
    logLevel: process.env.LOG_LEVEL || 'info',
  }
};

// Pastikan variabel penting sudah terdefinisi
if (!config.api.baseUrl || !config.api.secretKey) {
  console.error('[Config] FATAL ERROR: API_BASE_URL atau API_SECRET_KEY tidak ditemukan di .env');
  process.exit(1);
}

// Ekspor objek config agar bisa digunakan di file lain
module.exports = config;
