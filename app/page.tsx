import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Bienvenido a Wavi
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Tu solución empresarial en Colombia. Innovación, calidad y compromiso.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link 
            href="/quienes-somos"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Conócenos
          </Link>
          <Link 
            href="/politicas-de-privacidad"
            className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Nuestras Políticas
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          ¿Por qué elegir Wavi?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-blue-600 text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Innovación</h3>
            <p className="text-gray-600">
              Soluciones tecnológicas de vanguardia adaptadas a las necesidades de tu empresa.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-blue-600 text-4xl mb-4">💼</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Experiencia</h3>
            <p className="text-gray-600">
              Años de trayectoria respaldando el crecimiento de empresas colombianas.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="text-blue-600 text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Compromiso</h3>
            <p className="text-gray-600">
              Tu éxito es nuestro éxito. Trabajamos contigo en cada paso del camino.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para transformar tu empresa?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy y descubre cómo Wavi puede ayudarte a alcanzar tus objetivos.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Contactar
          </button>
        </div>
      </section>
    </div>
  );
}
