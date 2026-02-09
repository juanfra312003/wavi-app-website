import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition">
            Wavi
          </Link>
          <div className="flex gap-6">
            <Link 
              href="/" 
              className="hover:text-blue-200 transition font-medium"
            >
              Inicio
            </Link>
            <Link 
              href="/quienes-somos" 
              className="hover:text-blue-200 transition font-medium"
            >
              Quiénes Somos
            </Link>
            <Link 
              href="/politicas-de-privacidad" 
              className="hover:text-blue-200 transition font-medium"
            >
              Políticas de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
