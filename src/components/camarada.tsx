'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Header } from './layout/Header'
import { PositiveMessage } from './messages/PositiveMessage'
import { CommunityMessages } from './community/CommunityMessages'
// import { LoginForm } from './auth/LoginForm'
import AcercaDe from './about/AcercaDe'

const mensajesPositivos = [
  { id: 1, autor: "Tú", texto: "¡Eres capaz de cosas increíbles!", likes: 10 },
  { id: 2, autor: "Tú", texto: "Cree en ti mismo y en todo lo que eres.", likes: 8 },
  { id: 3, autor: "Tú", texto: "Cada día es una nueva oportunidad para crecer y ser mejor.", likes: 0 },
  { id: 4, autor: "Javier", texto: "Nunca estás solo, camarada. Estamos contigo.", likes: 18 },
  { id: 5, autor: "Lucía", texto: "Hablar es el primer paso hacia la sanación, camaradas.", likes: 21 },
  { id: 6, autor: "Miguel", texto: "Ser fuerte también significa saber pedir ayuda, camarada.", likes: 17 },
  { id: 7, autor: "Sofía", texto: "Cada día es una nueva oportunidad, camaradas.", likes: 25 },
  { id: 8, autor: "Andrés", texto: "Apóyate en tus camaradas, juntos somos invencibles.", likes: 20 },
  { id: 9, autor: "Laura", texto: "La verdadera valentía está en enfrentarte a tus miedos, camarada.", likes: 22 },
  { id: 10, autor: "Pedro", texto: "Un paso a la vez, camarada. Todos avanzamos juntos.", likes: 24 },
  { id: 11, autor: "Carmen", texto: "Ser camarada significa estar ahí en los momentos difíciles.", likes: 19 },
  { id: 12, autor: "Roberto", texto: "Las nubes pasan, camarada. El sol siempre vuelve a brillar.", likes: 26 },
  { id: 13, autor: "Elena", texto: "No hay batalla que no podamos ganar juntos, camaradas.", likes: 23 },
  { id: 14, autor: "Luis", texto: "Un mal día no define tu vida, camarada. Eres más fuerte de lo que crees.", likes: 27 },
  { id: 15, autor: "Diana", texto: "La empatía es el puente hacia la sanación, camaradas.", likes: 18 },
  { id: 16, autor: "Héctor", texto: "Tu historia importa, camarada. Nunca dejes de contarla.", likes: 21 },
  { id: 17, autor: "Marisol", texto: "La unión hace la fuerza, camaradas. Sigamos adelante.", likes: 22 },
  { id: 18, autor: "Víctor", texto: "No cargues todo solo, camarada. Aquí estamos para ayudarte.", likes: 20 },
  { id: 19, autor: "Claudia", texto: "Respira, camarada. Lo estás haciendo bien.", likes: 23 },
  { id: 20, autor: "Diego", texto: "No hay meta imposible con camaradas a tu lado.", likes: 24 },
  { id: 21, autor: "Julia", texto: "Cada día es una victoria, camarada. Nunca te rindas.", likes: 19 },
  { id: 22, autor: "Fernando", texto: "Siempre hay un nuevo comienzo, camarada. Sigue adelante.", likes: 25 },
  { id: 23, autor: "Natalia", texto: "Las cicatrices son marcas de tu fortaleza, camarada.", likes: 21 },
  { id: 24, autor: "Esteban", texto: "Los momentos difíciles pasan, camarada. Sigue adelante.", likes: 20 },
  { id: 25, autor: "Adriana", texto: "Estamos juntos en esto, camaradas. Siempre hay esperanza.", likes: 22 },
  { id: 26, autor: "Raúl", texto: "No subestimes el poder de hablar con un camarada.", likes: 19 },
  { id: 27, autor: "Patricia", texto: "Lo importante es intentarlo cada día, camarada.", likes: 21 },
  { id: 28, autor: "Alfonso", texto: "Recuerda que eres importante, camarada. Tu voz cuenta.", likes: 23 },
  { id: 29, autor: "Isabel", texto: "El apoyo mutuo nos hace más fuertes, camaradas.", likes: 25 },
  { id: 30, autor: "Gustavo", texto: "No estás roto, camarada. Estás creciendo.", likes: 18 },
  { id: 31, autor: "Teresa", texto: "A veces, solo escuchar hace toda la diferencia, camarada.", likes: 20 },
  { id: 32, autor: "Manuel", texto: "No tienes que ser perfecto, camarada. Eres suficiente tal como eres.", likes: 22 },
  { id: 33, autor: "Rosa", texto: "Un camarada siempre está dispuesto a ofrecer una mano amiga.", likes: 24 },
  { id: 34, autor: "Fabián", texto: "Ningún desafío es insuperable cuando tienes camaradas a tu lado.", likes: 19 },
  { id: 35, autor: "Lorena", texto: "Tu salud mental es importante, camarada. No la ignores.", likes: 21 },
  { id: 36, autor: "Jaime", texto: "Siempre habrá días mejores, camarada. Aguanta un poco más.", likes: 23 },
  { id: 37, autor: "Mónica", texto: "Los camaradas son como faros en la oscuridad. Siempre guían.", likes: 25 },
  { id: 38, autor: "Hugo", texto: "Es valiente admitir que necesitas ayuda, camarada.", likes: 18 },
  { id: 39, autor: "Silvia", texto: "Cada camarada es una pieza clave en este equipo.", likes: 20 },
  { id: 40, autor: "Cristian", texto: "La carga es más ligera cuando la compartes, camarada.", likes: 22 },
  { id: 41, autor: "Verónica", texto: "El primer paso es el más difícil, camarada. Tú puedes hacerlo.", likes: 24 },
  { id: 42, autor: "Ricardo", texto: "Un mal momento no define tu vida, camarada. Sigue adelante.", likes: 21 },
  { id: 43, autor: "Paola", texto: "La amistad entre camaradas puede sanar heridas profundas.", likes: 23 },
  { id: 44, autor: "Camilo", texto: "El autocuidado no es egoísmo, camarada. Es necesario para poder ayudar a otros.", likes: 19 },
  { id: 45, autor: "Marina", texto: "Tus emociones son válidas, camarada. Sentir es parte de ser humano.", likes: 24 },
  { id: 46, autor: "Gabriel", texto: "Cada pequeña victoria cuenta, camarada. Celebra tus progresos.", likes: 22 },
  { id: 47, autor: "Andrea", texto: "La vulnerabilidad es una forma de valentía, camarada. No temas mostrarla.", likes: 26 },
  { id: 48, autor: "Nicolás", texto: "Tu mente necesita descanso tanto como tu cuerpo, camarada. Date ese espacio.", likes: 21 },
  { id: 49, autor: "Carolina", texto: "No hay vergüenza en buscar ayuda profesional, camarada. Es un acto de amor propio.", likes: 25 },
  { id: 50, autor: "Eduardo", texto: "Los pensamientos negativos son visitantes, no residentes permanentes, camarada.", likes: 23 },
  { id: 51, autor: "Valentina", texto: "Tu valor no se mide por tu productividad, camarada. Eres más que tus logros.", likes: 28 },
  { id: 52, autor: "Mateo", texto: "El camino hacia la sanación no es lineal, camarada. Cada paso cuenta.", likes: 20 },
  { id: 53, autor: "Daniela", texto: "Está bien no estar bien, camarada. Lo importante es no quedarse ahí.", likes: 27 },
  { id: 54, autor: "Felipe", texto: "Tus luchas internas son tan válidas como las externas, camarada. Reconócelas.", likes: 22 },
  { id: 55, autor: "Luna", texto: "La paz mental se construye día a día, camarada. Ten paciencia contigo mismo.", likes: 24 },
  { id: 56, autor: "Sebastián", texto: "No eres tus pensamientos intrusivos, camarada. Eres quien los observa.", likes: 21 },
  { id: 57, autor: "Ana María", texto: "El autoconocimiento es un viaje, no un destino, camarada. Disfruta el proceso.", likes: 25 },
  { id: 58, autor: "Jorge", texto: "Tu historia puede inspirar a otros camaradas. No temas compartirla.", likes: 23 },
  { id: 59, autor: "Mariana", texto: "La resiliencia se construye paso a paso, camarada. Confía en el proceso.", likes: 26 },
  { id: 60, autor: "Antonio", texto: "Reconocer tus límites es una forma de autocuidado, camarada. Respétalos.", likes: 22 },
  { id: 61, autor: "Catalina", texto: "Cada día que eliges seguir adelante es una victoria, camarada. Celébrala.", likes: 24 },
  { id: 62, autor: "Martín", texto: "Tu bienestar mental es una prioridad, camarada. No una opción.", likes: 27 },
  { id: 63, autor: "Luciana", texto: "Las heridas emocionales necesitan tiempo para sanar, camarada. Date ese tiempo.", likes: 25 },
]

