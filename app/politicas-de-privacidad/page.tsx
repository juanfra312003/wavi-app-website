export default function PoliticasDePrivacidad() {
  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Content */}
      <section className="mx-[5%] lg:mx-[10%] py-12">
        <div className="max-w-5xl mx-auto bg-white">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-left">
            Políticas de privacidad de WAVI
          </h1>

          <div className="space-y-6 text-gray-800 text-justify">
            {/* Header Info */}
            <div>
              <h2 className="text-lg font-bold mb-3 text-left">Políticas de privacidad de WAVI</h2>
              <p className="text-sm leading-relaxed mb-2">
                <strong>Fecha de entrada en vigencia:</strong> 5 de febrero de 2026
              </p>
              <p className="text-sm leading-relaxed">
                En cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas aplicables en materia de protección de datos personales en la República de Colombia, se informa a los usuarios de la aplicación móvil de Wavi (en adelante, la "Aplicación"), sobre el tratamiento que se dará a los datos personales a través del uso de la aplicación.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <p className="text-sm leading-relaxed">
                <strong>1. Responsable del Tratamiento:</strong> El responsable del tratamiento de los datos personales es Juan David Paez Barajas, con cédula de ciudadanía 1019602677, domiciliado en Bogotá D.C, Colombia.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <p className="text-sm leading-relaxed">
                <strong>2. Descripción del Servicio:</strong> Wavi es una aplicación de carácter informativa que permite a los usuarios conocer sobre los productos y servicios disponibles en puntos de venta o comercios cercanos a la ubicación del usuario, incluyendo la distancia aproximada entre el usuario y los lugares disponibles. La aplicación opera exclusivamente en Colombia.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <p className="text-sm leading-relaxed mb-2">
                <strong>3. Información Recolectada:</strong> Wavi no solicita ni requiere la creación de cuentas de usuario, ni recolecta datos de usuario identificables como nombre, correo electrónico, número telefónico o documento de identificación. La información recolectada por la aplicación incluye la siguiente información:
              </p>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>
                  <strong>Ubicación geográfica:</strong> Para ofrecer resultados relevantes, Wavi accede a la siguiente información:
                  <ul className="list-disc ml-6 mt-1 space-y-1">
                    <li>Ubicación geográfica en tiempo real o aproximada, utilizada exclusivamente para calcular la distancia entre el usuario y los lugares o figuras disponibles.</li>
                    <li>Dirección exacta (opcional, si es proporcionada)</li>
                    <li>Información técnica del dispositivo</li>
                    <li>Tipo de navegación e interacción dentro de la aplicación</li>
                  </ul>
                </li>
                <li>Información relacionada con las búsquedas realizadas por los usuarios y redirecciones a servicios externos (por ejemplo, WhatsApp o aplicaciones de mapas).</li>
                <li>La información recolectada se tratará de forma agregada, estadística y anonimizizada, sin identificar individualmente a ningún usuario.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <p className="text-sm leading-relaxed mb-2">
                <strong>4. Finalidades del Tratamiento:</strong> La información recolectada es utilizada para las siguientes finalidades:
              </p>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Mostrar lugares y lugares en función de la ubicación del usuario</li>
                <li>Facilitar la navegación hacia puntos de interés y lugares disponibles</li>
                <li>Mejorar la experiencia de uso de la aplicación</li>
                <li>Analizar el rendimiento y uso de la plataforma</li>
                <li>Realizar análisis estadísticos y de mejora continua</li>
                <li>Apoyar procesos de mejora del producto y estrategias de crecimiento</li>
                <li>Proteger la seguridad y prevenir el uso no autorizado fuera del uso actor de la aplicación.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <p className="text-sm leading-relaxed">
                <strong>5. Uso de la Información:</strong> La información recolectada por Wavi es utilizada exclusivamente para las finalidades de terceros, incluyendo Supabase, como proveedor del servicio de backend e infraestructura tecnológica, el cual puede operar sobre servidores ubicados dentro o fuera de Colombia. Wavi no compartirá, venderá ni facilitará información que pueda identificar a un usuario individual a terceros ubicados fuera del territorio colombiano, garantizando estándares de protección de datos y seguridad de la información.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <p className="text-sm leading-relaxed mb-2">
                <strong>6. Tratamiento de Datos de Menores de Edad:</strong> La aplicación no está dirigida exclusivamente a menores de edad. Sin embargo, no recopilamos información personal de carácter general y netamente informativo.
              </p>
              <p className="text-sm leading-relaxed">
                Wavi no recolecta de manera intencional datos personales sensibles de menores de edad. La información recopilada es de carácter informativo con fines funcionales y de anonimizado para la creación de estadísticas de uso.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <p className="text-sm leading-relaxed mb-2">
                <strong>7. Compartición de la Información:</strong> La información recolectada podrá ser compartida únicamente con:
              </p>
              <ul className="list-disc ml-6 text-sm space-y-1">
                <li>Proveedores tecnológicos necesarios para el funcionamiento y análisis de la aplicación</li>
                <li>Autoridades públicas en caso de ser requerido por la ley</li>
              </ul>
              <p className="text-sm leading-relaxed mt-2">
                En ningún caso la información será comercializada o compartida con terceros con fines publicitarios externos.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <p className="text-sm leading-relaxed">
                <strong>8. Derechos de los Usuarios:</strong> Los usuarios tienen derecho a conocer, actualizar, rectificar, oponerse, supresión de datos y revocación de la autorización, conforme a la legislación vigente.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <p className="text-sm leading-relaxed mb-2">
                <strong>9. Canales de Atención:</strong> Las solicitudes relacionadas con el tratamiento de la información podrán enviarse al correo electrónico:
              </p>
              <p className="text-sm leading-relaxed ml-6">
                <a href="mailto:juan@waviapp.com" className="text-blue-600 hover:underline">juan@waviapp.com</a>
              </p>
              <p className="text-sm leading-relaxed mt-2">
                Serán atendidas y resueltas en un plazo de 10 a 15 días hábiles.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <p className="text-sm leading-relaxed">
                <strong>10. Modificaciones:</strong> Wavi se reserva el derecho de modificar la presente Política de Privacidad en cualquier momento. Las modificaciones serán informadas a través de la aplicación.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
