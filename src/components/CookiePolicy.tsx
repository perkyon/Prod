import { ArrowLeft } from "lucide-react";
import { useRouter } from "./Router";

export function CookiePolicy() {
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
          <h1 className="text-3xl font-medium mb-8">Политика использования Cookie</h1>
          
          <p className="text-muted-foreground mb-6">
            Действует с: 1 января 2024 года
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">1. Что такое Cookie</h2>
            <p className="text-muted-foreground mb-4">
              Cookie — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении веб-сайта. Они помогают сайту запомнить ваши действия и предпочтения на определенный период времени.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">2. Какие Cookie мы используем</h2>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">Необходимые Cookie</h3>
              <p className="text-muted-foreground mb-2">
                Эти Cookie необходимы для правильной работы сайта и не могут быть отключены:
              </p>
              <div className="text-muted-foreground space-y-1 ml-4">
                <p>• Сохранение настроек сайта</p>
                <p>• Обеспечение безопасности</p>
                <p>• Запоминание ваших действий в рамках сеанса</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Аналитические Cookie</h3>
              <p className="text-muted-foreground mb-2">
                Помогают нам понять, как посетители используют сайт:
              </p>
              <div className="text-muted-foreground space-y-1 ml-4">
                <p>• Google Analytics для анализа трафика</p>
                <p>• Информация о наиболее популярных страницах</p>
                <p>• Время, проведенное на сайте</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Функциональные Cookie</h3>
              <p className="text-muted-foreground mb-2">
                Улучшают функциональность сайта:
              </p>
              <div className="text-muted-foreground space-y-1 ml-4">
                <p>• Запоминание выбранного языка</p>
                <p>• Сохранение предпочтений пользователя</p>
                <p>• Персонализация контента</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">3. Cookie третьих лиц</h2>
            <p className="text-muted-foreground mb-4">
              Мы используем некоторые сервисы третьих лиц, которые могут устанавливать свои Cookie:
            </p>
            <div className="text-muted-foreground space-y-2">
              <p>• Google Analytics — для анализа посещаемости</p>
              <p>• Google Fonts — для загрузки шрифтов</p>
              <p>• Социальные сети — для кнопок "Поделиться"</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">4. Как управлять Cookie</h2>
            <p className="text-muted-foreground mb-4">
              Вы можете контролировать и/или удалять Cookie по своему желанию:
            </p>
            <div className="text-muted-foreground space-y-2">
              <p>• Настроить браузер для блокировки Cookie</p>
              <p>• Удалить все Cookie, сохраненные на компьютере</p>
              <p>• Настроить браузер для уведомления при получении Cookie</p>
            </div>
            <p className="text-muted-foreground mt-4">
              Обратите внимание, что отключение Cookie может повлиять на функциональность сайта.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">5. Обновления политики</h2>
            <p className="text-muted-foreground mb-4">
              Мы можем периодически обновлять эту политику. Рекомендуем регулярно проверять данную страницу для ознакомления с изменениями.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-medium mb-4">6. Контактная информация</h2>
            <div className="text-muted-foreground">
              <p>Если у вас есть вопросы по использованию Cookie:</p>
              <p>Email: privacy@buro-workshop.ru</p>
              <p>Телефон: +7 (495) 123-45-67</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}