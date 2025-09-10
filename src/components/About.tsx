import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-base md:text-lg font-medium tracking-wide uppercase text-foreground mb-8 md:mb-12">
          О НАС
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
          {/* Left Column - Text */}
          <div className="lg:col-span-7">            
            <div className="space-y-4 md:space-y-6 text-sm md:text-base text-foreground leading-relaxed">
              <p>
                <strong>Бюро</strong> — авторская столярная мастерская полного цикла.
              </p>
              
              <p>
                Проектируем, изготавливаем и устанавливаем изделия из массива и шпона: столы, кухни, встроенные системы хранения, стеновые панели, нестандартные узлы.
              </p>
              
              <div className="space-y-3">
                <p><strong>Как работаем</strong></p>
                <p>— согласуем эскиз и чертёж;</p>
                <p>— подбираем материал по рисунку и тону;</p>
                <p>— раскрой/ЧПУ, присадка, шлифовка, финишные покрытия;</p>
                <p>— сборка и чистый монтаж.</p>
              </div>
              
              <div className="space-y-3">
                <p><strong>Наши стандарты</strong></p>
                <p>— геометрия до миллиметра, плотные стыки;</p>
                <p>— скрытая фурнитура и надёжные соединения;</p>
                <p>— покрытия, устойчивые к влаге и пятнам;</p>
                <p>— сопровождение после сдачи.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="lg:col-span-5 flex justify-center mt-8 lg:mt-0">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1497218770144-3fea6dbc33fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kd29ya2luZyUyMHdvcmtzaG9wJTIwY3JhZnRzbWFuJTIwZGVzaWdufGVufDF8fHx8MTc1Njg4Njg1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Мастер BURO за работой"
                className="w-full max-w-xs md:max-w-sm h-[400px] md:h-[600px] object-cover rounded-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}