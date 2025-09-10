export function Services() {
  const services = [
    {
      title: "Дизайн интерьера",
      description: "Комплексное планирование и визуализация пространства"
    },
    {
      title: "Изготовление мебели",
      description: "Индивидуальные решения из натурального дерева"
    },
    {
      title: "Декорирование",
      description: "Финальные штрихи и аксессуары для завершения образа"
    },
    {
      title: "Реставрация",
      description: "Восстановление антикварной и винтажной мебели"
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 block md:hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-4 bg-white/50 rounded-[10px] backdrop-blur-sm"
            >
              <h3 className="text-sm font-medium text-foreground mb-2 leading-tight">
                {service.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}