import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useRouter } from "./Router";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const horecaProjects = [
  {
    id: 1,
    title: "SURF COFFEE",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2NzY3MzA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 2,
    title: "ЛОББИ ОТЕЛЯ",
    image: "https://images.unsplash.com/photo-1654355628827-860147b38be3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGxvYmJ5JTIwZGVzaWdufGVufDF8fHx8MTc1Njg1NjAxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 3,
    title: "РЕСТОРАН",
    image: "https://images.unsplash.com/photo-1669131196140-49591336b13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU2Nzg1NTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 7,
    title: "БАР",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXIlMjBkZXNpZ258ZW58MXx8fHwxNzU2ODg3MjIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

const homeOfficeProjects = [
  {
    id: 4,
    title: "СОВРЕМЕННАЯ КУХНЯ",
    image: "https://images.unsplash.com/photo-1682888813795-192fca4a10d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHttb2Rlcm4lMjBraXRjaGVuJTIwZGVzaWdufGVufDF8fHx8MTc1Njg1Mjg0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 5,
    title: "СТОЛОВАЯ",
    image: "https://images.unsplash.com/photo-1723750290151-164cb19ebab7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByb29tfGVufDF8fHx8MTc1NjczMDIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 6,
    title: "СПАЛЬНЯ",
    image: "https://images.unsplash.com/photo-1616418928117-4e6d19be2df1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc1Njg1NjAxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    id: 8,
    title: "ДОМАШНИЙ ОФИС",  
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwb2ZmaWNlJTIwZGVzaWdufGVufDF8fHx8MTc1Njg4NzIzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

interface ProjectCarouselProps {
  projects: typeof horecaProjects;
  title: string;
  onProjectClick: (projectId: number) => void;
}

function ProjectCarousel({ projects, title, onProjectClick }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  // Auto-update currentIndex based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current || isScrolling) return;
      
      const container = scrollRef.current;
      const cardWidth = container.children[0]?.clientWidth || 0;
      const gap = 24;
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      
      if (newIndex !== currentIndex && newIndex >= 0 && newIndex < projects.length) {
        setCurrentIndex(newIndex);
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [currentIndex, projects.length, isScrolling]);

  const slideLeft = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const slideRight = () => {
    const newIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      setIsScrolling(true);
      const cardWidth = scrollRef.current.children[0]?.clientWidth || 0;
      const gap = 24;
      scrollRef.current.scrollTo({
        left: index * (cardWidth + gap),
        behavior: 'smooth'
      });
      
      setTimeout(() => setIsScrolling(false), 500);
    }
  };

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium tracking-wide uppercase text-foreground">
          {title}
        </h2>
        
        {/* Progress bar */}
        <div className="flex items-center space-x-3">
          <div className="w-16 md:w-24 h-1 bg-gray-300 rounded-full overflow-hidden">
            <div 
              className="h-full bg-black transition-all duration-500 ease-out"
              style={{ 
                width: `${((currentIndex + 1) / projects.length) * 100}%` 
              }}
            />
          </div>
          <span className="text-xs text-muted-foreground">
            {currentIndex + 1}/{projects.length}
          </span>
        </div>
      </div>

      {/* Horizontal scroll for all devices */}
      <div className="w-full">
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth"
        >
          {projects.map((project) => (
            <div 
              key={project.id}
              className="cursor-pointer group flex-shrink-0 w-72 md:w-80 lg:w-96 snap-start"
              onClick={() => onProjectClick(project.id)}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-[10px] transition-all duration-300 group-hover:shadow-lg group-active:scale-95">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
              </div>
              <div className="mt-3 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium text-foreground">{project.title}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}

export function Projects() {
  const { navigateTo } = useRouter();

  const handleProjectClick = (projectId: number) => {
    navigateTo('project', { projectId: projectId.toString() });
  };

  return (
    <section id="projects" className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* HoReCa Projects */}
        <ProjectCarousel 
          projects={horecaProjects}
          title="ПРОЕКТЫ HORECA"
          onProjectClick={handleProjectClick}
        />

        {/* Home & Office Projects */}
        <ProjectCarousel 
          projects={homeOfficeProjects}
          title="ПРОЕКТЫ ДОМ И ОФИС"
          onProjectClick={handleProjectClick}
        />
      </div>
    </section>
  );
}