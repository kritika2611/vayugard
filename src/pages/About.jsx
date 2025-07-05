import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Target, ShieldCheck, Thermometer, Droplets, Leaf } from 'lucide-react';
import AboutImage from '../images/aboutUs.jpg'; 

const About = () => {
  // return (
  //   <div className="space-y-12">
  //     <section>
  //       <h1 className="text-4xl md:text-5xl font-bold text-[#076499]  dark:text-[#BFDBFE] mb-6 text-center">About Vayuguard</h1>
  //       <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-6 px-10">
  //       Founded in 2024 by an HVACR industry veteran, who brings over three decades of expertise to the field, Vayugard has quickly emerged as a visionary force in the Heating, Ventilation, Air Conditioning, and Refrigeration (HVACR) landscape. With a deep-rooted belief that air is life, the company is on a mission to revolutionize the way environments are conditioned, purified, and sustained—one innovative system at a time.

  //       Vayugard is not just another HVACR service provider—it is a full-spectrum solutions partner offering design, engineering, procurement, installation, testing, commissioning, and lifecycle maintenance. Every solution is meticulously tailored to meet client-specific needs across a diverse set of sectors, including healthcare, hospitality, industrial complexes, defence facilities, commercial spaces, and residential developments.

  //       <br/><br/>At the heart of Vayugard’s philosophy lies a deep commitment to energy efficiency, environmental responsibility, and user well-being. Our systems are built to do more than just cool or heat a space—they are engineered to create healthier, cleaner, and smarter indoor environments, with a strong emphasis on air purification, humidity control, and real-time environmental monitoring. Whether it’s safeguarding patients in an operating theatre, ensuring thermal comfort in a luxury hotel, or controlling pollutants in industrial manufacturing zones, Vayugard delivers with precision and care.

  //       The company’s edge lies in its fusion of technological advancement with environmental intelligence. Leveraging the latest in IoT-based building management systems, AI-driven climate control algorithms, and sustainable refrigerants, Vayugard brings intelligent HVACR solutions to the forefront—maximizing performance while minimizing carbon footprint.

  //       Driven by a team of skilled engineers, certified technicians, and sustainability advocates, Vayugard is dedicated to creating long-term value for clients by reducing operational costs, increasing energy savings, and extending system life cycles
  //       </p>
  //       <p className="text-lg text-center text-gray-600 dark:text-gray-400 px-10">
  //         With a team of skilled engineers and technicians, we specialize in designing and implementing systems that ensure precise control over air quality, temperature, and humidity, tailored to diverse sectors such as healthcare, hospitality, and industrial facilities.
  //       </p>
  //     </section>

  //     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  //       <div className="bg-gradient-to-b from-[#dff1fa] dark:from-[#1F2937] via-[#edf7fb] dark:via-[#273242] to-[#f2f9fc] dark:to-[#2e3a4e] p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
  //         <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-4">Our Mission</h2>
  //         <p className="text-gray-700 dark:text-gray-300">
  //           To create sustainable, innovative, and customer-centric HVACR solutions that enhance indoor environments while supporting ecological balance.
  //         </p>
  //       </div>
  //       <div className="bg-gradient-to-b from-[#dffae7] dark:from-[#1F2937] via-[#edfbf5] dark:via-[#273242] to-[#f2fcf8] dark:to-[#2e3a4e] p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
  //         <h2 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-4">Our Vision</h2>
  //         <p className="text-gray-700 dark:text-gray-300">
  //           To be the most trusted name in HVACR by consistently delivering quality, reliability, and energy-efficient solutions.
  //         </p>
  //       </div>
  //     </div>

  //     <section>
  //       <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Our Commitment</h2>
  //       <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
  //         <li>Delivering cutting-edge HVACR solutions</li>
  //         <li>Ensuring precise control over temperature, humidity, and air quality</li>
  //         <li>Blending advanced technology with environmental understanding</li>
  //         <li>Providing comfort and efficiency for every client</li>
  //         <li>Supporting sustainability in all our projects</li>
  //       </ul>
  //     </section>
  //   </div>
  // );

  return (
    <>
      {/* ABOUT VAYUGARD HEADER SECTION */}
      <section className="relative overflow-hidden py-16 px-6 md:px-20 text-white bg-gradient-to-br from-[#0f172a] via-[#114066] to-[#111827]">
        <div className="absolute inset-0 before:content-[''] before:absolute before:-top-20 before:-left-20 before:w-[500px] before:h-[500px] before:bg-[radial-gradient(ellipse_at_center,_rgba(29,78,216,0.15)_0%,_transparent_70%)] before:rounded-full before:blur-3xl before:opacity-50 z-0"></div>
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center space-y-6 max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              About Vayugard
            </h1>
            <p className="text-lg leading-relaxed text-gray-200">
              Founded in 2024 by an HVACR industry veteran with over three decades of experience, Vayugard is on a mission to revolutionize how environments are conditioned, purified, and sustained.
              <br /><br />
              We're not just service providers—we're your HVACR partners in innovation, sustainability, and wellness. From design to lifecycle maintenance, we tailor HVACR systems across healthcare, hospitality, defense, and residential sectors. Our smart solutions optimize air quality, comfort, and energy efficiency.
            </p>
          </motion.div>
        </div>
      </section>


      {/* MAIN CONTENT */}
      <div className="space-y-16 px-6 md:px-16 py-16 max-w-7xl mx-auto">
        {/* IMAGE + PARAGRAPH SECTION */}
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            src={AboutImage}
            alt="About Vayugard"
            className="rounded-xl shadow-lg object-cover w-full h-full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          />
          <div className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed space-y-4">
            <p>
              Vayugard delivers full-spectrum HVACR solutions—from design to maintenance—serving industries such as healthcare, hospitality, defense, and residential sectors. Our systems are designed for more than comfort—they ensure cleaner, smarter, and healthier indoor air environments.
            </p>
            <p>
              We integrate intelligent controls, IoT-based BMS, and AI-powered climate algorithms to optimize efficiency and environmental sustainability.
            </p>
          </div>
        </section>

        {/* MISSION & VISION CARDS */}
        <section className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-blue-50 dark:from-[#1f2937] to-white dark:to-[#273242] p-6 rounded-2xl shadow-md transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <Target className="w-8 h-8 text-blue-600 dark:text-blue-300" />
              <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-200">Our Mission</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              To create sustainable, innovative, and customer-centric HVACR solutions that enhance indoor environments while supporting ecological balance.
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-gradient-to-br from-green-50 dark:from-[#1f2937] to-white dark:to-[#273242] p-6 rounded-2xl shadow-md transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <HeartHandshake className="w-8 h-8 text-green-600 dark:text-green-300" />
              <h2 className="text-2xl font-semibold text-green-800 dark:text-green-200">Our Vision</h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-base">
              To be the most trusted name in HVACR by consistently delivering quality, reliability, and energy-efficient solutions.
            </p>
          </motion.div>
        </section>

        {/* COMMITMENT SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-center text-[#076499] dark:text-blue-200 mb-10">
            Our Commitment
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <ShieldCheck />, text: 'Delivering cutting-edge HVACR solutions' },
              { icon: <Thermometer />, text: 'Precise control over temperature & humidity' },
              { icon: <Droplets />, text: 'Optimized indoor air quality' },
              { icon: <Leaf />, text: 'Environmentally responsible engineering' },
              { icon: <HeartHandshake />, text: 'Customer-first approach in every project' },
              { icon: <Target />, text: 'Energy efficiency & long-term value' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <div className="w-10 h-10 bg-[#e0f3fc] dark:bg-[#334155] flex items-center justify-center rounded-full text-[#076499] dark:text-blue-200">
                  {item.icon}
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-base">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

