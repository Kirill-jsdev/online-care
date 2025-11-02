"use client";

import { Heart, Shield, Users, Award, CheckCircle, Clock, Star } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about-us" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider">
              О компании
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Команда профессионалов <br />
            <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">заботится о вас</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Мы команда квалифицированных медицинских специалистов, которые заботятся о вашем здоровье и комфорте
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left side - Features Cards */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Забота о пациентах</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Индивидуальный подход к каждому пациенту</p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Безопасность</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Соблюдение всех медицинских стандартов</p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Команда профи</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Опытные и квалифицированные специалисты</p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Качество</h4>
                <p className="text-gray-600 text-sm leading-relaxed">Высокие стандарты медицинского обслуживания</p>
              </div>
            </div>

            {/* Statistics */}
            <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl p-8 text-white shadow-xl">
              <h4 className="text-xl text-center font-bold mb-6">Наши показатели</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">20+</div>
                  <div className="text-blue-100 text-sm">лет опыта у наших медсестёр</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">7</div>
                  <div className="text-blue-100 text-sm">дней в неделю без выходных</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-blue-100 text-sm">видов процедур</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-blue-100 text-sm">стерильность инструментов и материалов</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />О компании Zabota
              </h3>
              <div className="space-y-5 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  <span className="font-semibold text-gray-900">Zabota</span> — это команда дипломированных медсестёр, которые приезжают к
                  вам домой, чтобы сделать всё безопасно, аккуратно и по стандартам. Мы работаем официально, с документами и соблюдением
                  всех медицинских протоколов.
                </p>
                <p>
                  Наши специалисты имеют высшее или среднее медицинское образование и многолетний опыт работы. Каждый регулярно проходит
                  обучение и повышение квалификации.
                </p>
                <p>
                  Мы понимаем, что не всегда удобно идти в клинику, особенно если нужно просто сделать укол, капельницу или перевязку.
                  Поэтому Zabota помогает получить медицинскую помощь в привычной и спокойной домашней обстановке.
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h4 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-teal-500" />
                Почему выбирают нас
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Профессиональные медсестры с опытом работы</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Все медицинские протоколы соблюдены</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Стерильные инструменты и материалы</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Удобство и комфорт вашего дома</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Официальная работа с документами</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-teal-600 rounded-3xl p-10 md:p-14 text-center text-white shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Наша миссия</h3>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-blue-50">
              Сделать качественную медицинскую помощь доступной и удобной для каждого, предоставляя профессиональные услуги в комфорте
              вашего дома
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
