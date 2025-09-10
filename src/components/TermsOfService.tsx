import { ArrowLeft } from "lucide-react";
import { useRouter } from "./Router";

export function TermsOfService() {
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
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div className="text-muted-foreground">
              Обновлено: 03.09.2025
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => window.print()}
                className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                Печать
              </button>
              <button 
                onClick={() => {
                  const element = document.createElement('a');
                  const file = new Blob([document.documentElement.outerHTML], {type: 'text/html'});
                  element.href = URL.createObjectURL(file);
                  element.download = 'politika-konfidencialnosti.html';
                  document.body.appendChild(element);
                  element.click();
                  document.body.removeChild(element);
                }}
                className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50 transition-colors"
              >
                Скачать
              </button>
            </div>
          </div>

          <h1 className="text-3xl font-medium mb-8">Политика конфиденциальности</h1>
          
          <p className="text-muted-foreground mb-6">
            Действует с: 1 января 2024 года
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">1. Общие положения</h2>
            <p className="text-muted-foreground mb-4">
              Настоящее Пользовательское соглашение (далее — Соглашение) р��гулирует отношения между мастерской мебели и дизайн-проектов BURO (далее — Компания) и пользователями сайта (далее — Пользователь).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">2. Предмет соглашения</h2>
            <p className="text-muted-foreground mb-4">
              Компания предоставляет Пользователю доступ к информации о услугах, возможность связаться с Компанией для получения консультации и заказа услуг по изготовлению мебели и дизайну интерьеров.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">3. Услуги</h2>
            <div className="text-muted-foreground space-y-2">
              <p>• Изготовление мебели по индивидуальным проектам</p>
              <p>• Дизайн интерьера жилых и коммерческих помещений</p>
              <p>• Декорирование и оформление пространств</p>
              <p>• Реставрация мебели</p>
              <p>• Консультационные услуги</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">4. Права и обязанности Компании</h2>
            <div className="text-muted-foreground space-y-2">
              <p>• Предоставлять качественные услуги в соответствии с договором</p>
              <p>• Соблюдать сроки выполнения работ</p>
              <p>• Предоставлять гарантию на выполненные работы</p>
              <p>• Консультировать клиентов по вопросам услуг</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">5. Права и обязанности Пользователя</h2>
            <div className="text-muted-foreground space-y-2">
              <p>• Предоставлять достоверную информацию при обращении</p>
              <p>• Соблюдать условия договора на оказание услуг</p>
              <p>• Своевременно производить оплату согласно договору</p>
              <p>• Обеспечивать доступ к объекту для выполнения работ</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">6. Порядок оказания услуг</h2>
            <div className="text-muted-foreground space-y-2">
              <p>1. Первичная консультация (бесплатно)</p>
              <p>2. Замеры и техническое задание</p>
              <p>3. Составление договора и внесение предоплаты</p>
              <p>4. Выполнение работ</p>
              <p>5. Сдача-приемка работ и окончательный расчет</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">7. Гарантийные обязательства</h2>
            <p className="text-muted-foreground mb-4">
              Компания предоставляет гарантию на изготовленную мебель сроком от 1 до 5 лет в зависимости от типа изделия и материалов. Гарантия на дизайн-проекты составляет 1 год.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">8. Ответственность сторон</h2>
            <p className="text-muted-foreground mb-4">
              Стороны несут ответственность за неисполнение или ненадлежащее исполнение своих обязательств в соответствии с действующим законодательством РФ.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">9. Контактная информация</h2>
            <div className="text-muted-foreground">
              <p>ИП Иванов Иван Иванович</p>
              <p>Email: info@buro-workshop.ru</p>
              <p>Телефон: +7 (495) 123-45-67</p>
              <p>Адрес: г. Москва, ул. Дизайнерская, 15</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}