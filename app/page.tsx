import Image from 'next/image';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[55vh] md:h-[60vh] w-full pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Imagenes pagina web/Banner principal .png"
            alt="Mapa con ubicaciones"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 flex items-center h-full px-[5%] lg:px-[10%]">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Te ayudamos a encontrar actividades cercanas a ti
            </h1>
          </div>
        </div>
      </section>

      {/* Únete a WAVI Section */}
      <section className="bg-[#48D7FF] py-16 px-[5%] lg:px-[10%]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
              Únete a <span className="font-extrabold">WAVI</span>
            </h2>
            <p className="text-white text-lg md:text-xl">
              Navega entre cientos de opciones
            </p>
          </div>

          {/* Three Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1 - Descubre */}
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-white text-center mb-3">
                1. Descubre
              </h3>
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 md:h-72">
                <Image
                  src="/Imagenes pagina web/Explorar.png"
                  alt="Explorar"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
                  <p className="text-base font-bold">
                    Explora los mejores<br/>planes y promociones
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Reserva */}
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-white text-center mb-3">
                2. Reserva
              </h3>
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 md:h-72">
                <Image
                  src="/Imagenes pagina web/Reservar.png"
                  alt="Reservar"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
                  <p className="text-base font-bold">
                    Asegura tu plan al<br/>instante
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Disfruta */}
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-white text-center mb-3">
                3. Disfruta
              </h3>
              <div className="relative rounded-2xl overflow-hidden shadow-lg h-64 md:h-72">
                <Image
                  src="/Imagenes pagina web/Disfrutar.png"
                  alt="Disfrutar"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
                  <p className="text-base font-bold">
                    Vive la experiencia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
