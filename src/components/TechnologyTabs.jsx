import React, { useState } from 'react';
import { Check, AirVent, CircleDot, Zap, Shield, Sparkles, Wind, Filter, MagnetIcon } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs';
import MagneticFilteration from '../images/Background/MagneticFilteration.png';
import UVGI from '../images/UVGI.jpg';
import PHIO from '../images/PHIO.png';
import ColdPlasma from '../images/ColdPlasma.jpg';
import PCOTech from '../images/PCOTech.jpg';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';

const tabItems = [
    { value: 'magnetic', label: 'Magnetic Filtration', icon: Filter },
    { value: 'uv', label: 'UVGI', icon: Zap },
    { value: 'phio', label: 'PHIO', icon: Sparkles },
    { value: 'plasma', label: 'Plasma', icon: Shield },
    { value: 'pco', label: 'PCO', icon: Wind },
  ];


const TechnologyTabs = () => {

  return (
    <section className="animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-4xl text-[#076499] dark:text-[#BFDBFE] md:text-5xl font-bold text-gradient mb-6">
              Advanced Air Purification Technologies
            </h2>
            <p className="text-lg md:text-xl dark:text-[#dbd8d8] text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Discover our cutting-edge air purification solutions that harness the power of nature, 
              science, and innovation to deliver unparalleled indoor air quality.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="magnetic" className="w-full">
              <TabsList className="grid grid-cols-5 w-full mb-8 bg-white dark:bg-[#1e293b] bg-gradient-card/50 backdrop-blur-sm">
                {tabItems.map(({ value, label, icon: Icon }) => (
                    <TabsTrigger
                    key={value}
                    value={value}
                    className="flex flex-col items-center gap-2 p-4 text-xs relative text-muted-foreground 
                        data-[state=active]:text-[#076499] 
                        data-[state=active]:font-semibold 
                        data-[state=active]:shadow-[0_4px_8px_#e0dfdf] 
                        dark:data-[state=active]:text-[#a1cde7] 
                        dark:text-[#a1cde7]
                        transition-all rounded-lg"
                    >
                    <Icon className="w-5 h-5" />
                    {label}
                    </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="magnetic" className="animate-fade-in">
                <Card className="bg-gradient-card border-0 shadow-hero pt-10">
                    <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        
                        {/* TEXT CONTENT */}
                        <div>
                        <CardHeader className="text-left pb-4">
                            <CardTitle className="text-3xl text-[#3d3b3b] dark:text-[#cecccc] flex items-center gap-2 mb-2">
                            Magnetic Filtration Technology
                            </CardTitle>
                            <CardDescription className="text-lg dark:text-[#BFDBFE]  text-muted-foreground">
                            Nature-inspired filterless purification process
                            </CardDescription>
                        </CardHeader>
                        
                        <p className="text-foreground dark:text-[#dbd8d8] leading-relaxed text-justify">
                            Experience the future of air purification with our revolutionary magnetic filtration system. 
                            This advanced technology harnesses the power of micro-trapping processes through impingement, 
                            polarization, and agglomeration to create dual polarity fields that capture and neutralize 
                            even the finest airborne particles.
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 pt-5">
                            {[
                            {
                                icon: <Check className="w-6 h-6 text-[#076499]" />,
                                title: "Trap & Kill Process",
                                desc: "Removes PM 2.5, germs, and allergens with exceptional efficiency",
                            },
                            {
                                icon: <CircleDot className="w-6 h-6 text-[#076499]" />,
                                title: "Zero Recurring Costs",
                                desc: "No filter replacements or maintenance expenses",
                            },
                            {
                                icon: <AirVent className="w-6 h-6 text-[#076499]" />,
                                title: "Recirculating Systems",
                                desc: "Perfect for continuous air cleaning applications",
                            },
                            ].map((item, index) => (
                            <div
                                key={index}
                                className="text-center p-6 bg-card/50 rounded-xl border border-border/30 transition-transform duration-300 hover:scale-105 hover:shadow-md"
                            >
                                <div className="w-12 h-12 bg-[#e0f3fc] dark:bg-[#9cbdcd] rounded-full flex items-center justify-center mx-auto mb-3">
                                {item.icon}
                                </div>
                                <h4 className="font-semibold dark:text-[#dbd8d8] text-foreground mb-2">{item.title}</h4>
                                <p className="text-sm dark:text-[#dbd8d8] text-muted-foreground">{item.desc}</p>
                            </div>
                            ))}
                        </div>
                        </div>

                        {/* IMAGE */}
                        <div className="w-full h-full flex justify-center items-center">
                        <img
                            src={MagneticFilteration} // <-- Replace with your actual image path
                            alt="Magnetic Filtration"
                            className="rounded-xl shadow-lg w-full max-w-md object-cover"
                        />
                        </div>
                    </div>
                    </CardContent>

                </Card>
              </TabsContent>

              <TabsContent value="uv" className="animate-fade-in">
                <Card className="bg-gradient-card border-0 shadow-hero pt-10">
                    <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* TEXT CONTENT */}
                        <div>
                        <CardHeader className="text-left pb-4">
                            <CardTitle className="text-3xl text-[#3d3b3b] dark:text-[#dbd8d8] flex items-center gap-2 mb-2">
                            Ultraviolet Germicidal Irradiation
                            </CardTitle>
                            <CardDescription className="text-lg  dark:text-[#BFDBFE] text-muted-foreground">
                            Proven UV-C technology for superior air disinfection
                            </CardDescription>
                        </CardHeader>
                        <p className="text-foreground dark:text-[#dbd8d8] leading-relaxed text-justify">
                            Harness the proven power of UV-C light at 254 nm wavelength to eliminate harmful microorganisms.
                            Our UVGI systems disrupt DNA structures of pathogens, preventing reproduction and ensuring
                            comprehensive air sterilization that meets CDC and ASHRAE recommendations.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 pt-5">
                            <div className="transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md text-center p-6 bg-card/50 rounded-xl border border-border/30">
                            <div className="w-12 h-12 bg-[#e0f2ff] dark:bg-[#9cbdcd] rounded-full flex items-center justify-center mx-auto mb-3">
                                <Shield className="w-6 h-6 text-[#076499]" />
                            </div>
                            <h4 className="font-semibold dark:text-[#dbd8d8] text-foreground mb-2">Proven Applications</h4>
                            <ul className="space-y-2 text-sm dark:text-[#dbd8d8] text-muted-foreground text-left">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Medical sanitation facilities</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Sterile work environments</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Airborne infection control</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full"></div>Standalone & in-duct systems</li>
                            </ul>
                            </div>
                            <div className="transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md text-center p-6 bg-card/50 rounded-xl border border-border/30">
                            <div className="w-12 h-12 bg-[#e0f2ff] dark:bg-[#9cbdcd] rounded-full flex items-center justify-center mx-auto mb-3">
                                <Zap className="w-6 h-6 text-[#076499]" />
                            </div>
                            <h4 className="font-semibold dark:text-[#dbd8d8] text-foreground mb-2">Target Pathogens</h4>
                            <ul className="space-y-2 text-sm dark:text-[#dbd8d8] text-muted-foreground text-left">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-success rounded-full"></div>E. Coli bacteria</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-success rounded-full"></div>SARS-CoV-2 virus</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-success rounded-full"></div>Staphylococcus aureus</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-success rounded-full"></div>Configurable log reduction</li>
                            </ul>
                            </div>
                        </div>
                        </div>

                        {/* IMAGE */}
                        <div className="w-full h-full flex justify-center items-center">
                        <img
                            src={UVGI} // <-- Replace with actual import
                            alt="UVGI Technology"
                            className="rounded-xl shadow-lg w-full max-w-md object-cover"
                        />
                        </div>
                    </div>
                    </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="phio" className="animate-fade-in">
                <Card className="bg-gradient-card border-0 shadow-hero pt-10">
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      <div>
                        <CardHeader className="text-left pb-4">
                          <CardTitle className="text-3xl text-[#3d3b3b] dark:text-[#dbd8d8] flex items-center gap-2 mb-2">Photo Hydro Ionized Oxidation</CardTitle>
                          <CardDescription className="text-lg dark:text-[#BFDBFE] text-muted-foreground">Hybrid active purification for large spaces</CardDescription>
                        </CardHeader>
                        <p className="text-foreground dark:text-[#dbd8d8] leading-relaxed text-justify">
                          Transform your indoor environment with PHIO's revolutionary hybrid technology that combines opposite polarities with advanced photocatalysis. This system generates highly reactive oxygen species that actively purify both air and surfaces, making it ideal for large-scale odor control and allergen management.
                        </p>
                        <div className="grid gap-6 pt-5">
                          <div className="transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md p-6 bg-card/50 rounded-xl border border-border/30">
                            <h4 className="font-semibold text-foreground dark:text-[#BFDBFE] text-lg mb-3">Key Benefits</h4>
                            <ul className="space-y-2 dark:text-[#dbd8d8] text-muted-foreground">
                              <li className="flex items-center gap-2">
                                <div className="w-12 h-12 bg-[#e0f2ff] dark:bg-[#9cbdcd] rounded-full flex items-center justify-center">
                                  <Sparkles className="w-5 h-5 text-[#076499]" />
                                </div>
                                Destroys persistent odors and allergens
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-12 h-12 bg-[#e0f2ff] dark:bg-[#9cbdcd] rounded-full flex items-center justify-center">
                                  <Sparkles className="w-5 h-5 text-[#076499]" />
                                </div>
                                Reduces bio-aerosol burden significantly
                              </li>
                              <li className="flex items-center gap-2">
                                <div className="w-12 h-12 bg-[#e0f2ff] dark:bg-[#9cbdcd] rounded-full flex items-center justify-center">
                                  <Sparkles className="w-5 h-5 text-[#076499]" />
                                </div>
                                Diminishes cross-infection pathogen load
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="w-full h-full flex justify-center items-center">
                        <img
                          src={PHIO} // <-- Replace with actual import
                          alt="PHIO Technology"
                          className="rounded-xl shadow-lg w-full max-w-md object-cover"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="plasma" className="animate-fade-in">
                <Card className="bg-gradient-card border-0 shadow-hero pt-10">
                    <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* TEXT CONTENT */}
                        <div>
                        <CardHeader className="text-left pb-4">
                            <CardTitle className="text-3xl text-[#3d3b3b] dark:text-[#dbd8d8] flex items-center gap-2 mb-2">
                            Cold Plasma Technology
                            </CardTitle>
                            <CardDescription className="text-lg dark:text-[#BFDBFE] text-muted-foreground">
                            Advanced plasma purification for demanding environments
                            </CardDescription>
                        </CardHeader>
                        <p className="text-foreground dark:text-[#dbd8d8] leading-relaxed text-justify">
                            Unleash the power of cold plasma technology to tackle the most challenging air quality issues. 
                            Our system generates high-strength, electronically charged plasma species that excel at eliminating 
                            chemical contaminants and malodors in harsh industrial environments.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 pt-5">
                            <div className="transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md text-center p-6 bg-card/50 rounded-xl border border-border/30">
                            <div className="w-12 h-12 bg-[#e0f2ff] dark:bg-[#9cbdcd] rounded-full flex items-center justify-center mx-auto mb-3">
                                <Shield className="w-6 h-6 text-[#076499]" />
                            </div>
                            <h4 className="font-semibold dark:text-[#dbd8d8] text-foreground mb-2">Exceptional Performance</h4>
                            <p className="text-sm  dark:text-[#dbd8d8] text-muted-foreground">
                                Remarkably effective on chemical pollutants and designed specifically for 
                                demanding industrial and commercial applications.
                            </p>
                            </div>
                            <div className="transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md text-center p-6 bg-card/50 rounded-xl border border-border/30">
                            <div className="w-12 h-12 bg-[#e0f2ff] dark:bg-[#9cbdcd] rounded-full flex items-center justify-center mx-auto mb-3">
                                <AirVent className="w-6 h-6 text-[#076499]" />
                            </div>
                            <h4 className="font-semibold dark:text-[#dbd8d8] text-foreground mb-2">Versatile Integration</h4>
                            <p className="text-sm dark:text-[#dbd8d8] text-muted-foreground">
                                Compatible with Hi-Wall, Cassette, Window AC, Ductables, FCU, ERV, 
                                and many other HVAC units without modifications.
                            </p>
                            </div>
                        </div>
                        </div>

                        {/* IMAGE */}
                        <div className="w-full h-full flex justify-center items-center">
                        <img
                            src={ColdPlasma} // <-- Replace with actual import
                            alt="Cold Plasma Technology"
                            className="rounded-xl shadow-lg w-full max-w-md object-cover"
                        />
                        </div>
                    </div>
                    </CardContent>
                </Card>
              </TabsContent>

                <TabsContent value="pco" className="animate-fade-in">
                <Card className="bg-gradient-card border-0 shadow-hero pt-10">
                    <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* TEXT CONTENT */}
                        <div>
                        <CardHeader className="text-left pb-4">
                            <CardTitle className="text-3xl text-[#3d3b3b] dark:text-[#dbd8d8] flex items-center gap-2 mb-2">
                            Photo Catalytic Oxidation
                            </CardTitle>
                            <CardDescription className="text-lg dark:text-[#BFDBFE] text-muted-foreground">
                            Photochemistry-powered large-scale odor elimination
                            </CardDescription>
                        </CardHeader>
                        <p className="text-foreground dark:text-[#dbd8d8] leading-relaxed text-justify">
                            Experience the ultimate in chemical gas breakdown with our PCO technology. Using UV light 
                            and titanium dioxide catalysts, we achieve rapid degradation of the most complex VOCs 
                            and odors with unprecedented single-pass efficiency for large-scale applications.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6 pt-5">
                            <div className="transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md text-center p-6 bg-card/50 rounded-xl border border-border/30">
                            <div className="w-12 h-12 bg-[#e0f2ff] dark:bg-[#9cbdcd] rounded-full flex items-center justify-center mx-auto mb-3">
                                <Wind className="w-6 h-6 text-[#076499]" />
                            </div>
                            <h4 className="font-medium dark:text-[#dbd8d8] text-foreground mb-1">Scalable Modules</h4>
                            <p className="text-sm dark:text-[#dbd8d8] text-muted-foreground">Available in small to large filter configurations</p>
                            </div>
                            <div className="transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md text-center p-6 bg-card/50 rounded-xl border border-border/30">
                            <div className="w-12 h-12 bg-[#e0f2ff] dark:bg-[#9cbdcd] rounded-full flex items-center justify-center mx-auto mb-3">
                                <Check className="w-6 h-6 text-[#076499]" />
                            </div>
                            <h4 className="font-medium dark:text-[#dbd8d8] text-foreground mb-1">Proven Results</h4>
                            <p className="text-sm dark:text-[#dbd8d8] text-muted-foreground">High-concentration gas abatement in large infrastructure</p>
                            </div>
                        </div>
                        </div>

                        {/* IMAGE */}
                        <div className="w-full h-full flex justify-center items-center">
                        <img
                            src={PCOTech} // <-- Replace with actual import
                            alt="PCO Technology"
                            className="rounded-xl shadow-lg w-full max-w-md object-cover"
                        />
                        </div>
                    </div>
                    </CardContent>
                </Card>
                </TabsContent>
            </Tabs>
          </div>
        </section>

  );
};

export default TechnologyTabs;
