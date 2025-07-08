import { Monitor } from "lucide-react";

function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                <Monitor className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">eKIPA</span>
            </div>
            <p className="text-gray-400">Sistem e-Kinerja Pegawai untuk Dinas Komunikasi dan Informatika Kabupaten Mamuju Tengah</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kontak</h3>
            <div className="space-y-2 text-gray-400">
              <p>Dinas Kominfo Mamuju Tengah</p>
              <p>Jl. Trans Sulawesi, Mamuju Tengah</p>
              <p>Sulawesi Barat, Indonesia</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Layanan</h3>
            <div className="space-y-2 text-gray-400">
              <p>Penilaian Kinerja</p>
              <p>Manajemen Target</p>
              <p>Laporan & Analitik</p>
              <p>Dukungan Teknis</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dukungan</h3>
            <div className="space-y-2 text-gray-400">
              <p>Panduan Pengguna</p>
              <p>FAQ</p>
              <p>Pelatihan</p>
              <p>Bantuan Teknis</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} eKIPA - Dinas Kominfo Kabupaten Mamuju Tengah. Hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
