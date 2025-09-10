import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Portfolio() {
  const projects = [
    {
      title: "Минималистичная кухня",
      category: "Кухни",
      image: "https://images.unsplash.com/photo-1680209080996-7f016174f2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZnVybml0dXJlJTIwZGVzaWdufGVufDF8fHx8MTc1NjY3MTg3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Современная кухня в скандинавском стиле с акцентом на функциональность"
    },
    {
      title: "Дизайн гостиной",
      category: "Интерьеры",
      image: "https://images.unsplash.com/photo-1738748444659-f8975b12ce57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMHByb2plY3R8ZW58MXx8fHwxNTY3MDczNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Просторная гостиная с авторской мебелью и современными решениями"
    },
    {
      title: "Рабочий кабинет",
      category: "Мебель",
      image: "https://images.unsplash.com/photo-1616045152636-8dc45bf00e4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmdXJuaXR1cmUlMjB3b3Jrc2hvcCUyMGludGVyaW9yfGVufDF8fHx8MTc1NjcwNzM1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Эргономичное рабочее пространство с индивидуальными системами хранения"
    },
    {
      title: "Спальня в эко-стиле",
      category: "Интерьеры",
      image: "https://images.unsplash.com/photo-1601811617286-1a57da60328f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmUlMjBjcmFmdGluZ3xlbnwxfHx8fDE3NTY3MDczNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      description: "Уютная спальня с использованием натуральных материалов и мягких тонов"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-medium tracking-tight">
            Наши работы
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждый проект — это история, рассказанная через дизайн и качество исполнения
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl bg-muted">
                <div className="aspect-[4/3]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="space-y-2">
                    <div className="text-sm text-white/80">{project.category}</div>
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <p className="text-sm text-white/90">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-border px-8 py-3 rounded-lg hover:bg-accent transition-colors">
            Посмотреть все работы
          </button>
        </div>
      </div>
    </section>
  );
}