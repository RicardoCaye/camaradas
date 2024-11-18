import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Users, Brain, Shield, MessageCircle, Handshake } from 'lucide-react';

interface AboutSectionProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const AboutSection = ({ icon: Icon, title, description }: AboutSectionProps) => (
  <div className="flex items-start space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
    <div className="flex-shrink-0">
      <Icon size={24} className="text-white" />
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

export default function AcercaDe() {
  const features = [
    {
      icon: Heart,
      title: "Apoyo Mutuo",
      description: "Un espacio seguro donde los camaradas pueden compartir sus experiencias, desafíos y victorias, sabiendo que no están solos en su camino."
    },
    {
      icon: Brain,
      title: "Salud Mental",
      description: "Promovemos el bienestar emocional y mental, rompiendo estigmas y creando un ambiente donde hablar de emociones es señal de fortaleza, no de debilidad."
    },
    {
      icon: Users,
      title: "Comunidad Sin Fronteras",
      description: "Una red de apoyo diversa y accesible, donde cada camarada puede encontrar comprensión y soporte, sea de forma anónima o identificada."
    },
    {
      icon: Shield,
      title: "Espacio Seguro",
      description: "Garantizamos un entorno protegido donde cada historia es tratada con respeto y confidencialidad, permitiendo compartir sin temor al juicio."
    },
    {
      icon: MessageCircle,
      title: "Diálogo Abierto",
      description: "Fomentamos conversaciones honestas sobre desafíos cotidianos, relaciones, trabajo y crecimiento personal."
    },
    {
      icon: Handshake,
      title: "Crecimiento Colectivo",
      description: "Juntos construimos una comunidad más fuerte, donde el éxito de cada camarada es una victoria compartida."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Bienvenido Camarada</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Un movimiento dedicado a fortalecer los lazos entre camaradas, 
          promoviendo el apoyo mutuo y el bienestar emocional en nuestra comunidad.
        </p>
        <p className="text-gray-300">
          Pronto podremos crear mensajes y la comunidad podrá votarlos para que los mensjaes más votados, 
          mejoren nuestros días.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <AboutSection key={index} {...feature} />
        ))}
      </div>

      <Card className="bg-gradient-to-br from-blue-900 to-purple-900 border-none">
        <CardContent className="p-6 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">Únete a Nuestra Comunidad</h2>
          <p className="text-gray-200">
            Seas quien seas, tu voz importa. Juntos podemos crear un espacio 
            donde el apoyo mutuo y la comprensión sean la base de nuestro crecimiento.
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              className="bg-white text-black hover:bg-gray-200"
              onClick={() => window.location.href = 'mailto:ricardo@ricdanic.com'}
            >
              Únete
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-gray-400 text-sm">
        <p>
          Camarada es un proyecto en constante evolución, 
          construido por y para la comunidad. 
          Tu participación lo hace más fuerte cada día.
        </p>
      </div>
    </div>
  );
} 