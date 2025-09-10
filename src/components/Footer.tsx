import { Instagram, MessageCircle, Send } from "lucide-react";
import { useRouter } from "./Router";

export function Footer() {
  const { navigateTo } = useRouter();

  const socialLinks = [
    { 
      icon: Instagram, 
      url: "https://www.instagram.com/buro.house?igsh=MXNudnNnamlob2c1NQ==",
      label: "Instagram"
    },
    { 
      icon: MessageCircle, 
      url: "https://t.me/+ms6fdSYzjhxkYTky",
      label: "Telegram"
    },
    { 
      icon: Send, 
      url: "https://wa.me/89282412720",
      label: "WhatsApp"
    },
    {
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4.03 8.57 4.03 8.096c0-.254.102-.49.593-.49h1.744c.441 0 .61.203.779.678.881 2.508 2.354 4.708 2.947 4.708.229 0 .33-.102.33-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.204.169-.407.441-.407h2.743c.373 0 .508.203.508.643v3.473c0 .372.169.508.271.508.229 0 .407-.136.813-.542 1.27-1.422 2.18-3.617 2.18-3.617.119-.254.322-.49.763-.49h1.744c.525 0 .644.271.525.643-.254 1.02-2.456 4.004-2.456 4.004-.203.305-.271.441 0 .763.203.254.864.847 1.32 1.354.795.881 1.388 1.624 1.388 2.15 0 .525-.423.797-.932.797z"/>
        </svg>
      ),
      url: "https://vk.com/buro.workshop",
      label: "VK"
    },
    {
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.110.221.082.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.548.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
        </svg>
      ),
      url: "https://pinterest.com",
      label: "Pinterest"
    }
  ];

  return (
    <footer className="bg-background py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Social Links - Horizontal layout */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="flex flex-row gap-2 md:gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg"
                title={social.label}
              >
                <social.icon className="w-3 h-3 md:w-4 md:h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Legal Links - Centered */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 text-xs text-muted-foreground">
          <button
            onClick={() => navigateTo('terms')}
            className="hover:opacity-60 transition-opacity duration-200 px-2 py-1"
          >
            Политика конфиденциальности
          </button>
          <button
            onClick={() => navigateTo('offer')}
            className="hover:opacity-60 transition-opacity duration-200 px-2 py-1"
          >
            Публичная оферта
          </button>
          <button
            onClick={() => navigateTo('agreement')}
            className="hover:opacity-60 transition-opacity duration-200 px-2 py-1"
          >
            Пользовательское соглашение
          </button>
        </div>
      </div>
    </footer>
  );
}