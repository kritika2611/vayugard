import React from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, Target, ShieldCheck, Thermometer, Droplets, Leaf } from 'lucide-react';
import AboutImage from '../images/aboutUs.jpg'; 
import NestleLogo from '../images/Nestle2.png';
import DtuLogo from '../images/DTU.png';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/card';

const About = () => {
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

        <section className="relative overflow-hidden pt-6 pb-10 px-6 md:px-12">
          <h2 className="relative z-10 text-4xl text-center font-semibold text-[#396668] dark:text-blue-200 mb-14">
            Our Clientele
          </h2>

          <div className="relative z-10 grid gap-8 sm:grid-cols-2 max-w-6xl mx-auto">
            {[ // you can easily push more objects into this list later
              { logo: NestleLogo, alt: 'Nestlé India Logo', name: 'Nestlé India Ltd.', place: 'Manesar, Haryana' },
              { logo: DtuLogo,    alt: 'DTU Logo',          name: 'Delhi Technological University', place: 'Delhi, India' },
            ].map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 120, damping: 15 }}
              >
                <Card className="backdrop-blur-lg/30 bg-white/60 dark:bg-[#1e293b]/60 border border-white/30 dark:border-white/10 shadow-xl">
                  <CardHeader className="flex flex-col items-center space-y-4 pb-2">
                    {/* bigger logo inside a ring */}
                    <div className="p-4 rounded-full bg-white dark:bg-[#273344] shadow-inner">
                      <img src={c.logo} alt={c.alt} className="w-32 h-32 object-contain" />
                    </div>
                    <CardTitle className="text-center text-xl text-gray-800 dark:text-gray-100">
                      {c.name}
                    </CardTitle>
                    <CardDescription className="text-center text-sm text-gray-600 dark:text-gray-400">
                      {c.place}
                    </CardDescription>
                  </CardHeader>
                  <CardContent />
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;

