import { useState } from 'react';
import { RequestModal } from './RequestModal';

export function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header and contact info in horizontal layout exactly like screenshot */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12 md:mb-16">
          <h2 className="text-base md:text-lg font-bold tracking-wide uppercase text-foreground mb-6 md:mb-0">
            КОНТАКТЫ
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-16">
            <div className="flex flex-col gap-1">
              <div className="text-xs md:text-sm text-foreground">г. Краснодар ул. Дальняя 8к1</div>
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="text-xs md:text-sm text-foreground">sales@burodsn.ru</div>
              <div className="text-xs md:text-sm text-foreground">89282412720</div>
            </div>
          </div>
        </div>

        {/* Large BURO Logo */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-[4rem] sm:text-[6rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black text-black leading-none tracking-tighter">
            BURO
          </h1>
        </div>

        {/* Request Button */}
        <div className="text-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white px-6 md:px-8 py-2 md:py-3 text-xs md:text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-200 rounded-[10px]"
          >
            ОСТАВИТЬ ЗАЯВКУ
          </button>
        </div>

        <RequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  );
}