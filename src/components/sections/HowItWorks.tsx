"use client";

import { Phone, Clock, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import OfferModal from "@/components/shared/OfferModal";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Как это работает</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">Простой и быстрый процесс вызова медсестры на дом</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Звоните нам</h3>
            <p className="text-gray-600">Позвоните в наш колл-центр и опишите необходимые медицинские услуги</p>
          </div>

          {/* Step 2 */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Назначаем время</h3>
            <p className="text-gray-600">Мы согласовываем удобное время приезда медсестры к вам домой</p>
          </div>

          {/* Step 3 */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Приезжаем к вам</h3>
            <p className="text-gray-600">Квалифицированная медсестра приезжает к вам домой в назначенное время</p>
          </div>

          {/* Step 4 */}
          <div className="text-center group">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                4
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Оказываем помощь</h3>
            <p className="text-gray-600">Проводим необходимые процедуры профессионально и безопасно</p>
          </div>
        </div>

        {/* Price highlight */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full px-8 py-4 text-white">
            <span className="text-lg font-medium">Стоимость вызова:</span>
            <span className="text-2xl font-bold">от 200 000 сум</span>
          </div>
          <p className="mt-4 text-gray-600">Окончательная стоимость определяется после созвона с колл центром</p>

          {/* Call button */}
          <div className="mt-8">
            <OfferModal actionLink="tel:+998959804004">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5" />
                Позвонить нам
              </Button>
            </OfferModal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
