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

  // Блокировка скролла страницы при открытии модального окна
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

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
            <div className="mb-6 space-y-4">
              <p className="text-gray-800 text-base leading-relaxed">
                <span className="font-semibold">"Я согласен"</span> tugmasini bosish orqali siz ommaviy oferta shartnomasini o'qib
                chiqqanligingizni va qoidalarga roziligingizni tasdiqlaysiz.
              </p>
              <p className="text-gray-800 text-base leading-relaxed">
                Нажав кнопку <span className="font-semibold">"Я Согласен"</span> - вы подтверждаете что ознакомились с договором публичной
                офертой и согласились с правилами.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="/publicOfferAgreement-uz.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-lg transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">Ommaviy oferta (O'zbekcha)</h4>
                  <p className="text-sm text-gray-600">PDF hujjatni ochish</p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <a
                href="/publicOfferAgreement-ru.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 border border-blue-200 rounded-lg transition-colors group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Публичная оферта (Русский)</h4>
                  <p className="text-sm text-gray-600">Открыть PDF документ</p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
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
            target={actionLink.startsWith("http") ? "_blank" : undefined}
            rel={actionLink.startsWith("http") ? "noopener noreferrer" : undefined}
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
