import { Mail, Linkedin, Github, Heart, Lightbulb, Target, Sparkles, BookOpen, Rocket, GraduationCap, Code2 } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-blue-200 shadow-sm">
              <GraduationCap className="w-4 h-4 text-[#2563EB]" />
              <span className="text-sm font-medium text-gray-700">Öğrenci Girişimi</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Hakkımda
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Teknoloji ve sosyal sorumluluk birleştiğinde neler yapılabileceğine inanan bir üniversite öğrencisiyim.
            </p>
          </div>
        </div>
      </section>

      {/* Profile Section with Photo */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-200 shadow-xl">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              {/* Profile Photo */}
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-3xl blur-2xl opacity-20"></div>
                  <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-4 border-white shadow-2xl">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1765648636207-22c892e8fae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwcG9ydHJhaXQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MjI5MDE4NHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Profil Fotoğrafı"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Profile Text */}
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
                  <Code2 className="w-4 h-4 text-[#2563EB]" />
                  <span className="text-sm font-semibold text-[#2563EB]">Kurucu & Geliştirici</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Merhaba!
                </h2>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">
                  Ben <span className="font-semibold text-[#2563EB]">NoBarrierTech (Engelsiz Teknoloji)</span> girişiminin kurucusuyum. Bilgisayar mühendisliği öğrencisi olarak yapay zeka, bilgisayarlı görü ve gömülü sistemler alanında çalışıyorum.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Hedefim, teknolojinin toplumsal fayda için kullanılmasını sağlamak ve fiziksel engelli bireylerin dijital dünyaya erişimini kolaylaştırmak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-gradient-to-br from-purple-50 to-blue-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 sm:p-10 lg:p-12 border border-purple-200 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#7C3AED] to-[#2563EB] rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  Hikayem
                </h2>
              </div>
              <div className="space-y-4 sm:space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed">
                <p className="text-lg sm:text-xl font-semibold text-[#2563EB] italic">
                  "Teknoloji herkes için olmalı."
                </p>
                <p>
                  Lise dönemimde, <span className="font-semibold">bilgisayarlı görü teknolojisi kullanarak fiziksel engelli bireylerin göz ve kafa hareketleriyle bilgisayar kontrol edebilmesini sağlayan bir proje geliştirdim.</span> Bu deneyim, teknolojinin hayatları nasıl değiştirebileceğini ilk elden görmemi sağladı.
                </p>
                <p>
                  Bir <span className="font-semibold text-[#7C3AED]">sosyal etki ve teknoloji zirvesine</span> katıldıktan sonra, teknoloji ile sosyal sorumluluğu birleştirmenin önemini daha derin bir şekilde anladım. Gördüm ki:
                </p>
                <ul className="space-y-3 ml-4 sm:ml-6">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#2563EB] mt-2.5 flex-shrink-0"></span>
                    <span>Mevcut yardımcı teknolojiler <span className="font-semibold">çok pahalı</span> ve birçok kişi için erişilemez</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#7C3AED] mt-2.5 flex-shrink-0"></span>
                    <span>Modern teknolojiler (AI, bilgisayarlı görü) <span className="font-semibold">yeterince kullanılmıyor</span></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#06B6D4] mt-2.5 flex-shrink-0"></span>
                    <span>Açık kaynak yaklaşımıyla bu çözümleri <span className="font-semibold">demokratikleştirebiliriz</span></span>
                  </li>
                </ul>
                <p className="pt-2">
                  Bu motivasyonla <span className="font-bold text-[#2563EB]">NoBarrierTech</span> doğdu. Amacım, düşük maliyetli, açık kaynak ve kullanıcı dostu yardımcı teknolojiler geliştirerek, fiziksel engelli bireylerin teknolojiye eşit erişimini sağlamak.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Vision */}
          <div className="bg-gradient-to-br from-[#2563EB] via-[#7C3AED] to-[#06B6D4] rounded-3xl p-8 sm:p-10 lg:p-12 text-white shadow-xl">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-white/30">
              <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Vizyonum
            </h2>
            <p className="text-base sm:text-lg text-white/95 leading-relaxed mb-6">
              Fiziksel engelli her bireyin teknolojiye tam ve eşit erişebildiği, kendi potansiyelini özgürce gerçekleştirebildiği bir dünya yaratmak.
            </p>
            <p className="text-base sm:text-lg text-white/95 leading-relaxed">
              Yardımcı teknolojilerin <span className="font-bold">lüks değil, temel bir hak</span> olarak görüldüğü ve herkesin kolayca erişebildiği bir gelecek inşa etmek istiyorum.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-gray-200 shadow-xl">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#7C3AED] to-[#2563EB] rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Misyonum
            </h2>
            <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed">
              <p>
                <span className="font-semibold text-[#2563EB]">Açık kaynak</span>, <span className="font-semibold text-[#7C3AED]">düşük maliyetli</span> ve <span className="font-semibold text-[#06B6D4]">kullanıcı dostu</span> yardımcı teknolojiler araştırıp geliştirerek, fiziksel engelli bireylerin dijital dünyaya erişimini kolaylaştırmak.
              </p>
              <p>
                Öğrencilik dönemimde edindiğim mühendislik bilgisini ve teknolojiyi toplumsal fayda için kullanarak gerçek etki yaratan çözümler üretmek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why This Matters */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 sm:mb-12 text-center">
            Neden Bu Kadar Önemli?
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                Erişilebilirlik Bir Haktır
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Herkesin teknolojiye eşit erişim hakkı vardır. Fiziksel engeller, dijital dünyadan dışlanma sebebi olmamalıdır.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#7C3AED] to-[#2563EB] rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl sm:text-3xl">💰</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                Düşük Maliyet Şart
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Ticari yardımcı teknolojiler çok pahalı. Açık kaynak ve uygun maliyetli alternatifler geliştirmek hayati önem taşıyor.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#06B6D4] to-[#7C3AED] rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                Teknoloji Hızla Gelişiyor
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Yapay zeka ve bilgisayarlı görü gibi modern teknolojileri erişilebilirlik alanına taşımak, yeni fırsatlar yaratıyor.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#2563EB] to-[#7C3AED] rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl sm:text-3xl">🌍</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                Global Etki
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Açık kaynak yaklaşımıyla, geliştirdiğim çözümler dünya çapında kullanılabilir ve iyileştirilebilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-6 sm:p-10 lg:p-12 border border-cyan-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#06B6D4] to-[#2563EB] rounded-2xl flex items-center justify-center">
                <Rocket className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                Gelecek Hedeflerim
              </h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#06B6D4] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Projelerimizi Gerçekleştirmek
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700">
                    Araştırma ve geliştirme aşamasındaki çözümleri kullanılabilir ürünlere dönüştürmek
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#2563EB] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Açık Kaynak Topluluğu Oluşturmak
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700">
                    Gönüllü geliştiriciler ve kullanıcılarla birlikte büyüyerek daha iyi çözümler üretmek
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#7C3AED] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Kullanıcılarla Doğrudan Çalışmak
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700">
                    Gerçek ihtiyaçları anlamak için fiziksel engelli bireylerle daha fazla işbirliği yapmak
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#06B6D4] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                    Eğitim ve Farkındalık
                  </h4>
                  <p className="text-sm sm:text-base text-gray-700">
                    Erişilebilirlik konusunda toplumda farkındalık yaratmak ve teknoloji eğitimleri vermek
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact and Collaboration */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                İletişim ve İşbirliği
              </h2>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Projelerim hakkında konuşmak, katkıda bulunmak, işbirliği yapmak veya destek olmak için benimle iletişime geçebilirsiniz. Her türlü geri bildirime ve öneriye açığım!
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
              {/* Email */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 text-center hover:bg-white/15 transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#2563EB] to-[#06B6D4] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Email</h3>
                <a
                  href="mailto:iletisim@nobarriertech.com"
                  className="text-sm sm:text-base text-cyan-300 hover:text-cyan-200 transition-colors break-all"
                >
                  iletisim@nobarriertech.com
                </a>
              </div>

              {/* LinkedIn */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 text-center hover:bg-white/15 transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#7C3AED] to-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Linkedin className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">LinkedIn</h3>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  Beni Takip Edin
                </a>
              </div>

              {/* GitHub */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 text-center hover:bg-white/15 transition-all">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#06B6D4] to-[#7C3AED] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Github className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">GitHub</h3>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-cyan-300 hover:text-cyan-200 transition-colors"
                >
                  Kodları İncele
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#2563EB] via-[#7C3AED] to-[#06B6D4] rounded-2xl p-6 sm:p-8 text-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-3">
                Açık Kaynak Projelerime Katkıda Bulunun
              </h3>
              <p className="text-sm sm:text-base text-white/90 mb-6">
                Tüm projelerimi GitHub'da açık kaynak olarak paylaşıyorum. Geliştirici misiniz? Katkıda bulunmak ister misiniz?
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#2563EB] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg text-sm sm:text-base"
              >
                <Github className="w-5 h-5" />
                GitHub'da Keşfet
              </a>
            </div>

            <div className="mt-10 sm:mt-12 text-center">
              <p className="text-base sm:text-lg text-gray-300 italic">
                "Teknoloji, toplumsal sorunları çözmek için kullanıldığında gerçek değerini bulur."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
