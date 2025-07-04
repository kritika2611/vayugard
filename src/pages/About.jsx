import React from 'react';

const About = () => {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl md:text-5xl font-bold text-[#076499]  dark:text-[#BFDBFE] mb-6 text-center">About Vayuguard</h1>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-6 px-10">
        Founded in 2024 by an HVACR industry veteran, who brings over three decades of expertise to the field, Vayugard has quickly emerged as a visionary force in the Heating, Ventilation, Air Conditioning, and Refrigeration (HVACR) landscape. With a deep-rooted belief that air is life, the company is on a mission to revolutionize the way environments are conditioned, purified, and sustained—one innovative system at a time.

        Vayugard is not just another HVACR service provider—it is a full-spectrum solutions partner offering design, engineering, procurement, installation, testing, commissioning, and lifecycle maintenance. Every solution is meticulously tailored to meet client-specific needs across a diverse set of sectors, including healthcare, hospitality, industrial complexes, defence facilities, commercial spaces, and residential developments.

        <br/><br/>At the heart of Vayugard’s philosophy lies a deep commitment to energy efficiency, environmental responsibility, and user well-being. Our systems are built to do more than just cool or heat a space—they are engineered to create healthier, cleaner, and smarter indoor environments, with a strong emphasis on air purification, humidity control, and real-time environmental monitoring. Whether it’s safeguarding patients in an operating theatre, ensuring thermal comfort in a luxury hotel, or controlling pollutants in industrial manufacturing zones, Vayugard delivers with precision and care.

        The company’s edge lies in its fusion of technological advancement with environmental intelligence. Leveraging the latest in IoT-based building management systems, AI-driven climate control algorithms, and sustainable refrigerants, Vayugard brings intelligent HVACR solutions to the forefront—maximizing performance while minimizing carbon footprint.

        Driven by a team of skilled engineers, certified technicians, and sustainability advocates, Vayugard is dedicated to creating long-term value for clients by reducing operational costs, increasing energy savings, and extending system life cycles
        </p>
        <p className="text-lg text-center text-gray-600 dark:text-gray-400 px-10">
          With a team of skilled engineers and technicians, we specialize in designing and implementing systems that ensure precise control over air quality, temperature, and humidity, tailored to diverse sectors such as healthcare, hospitality, and industrial facilities.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-b from-[#dff1fa] dark:from-[#1F2937] via-[#edf7fb] dark:via-[#273242] to-[#f2f9fc] dark:to-[#2e3a4e] p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-4">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300">
            To create sustainable, innovative, and customer-centric HVACR solutions that enhance indoor environments while supporting ecological balance.
          </p>
        </div>
        <div className="bg-gradient-to-b from-[#dffae7] dark:from-[#1F2937] via-[#edfbf5] dark:via-[#273242] to-[#f2fcf8] dark:to-[#2e3a4e] p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-4">Our Vision</h2>
          <p className="text-gray-700 dark:text-gray-300">
            To be the most trusted name in HVACR by consistently delivering quality, reliability, and energy-efficient solutions.
          </p>
        </div>
      </div>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Our Commitment</h2>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2">
          <li>Delivering cutting-edge HVACR solutions</li>
          <li>Ensuring precise control over temperature, humidity, and air quality</li>
          <li>Blending advanced technology with environmental understanding</li>
          <li>Providing comfort and efficiency for every client</li>
          <li>Supporting sustainability in all our projects</li>
        </ul>
      </section>
    </div>
  );
};

export default About;

