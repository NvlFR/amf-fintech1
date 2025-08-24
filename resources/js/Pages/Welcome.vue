<script setup>
import { Head, Link } from '@inertiajs/vue3';

// Definisikan props yang mungkin dikirim dari route Laravel (opsional, tapi best practice)
defineProps({
    canLogin: Boolean,
    canRegister: Boolean,
});
</script>

<template>
    <Head title="Selamat Datang di amf-fintech" />

    <div class="bg-slate-50 text-slate-800">
        <header class="bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 border-b border-slate-200">
            <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" class="text-2xl font-bold text-slate-900">
                    amf-fintech
                </Link>
                <nav class="hidden md:flex items-center space-x-8">
                    <a href="#fitur" class="text-slate-600 hover:text-blue-700 transition-colors">Fitur</a>
                    <Link v-if="canLogin" :href="route('dashboard')" class="text-slate-600 hover:text-blue-700 transition-colors">Dashboard</Link>
                </nav>
                <div class="hidden md:flex items-center space-x-4">
                     <Link v-if="canLogin" :href="route('login')" class="font-semibold text-slate-600 hover:text-blue-700">Log in</Link>
                     <Link v-if="canRegister" :href="route('register')" class="bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-800 transition-transform transform hover:scale-105">
                        Daftar
                    </Link>
                </div>
                <button class="md:hidden text-slate-800">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </header>

        <main>
            <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-28 overflow-hidden">
                <div class="absolute inset-0 gradient-bg"></div>
                <div class="container mx-auto px-6 relative z-10 text-center text-white">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
                        Kelola Keuangan, <span class="block">Semudah Mengirim Pesan.</span>
                    </h1>
                    <p class="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
                        Ucapkan selamat tinggal pada spreadsheet rumit dan aplikasi yang membingungkan. amf-fintech adalah asisten keuangan pribadi Anda yang cerdas.
                    </p>
                    <div class="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <Link :href="route('register')" class="w-full sm:w-auto bg-green-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-600 transition-all transform hover:scale-105 text-lg">
                            Mulai Sekarang (Gratis)
                        </Link>
                    </div>

                    <div class="mt-16 lg:mt-20">
                        <img src="https://user-images.githubusercontent.com/6298785/211246533-c842eba7-3532-4467-874e-f8b1a8f9443e.png" alt="Mockup Aplikasi amf-fintech" class="max-w-md mx-auto rounded-2xl shadow-2xl">
                    </div>
                </div>
            </section>

            <section class="py-20 bg-white">
                <div class="container mx-auto px-6 text-center">
                    <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Lelah dengan Cara Lama?</h2>
                    <p class="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Manajemen keuangan seharusnya tidak terasa seperti pekerjaan. Kami meruntuhkan hambatan yang membuat Anda malas mencatat.</p>
                    <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div class="p-6">
                            <div class="text-4xl mb-4">😫</div>
                            <h3 class="text-xl font-semibold mb-2">Pencatatan Manual yang Membosankan</h3>
                            <p class="text-slate-500">Membuka aplikasi, memilih kategori, mengetik angka. Terlalu banyak langkah, terlalu mudah untuk ditunda.</p>
                        </div>
                        <div class="p-6">
                            <div class="text-4xl mb-4">🤯</div>
                            <h3 class="text-xl font-semibold mb-2">Aplikasi yang Terlalu Rumit</h3>
                            <p class="text-slate-500">Fitur yang berlebihan dan antarmuka yang kaku membuat Anda lebih bingung daripada tercerahkan.</p>
                        </div>
                        <div class="p-6">
                            <div class="text-4xl mb-4">🤖</div>
                            <h3 class="text-xl font-semibold mb-2">Interaksi Satu Arah & Kaku</h3>
                            <p class="text-slate-500">Anda memberi data, aplikasi memberi laporan. Tidak ada dialog, tidak ada umpan balik personal.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="fitur" class="py-20 bg-slate-50">
                <div class="container mx-auto px-6">
                    <div class="text-center mb-16">
                        <h2 class="text-3xl md:text-4xl font-bold text-slate-900">Asisten Keuangan di Genggaman Anda</h2>
                        <p class="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Temukan cara baru mengelola finansial yang dirancang untuk kehidupan Anda yang dinamis.</p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div class="order-2 md:order-1">
                            <h3 class="text-2xl font-bold mb-4">Catat Transaksi Secepat Mengirim Chat</h3>
                            <p class="text-slate-600 mb-4">Cukup ketik dalam bahasa natural, dan biarkan AI kami yang bekerja. Lupakan formulir yang kaku.</p>
                        </div>
                        <div class="order-1 md:order-2">
                            <img src="https://i.ibb.co/6P2TqV7/feature-chat.png" alt="AI Chatbot Interface" class="rounded-xl shadow-lg w-full">
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <div>
                            <img src="https://i.ibb.co/GHYW34N/feature-dashboard.png" alt="Dashboard Visual" class="rounded-xl shadow-lg w-full">
                        </div>
                        <div>
                            <h3 class="text-2xl font-bold mb-4">Pahami Kondisi Finansial Sekali Lirik</h3>
                            <p class="text-slate-600">Dashboard yang bersih dan interaktif mengubah angka-angka rumit menjadi wawasan yang mudah dipahami.</p>
                        </div>
                    </div>
                </div>
            </section>

             <section class="gradient-bg py-20">
                <div class="container mx-auto px-6 text-center text-white">
                    <h2 class="text-3xl md:text-4xl font-bold">Siap Mengambil Kendali Finansial Anda?</h2>
                    <p class="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">Bergabunglah dengan ratusan profesional muda lainnya yang telah mengubah cara mereka mengelola uang.</p>
                    <div class="mt-8">
                        <Link :href="route('register')" class="bg-green-500 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-600 transition-all transform hover:scale-105 text-lg inline-block">
                            Daftar Sekarang & Coba Gratis
                        </Link>
                    </div>
                </div>
            </section>
        </main>

        <footer class="bg-slate-900 text-slate-400 py-12">
            <div class="container mx-auto px-6 text-center text-sm">
                <p>&copy; 2025 amf-fintech. Seluruh hak cipta dilindungi.</p>
            </div>
        </footer>
    </div>
</template>

<style>
/* Kita bisa menambahkan style global atau utility class di sini.
  Font Poppins akan kita impor melalui file blade utama.
*/
.gradient-bg {
    background: linear-gradient(135deg, #1e3a8a 0%, #312e81 100%);
}
</style>
