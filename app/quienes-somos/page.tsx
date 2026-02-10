import Image from "next/image";

export default function QuienesSomos() {
  return (
    <div className="bg-white">
      {/* Hero Image */}
      <section className="px-[5%] lg:px-[10%]">
        <div className="relative h-[55vh] md:h-[60vh] rounded-2xl overflow-hidden">
          <Image
            src="/Imagenes pagina web/Banner quienes somos.png"
            alt="Quienes somos"
            fill
            className="object-cover object-[center_20%]"
            priority
          />
        </div>
      </section>

      {/* Content Section */}
      <section className="px-[5%] lg:px-[10%] py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Quienes somos?
          </h1>

          <p className="text-lg font-bold text-gray-900 mb-6">
            Nuestro propósito es convertir cada salida en una buena experiencia.
          </p>

          <div className="space-y-4 text-gray-800 text-justify text-sm leading-relaxed">
            <p>
              Wavi es una herramienta creada para ayudarte a vivir más
              experiencias sin complicaciones. Reunimos planes y actividades
              para que descubrir ¿Qué hacer? sea fácil, claro y pensado, sin
              importar cuál sea tu lugar o el momento.
            </p>
            <p>
              Creemos en explorar, probar cosas nuevas y salir de la rutina. Por
              eso construimos una comunidad que te ayude a tomar mejores
              decisiones y transformar cada elección y un momento que valga la
              pena.
            </p>
          </div>
        </div>
      </section>

      {/* Fundadores Section */}
      <section className="px-[5%] lg:px-[10%] pb-12 mt-8">
        <div className="relative h-[450px] md:h-[550px] rounded-2xl overflow-hidden">
          <Image
            src="/Imagenes pagina web/Fundadores-foto.jpg"
            alt="Fundadores"
            fill
            className="object-cover object-[center_20%]"
          />
          <div className="absolute top-0 left-0 p-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Fundadores
            </h2>
          </div>
        </div>
      </section>

            {/* Bienestar y salud mental (nuevo, estilo editorial limpio) */}
      <section className="px-[5%] lg:px-[10%] py-16">
        <div className="max-w-6xl mx-auto">
          {/* Row: Imagen izquierda / Texto derecha */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            {/* Imagen */}
            <div className="md:col-span-6">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="/Imagenes pagina web/Bienestar y salud.jpg"
                  alt="Bienestar y salud mental"
                  fill
                  className="object-cover object-[center_35%]"
                />
              </div>
            </div>

            {/* Texto */}
            <div className="md:col-span-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Bienestar y salud mental
              </h3>

              <div className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed space-y-3">
                <p>
                  Vivimos en una época donde todo va rápido y desconectarse se ha
                  vuelto cada vez más difícil. En Wavi creemos que darte espacios
                  para disfrutar, explorar y cambiar de ambiente puede tener un
                  impacto positivo en cómo nos sentimos.
                </p>
                <p>
                  A veces, una experiencia distinta, un plan inesperado, conocer
                  nuevos espacios, o simplemente salir de la rutina puede ayudar
                  a reconectar con el presente y con uno mismo.
                </p>
                <p>
                  Ese es el impacto que buscamos generar: experiencias que se
                  sientan bien y momentos que valgan la pena.
                </p>
              </div>
            </div>
          </div>

          {/* Misión / Visión */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h4 className="text-xl font-bold text-gray-900">Nuestra misión</h4>
              <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
                Facilitar el acceso a planes, lugares y experiencias de
                entretenimiento, ayudando a las personas a descubrir, explorar y
                disfrutar más, de forma fácil y sin complicarse.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-900">Nuestra visión</h4>
              <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed">
                Ser la plataforma en la que las personas confían para decidir qué
                hacer y convertir su tiempo libre en experiencias memorables, en
                cualquier lugar.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
