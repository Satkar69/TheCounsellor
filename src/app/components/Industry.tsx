import Image from "next/image";

const IndustryPage = () => {
  return (
    <>
      <section className="text-gray-600 body-font mx-auto w-full max-w-screen-xl">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-3xl font-bold title-font mb-4 text-gray-900 ">
              Dream Destinations
            </h1>
            <p className="text-xl">
              You dream, we serve!
            </p>
          </div>
          <div className="flex gap-4 font-extrabold text-3xl">
            <div className="relative w-80 h-56">
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-50 text-white rounded-lg z-10">
                <p>USA</p>
              </div>
              <div className="w-full h-full flex items-center justify-center px-8 py-6 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-500/50 z-0">
                <Image src="/usa.jpg" layout="fill" objectFit="cover" alt="USA" className="rounded-lg" />
              </div>
            </div>
            <div className="relative w-80 h-56">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-50 text-white rounded-lg z-10">
                <p>Australia</p>
              </div>
              <div className="w-full h-full flex items-center justify-center px-8 py-6 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-500/50 z-0">
                <Image src="/aus.jpg" layout="fill" objectFit="cover" alt="Australia" className="rounded-lg" />
              </div>
            </div>
            <div className="relative w-80 h-56">
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-50 text-white rounded-lg z-10">
                <p>Canada</p>
              </div>
              <div className="w-full h-full flex items-center justify-center px-8 py-6 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-500/50 z-0">
                <Image src="/canada.jpg" layout="fill" objectFit="cover" alt="Canada" className="rounded-lg" />
              </div>
            </div>
            <div className="relative w-80 h-56">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gray-800 bg-opacity-50 text-white rounded-lg z-10">
                <p>United Kingdom</p>
              </div>
              <div className="w-full h-full flex items-center justify-center px-8 py-6 transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-lg shadow-gray-500/50 z-0">
                <Image src="/uk.jpg" layout="fill" objectFit="cover" alt="United Kingdom" className="rounded-lg" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default IndustryPage;