const mensajesComunidadIniciales = [
  { id: 1, autor: "María", mensaje: "¡Juntos podemos lograr cualquier cosa!", likes: 15 },
  { id: 2, autor: "Carlos", mensaje: "La fuerza está en nuestra unión, camaradas.", likes: 23 },
  { id: 3, autor: "Ana", mensaje: "Cada pequeño paso nos acerca a un mundo mejor.", likes: 19 },
  
]

export function CamaradaComponent() {
  const [activeTab, setActiveTab] = useState('inicio')
  const [mensajesPositivosState, setMensajesPositivosState] = useState(mensajesPositivos)
  const [mensajeActual, setMensajeActual] = useState(mensajesPositivos[0])
  const [mensajesCamaradas, setMensajesCamaradas] = useState(mensajesComunidadIniciales)

  useEffect(() => {
    const mensajesGuardados = localStorage.getItem('mensajesCamaradas')
    if (mensajesGuardados) {
      setMensajesCamaradas(JSON.parse(mensajesGuardados))
    }

    if ('Notification' in window) {
      Notification.requestPermission()
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('mensajesCamaradas', JSON.stringify(mensajesCamaradas))
  }, [mensajesCamaradas])

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * mensajesPositivos.length)
    setMensajeActual(mensajesPositivos[randomIndex])
  }, [])

  const siguienteMensaje = () => {
    const mensajesDisponibles = mensajesPositivosState.filter(m => m.id !== mensajeActual.id)
    const mensajeAleatorio = mensajesDisponibles[Math.floor(Math.random() * mensajesDisponibles.length)]
    setMensajeActual(mensajeAleatorio)
  }

  // const agregarMensajeCamarada = () => {
  //   if (nuevoMensaje) {
  //     const nuevoId = Math.max(...mensajesCamaradas.map(m => m.id)) + 1
  //     setMensajesCamaradas([...mensajesCamaradas, { id: nuevoId, autor: "Tú", mensaje: nuevoMensaje, likes: 0 }])
  //     setNuevoMensaje('')
  //     mostrarNotificacion(nuevoMensaje)
  //   }
  // }

  const mostrarNotificacion = (mensaje: string) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Nuevo mensaje de Camarada', {
        body: mensaje,
        icon: '/favicon.ico'
      })
    }
  }

  // const handleLogin = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   console.log('Iniciar sesión con:', email, password)
  //   // Aquí iría la lógica de autenticación
  // }

  const darLike = (id: number, tipo: 'positivo' | 'camarada') => {
    if (tipo === 'positivo') {
      setMensajesPositivosState(mensajesPositivosState.map(mensaje => 
        mensaje.id === id ? { ...mensaje, likes: mensaje.likes + 1 } : mensaje
      ))
      if (mensajeActual.id === id) {
        setMensajeActual({ ...mensajeActual, likes: mensajeActual.likes + 1 })
      }
    } else {
      setMensajesCamaradas(mensajesCamaradas.map(mensaje => 
        mensaje.id === id ? { ...mensaje, likes: mensaje.likes + 1 } : mensaje
      ))
    }
  }

  const reportarMensaje = (id: number) => {
    console.log(`Mensaje con ID ${id} reportado`)
    // Aquí iría la lógica para reportar el mensaje
  }

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl border border-gray-800 shadow-lg bg-gray-900">
          <CardContent className="p-6">
            {activeTab === 'inicio' && (
              <PositiveMessage
                message={mensajeActual}
                onLike={(id) => darLike(id, 'positivo')}
                onReport={reportarMensaje}
                onNext={siguienteMensaje}
              />
            )}
            {activeTab === 'de-los-camaradas' && <CommunityMessages />}
            {/* {activeTab === 'iniciar-sesión' && <LoginForm />} */}
            {activeTab === 'acerca-de' && <AcercaDe />}
          </CardContent>
        </Card>
      </main>
    </div>
  )
}