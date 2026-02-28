import { Eye, Move, Compass, Wind, Wrench, Cpu, Camera, Zap, Code, Play } from "lucide-react";

export function Solutions() {
  return (
    <div className="w-full">
      {/* Hero Section - Technical and Futuristic */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#1e3a8a] to-[#581c87] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Cpu className="w-4 h-4" />
              <span className="text-sm font-medium">Ar-Ge & İnovasyon</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Mühendislik ve Yapay Zeka ile Engelsiz Teknoloji
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Bilgisayarlı görü, yapay zeka, sensör teknolojileri ve gömülü sistemler kullanarak fiziksel engelli bireyler için erişilebilir çözümler geliştiriyorum.
            </p>
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-4 py-3 rounded-xl border border-yellow-400/30">
              <Zap className="w-5 h-5 text-yellow-300" />
              <span className="text-sm sm:text-base text-yellow-100 font-medium">
                Bu projeler araştırma ve geliştirme aşamasındadır
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="bg-gray-50 py-12 sm:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-8 text-center">
            Kullandığımız Teknolojiler
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center border border-gray-200 shadow-sm">
              <Camera className="w-8 h-8 text-[#2563EB] mx-auto mb-3" />
              <p className="text-xs sm:text-sm font-semibold text-gray-900">Bilgisayarlı Görü</p>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center border border-gray-200 shadow-sm">
              <Cpu className="w-8 h-8 text-[#7C3AED] mx-auto mb-3" />
              <p className="text-xs sm:text-sm font-semibold text-gray-900">Yapay Zeka</p>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center border border-gray-200 shadow-sm">
              <Compass className="w-8 h-8 text-[#06B6D4] mx-auto mb-3" />
              <p className="text-xs sm:text-sm font-semibold text-gray-900">Sensör Füzyonu</p>
            </div>
            <div className="bg-white rounded-xl p-4 sm:p-6 text-center border border-gray-200 shadow-sm">
              <Code className="w-8 h-8 text-[#2563EB] mx-auto mb-3" />
              <p className="text-xs sm:text-sm font-semibold text-gray-900">Gömülü Sistemler</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution 1: Eye Tracking with Video */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Content */}
            <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4 w-fit">
                <Eye className="w-4 h-4 text-[#2563EB]" />
                <span className="text-sm font-semibold text-[#2563EB]">Yapay Zeka</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Webcam ile Göz Takibi Sistemi
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                Derin öğrenme algoritmaları ve bilgisayarlı görü teknolojisi kullanarak, standart bir web kamerası ile göz hareketlerinizi algılayan ve fare kontrolü sağlayan yapay zeka tabanlı sistem.
              </p>

              {/* Problem → Solution */}
              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <h4 className="text-sm font-bold text-red-900 mb-2">Problem</h4>
                  <p className="text-xs sm:text-sm text-red-800">
                    Elleri kullanamayan bireyler için bilgisayar kontrolü büyük zorluk
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <h4 className="text-sm font-bold text-green-900 mb-2">Çözüm</h4>
                  <p className="text-xs sm:text-sm text-green-800">
                    Göz bebeği takibi ile fare imleci kontrolü
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-bold text-gray-900 mb-3">Teknolojiler</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                    Derin Öğrenme
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                    OpenCV
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                    Real-time Processing
                  </span>
                </div>
              </div>

              {/* Target Users */}
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-3">Kimler İçin?</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-1.5"></span>
                    Omurilik yaralanmaları
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-1.5"></span>
                    ALS hastaları
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-1.5"></span>
                    Serebral palsi
                  </li>
                </ul>
              </div>
            </div>

            {/* Video Placeholder */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 sm:p-10 lg:p-12 flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-0 order-1 lg:order-2">
              <div className="text-center text-white">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/30">
                  <Play className="w-10 h-10 sm:w-12 sm:h-12 ml-1" />
                </div>
                <p className="text-sm sm:text-base text-white/80 font-medium">Demo Video</p>
                <p className="text-xs sm:text-sm text-white/60 mt-1">Göz takibi sistemi çalışırken</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution 2: Head Movement with Video */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Video Placeholder */}
              <div className="bg-gradient-to-br from-purple-900 to-blue-900 p-6 sm:p-10 lg:p-12 flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-0">
                <div className="text-center text-white">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-white/30">
                    <Play className="w-10 h-10 sm:w-12 sm:h-12 ml-1" />
                  </div>
                  <p className="text-sm sm:text-base text-white/80 font-medium">Demo Video</p>
                  <p className="text-xs sm:text-sm text-white/60 mt-1">Kafa hareketi ile kontrol</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-purple-100 px-3 py-1 rounded-full mb-4 w-fit">
                  <Move className="w-4 h-4 text-[#7C3AED]" />
                  <span className="text-sm font-semibold text-[#7C3AED]">Hareket İzleme</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Webcam ile Kafa Hareketi Kontrol
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                  Yüz tanıma ve hareket izleme teknolojisi kullanarak kafa hareketlerinizi fare komutlarına dönüştüren erişilebilir çözüm.
                </p>

                {/* Problem → Solution */}
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                    <h4 className="text-sm font-bold text-red-900 mb-2">Problem</h4>
                    <p className="text-xs sm:text-sm text-red-800">
                      El kullanımı kısıtlı olanlar için hassas kontrol zor
                    </p>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <h4 className="text-sm font-bold text-green-900 mb-2">Çözüm</h4>
                    <p className="text-xs sm:text-sm text-green-800">
                      Kafa hareketleri ile doğal fare kontrolü
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-3">Teknolojiler</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200">
                      Yüz Tanıma
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200">
                      Motion Tracking
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 border border-purple-200">
                      Kalibrasyon
                    </span>
                  </div>
                </div>

                {/* Target Users */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-3">Kimler İçin?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-1.5"></span>
                      Üst ekstremite felçleri
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-1.5"></span>
                      Romatoid artrit
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-1.5"></span>
                      Distrofi hastaları
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution 3: Gyro Sensor */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4 w-fit border border-white/30">
                <Compass className="w-4 h-4" />
                <span className="text-sm font-semibold">Gömülü Sistemler</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                Gyro Sensör ile Kafa Kontrol Sistemi
              </h2>
              <p className="text-base sm:text-lg text-white/90 mb-6 leading-relaxed">
                IMU sensörler ve sensör füzyonu teknolojisi kullanarak ortam şartlarından bağımsız, yüksek hassasiyetli kafa hareketi takibi.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 mb-6 border border-white/20">
                <h4 className="text-sm font-bold mb-3">Avantajları</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm">
                    <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    Aydınlatmadan bağımsız çalışma
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    Yüksek hassasiyet ve düşük gecikme
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    Düşük güç tüketimi
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold mb-3">Kimler İçin?</h4>
                <p className="text-sm text-white/80">
                  Quadriplegia, İleri MS, Kas-iskelet hastalıkları
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-10 lg:p-12 flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-0">
              <div className="text-center text-white">
                <Compass className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 text-cyan-400" />
                <p className="text-sm sm:text-base text-white/80 font-medium">Gyro Sensör</p>
                <p className="text-xs sm:text-sm text-white/60 mt-1">IMU Teknolojisi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution 4: Sip and Puff */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-6 sm:p-10 lg:p-12 flex items-center justify-center min-h-[300px] sm:min-h-[400px] lg:min-h-0">
                <div className="text-center text-white">
                  <Wind className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4" />
                  <p className="text-sm sm:text-base text-white/80 font-medium">Sip & Puff</p>
                  <p className="text-xs sm:text-sm text-white/60 mt-1">Basınç Sensörü Sistemi</p>
                </div>
              </div>

              <div className="p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-indigo-100 px-3 py-1 rounded-full mb-4 w-fit">
                  <Wind className="w-4 h-4 text-indigo-600" />
                  <span className="text-sm font-semibold text-indigo-600">Donanım</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Sip-Puff (Nefes ile Kontrol)
                </h2>
                <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                  Hassas basınç sensörleri ile nefes akışını algılayarak tıklama, sürükleme gibi komutlar üreten donanım arayüzü.
                </p>

                <div className="bg-blue-50 rounded-xl p-4 sm:p-6 mb-6 border border-blue-200">
                  <h4 className="text-sm font-bold text-blue-900 mb-3">Nasıl Çalışır?</h4>
                  <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
                    Nefes üfleme (puff) ve emme (sip) hareketlerini algılayarak farklı bilgisayar komutlarına dönüştürür. Minimal motor fonksiyona sahip kullanıcılar için ideal çözüm.
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-3">Kimler İçin?</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5"></span>
                      Yüksek seviye felç
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5"></span>
                      Locked-in sendromu
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5"></span>
                      İleri ALS
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution 5: DIY Kits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl overflow-hidden shadow-xl">
          <div className="p-6 sm:p-10 lg:p-12 text-white">
            <div className="max-w-3xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full mb-4 border border-white/30">
                <Wrench className="w-4 h-4" />
                <span className="text-sm font-semibold">Açık Kaynak</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                DIY Yardımcı Donanım Kitleri
              </h2>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed">
                3D baskı, Arduino ve düşük maliyetli elektronik bileşenler kullanarak herkesin yapabileceği açık kaynak yardımcı donanım çözümleri.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-xl sm:text-2xl">💰</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold mb-2">Düşük Maliyet</h4>
                <p className="text-xs sm:text-sm text-white/80">
                  Ticari ürünlerin bir kısmı fiyatına
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-xl sm:text-2xl">🔓</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold mb-2">Açık Kaynak</h4>
                <p className="text-xs sm:text-sm text-white/80">
                  Tüm tasarımlar ve kodlar paylaşımlı
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-xl sm:text-2xl">🎨</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold mb-2">Özelleştirilebilir</h4>
                <p className="text-xs sm:text-sm text-white/80">
                  Kişisel ihtiyaçlara göre uyarlanabilir
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-xl sm:text-2xl">👥</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold mb-2">Topluluk</h4>
                <p className="text-xs sm:text-sm text-white/80">
                  Global maker topluluğu desteği
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 sm:mb-12 text-center">
              Teknik Özellikler ve Standartlar
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#06B6D4] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-1">Açık Kaynak</h4>
                  <p className="text-sm text-gray-300">
                    Tüm yazılım ve donanım tasarımları GitHub'da
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#2563EB] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-1">Cross-Platform</h4>
                  <p className="text-sm text-gray-300">
                    Windows, macOS, Linux desteği
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#06B6D4] to-[#7C3AED] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-1">Düşük Donanım</h4>
                  <p className="text-sm text-gray-300">
                    Standart webcam ve uygun maliyetli sensörler
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#7C3AED] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold mb-1">Real-time</h4>
                  <p className="text-sm text-gray-300">
                    Düşük gecikme ve yüksek hassasiyet
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}