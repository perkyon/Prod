import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Checkbox } from './ui/checkbox';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { useRouter } from './Router';

type ContactMethod = 'email' | 'telegram' | 'whatsapp';

interface RequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RequestModal({ isOpen, onClose }: RequestModalProps) {
  const { navigateTo } = useRouter();
  const [selectedMethod, setSelectedMethod] = useState<ContactMethod>('email');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      alert('Необходимо принять пользовательское соглашение');
      return;
    }
    
    const encodedMessage = encodeURIComponent(`Имя: ${name}\nСообщение: ${message}`);
    
    switch (selectedMethod) {
      case 'email':
        window.open(`mailto:sales@burodsn.ru?subject=Заявка с сайта&body=${encodedMessage}`, '_blank');
        break;
      case 'telegram':
        window.open(`https://t.me/Aleg_AXAX_Olegi`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/79282412720?text=${encodedMessage}`, '_blank');
        break;
    }
    
    // Reset form
    setName('');
    setContact('');
    setMessage('');
    setAgreedToTerms(false);
    onClose();
  };

  const handleUserAgreementClick = () => {
    onClose();
    navigateTo('agreement');
  };

  const getContactLabel = () => {
    switch (selectedMethod) {
      case 'email':
        return 'Email';
      case 'telegram':
        return 'Имя';
      case 'whatsapp':
        return 'Номер телефона';
    }
  };

  const getContactPlaceholder = () => {
    switch (selectedMethod) {
      case 'email':
        return 'your@email.com';
      case 'telegram':
        return 'Ваш Telegram';
      case 'whatsapp':
        return '+7 (999) 123-45-67';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white mx-4 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-center">Оставить заявку</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Method Selection */}
          <div className="grid grid-cols-3 gap-3 md:gap-4">
            <Button
              type="button"
              variant={selectedMethod === 'email' ? 'default' : 'outline'}
              className="flex flex-col items-center gap-1 md:gap-2 h-auto py-3 md:py-4 text-xs md:text-sm"
              onClick={() => setSelectedMethod('email')}
            >
              <Mail className="w-4 h-4 md:w-6 md:h-6" />
              <span>Почта</span>
            </Button>
            
            <Button
              type="button"
              variant={selectedMethod === 'telegram' ? 'default' : 'outline'}
              className="flex flex-col items-center gap-1 md:gap-2 h-auto py-3 md:py-4 text-xs md:text-sm"
              onClick={() => setSelectedMethod('telegram')}
            >
              <MessageCircle className="w-4 h-4 md:w-6 md:h-6" />
              <span>Telegram</span>
            </Button>
            
            <Button
              type="button"
              variant={selectedMethod === 'whatsapp' ? 'default' : 'outline'}
              className="flex flex-col items-center gap-1 md:gap-2 h-auto py-3 md:py-4 text-xs md:text-sm"
              onClick={() => setSelectedMethod('whatsapp')}
            >
              <Phone className="w-4 h-4 md:w-6 md:h-6" />
              <span>WhatsApp</span>
            </Button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-sm">Имя</Label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите ваше имя"
                required
                className="bg-white mt-1"
              />
            </div>

            <div>
              <Label htmlFor="contact" className="text-sm">{getContactLabel()}</Label>
              <Input
                id="contact"
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={getContactPlaceholder()}
                required
                className="bg-white mt-1"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-sm">Сообщение</Label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Расскажите о своем проекте..."
                rows={3}
                required
                className="bg-white resize-none mt-1"
              />
            </div>

            {/* User Agreement Checkbox */}
            <div className="flex items-start space-x-2">
              <Checkbox
                id="agreement"
                checked={agreedToTerms}
                onCheckedChange={setAgreedToTerms}
                className="mt-1"
              />
              <Label htmlFor="agreement" className="text-xs md:text-sm leading-5 cursor-pointer">
                Принимаю{' '}
                <button
                  type="button"
                  onClick={handleUserAgreementClick}
                  className="text-primary underline hover:no-underline"
                >
                  пользовательское соглашение
                </button>
              </Label>
            </div>

            <Button 
              type="submit" 
              className="w-full py-2 md:py-3 text-sm md:text-base"
              disabled={!agreedToTerms}
            >
              Отправить заявку
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}