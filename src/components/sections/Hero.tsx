"use client";

import { Button } from "@/components/ui/button";
import { Phone, Star, Send, Play } from "lucide-react";
import TopMenu from "../shared/TopMenu";
import OfferModal from "../shared/OfferModal";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 overflow-hidden">
      <HeroBackgroundStars />
      <TopMenu />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          {/* <InfoBadge /> */}

          {/* Main heading */}
          <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight animate-fade-in-up delay-200">
            Профессиональная{" "}
            <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">медсестра</span> к вам
            домой
          </h1>

          {/* Subtitle */}
          <p className="mb-6 sm:mb-10 max-w-2xl text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed animate-fade-in-up delay-400">
            Квалифицированный медицинский уход в комфорте вашего дома. Вызовите медсестру онлайн — быстро, безопасно и профессионально.
          </p>

          {/* CTA Buttons */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-600">
            <OfferModal actionLink="tel:+998959804004">
              <Button
                size="lg"
                className="w-full group bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex gap-2 items-center">
                  <Phone className="w-5 h-5" />
                  Позвонить нам
                </span>
              </Button>
            </OfferModal>

            <OfferModal actionLink="https://t.me/zabota_med">
              <Button
                size="lg"
                className="w-full group bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white border-0 px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-violet-500/25 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="flex gap-2 items-center">
                  <Send className="w-5 h-5" />
                  Написать в Телеграм
                </span>
              </Button>
            </OfferModal>

            <OfferModal actionLink="#cta">
              <Button
                variant="outline"
                size="lg"
                className="w-full group bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-1"
              >
                <span>Обратный звонок</span>
              </Button>
            </OfferModal>
          </div>

          <YouTubeVideoLink />

          <StatisticsBadge />
          {/* <ScrollIndicator /> */}
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-teal-400 rounded-full animate-ping delay-2000"></div>
      <div className="absolute bottom-32 left-20 w-1 h-1 bg-cyan-400 rounded-full animate-ping delay-3000"></div>
    </section>
  );
}

export default Hero;

const HeroBackgroundStars = () => {
  return (
    <div className="absolute inset-0">
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.01)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
};

const InfoBadge = () => {
  return (
    <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 text-sm text-white/90 animate-fade-in-up">
      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      <span>Новый сервис для вашего здоровья</span>
    </div>
  );
};

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>
  );
};

const YouTubeVideoLink = () => {
  return (
    <a
      href="https://youtube.com/shorts/OT8qB6DbzCc?si=q9Ki_jQfFwEb44Fn"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base animate-fade-in-up delay-700"
    >
      <div className="flex items-center justify-center w-7 h-7 bg-white/20 rounded-full group-hover:scale-110 transition-transform duration-300">
        <Play className="w-3.5 h-3.5 fill-white" />
      </div>
      <span className="font-medium">Приветствие от руководителя</span>
    </a>
  );
};

const StatisticsBadge = () => {
  return (
    <div className="mt-6 sm:mt-12 inline-flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-3 sm:px-6 py-2 sm:py-4 animate-fade-in-up delay-800">
      <div className="flex items-baseline gap-1">
        <span className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent">
          1000+
        </span>
      </div>
      <div className="h-8 sm:h-12 w-px bg-white/20"></div>
      <p className="text-xs sm:text-sm md:text-base text-white/90 leading-snug max-w-[150px] sm:max-w-xs">
        довольных нашими
        <br />
        медсестрами пациентов
      </p>
    </div>
  );
};
