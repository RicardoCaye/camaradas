import { Button } from "@/components/ui/button"

export function Header({ activeTab, setActiveTab }: { 
  activeTab: string; 
  setActiveTab: (tab: string) => void 
}) {
  return (
    <header className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <button 
          onClick={() => setActiveTab('inicio')} 
          className="text-2xl font-bold hover:text-gray-700 transition-colors cursor-pointer"
        >
          Camarada
        </button>
        <nav>
          <ul className="flex space-x-4">
            {/* {['Inicio', 'De los camaradas', 'Iniciar Sesión', 'Acerca de'].map((tab) => ( */}
            {['Inicio', 'Acerca de'].map((tab) => (
              <li key={tab}>
                <Button
                  variant="ghost"
                  onClick={() => setActiveTab(tab.toLowerCase().replace(' ', '-'))}
                  className={`${activeTab === tab.toLowerCase().replace(' ', '-') ? 'bg-gray-200' : ''} text-black hover:bg-gray-100`}
                >
                  {tab}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
} 