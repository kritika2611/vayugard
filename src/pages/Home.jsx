import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import Design from '../images/design.jpg';
import Supply from '../images/supply.jpg';
import Installation from '../images/installation.jpg';
import Commissioning from '../images/commissioning.jpg';
import HomeImageSlider from '../components/HomeImageSlide';
import Background from '../images/energy_efficient.png' 
import Background1 from '../images/Background/Background4.webp';
import Background2 from '../images/Background/centralAcBackground.jpg';
import Background3 from '../images/Background/acBackground2.jpg';
import AirCleaner from '../images/Background/AirCleanerBg.webp';
import TechnologyTabs from '../components/TechnologyTabs';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Wrench,
  Sparkles,
  Leaf,
  Users,
  Building2,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/card';


const services = [
  {
    id: 1,
    title: 'Design',
    description: 'Custom HVACR system design tailored to your specific needs.',
    image: Design,
  },
  {
    id: 2,
    title: 'Supply',
    description: 'Procurement of high-quality HVACR equipment and components.',
    image: Supply,
  },
  {
    id: 3,
    title: 'Installation',
    description: 'Expert installation of HVACR systems by our skilled technicians.',
    image: Installation,
  },
  {
    id: 4,
    title: 'Commissioning',
    description: 'Thorough testing and commissioning of installed HVACR systems.',
    image: Commissioning,
  },
];

const slides = [
  {
    image: Background1,
    title: 'Breathe Easy, Live Better!',
    description: 'Experience pure, fresh air in every room. Our advanced air conditioning solutions ensure you breathe easy and live comfortably, no matter the season.'
  },
  {
    image: Background2,
    title: 'Energy Efficient Cooling',
    description: 'Cut down on energy bills with our cutting-edge HVACR technologies designed for both residential and industrial applications.'
  },
  {
    image: Background,
    title: 'Efficiency Meets Sustainability!',
    description: 'Reduce your carbon footprint without compromising on performance. Our eco-friendly HVACR systems are engineered for long-term energy savings and environmental harmony.'
  },
  {
    image: Background3,
    title: 'Smart Air Management',
    description: 'Enjoy intelligent air quality monitoring and control for optimal health, comfort, and productivity.'
  },
];

const features = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-[#076499]" />,
    title: 'Proven Expertise',
    description:
      'Backed by 30+ years of experience across healthcare, defence, hospitality, and industrial sectors.',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[#076499]" />,
    title: 'Innovative Technology',
    description:
      'Cutting-edge, filterless purification systems designed to deliver clean and safe air.',
  },
  {
    icon: <Leaf className="w-6 h-6 text-[#076499]" />,
    title: 'Sustainable Approach',
    description:
      'Energy-efficient systems focused on minimizing environmental impact and operational costs.',
  },
  {
    icon: <Wrench className="w-6 h-6 text-[#076499]" />,
    title: 'End-to-End Solutions',
    description:
      'From design and engineering to installation and maintenance—complete HVACR ownership.',
  },
  {
    icon: <Users className="w-6 h-6 text-[#076499]" />,
    title: 'Customer-Centric',
    description:
      'Tailored solutions that prioritize comfort, air quality, and long-term client satisfaction.',
  },
  {
    icon: <Building2 className="w-6 h-6 text-[#076499]" />,
    title: 'Trusted by Industries',
    description:
      'Deployed across large-scale facilities and trusted by leading institutions nationwide.',
  },
];

