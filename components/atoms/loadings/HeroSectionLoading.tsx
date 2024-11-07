// import { HeroSection } from "@/components/molecules/HeroSection";
// import { HeroSectionTabsStatic } from "@/components/molecules/HeroSectionTabsStatic";
// import { MARQUEE_IMGS } from "@/config/constants";
// import { MagnifyingGlass } from "@phosphor-icons/react";
// import Image from "next/image";
// import Marquee from "react-fast-marquee";

// export const HeroSectionLoading = () => {
//   return (
//     <section className="h-screen">
//       <div
//         className={`h-auto bg-no-repeat bg-cover relative mt-[81px] w-full min-h-[70vh] md:min-h-[60vh] lg:min-h-[75vh] flex items-center`}
//         style={{
//           backgroundImage: `url("/images/hero_imgs/home_hero.webp")`,
//         }}
//       >
//         <div className="py-16 relative top-0 w-full sm:py-20 lg:py-28 px-4 md:px-5 lg:px-12 xl:px-20">
//           <h1 className="text-white w-full md:w-10/12 lg:w-9/12 mx-auto block text-left md:text-center text-4xl font-bold leading-normal md:text-5xl md:font-semibold lg:text-5xl lg:font-bold">
//             Save time finding the best venue for your event in Singapore
//           </h1>
//           <h2 className="text-white w-full md:w-10/12 lg:w-9/12 mx-auto block text-left md:text-center my-10 text-lg font-normal leading-7">
//             We transform the event planning experience with over 1,000 venues
//             and services, tailored for every occasion.
//           </h2>
//           <div
//             className="flex items-center bg-white shadow-lg rounded-lg py-4 px-5 space-x-4 md:hidden cursor-pointer"
//             role="button"
//           >
//             <MagnifyingGlass className="text-primary-600" size={32} />
//             <div>
//               <h3 className="text-primary-700 text-base font-bold leading-6">
//                 What event are you organizing
//               </h3>
//               <div className="flex text-gray-500 space-x-2 text-sm mt-2 items-center">
//                 <span className="text-sm font-medium leading-4 text-primary-600">
//                   Event type
//                 </span>
//                 <span className="text-[#D9D9D9]">•</span>
//                 <span className="text-sm font-medium leading-4 text-primary-600">
//                   Guest
//                 </span>
//                 <span className="text-[#D9D9D9]">•</span>
//                 <span className="text-sm font-medium leading-4 text-primary-600">
//                   Anywhere
//                 </span>
//               </div>
//             </div>
//           </div>

//           <HeroSectionTabsStatic
//             event_types_supported={event_types_supported}
//             max_capacity={max_capacity}
//             location={location}
//             vendor_search={vendor_search}
//             vendor_services={services}
//             vendor_areas={areas}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };
