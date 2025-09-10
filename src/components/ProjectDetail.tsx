import { useState } from "react";
import { ArrowLeft, X } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRouter } from "./Router";
import { projectsData } from "../data/projects";
import { SEOHead } from "./SEOHead";

export function ProjectDetail() {
  const { projectId, navigateTo } = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const project = projectsData.find(p => p.id === projectId);
  
  if (!projectId || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <SEOHead title="Проект не найден - BURO" />
        <div className="text-center">
          <h2 className="text-xl font-medium mb-4">Проект не найден</h2>
          <button 
            onClick={() => navigateTo('home')}
            className="bg-black text-white px-6 py-2 hover:bg-gray-800 transition-colors rounded-[10px]"
          >
            Вернуться на главную
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`${project.title} - ${project.categoryDisplay} - BURO`}
        description={project.description}
        image={project.image}
        keywords={`${project.title}, ${project.categoryDisplay}, дизайн интерьера, мебель`}
      />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 md:py-8">
        {/* Back Button */}
        <button
          onClick={() => navigateTo('home')}
          className="flex items-center space-x-2 text-foreground hover:opacity-60 transition-opacity mb-6 md:mb-8"
        >
          <ArrowLeft size={16} />
          <span className="text-sm">Назад к проектам</span>
        </button>

        {/* Project Header */}
        <div className="mb-8 md:mb-12">
          <span className="inline-block bg-black text-white px-3 py-1 text-xs font-medium mb-4 rounded-full">
            {project.categoryDisplay}
          </span>
          <h1 className="text-2xl md:text-4xl font-black mb-4 md:mb-6 tracking-tight leading-tight">
            {project.title.toUpperCase()}
          </h1>
          <p className="text-sm md:text-base text-foreground max-w-2xl leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 bg-muted p-4 md:p-8 mb-8 md:mb-12 rounded-[10px]">
          <div>
            <div className="text-xs text-muted-foreground mb-1">Площадь</div>
            <div className="text-sm font-medium">{project.details.area}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Срок</div>
            <div className="text-sm font-medium">{project.details.duration}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Год</div>
            <div className="text-sm font-medium">{project.details.year}</div>
          </div>
          <div>
            <div className="text-xs text-muted-foreground mb-1">Локация</div>
            <div className="text-sm font-medium">{project.details.location}</div>
          </div>
        </div>

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-8 md:mb-12">
            <h2 className="text-sm font-medium tracking-wide uppercase text-foreground mb-6 md:mb-8">
              Галерея проекта
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="group cursor-pointer overflow-hidden bg-muted aspect-[4/3] rounded-[10px] active:scale-95 transition-transform"
                  onClick={() => setSelectedImage(image)}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${project.title} - фото ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Description */}
        {(project.clientTask || (project.solution && project.solution.length > 0) || (project.workMoments && project.workMoments.length > 0) || (project.result && project.result.length > 0)) && (
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 mb-8 md:mb-12">
            <div className="space-y-6 md:space-y-8">
              {project.clientTask && (
                <div>
                  <h3 className="text-sm font-medium mb-3 md:mb-4">Задача клиента:</h3>
                  <p className="text-sm text-foreground leading-relaxed">
                    {project.clientTask}
                  </p>
                </div>
              )}

              {project.solution && project.solution.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium mb-3 md:mb-4">Решение:</h3>
                  <ul className="space-y-3">
                    {project.solution.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-6 md:space-y-8">
              {project.workMoments && project.workMoments.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium mb-3 md:mb-4">Моменты в процессе работы:</h3>
                  <ul className="space-y-3">
                    {project.workMoments.map((item, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-1 h-1 bg-black rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.result && project.result.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium mb-3 md:mb-4">Результат:</h3>
                  <div className="space-y-3 text-sm text-foreground">
                    {project.result.map((item, index) => (
                      <div key={index}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 md:mt-16 bg-black text-white p-8 md:p-12 text-center rounded-[10px]">
          <h3 className="text-lg font-medium mb-4">
            Хотите похожий проект?
          </h3>
          <p className="text-white/80 text-sm mb-6 md:mb-8 max-w-2xl mx-auto">
            Мы создадим для вас уникальный дизайн с учетом всех ваших пожеланий и особенностей пространства
          </p>
          <button
            onClick={() => {
              navigateTo('home');
              setTimeout(() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="bg-white text-black px-6 md:px-8 py-2 md:py-3 text-sm font-medium hover:bg-gray-100 active:scale-95 transition-all rounded-[10px]"
          >
            Обсудить проект
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={32} />
            </button>
            <ImageWithFallback
              src={selectedImage}
              alt={project.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}