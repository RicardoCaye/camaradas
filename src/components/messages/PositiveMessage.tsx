import { Button } from "@/components/ui/button"
import { Heart, Flag } from 'lucide-react'

interface PositiveMessage {
  id: number;
  texto: string;
  likes: number;
}

interface PositiveMessageProps {
  message: PositiveMessage;
  onLike: (id: number) => void;
  onReport: (id: number) => void;
  onNext: () => void;
}

export function PositiveMessage({ message, onLike, onReport, onNext }: PositiveMessageProps) {
  return (
    <div className="text-center space-y-8">
      <p className="text-4xl font-bold text-white mb-8">{message.texto}</p>
      <div className="flex justify-center space-x-4">
        <Button 
          variant="ghost" 
          onClick={() => onLike(message.id)}
          className="text-red-500 hover:text-red-600"
        >
          <Heart size={24} className="mr-1" />
          <span>{message.likes}</span>
        </Button>
        <Button 
          variant="ghost" 
          onClick={() => onReport(message.id)}
          className="text-yellow-500 hover:text-yellow-600"
        >
          <Flag size={24} className="mr-1" />
          <span>Reportar</span>
        </Button>
        <Button 
          variant="ghost"
          onClick={onNext} 
          className="text-gray-400 hover:text-gray-300"
        >
          <span>Siguiente Mensaje</span>
        </Button>
      </div>
    </div>
  )
} 