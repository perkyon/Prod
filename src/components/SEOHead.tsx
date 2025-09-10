import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEOHead({ 
  title = "BURO - Мастерская мебели и дизайн-проектов", 
  description = "Создаем уникальную мебель из натурального дерева и разрабатываем дизайн-проекты для HoReCa, домов и офисов. Полный цикл от идеи до воплощения.",
  keywords = "мебель из дерева, дизайн интерьера, HoReCa мебель, столярная мастерская, дизайн проекты, мебель на заказ",
  image = "https://images.unsplash.com/photo-1709346739762-e8ecacc96e0a",
  url = "https://buro-workshop.com"
}: SEOHeadProps) {
  
  useEffect(() => {
    // Обновляем title
    document.title = title;
    
    // Функция для обновления meta тега
    const updateMetaTag = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Основные meta теги
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'BURO Workshop');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
    updateMetaTag('language', 'ru');
    
    // Open Graph теги
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:url', url, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:site_name', 'BURO Workshop', 'property');
    updateMetaTag('og:locale', 'ru_RU', 'property');
    
    // Twitter Card теги
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    
    // Структурированные данные JSON-LD
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BURO",
      "url": url,
      "logo": image,
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Дальняя 8к1",
        "addressLocality": "Москва",
        "addressCountry": "RU"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+79952025404",
        "email": "sales@burodsn.ru",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://instagram.com/buro",
        "https://t.me/buro", 
        "https://wa.me/79952025404"
      ],
      "service": [
        {
          "@type": "Service",
          "name": "Изготовление мебели",
          "description": "Создание уникальной мебели из натурального дерева"
        },
        {
          "@type": "Service", 
          "name": "Дизайн интерьера",
          "description": "Разработка дизайн-проектов для HoReCa, домов и офисов"
        }
      ]
    };

    // Обновляем JSON-LD
    let jsonLdElement = document.querySelector('script[type="application/ld+json"]');
    if (!jsonLdElement) {
      jsonLdElement = document.createElement('script');
      jsonLdElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdElement);
    }
    jsonLdElement.textContent = JSON.stringify(structuredData);

    // Добавляем canonical URL
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.setAttribute('href', url);

  }, [title, description, keywords, image, url]);

  return null;
}