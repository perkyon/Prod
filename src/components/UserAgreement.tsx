import { ArrowLeft } from "lucide-react";
import { useRouter } from "./Router";

export function UserAgreement() {
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
                  element.download = 'polzovatelskoe-soglashenie.html';
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

          <h1 className="text-3xl font-medium mb-8">Пользовательское соглашение</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">1. Общие положения</h2>
            <p className="text-muted-foreground mb-4">
              1.1. Настоящее Пользовательское соглашение (далее — Соглашение) регулирует отношения между BURO (далее — Администрация сайта) и пользователем сайта https://buro-workshop.ru (далее — Пользователь).
            </p>
            <p className="text-muted-foreground mb-4">
              1.2. Сайт https://buro-workshop.ru (далее — Сайт) является информационным ресурсом, предназначенным для ознакомления с услугами по дизайну интерьера, изготовлению и монтажу мебели.
            </p>
            <p className="text-muted-foreground mb-4">
              1.3. Использование сайта означает согласие с условиями настоящего Соглашения. Если Пользователь не согласен с условиями, он должен прекратить использование Сайта.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">2. Права и обязанности пользователей</h2>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">2.1. Пользователь имеет право:</h3>
              <div className="text-muted-foreground space-y-1 ml-4">
                <p>• Просматривать информацию на Сайте</p>
                <p>• Обращаться за консультациями</p>
                <p>• Заказывать услуги через формы обратной связи</p>
                <p>• Получать информацию о услугах и ценах</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">2.2. Пользователь обязуется:</h3>
              <div className="text-muted-foreground space-y-1 ml-4">
                <p>• Предоставлять достоверную информацию</p>
                <p>• Соблюдать требования законодательства РФ</p>
                <p>• Не нарушать работу Сайта</p>
                <p>• Не распространять вредоносное ПО</p>
                <p>• Уважать права интеллектуальной собственности</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">3. Обработка персональных данных</h2>
            <p className="text-muted-foreground mb-4">
              3.1. Администрация обрабатывает персональные данные Пользователя в соответствии с Политикой конфиденциальности.
            </p>
            <p className="text-muted-foreground mb-4">
              3.2. Предоставляя свои данные, Пользователь соглашается на их обработку для целей выполнения заказов и связи.
            </p>
            <p className="text-muted-foreground mb-4">
              3.3. Администрация обязуется не передавать персональные данные третьим лицам без согласия Пользователя, за исключением случаев, предусмотренных законодательством.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">4. Интеллектуальная собственность</h2>
            <p className="text-muted-foreground mb-4">
              4.1. Все материалы Сайта (тексты, изображения, графика, дизайн, программный код) являются объектами интеллектуальной собственности и охраняются авторским правом.
            </p>
            <p className="text-muted-foreground mb-4">
              4.2. Использование материалов Сайта без письменного разрешения Администрации запрещено.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">5. Ответственность</h2>
            <p className="text-muted-foreground mb-4">
              5.1. Администрация не несет ответственности за любые убытки, возникшие в результате использования Сайта.
            </p>
            <p className="text-muted-foreground mb-4">
              5.2. Пользователь несет полную ответственность за соблюдение требований настоящего Соглашения.
            </p>
            <p className="text-muted-foreground mb-4">
              5.3. В случае возникновения любых споров стороны стремятся решить их путем переговоров.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">6. Изменения соглашения</h2>
            <p className="text-muted-foreground mb-4">
              6.1. Администрация оставляет за собой право изменять условия настоящего Соглашения без предварительного уведомления.
            </p>
            <p className="text-muted-foreground mb-4">
              6.2. Новые условия вступают в силу с момента их размещения на Сайте.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">7. Контактная информация</h2>
            <div className="text-muted-foreground">
              <p>При возникновении вопросов по Соглашению обращайтесь:</p>
              <p>Email: legal@buro-workshop.ru</p>
              <p>Телефон: +7 (995) 202-54-04</p>
              <p>Адрес: г. Москва, ул. Дальняя, д. 8, к. 1</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}