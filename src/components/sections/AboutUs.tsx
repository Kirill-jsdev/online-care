import { Heart, Shield, Users, Award } from "lucide-react";

export function AboutUs() {
  return (
    <section id="about-us" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">О нас</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Мы команда квалифицированных медицинских специалистов, которые заботятся о вашем здоровье и комфорте
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left side - Text content */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Профессиональная медицинская помощь у вас дома</h3>
            <p className="text-lg text-gray-600 mb-6">
              Наш сервис предназначен для предоставления качественных медицинских услуг на дому. Мы понимаем, как важно получить
              профессиональную помощь в комфортной домашней обстановке.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Все наши медсестры имеют высшее медицинское образование, профессиональный опыт работы и регулярно проходят курсы повышения
              квалификации.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">до 20+</div>
                <div className="text-gray-600">Лет стажа медсестер</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">7</div>
                <div className="text-gray-600">Дней в неделю</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">15+</div>
                <div className="text-gray-600">Видов процедур</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-500 mb-2">100%</div>
                <div className="text-gray-600">Стерильность</div>
              </div>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <div className="bg-slate-50 rounded-lg p-6 text-center group hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Забота о пациентах</h4>
              <p className="text-gray-600 text-sm">Индивидуальный подход к каждому пациенту</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-slate-50 rounded-lg p-6 text-center group hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Безопасность</h4>
              <p className="text-gray-600 text-sm">Соблюдение всех медицинских стандартов</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-slate-50 rounded-lg p-6 text-center group hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Команда профи</h4>
              <p className="text-gray-600 text-sm">Опытные и квалифицированные специалисты</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-slate-50 rounded-lg p-6 text-center group hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Качество</h4>
              <p className="text-gray-600 text-sm">Высокие стандарты медицинского обслуживания</p>
            </div>
          </div>
        </div>

        {/* Mission statement */}
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Наша миссия</h3>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Сделать качественную медицинскую помощь доступной и удобной для каждого, предоставляя профессиональные услуги в комфорте вашего
            дома
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
