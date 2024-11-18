'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Iniciar sesión con:', email, password)
  }

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      <Input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border-gray-700 focus:border-white bg-gray-800 text-white"
      />
      <Input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border-gray-700 focus:border-white bg-gray-800 text-white"
      />
      <Button type="submit" className="w-full bg-white hover:bg-gray-200 text-black">
        Iniciar Sesión
      </Button>
    </form>
  )
} 