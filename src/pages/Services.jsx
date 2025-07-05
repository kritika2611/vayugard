import React from 'react';
import ServiceCard from '../components/ServiceCard';
import AcInstallation from '../images/ac_installation.jpg';
import HeatingSystem from '../images/heating_system.jpg';
import VentilationSystem from '../images/ventilation_systems.jpg';
import HvacSystem from '../images/hvac_systems.jpg';
import EmergencyRepair from '../images/emergency_repairs.jpg';
import EnergyEfficient from '../images/energy_efficient.jpg';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'AC Installation',
    description: 'Professional installation of air conditioning systems for your home or office.',
    image: AcInstallation,
  },
  {
    id: 2,
    title: 'Heating Services',
    description: 'Expert installation, repair, and maintenance of heating systems to keep you warm.',
    image: HeatingSystem,
  },
  {
    id: 3,
    title: 'Ventilation Solutions',
    description: 'Improve indoor air quality with our advanced ventilation solutions.',
    image: VentilationSystem,
  },
  {
    id: 4,
    title: 'HVAC Maintenance',
    description: 'Regular maintenance services to keep your HVAC systems running efficiently.',
    image: HvacSystem,
  },
  {
    id: 5,
    title: 'Emergency Repairs',
    description: '24/7 emergency repair services for all your HVAC needs.',
    image: EmergencyRepair,
  },
  {
    id: 6,
    title: 'Energy Efficiency Upgrades',
    description: 'Upgrade your HVAC systems to improve energy efficiency and reduce costs.',
    image: EnergyEfficient,
  },
];

const Services = () => {
  return (
    <div className="space-y-8">
      <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="text-center space-y-6 max-w-5xl mx-auto"
      >
        <h1 className="text-4xl text-center font-bold text-[#076499]  dark:text-[#BFDBFE] mb-8">Our Services</h1>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;

