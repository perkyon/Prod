import { ArrowLeft } from "lucide-react";
import { useRouter } from "./Router";

export function PublicOffer() {
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
          <div className="flex justify-between items-center mb-8">
            <div className="text-muted-foreground">
              Обновлено: 03.09.2025
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">
                Печать
              </button>
              <button className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-50">
                Скачать
              </button>
            </div>
          </div>

          <h1 className="text-3xl font-medium mb-8">Публичная оферта</h1>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">1. Общие положения</h2>
            <p className="text-muted-foreground mb-4">
              1.1. Настоящая Публичная оферта (далее — Оферта) является официальным предложением BURO (далее — Исполнитель) и содержит все существенные условия договора на оказание услуг по дизайну, изготовлению, поставке и/или монтажу мебели и предметов интерьера.
            </p>
            <p className="text-muted-foreground mb-4">
              1.2. Оферта является публичной в порядке, установленном ст. 437 ГК РФ. Акцептом Оферты считается оформление заявки на сайте https://perkyon.github.io/buro, направленное сообщение в мессенджерах, подтверждение по электронной почте или иное однозначное волеизъявление Заказчика, влекущее принятие условий Оферты.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">2. Предмет договора</h2>
            <p className="text-muted-foreground mb-4">
              2.1. По настоящей Оферте Исполнитель обязуется по заданию Заказчика выполнить работы и/или поставить продукцию, а Заказчик — принять и оплатить их на условиях, изложенных в Оферте и в согласованной спецификации.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">3. Порядок заключения договора</h2>
            <p className="text-muted-foreground mb-4">
              3.1. Заказ оформляется через форму на Сайте, по телефону или в мессенджерах. Заказчик обязан предоставить достоверную информацию, необходимую для выполнения заказа (размеры, материалы, сроки и пр.).
            </p>
            <p className="text-muted-foreground mb-4">
              3.2. Договор считается заключённым с момента акцепта Оферты и подтверждения Исполнителем условий заказа (стоимость, срок, техническое задание).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">4. Стоимость и порядок оплаты</h2>
            <p className="text-muted-foreground mb-4">
              4.1. Стоимость услуг и изделий определяется индивидуально и подтверждается в согласованной спецификации.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">5. Сроки выполнения</h2>
            <p className="text-muted-foreground mb-4">
              5.1. Сроки изготовления и поставки согласуются индивидуально для каждого заказа и указываются в спецификации.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">6. Права и обязанности сторон</h2>
            <p className="text-muted-foreground mb-4">
              6.1. Исполнитель обязуется выполнить работы качественно и в согласованные сроки.
            </p>
            <p className="text-muted-foreground mb-4">
              6.2. Заказчик обязуется предоставить необходимую для выполнения заказа информацию, обеспечить доступ к месту выполнения работ и принять выполненные работы.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">7. Гарантии</h2>
            <p className="text-muted-foreground mb-4">
              7.1. Исполнитель предоставляет гарантию на изготовленную мебель в соответствии с действующим законодательством.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">8. Ответственность сторон</h2>
            <p className="text-muted-foreground mb-4">
              8.1. За нарушение сроков выполнения заказа Исполнитель выплачивает неустойку в размере 0,1% от стоимости заказа за каждый день просрочки.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">9. Разрешение споров</h2>
            <p className="text-muted-foreground mb-4">
              9.1. Все споры разрешаются путем переговоров. При недостижении согласия споры передаются на рассмотрение в суд по месту нахождения Исполнителя.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">10. Заключительные положения</h2>
            <p className="text-muted-foreground mb-4">
              10.1. Настоящая Оферта действует до ее отзыва Исполнителем.
            </p>
            <p className="text-muted-foreground mb-4">
              10.2. Исполнитель вправе изменять условия настоящей Оферты в одностороннем порядке.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">11. Реквизиты Исполнителя</h2>
            <div className="text-muted-foreground">
              <p>BURO</p>
              <p>Адрес: г. Москва, ул. Дальняя, д. 8, к. 1</p>
              <p>Производство: г. Москва, ул. Постовая, д. 55</p>
              <p>Email: sales@burodsn.ru</p>
              <p>Телефон: +7 (995) 202-54-04</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}