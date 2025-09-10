import { ArrowLeft } from "lucide-react";
import { useRouter } from "./Router";

export function PrivacyPolicy() {
  const { navigateTo } = useRouter();

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <button
          onClick={() => navigateTo('home')}
          className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span>Назад на главную</span>
        </button>

        <div className="prose prose-gray max-w-none">
          <h1 className="text-3xl font-medium mb-8">Политика конфиденциальности</h1>
          
          <p className="text-muted-foreground mb-6">
            Действует с: 1 января 2024 года
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">1. Общие положения</h2>
            <p className="text-muted-foreground mb-4">
              Настоящая Политика конфиденциальности персональных данных (далее — Политика) действует в отношении всей информации, которую мастерск��я мебели и дизайн-проектов BURO (далее — Компания) может получить о пользователе во время использования сайта.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">2. Какую информацию мы собираем</h2>
            <div className="text-muted-foreground space-y-2">
              <p>• Контактную информацию (имя, телефон, email)</p>
              <p>• Информацию о проекте (тип услуги, пожелания)</p>
              <p>• Техническую информацию (IP-адрес, тип браузера, операционная система)</p>
              <p>• Информацию о поведении на сайте (посещенные страницы, время на сайте)</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">3. Как мы используем информацию</h2>
            <div className="text-muted-foreground space-y-2">
              <p>• Для связи с вами по поводу вашего проекта</p>
              <p>• Для предоставления консультаций и услуг</p>
              <p>• Для улучшения качества обслуживания</p>
              <p>• Для отправки информационных материалов (с вашего согласия)</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">4. Защита персональных данных</h2>
            <p className="text-muted-foreground mb-4">
              Мы применяем необходимые технические и организационные меры для защиты персональных данных от неправомерного доступа, изменения, раскрытия или уничтожения.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">5. Передача данных третьим лицам</h2>
            <p className="text-muted-foreground mb-4">
              Мы не продаем, не обмениваем и не передаем персональные данные третьим лицам без вашего согласия, за исключением случаев, предусмотренных законодательством.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">6. Ваши права</h2>
            <div className="text-muted-foreground space-y-2">
              <p>• Право на доступ к своим персональным данным</p>
              <p>• Право на исправление неточных данных</p>
              <p>• Право на удаление данных</p>
              <p>• Право на отзыв согласия</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">7. Контактная информация</h2>
            <div className="text-muted-foreground">
              <p>По вопросам обработки персональных данных обращайтесь:</p>
              <p>Email: privacy@buro-workshop.ru</p>
              <p>Телефон: +7 (495) 123-45-67</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}