"use client";

import { useState, ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface OfferModalProps {
  children: ReactNode;
  actionLink: string;
  actionText?: string;
}

export default function OfferModal({ children, actionLink, actionText = "Я согласен" }: OfferModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const handleChildClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const modalContent = isOpen ? (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 animate-fade-in">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose}></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-teal-600 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Публичная оферта</h2>
          <button onClick={handleClose} className="p-2 hover:bg-white/20 rounded-full transition-colors" aria-label="Закрыть">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(85vh-180px)]">
          <div className="prose prose-slate max-w-none">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Условия предоставления услуг</h3>

            <p className="text-gray-700 mb-4">
              Настоящая публичная оферта определяет условия предоставления медицинских услуг компанией "Zabota" (далее — Исполнитель)
              физическим лицам (далее — Заказчик).
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">1. Предмет договора</h4>
            <p className="text-gray-700 mb-4">
              1.1. Исполнитель обязуется оказать Заказчику медицинские услуги по вызову медицинской сестры на дом, а Заказчик обязуется
              принять и оплатить эти услуги.
            </p>
            <p className="text-gray-700 mb-4">
              1.2. Перечень услуг включает: постановку капельниц, выполнение инъекций, перевязки, взятие анализов и другие медицинские
              манипуляции в соответствии с квалификацией медицинского персонала.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">2. Права и обязанности сторон</h4>
            <p className="text-gray-700 mb-4">
              2.1. Исполнитель обязуется предоставить квалифицированного специалиста с соответствующим медицинским образованием и лицензией.
            </p>
            <p className="text-gray-700 mb-4">
              2.2. Заказчик обязуется предоставить достоверную информацию о состоянии здоровья и создать необходимые условия для оказания
              услуг.
            </p>
            <p className="text-gray-700 mb-4">
              2.3. Исполнитель гарантирует соблюдение всех санитарных норм и использование стерильных инструментов.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">3. Стоимость и порядок оплаты</h4>
            <p className="text-gray-700 mb-4">
              3.1. Стоимость услуг определяется действующим прайс-листом и согласовывается при оформлении заказа.
            </p>
            <p className="text-gray-700 mb-4">3.2. Оплата производится после оказания услуги наличными или безналичным способом.</p>

            <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">4. Конфиденциальность</h4>
            <p className="text-gray-700 mb-4">
              4.1. Исполнитель обязуется сохранять конфиденциальность всей медицинской и персональной информации Заказчика в соответствии с
              законодательством.
            </p>

            <h4 className="text-lg font-semibold text-gray-900 mb-3 mt-6">5. Ответственность</h4>
            <p className="text-gray-700 mb-4">
              5.1. Исполнитель несёт ответственность за качество оказанных услуг в пределах, установленных действующим законодательством.
            </p>
            <p className="text-gray-700 mb-4">
              5.2. Исполнитель не несёт ответственности за последствия, возникшие вследствие непредоставления Заказчиком полной и
              достоверной информации о состоянии здоровья.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gray-50 p-6 border-t border-gray-200 flex gap-4 justify-end">
          <button
            onClick={handleClose}
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-colors"
          >
            Отменить
          </button>
          <a
            href={actionLink}
            onClick={handleClose}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all inline-block"
          >
            {actionText}
          </a>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Обёртка для children с перехватом клика */}
      <div onClick={handleChildClick} className="cursor-pointer">
        {children}
      </div>

      {/* Portal для модального окна */}
      {mounted && modalContent && createPortal(modalContent, document.body)}
    </>
  );
}
