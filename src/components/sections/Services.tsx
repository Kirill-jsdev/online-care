import { Syringe, Droplets, Thermometer, Bandage, Pill, ShoppingBag, HeartPulse, Stethoscope } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Syringe,
      title: "Уколы и инъекции",
      description: "Внутримышечные и подкожные инъекции различных препаратов",
    },
    {
      icon: Droplets,
      title: "Капельницы",
      description: "Внутривенные капельные вливания в комфорте вашего дома",
    },
    {
      icon: Thermometer,
      title: "Измерение показателей",
      description: "Температура, давление, пульс и другие жизненные показатели",
    },
    {
      icon: Bandage,
      title: "Перевязки",
      description: "Обработка ран, смена повязок и послеоперационный уход",
    },
    {
      icon: HeartPulse,
      title: "ЭКГ на дому",
      description: "Снятие электрокардиограммы с портативным оборудованием",
    },
    {
      icon: Stethoscope,
      title: "Медицинские процедуры",
      description: "Постановка клизм, катетеризация, физиопроцедуры",
    },
    {
      icon: Pill,
      title: "Забор анализов",
      description: "Взятие крови и других биоматериалов для лабораторных исследований",
    },
    {
      icon: ShoppingBag,
      title: "Поход в аптеку",
      description: "Покупка и доставка необходимых медикаментов по рецепту",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Наши услуги</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Профессиональные медицинские услуги на дому. Все процедуры выполняются квалифицированными медсёстрами с использованием
            стерильного оборудования.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Important note */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-8 border border-blue-100">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Важная информация</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">✅ Что мы делаем:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Процедуры, не требующие сложного оборудования</li>
                  <li>• Услуги, которые может оказать медсестра</li>
                  <li>• Базовая медицинская помощь на дому</li>
                  <li>• Покупка медикаментов в аптеке</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">❌ Что мы НЕ делаем:</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Процедуры, требующие госпитализации</li>
                  <li>• Сложные диагностические исследования</li>
                  <li>• Хирургические вмешательства</li>
                  <li>• Процедуры, требующие клиническое оборудование</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