const Home = () => {
  return (
    <>
    <div className="space-y-12">
      <motion.div
        initial="hidden"
        animate="visible"
        className="text-center space-y-4"
      >
         <motion.h1
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 1.5, ease: 'easeOut' },
              },
            }}
            className="text-5xl md:text-6xl font-extrabold tracking-wide text-[#076499] dark:text-gray-100"
            style={{
              textShadow: '1px 2px 4px rgba(0, 0, 0, 0.2)', // soft shadow for depth
            }}
          >
            The Future of Air is Here
            {/* <h1 className="text-5xl font-bold text-[#076499] dark:text-gray-100">Welcome to Vayugard</h1> */}
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 2, delay:0.1 , ease: 'easeOut' },
              },
            }}
            className="text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Join the air-tech revolution redefining HVACR for a healthier tomorrow
          </motion.p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <HomeImageSlider slides={slides} interval={4500}/>
      </motion.div>
            
      <motion.section initial="hidden" animate="visible" className="text-center">
        <motion.h1
            variants={{
              hidden: { opacity: 0, y:2, scale: 0.9 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 2, delay:0.1 , ease: 'easeOut' },
              },
            }}
            className="text-lg md:text-5xl font-bold text-[#396668] dark:text-gray-200 mb-6"
          >
         About Us 
         </motion.h1>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-6xl mx-auto">
        Founded in 2024 by industry veteran Pawan Saini, who brings over 30 years of experience in the HVACR (Heating, Ventilation, Air Conditioning, and Refrigeration) domain, Vayugard is rapidly carving a niche as a trusted leader in providing end-to-end HVACR solutions.

        Driven by a passion for innovation and sustainability, Vayugard combines deep technical expertise with a strong commitment to customer-centric, energy-efficient designs. From concept to commissioning, the company offers a complete suite of services—designing, engineering, testing, supplying, installation, and maintenance of HVAC systems tailored to client needs.

        Vayugard’s dedication to quality and performance has earned it the trust of clients across a wide range of sectors, including healthcare, hospitality, industrial, defence, and residential. The company's solutions are designed not only to optimize indoor air quality and thermal comfort but also to deliver significant energy savings and operational reliability.<br/><br/>
        <div className="my-5 p-6 bg-gradient-to-b from-[#dff1fa] dark:from-[#1F2937] via-[#edf7fb] dark:via-[#273242] to-[#f2f9fc] dark:to-[#2e3a4e] dark:border-blue-500 rounded-2xl shadow-md text-center space-y-4 shadow-card animate-float">
          <p className="text-xl italic font-medium text-[#076499] dark:text-blue-200">
            “We Protect Air for Your Life.”
          </p>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 text-justify">
            This guiding principle drives every decision we make—from how we design systems to the way we serve our clients. At Vayugard, we believe air is life, and managing it responsibly is both our mission and our promise. Our commitment goes beyond comfort—it's about ensuring healthier living and working environments through clean, sustainable, and intelligently managed HVACR solutions.
          </p>
        </div>
        </p>
        {/* <Link style={{ pointerEvents: "auto", zIndex: 10 }} to="/about" className="bg-blue-500 dark:bg-blue-400 text-white px-6 py-3 rounded-md hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors text-lg font-semibold">Know More</Link> */}
      </motion.section>

      <section className="bg-gradient-to-b bg-gray-50 dark:bg-[#0C0F1B] py-12 px-6 md:px-12 rounded-2xl shadow-lg">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <img
            src={AirCleaner}
            alt="Vayugard Electronic Air Cleaner"
            className="rounded-xl shadow-md object-cover w-full h-full max-h-[500px]"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#396668] dark:text-[#6e9698] text-center md:text-left">
              Vayugard Electronic Air Cleaner
            </h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg text-justify mb-6">
              The Vayugard Electronic Air Cleaner is your key to reducing your ecological footprint. This advanced, multi-stage air purification unit integrates seamlessly with central HVAC systems to remove ultra-fine particles, bacteria, VOCs, and airborne pollutants with unmatched efficiency—certified by US-based labs.
            </p>
            <div className="space-y-2">
              {[
                'Complete clean air – removes particles as small as 0.01 micron',
                'Filterless magnetic technology – no recurring filter replacement',
                'Cost-effective – zero ongoing maintenance costs',
                'Universal compatibility – supports all air conditioning types',
                // 'Capacity: 1000–2000 CFM (up to 3400m³/hr)',
                'Smart integration: BMS-ready with test button & modular arrays',
                'Durable design: Solid-state power supply, removable commercial cells'
              ].map((text, idx) => (
                <div key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                  <svg
                    className="w-6 h-6 text-green-500 shrink-0 mt-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="ml-2">{text}</span>
                </div>
              ))}
            </div>
            <Link
              to="/products"
              className="inline-block mt-4 bg-[#3e9499] dark:bg-[#3e9499] text-white px-5 py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-500 transition-colors text-lg font-semibold"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>

      <TechnologyTabs/>


      <section className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-[#396668] dark:text-gray-200 mb-6 text-center">What We Offer</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-3xl mx-auto text-center">
          We deliver cutting-edge HVACR solutions with a commitment to improving indoor environments through precise control over temperature, humidity, and air quality. Our holistic approach blends advanced technology with a deep understanding of environmental dynamics, ensuring comfort and efficiency for every client.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </section>

      <section className="py-5 px-4 md:px-10 dark:bg-[#0f172a]">
        <h2 className="text-4xl text-center font-bold text-[#076499] dark:text-gray-200 mb-12">
          Why Choose Vayugard?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1e293b]"
            >
              <CardHeader className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#E0FCEC] dark:bg-[#334155] rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <CardTitle className="text-lg text-gray-800 dark:text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
    </>

  );
};

export default Home; 

