export default function QuienesSomos() {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Quiénes Somos
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Conoce más sobre Wavi y nuestra misión en Colombia
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* About */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Wavi nació con la visión de transformar el panorama empresarial en Colombia a través 
              de soluciones innovadoras y tecnología de punta. Desde nuestros inicios, hemos trabajado 
              incansablemente para ofrecer servicios de calidad que impulsen el crecimiento de nuestros clientes.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Nuestro equipo está compuesto por profesionales apasionados y comprometidos que comparten 
              la misma visión: crear valor y generar impacto positivo en cada proyecto que emprendemos.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-blue-600 text-3xl mb-4">🎯</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
              <p className="text-gray-700 leading-relaxed">
                Proporcionar soluciones empresariales innovadoras que permitan a nuestros clientes 
                alcanzar sus objetivos y superar sus expectativas, fomentando el crecimiento 
                sostenible y la excelencia operativa.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-blue-600 text-3xl mb-4">👁️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
              <p className="text-gray-700 leading-relaxed">
                Ser reconocidos como líderes en innovación empresarial en Colombia, siendo el socio 
                estratégico preferido por empresas que buscan transformación digital y crecimiento 
                en un mercado cada vez más competitivo.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestros Valores</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Integridad</h3>
                <p className="text-gray-700">
                  Actuamos con honestidad y transparencia en todas nuestras relaciones.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Innovación</h3>
                <p className="text-gray-700">
                  Buscamos constantemente nuevas formas de mejorar y crear valor.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Excelencia</h3>
                <p className="text-gray-700">
                  Nos comprometemos a entregar la más alta calidad en todo lo que hacemos.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-2">Colaboración</h3>
                <p className="text-gray-700">
                  Trabajamos en equipo con nuestros clientes para alcanzar objetivos comunes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
