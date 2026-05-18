import { Zap, Shield, Target, Box, Layers, Cpu, Droplets, Settings } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  manufacturer: string;
  grade: string;
  description: string;
  features: string[];
  applications: string[];
  specifications: Record<string, string>;
  images: string[];
  datasheetUrl?: string;
}

export const CATEGORIES_LIST = [
  { name: "Polycarbonate Granules", icon: Zap, desc: "High impact strength and transparency for electrical & automotive." },
  { name: "Nylon Granules", icon: Shield, desc: "Superior mechanical strength and heat resistance for structural parts." },
  { name: "ABS Granules", icon: Target, desc: "Excellent surface finish and dimensional stability for appliances." },
  { name: "PBT Granules", icon: Box, desc: "Outstanding electrical properties and chemical resistance." },
  { name: "Specialty Polymers", icon: Layers, desc: "High-performance PEEK, PPSU, and PSU for extreme environments." },
  { name: "Acrylic", icon: Droplets, desc: "Unmatched clarity and weather resistance for signage and lighting." },
  { name: "Polypropylene", icon: Settings, desc: "Versatile, lightweight, and moisture-resistant for various industries." },
  { name: "Engineering Plastics", icon: Cpu, desc: "Premium quality granules for diverse industrial manufacturing." },
];

export const CATEGORIES = CATEGORIES_LIST.map(c => c.name);

export const MANUFACTURERS = [
  "SABIC",
  "BASF",
  "Covestro",
  "DuPont",
  "LG Chem",
  "Mitsubishi",
  "RTP",
  "Toray",
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "LEXAN™ 943A Polycarbonate",
    slug: "lexan-943a-polycarbonate",
    category: "Polycarbonate Granules",
    manufacturer: "SABIC",
    grade: "943A",
    description: "LEXAN 943A is a non-filled, flame retardant grade with low viscosity, providing excellent clarity and impact resistance.",
    features: [
      "High Impact Resistance",
      "Excellent Clarity",
      "Flame Retardant (UL94 V-0)",
      "Good Processability",
    ],
    applications: [
      "Electrical Enclosures",
      "Automotive Lighting",
      "Consumer Electronics",
      "Industrial Components",
    ],
    specifications: {
      "Melt Flow Rate": "15 g/10 min",
      "Density": "1.20 g/cm³",
      "Tensile Strength": "60 MPa",
      "Flexural Modulus": "2300 MPa",
      "Heat Deflection Temp": "125 °C",
    },
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000",
    ],
    datasheetUrl: "#",
  },
  {
    id: "2",
    name: "ZYTEL® 70G33L Nylon 66",
    slug: "zytel-70g33l-nylon-66",
    category: "Nylon Granules",
    manufacturer: "DuPont",
    grade: "70G33L",
    description: "ZYTEL 70G33L is a 33% glass fiber reinforced, heat stabilized polyamide 66 resin for injection molding.",
    features: [
      "High Stiffness",
      "Heat Stabilized",
      "Chemical Resistance",
      "Low Warpage",
    ],
    applications: [
      "Engine Covers",
      "Power Tool Housings",
      "Structural Parts",
      "Railway Components",
    ],
    specifications: {
      "Glass Content": "33%",
      "Density": "1.39 g/cm³",
      "Tensile Modulus": "10000 MPa",
      "Melting Temp": "262 °C",
    },
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000",
    ],
    datasheetUrl: "#",
  },
  {
    id: "3",
    name: "MAGNUM™ 3416SC ABS",
    slug: "magnum-3416sc-abs",
    category: "ABS Granules",
    manufacturer: "Trinseo",
    grade: "3416SC",
    description: "MAGNUM 3416SC is a high-heat ABS resin offering a superior combination of processability and heat resistance.",
    features: [
      "High Heat Resistance",
      "Excellent Surface Finish",
      "Easy Flow",
      "Dimensional Stability",
    ],
    applications: [
      "Interior Automotive",
      "Appliance Parts",
      "Telecom Equipment",
    ],
    specifications: {
      "Vicat Softening Temp": "105 °C",
      "Density": "1.05 g/cm³",
      "Notched Izod Impact": "150 J/m",
    },
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1000",
    ],
    datasheetUrl: "#",
  },
];
