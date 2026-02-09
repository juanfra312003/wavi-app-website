export default function PoliticasDePrivacidad() {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Políticas de Privacidad
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Tu privacidad es importante para nosotros
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <p className="text-sm text-gray-600 mb-8">
            Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introducción</h2>
              <p className="text-gray-700 leading-relaxed">
                En Wavi, nos comprometemos a proteger la privacidad y seguridad de la información 
                personal de nuestros usuarios. Esta Política de Privacidad describe cómo recopilamos, 
                usamos, compartimos y protegemos su información personal de acuerdo con las leyes 
                colombianas de protección de datos.
              </p>
            </div>

            {/* Information Collection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Información que Recopilamos</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Podemos recopilar los siguientes tipos de información:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Información de identificación personal (nombre, correo electrónico, teléfono)</li>
                <li>Información de la empresa (nombre de la empresa, sector, tamaño)</li>
                <li>Información de uso del sitio web (páginas visitadas, tiempo de navegación)</li>
                <li>Información técnica (dirección IP, tipo de navegador, sistema operativo)</li>
              </ul>
            </div>

            {/* Use of Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Uso de la Información</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Comunicarnos con usted sobre nuestros productos y servicios</li>
                <li>Personalizar su experiencia en nuestro sitio web</li>
                <li>Analizar el uso de nuestro sitio web y mejorar su funcionalidad</li>
                <li>Cumplir con obligaciones legales y regulatorias</li>
              </ul>
            </div>

            {/* Data Protection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Protección de Datos</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger 
                su información personal contra acceso no autorizado, alteración, divulgación o 
                destrucción. Esto incluye el uso de cifrado, controles de acceso y auditorías de 
                seguridad regulares.
              </p>
            </div>

            {/* Data Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Compartir Información</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                No vendemos ni alquilamos su información personal a terceros. Podemos compartir su 
                información solo en las siguientes circunstancias:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Con proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                <li>Cuando sea requerido por ley o para proteger nuestros derechos legales</li>
                <li>Con su consentimiento explícito</li>
              </ul>
            </div>

            {/* User Rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Sus Derechos</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                De acuerdo con la legislación colombiana, usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Acceder a su información personal que tenemos en nuestros registros</li>
                <li>Solicitar la corrección de información inexacta o incompleta</li>
                <li>Solicitar la eliminación de su información personal</li>
                <li>Oponerse al procesamiento de su información personal</li>
                <li>Solicitar la portabilidad de sus datos</li>
                <li>Revocar su consentimiento en cualquier momento</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Cookies y Tecnologías Similares</h2>
              <p className="text-gray-700 leading-relaxed">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia en nuestro 
                sitio web. Puede configurar su navegador para rechazar todas las cookies o para 
                indicar cuándo se envía una cookie. Sin embargo, algunas funciones del sitio pueden 
                no funcionar correctamente sin cookies.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacidad de Menores</h2>
              <p className="text-gray-700 leading-relaxed">
                Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos 
                intencionalmente información personal de menores. Si descubrimos que hemos recopilado 
                información de un menor, la eliminaremos de nuestros registros.
              </p>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Cambios a esta Política</h2>
              <p className="text-gray-700 leading-relaxed">
                Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier 
                momento. Le notificaremos sobre cambios significativos publicando la nueva política 
                en esta página y actualizando la fecha de "última actualización" en la parte superior.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contacto</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Si tiene preguntas o inquietudes sobre esta Política de Privacidad o sobre cómo 
                manejamos su información personal, puede contactarnos en:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700"><strong>Email:</strong> privacidad@wavi.co</p>
                <p className="text-gray-700"><strong>Teléfono:</strong> +57 (1) 234-5678</p>
                <p className="text-gray-700"><strong>Dirección:</strong> Bogotá, Colombia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
