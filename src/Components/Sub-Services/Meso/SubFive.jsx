import React from 'react';
import Frame from "../../../assets/sec5img.png";

const TILE_DATA = [
  {
    id: 1,
    number: "1",
    title: "Victims",
    description: "Work in industries or roles where asbestos exposure was common, such as construction, shipyards, manufacturing, or power plants. "
  },
  {
    id: 2,
    number: "2", 
    title: "Family Members",
    description: "Those affected by secondary exposure, often through contact with asbestos fibers on a loved one’s clothing or belongings."
  }
];

const TileComponent = ({ number, title, description, className = "" }) => (
  <div className={`flex items-stretch gap-4 md:gap-6 lg:gap-8 bg-transparent min-h-[120px] md:min-h-[140px] lg:min-h-[160px] ${className}`}>
    <div className="flex items-center justify-center flex-shrink-0">
      <span className="text-[#C09F53] font-opensans font-normal text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-none opacity-80">
        {number}
      </span>
    </div>
    <div className="flex-1 flex flex-col justify-center py-2">
      <h3 className="text-white font-['Playfair_Display'] font-semibold text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 md:mb-4 leading-tight">
        {title}
      </h3>
      <p className="text-white font-open-sans font-normal text-base md:text-sm lg:text-sm leading-relaxed opacity-90">
        {description}
      </p>
    </div>
  </div>
);

const SubFive = () => {
  return (
    <section className="bg-[#023437] min-h-relative relative overflow-hidden ">
      <div className="w-full max-w-7xl mx-auto relative">
        
        {/* Desktop View */}
        <div className="hidden lg:block py-0 xl:py-0">
          
          {/* Header and Image Section */}
          <div className="grid grid-cols-2 items-start mb-16 xl:mb-20">
            
            {/* Left Content Section */}
            <div className="px-4 md:px-6 lg:px-8 pr-8 lg:pr-12 xl:pr-16">
              <div className="space-y-6 lg:space-y-8 max-w-2xl">
                <h1 className="text-white font-['Playfair_Display'] py-16 font-extrabold text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight">
                  Who Can File a Claim?
                </h1>
                <p className="text-white font-open-sans font-normal text-xl lg:text-2xl xl:text-3xl leading-relaxed opacity-90">
                  Claims can be filed by individuals directly exposed to asbestos in the workplace and by family members affected through secondary exposure.
                </p>
              </div>
            </div>

            {/* Right Image Section - No padding, aligned to top-right */}
            <div className="relative h-full">
              <div className="absolute top-0 right-0 w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
                <img 
                  src={Frame} 
                  alt="Medical X-ray illustration showing asbestos exposure effects" 
                  className="w-full h-auto object-contain ml-auto block"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Tiles Section - Grid Layout */}
          <div className="px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
              {TILE_DATA.map((tile) => (
                <TileComponent
                  key={tile.id}
                  number={tile.number}
                  title={tile.title}
                  description={tile.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tablet View */}
        <div className="hidden md:block lg:hidden py-0">
          
          {/* Header and Image Section */}
          <div className="grid grid-cols-2 items-start gap-6 mb-12">
            
            {/* Left Content Section */}
            <div className="px-4 md:px-6">
              <div className="space-y-5 max-w-xl py-16">
                <h1 className="text-white font-['Playfair_Display'] font-extrabold text-4xl md:text-5xl leading-tight">
                  Who Can File a Claim?
                </h1>
                <p className="text-white font-open-sans font-normal text-sm md:text-sm leading-relaxed opacity-90">
                  Claims can be filed by individuals directly exposed to asbestos in the workplace and by family members affected through secondary exposure.
                </p>
              </div>
            </div>

            {/* Right Image Section - No padding, aligned to top-right */}
            <div className="relative">
              <div className="absolute top-0 right-0 w-full max-w-sm md:max-w-md">
                <img 
                  src={Frame} 
                  alt="Medical X-ray illustration showing asbestos exposure effects" 
                  className="w-full h-auto object-contain ml-auto block"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Tiles Section - Grid Layout */}
          <div className="px-4 md:px-6 mt-0 md:mt-0">
            <div className="grid grid-cols-1 gap-8 md:gap-10">
              {TILE_DATA.map((tile) => (
                <TileComponent
                  key={tile.id}
                  number={tile.number}
                  title={tile.title}
                  description={tile.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden py-1 relative">
          
          {/* Image Section - No padding, aligned to top-right */}
          <div className="relative mb-8">
            <div className="absolute top-0 right-0 w-3/4 max-w-xs">
              <img 
                src={Frame} 
                alt="Medical X-ray illustration showing asbestos exposure effects" 
                className="w-full h-auto object-contain ml-auto block"
                loading="lazy"
              />
            </div>
          </div>

          {/* Header Content */}
          <div className="px-4 mt-64 mb-10">
            <div className="space-y-4 max-w-sm">
              <h1 className="text-white font-['Playfair_Display'] font-extrabold text-5xl sm:text-6xl leading-tight">
                Who Can <span className='text-[#C09F53]'> File <br></br>a Claim?</span>
              </h1>
              <p className="text-white font-open-sans font-normal text-sm sm:text-base leading-relaxed opacity-90">
                Claims can be filed by individuals directly exposed to asbestos in the workplace and by family members affected through secondary exposure.
              </p>
            </div>
          </div>

          {/* Tiles Section */}
          <div className="px-4">
            <div className="space-y-6">
              {TILE_DATA.map((tile) => (
                <TileComponent
                  key={tile.id}
                  number={tile.number}
                  title={tile.title}
                  description={tile.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubFive;