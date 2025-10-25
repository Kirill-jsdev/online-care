"use client";

import React, { useEffect, useRef } from "react";
import { Clock, MapPin, Shield } from "lucide-react";

export function CallToAction() {
  const formContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !formContainerRef.current) return;

    // Check if script already added
    if (formContainerRef.current.querySelector("script")) return;

    const script = document.createElement("script");
    script.setAttribute("data-b24-form", "inline/1/zs19pm");
    script.setAttribute("data-skip-moving", "true");
    script.innerHTML = `(function(w,d,u){
      var s=d.createElement('script');
      s.async=true;
      s.src=u+'?'+(Date.now()/180000|0);
      var h=d.getElementsByTagName('script')[0];
      h.parentNode.insertBefore(s,h);
    })(window,document,'https://cdn-ru.bitrix24.kz/b35556208/crm/form/loader_1.js');`;

    formContainerRef.current.appendChild(script);
  }, []);

  return (
    <section id="cta" className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Готовы вызвать медсестру?</h2>
          <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
            Позвоните нам прямо сейчас, и мы организуем профессиональную медицинскую помощь на дому
          </p>
        </div>

        {/* Bitrix24 inline form container */}
        <div ref={formContainerRef} className="mt-8 mx-auto max-w-xl mb-8"></div>

        {/* Main CTA */}
        {/* <div className="text-center mb-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-left">
                <p className="text-blue-100 text-sm mb-1">Звоните круглосуточно</p>
                <a href="tel:+998900000000" className="text-2xl sm:text-3xl font-bold text-white hover:text-blue-200 transition-colors">
                  +998 (90) 000-00-00
                </a>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              asChild
            >
              <a href="tel:+998900000000">Позвонить сейчас</a>
            </Button>
          </div>
        </div> */}

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Быстрый отклик</h3>
            <p className="text-blue-100 text-sm">Организуем приезд медсестры в удобное для вас время</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Безопасность</h3>
            <p className="text-blue-100 text-sm">Все медсёстры имеют сертификаты и опыт работы</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">На дому</h3>
            <p className="text-blue-100 text-sm">Медицинская помощь в комфорте вашего дома</p>
          </div>
        </div>

        {/* Pricing reminder */}
        {/* <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-6 py-3 border border-white/20">
            <span className="text-blue-100">Стоимость:</span>
            <span className="text-xl font-bold text-white">от 200 000 сум</span>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default CallToAction;
