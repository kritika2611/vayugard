import React from 'react';
import ProductCard from '../components/ProductCard';
import DoubleSkinAirHandlingUnits from '../images/double-skin-ahu.jpg';
import PharmaCleanroomAhu from '../images/pharma-ahu.jpg';
import HiWallFcu from '../images/hi-wall-fcu.jpg';
import AhuAcFans from '../images/ahu-ec-fans.jpg';
import FanCoilUnits from '../images/fan-coil-units.jpg';
import AhuHumidifier from '../images/ahu-dehumidifier.jpg';
import AirWashers from '../images/air-washers.jpg';
import AirScrubbers from '../images/air-scrubbers.jpg';
import Coils from '../images/coils.jpg';
import VentilationUnits from '../images/ventilation-units.jpg';
import TfaUnit from '../images/tfa-unit.jpg';
import IaqUnits from '../images/iaq-units.jpg';
import TfaFiltration from '../images/tfa-filtration.jpg';
import PpuUnits from '../images/ppu-units.jpg';
import EnergyRecoveryUnits from '../images/energy-recovery-units.jpg';
import EAC from '../images/EAC.png';
import TechnologyTabs from '../components/TechnologyTabs';
import { motion } from 'framer-motion';

const products = [
  {
    id: 0,
    title: 'Electronic Air Cleaner',
    description: 'the Vayugard EAC delivers clean, breathable air with capacities of 1000–2000 CFM (up to 3400 m³/hr). It captures ultra-fine particles as small as 0.01 microns using heavy-duty, washable commercial cells and pre-filters. A solid-state power supply ensures long-lasting reliability, while interconnectable units allow scalable configurations. Built-in test functionality makes system checks effortless, ensuring consistent air purification at all times.',
    image: EAC,
  },
  {
    id: 1,
    title: 'Double Skin Air Handling Units',
    description: 'Advanced AHUs designed with double-skin construction for enhanced insulation and efficiency. Ideal for maintaining precise air quality in critical environments.',
    image: DoubleSkinAirHandlingUnits,
  },
  // {
  //   id: 2,
  //   title: 'Pharma / Cleanroom AHU',
  //   description: 'Specialized air handling units tailored for pharmaceutical and cleanroom applications, ensuring stringent air quality and sterility standards.',
  //   image: PharmaCleanroomAhu,
  // },
  {
    id: 3,
    title: 'Hi wall fan coil unit',
    description: 'Compact and efficient units designed for residential and commercial spaces, providing optimal cooling and heating solutions.',
    image: HiWallFcu,
  },
  {
    id: 4,
    title: 'AHUs with Electronically Commutated EC fans',
    description: 'Energy-efficient AHUs equipped with EC fans for precise control and reduced energy consumption, suitable for modern applications.',
    image: AhuAcFans,
  },
  // {
  //   id: 6,
  //   title: 'AHUs with Dehumidifier',
  //   description: 'Air handling units integrated with dehumidifiers to manage humidity levels in specialized environments like laboratories and production facilities.',
  //   image: AhuHumidifier,
  // },
  {
    id: 7,
    title: 'Air-Washers (single/ Double / Triple stage)',
    description: 'Advanced air washers for cooling and cleaning air in industrial and commercial setups, with customizable stages for efficiency.',
    image: AirWashers,
  },
  {
    id: 8,
    title: 'Air-Scrubbers (Wet / Dry)',
    description: 'High-performance scrubbers designed to remove airborne contaminants, ensuring clean air in industrial and commercial facilities.',
    image: AirScrubbers,
  },
  {
    id: 9,
    title: 'Coils (Dx / CHW / HW / Steam)',
    description: 'Durable and efficient coils for direct expansion, chilled water, hot water, and steam applications, enhancing system performance.',
    image: Coils,
  },
  {
    id: 10,
    title: 'Ventilation Units (Supply / Exhaust)',
    description: 'Specialized ventilation units to ensure effective supply and exhaust of air, promoting a healthy indoor environment.',
    image: VentilationUnits,
  },
  {
    id: 11,
    title: 'TFA (Treated Fresh Air Unit)',
    description: 'Treated Fresh Air Units designed to supply clean and conditioned air, enhancing indoor air quality and comfort.',
    image: TfaUnit,
  },
  {
    id: 12,
    title: 'Indoor Air Quality Units (PM 2.5 & UV Lamps)',
    description: 'Innovative units equipped with PM 2.5 filters and UV lamps to eliminate pollutants and pathogens, ensuring healthy air.',
    image: IaqUnits,
  },
  {
    id: 13,
    title: 'TFA with Chemical / Dust / microbial filtration/ ESP',
    description: 'Advanced TFA units featuring chemical, dust, microbial filtration, and ESP filters to meet stringent air quality requirements.',
    image: TfaFiltration,
  },
  // {
  //   id: 14,
  //   title: 'PPU Positive pressurization units with Chemical Filtration',
  //   description: 'Specialized units with chemical filtration to combat harmful gases like SOx and NOx, ideal for industrial applications.',
  //   image: PpuUnits,
  // },
  {
    id: 15,
    title: 'Energy Recovery Units with HRW',
    description: 'Energy-efficient units featuring Heat Recovery Wheels (HRW) to recover energy while maintaining optimal indoor air conditions.',
    image: EnergyRecoveryUnits,
  },
];

const Products = () => {
  return (
    <div className="container mx-auto">
      <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-center space-y-6 max-w-5xl mx-auto"
      >
        <h1 className="text-4xl text-center font-bold text-[#076499]  dark:text-[#BFDBFE] mb-8">Our Products</h1>
      </motion.div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
      <section className='mt-16 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'>
        <TechnologyTabs/>
      </section>
    </div>
  );
};

export default Products;

