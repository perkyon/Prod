import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, Phone, Mail, ArrowUp } from "lucide-react";

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: <Phone size={20} />,
      label: "Позвонить",
      action: () => window.location.href = "tel:+74951234567",
      color: "bg-blue-500 hover:bg-blue-600"
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      action: () => window.location.href = "mailto:info@buro-workshop.ru",
      color: "bg-purple-500 hover:bg-purple-600"
    },
    {
      icon: <MessageCircle size={20} />,
      label: "Telegram",
      action: () => window.open("https://t.me/buro_workshop", "_blank"),
      color: "bg-[#0088cc] hover:bg-[#0088cc]/90"
    },
    {
      icon: <ArrowUp size={20} />,
      label: "Наверх",
      action: () => window.scrollTo({ top: 0, behavior: 'smooth' }),
      color: "bg-gray-500 hover:bg-gray-600"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col gap-3 mb-3"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {actions.map((action, index) => (
              <motion.button
                key={index}
                onClick={action.action}
                className={`w-12 h-12 rounded-full ${action.color} text-white shadow-lg flex items-center justify-center group relative`}
                initial={{ opacity: 0, y: 20, scale: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {action.icon}
                
                {/* Tooltip */}
                <motion.div
                  className="absolute right-14 bg-gray-900 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none"
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {action.label}
                  <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900" />
                </motion.div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg flex items-center justify-center relative overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 45 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <MessageCircle size={24} />
        </motion.div>
        
        {/* Ripple effect */}
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-full"
          initial={{ scale: 0, opacity: 1 }}
          whileTap={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.4 }}
        />
      </motion.button>

      {/* Pulse animation when closed */}
      {!isOpen && (
        <motion.div
          className="absolute inset-0 bg-primary/30 rounded-full"
          animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </div>
  );
}