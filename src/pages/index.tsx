import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BarChart3, Shield, Clock, CheckCircle, TrendingUp, Smartphone, Globe, Award, FileText, Calendar } from "lucide-react";
import Layout from "@/components/common/layout";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-indigo-600/10" />
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">Sistem Kinerja Digital</Badge>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    eKIPA
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">e-Kinerja Pegawai</span>
                  </h1>
                  <p className="text-xl text-gray-600 max-w-2xl">
                    Sistem informasi manajemen kinerja pegawai digital untuk Dinas Komunikasi dan Informatika Kabupaten Mamuju Tengah. Kelola kinerja dengan
                    mudah, transparan, dan akuntabel.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8">
                    Mulai Sekarang
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 border-gray-300 hover:bg-gray-50">
                    Pelajari Lebih Lanjut
                  </Button>
                </div>
                <div className="flex items-center space-x-8 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>100% Gratis</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-blue-500" />
                    <span>Aman & Terpercaya</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-indigo-500" />
                    <span>Akses 24/7</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative mx-auto w-full max-w-lg">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-20" />
                  <div className="relative bg-white rounded-2xl shadow-2xl p-8 border">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Dashboard Kinerja</h3>
                        <Badge className="bg-green-100 text-green-700">Aktif</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4">
                          <div className="flex items-center space-x-2">
                            <BarChart3 className="h-5 w-5 text-blue-600" />
                            <span className="text-sm font-medium text-gray-700">Target</span>
                          </div>
                          <p className="text-2xl font-bold text-blue-600 mt-2">85%</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-4">
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="h-5 w-5 text-green-600" />
                            <span className="text-sm font-medium text-gray-700">Realisasi</span>
                          </div>
                          <p className="text-2xl font-bold text-green-600 mt-2">92%</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Tugas Selesai</span>
                          <span className="font-medium text-gray-900">12/15</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2 rounded-full" style={{ width: "80%" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-indigo-100 text-indigo-700">Fitur Unggulan</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Kelola Kinerja dengan Lebih Efektif</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Fitur-fitur canggih yang memudahkan pengelolaan kinerja pegawai secara digital dan terintegrasi
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">Penilaian Kinerja</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Sistem penilaian kinerja yang objektif dan transparan dengan berbagai indikator yang dapat disesuaikan
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">Jadwal & Target</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Kelola jadwal kerja dan target kinerja dengan sistem reminder otomatis dan tracking progress real-time
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">Laporan & Analitik</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Dashboard analitik komprehensif dengan visualisasi data yang memudahkan pengambilan keputusan
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">Manajemen Tim</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Kelola tim dan struktur organisasi dengan sistem hierarki yang fleksibel dan mudah digunakan
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-600">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">Keamanan Data</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Sistem keamanan berlapis dengan enkripsi data dan kontrol akses yang ketat sesuai standar pemerintah
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-teal-600">
                      <Smartphone className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">Mobile Friendly</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Akses aplikasi dari mana saja dengan tampilan yang responsif di semua perangkat mobile dan desktop
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-green-100 text-green-700">Keunggulan Sistem</Badge>
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mengapa Memilih eKIPA?</h2>
                  <p className="text-xl text-gray-600">
                    Sistem yang dirancang khusus untuk kebutuhan instansi pemerintah dengan standar keamanan dan efisiensi tinggi
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Efisiensi Tinggi</h3>
                      <p className="text-gray-600">Menghemat waktu hingga 70% dalam proses penilaian kinerja pegawai</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Transparansi</h3>
                      <p className="text-gray-600">Sistem penilaian yang objektif dan dapat dipertanggungjawabkan</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                      <Clock className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Real-time Monitoring</h3>
                      <p className="text-gray-600">Pantau progress kinerja secara real-time dengan notifikasi otomatis</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-blue-100">Pegawai Aktif</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold">95%</div>
                      <div className="text-green-100">Tingkat Kepuasan</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold">24/7</div>
                      <div className="text-purple-100">Akses Online</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold">99.9%</div>
                      <div className="text-orange-100">Uptime Server</div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Siap Meningkatkan Kinerja Pegawai?</h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  Bergabunglah dengan sistem eKIPA dan rasakan kemudahan mengelola kinerja pegawai secara digital
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8">
                  Mulai Gratis Sekarang
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8">
                  Hubungi Tim Kami
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}
