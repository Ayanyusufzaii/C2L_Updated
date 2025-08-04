	import React from 'react';
	import img from '../../../assets/HomeFourHero.png';

	const HomeFour = () => {
	  return (
		<section className="bg-white p-4">
		  {/* Mobile View */}
		  <div className="block md:hidden w-full flex flex-col items-stretch min-h-[400px] bg-[#023437]">
			{/* Image */}
			<div className="w-full h-[250px]">
			  <img src={img} alt="HomeFourHero" className="w-full h-full object-fill" />
			</div>

			{/* Text Content */}
			<div className="flex flex-col justify-center items-center  px-4 py-8 space-y-4 text-left">
			  <h1 className="text-3xl font-extrabold font-playfair leading-tight text-[#FFFBF3]">
				Start Your ACT Legal Claim Today
			  </h1>
			  <p className="text-base font-semibold font-opensans text-white leading-snug">
				No Win No Fees. Free, confidential review in minutes.
			  </p>
			  <div className="flex  gap-3 pt-4 w-full items-center">
				<button className="w-11/12 max-w-[300px] h-[55px] bg-[#C09F53] text-white font-semibold rounded-full">
				  Contact Us
				</button>
				<button className="w-11/12 max-w-[300px] h-[55px] border border-white text-white font-semibold rounded-full">
				  Learn More
				</button>
			  </div>
			</div>
		  </div>

		  {/* Desktop + 4K View */}
		  <div className="hidden md:flex w-full flex-row items-stretch min-h-[420px] p-6 md:p-6">
			{/* Image Section */}
			<div className="flex-1 relative">
			  <img
				src={img}
				alt="HomeFourHero"
				className="w-full h-full object-fill"
			  />
			</div>

			{/* Content Section */}
			<div className="flex-1 bg-[#023437] text-left flex flex-col justify-center 
			  px-6 sm:px-10 md:px-16 lg:px-24 2xl:px-28 3xl:px-36 4xl:px-[12vw] 
			  py-10 md:py-12 2xl:py-16 3xl:py-20 4xl:py-[100px] 
			  space-y-6 min-w-[320px]"
			>
			  <h1 className="font-extrabold font-playfair leading-tight text-[#FFFBF3]
				text-[28px] md:text-[32px] lg:text-[43px] xl:text-[56px] 
				2xl:text-[64px] 3xl:text-[80px] 4xl:text-[90px]"
			  >
				Start Your ACT Legal Claim Today
			  </h1>

			  <p className="font-semibold font-opensans text-white leading-snug
				text-[16px] md:text-[12px] lg:text-[14px] xl:text-[22px] 
				2xl:text-[24px] 3xl:text-[28px] 4xl:text-[32px]"
			  >
				No Win No Fees. Free, confidential review in minutes.
			  </p>

			  <div className="flex gap-4 pt-4 ">
				<button className="w-[200px] md:w-[220px] 3xl:w-[240px] 4xl:w-[260px] 
				  lg:h-[60px] md:h-[40px] 3xl:h-[70px] 4xl:h-[80px] 
				  bg-[#C09F53] text-white font-semibold rounded-full"
				>
				  Contact Us
				</button>
				<button className="w-[200px] md:w-[220px] 3xl:w-[240px] 4xl:w-[260px] 
				  lg:h-[60px] md:h-[40px] 3xl:h-[70px] 4xl:h-[80px] 
				  border border-white text-white font-semibold rounded-full"
				>
				  Learn More
				</button>
			  </div>
			</div>
		  </div>
		</section>
	  );
	};

	export default HomeFour;
