import { Link } from "react-router";
import { ArrowRight, Heart, Users, Lightbulb, Target, Shield, Globe } from "lucide-react";

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section - Emotional and Inspiring */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-200 shadow-sm">
              <Heart className="w-4 h-4 text-[#2563EB]" />
              <span className="text-sm font-medium text-gray-700">Öğrenci Girişimi · Sosyal Etki</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Erişilebilirlik İçin Mühendislik Çözümleri
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-4 leading-relaxed max-w-3xl mx-auto">
              Fiziksel engelli bireylerin teknolojiye erişimini artırmak için yapay zeka, bilgisayarlı görü ve düşük maliyetli donanım çözümleri geliştiriyorum.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 max-w-2xl mx-auto italic">
              Yenilikçi ve düşük maliyetli yardımcı teknolojiler araştırıp geliştirerek, engelli bireylerin teknolojiye erişimini demokratikleştirmeyi hedefliyorum.
            </p>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all text-base sm:text-lg"
            >
              Çözümlerimizi Keşfedin
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-6 sm:p-10 md:p-12 border border-red-100 shadow-lg">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Problem
                </h2>
                <p className="text-base sm:text-lg text-gray-800 leading-relaxed mb-4">
                  Dünyada milyonlarca fiziksel engelli birey, teknolojiye erişimde ciddi engellerle karşılaşıyor. Yardımcı teknolojiler genellikle:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <span className="text-base sm:text-lg">Çok pahalı ve erişilmesi zor</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <span className="text-base sm:text-lg">Karmaşık ve kullanıcı dostu değil</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
                    <span className="text-base sm:text-lg">Yetersiz ve güncel teknolojileri kullanmıyor</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-3xl mb-6 shadow-lg">
              <Target className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Misyonumuz
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              <span className="font-semibold text-[#2563EB]">Açık kaynak</span>, <span className="font-semibold text-[#7C3AED]">düşük maliyetli</span> ve <span className="font-semibold text-[#06B6D4]">kullanıcı dostu</span> yardımcı teknolojiler geliştirerek, fiziksel engelli bireylerin teknolojiye eşit ve özgür erişimini sağlamak.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Çözümlerimiz
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Yapay zeka ve modern mühendislik ile geliştirdiğimiz erişilebilir teknolojiler
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">👁️</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              Göz Takibi Sistemi
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Yapay zeka ile webcam kullanarak göz hareketleriyle bilgisayar kontrolü
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#2563EB] rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              Kafa Hareketi Kontrol
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Bilgisayarlı görü ile başı hareket ettirerek teknoloji kontrolü
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-[#06B6D4] to-[#7C3AED] rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">💨</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              Nefes ile Kontrol
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Nefes üfleme ve emme ile cihaz kontrolü sağlayan sensör sistemi
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">⚙️</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              Gyro Sensör Sistemi
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Hassas kafa hareketi takibi için gömülü sistem teknolojisi
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🔧</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              DIY Donanım Kitleri
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Açık kaynak, düşük maliyetli kendin yap yardımcı donanım çözümleri
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-2xl p-6 sm:p-8 text-white shadow-lg flex flex-col justify-center items-center text-center">
            <Globe className="w-12 h-12 mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-3">
              Daha Fazlası Yolda
            </h3>
            <p className="text-sm sm:text-base text-white/90">
              Sürekli araştırma ve geliştirme ile yeni çözümler üretiyoruz
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1d4ed8] font-semibold text-base sm:text-lg transition-colors"
          >
            Tüm Çözümleri İncele
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Impact and Vision */}
      <section className="bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 sm:mb-12 text-center">
              Sosyal Etki ve Vizyonumuz
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Topluluk Odaklı
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Açık kaynak yaklaşımımızla global bir topluluk oluşturuyor, bilgiyi paylaşıyor ve birlikte büyüyoruz.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-purple-200 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#2563EB] rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Sürekli İnovasyon
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  En yeni yapay zeka ve mühendislik teknolojilerini erişilebilirlik alanına taşıyarak fark yaratıyoruz.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-cyan-200 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#06B6D4] to-[#7C3AED] rounded-xl flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    İnsan Merkezli
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Her çözümümüzü gerçek kullanıcı ihtiyaçlarını dinleyerek ve onlarla birlikte tasarlayarak geliştiriyoruz.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-blue-200 shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    Erişilebilir Gelecek
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Teknolojinin herkes için erişilebilir olduğu, engellerin kalmadığı bir gelecek inşa ediyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#06B6D4] rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white shadow-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Birlikte Engelsiz Bir Dünya Kuralım
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            Projelerimize katkıda bulunmak, işbirliği yapmak veya daha fazla bilgi almak için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/solutions"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#2563EB] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg text-base sm:text-lg"
            >
              Çözümleri Keşfet
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all border-2 border-white/30 text-base sm:text-lg"
            >
              Hakkımızda
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}