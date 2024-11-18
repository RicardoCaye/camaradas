import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Construction, MessageSquare, ThumbsUp, Users2 } from 'lucide-react';

export function CommunityMessages() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Espacio Comunitario</h1>
        <div className="flex justify-center">
          <Construction size={64} className="text-yellow-500 animate-pulse" />
        </div>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Esta sección está en construcción
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="bg-gray-800 border-none">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <MessageSquare className="text-blue-400" size={24} />
              <h3 className="text-lg font-semibold text-white">Comparte tu Experiencia</h3>
            </div>
            <p className="text-gray-300">
              Pronto podrás compartir tus pensamientos, experiencias y palabras de apoyo con otros camaradas.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-none">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <ThumbsUp className="text-green-400" size={24} />
              <h3 className="text-lg font-semibold text-white">Apoya a Otros</h3>
            </div>
            <p className="text-gray-300">
              La comunidad podrá votar y destacar los mensajes más inspiradores y útiles.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-none">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <Users2 className="text-purple-400" size={24} />
              <h3 className="text-lg font-semibold text-white">Construye Conexiones</h3>
            </div>
            <p className="text-gray-300">
              Crea vínculos significativos con camaradas que comparten experiencias similares.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center text-gray-400">
        <p>
          Estamos trabajando para crear un espacio seguro y acogedor donde todos los camaradas 
          puedan compartir y apoyarse mutuamente.
        </p>
      </div>
    </div>
  );
} 