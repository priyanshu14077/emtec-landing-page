export interface ISector {
  id: string;
  title: string;
  projects_count: number;
  icon_path: string;
  image_url: string;
  project_list: string[];
}

// Ordered to match Figma 3x4 grid layout (left to right, top to bottom)
export const sectors: ISector[] = [
  {
    id: "metro",
    title: "METRO",
    projects_count: 19,
    icon_path: "icon-metro-train",
    image_url: "/assets/images/sectors/metro.jpg", // Place image at: public/assets/images/sectors/metro.jpg
    project_list: [
      "Bund Garden - E&M Works",
      "Ramwadi - E&M Works",
      "Yerwada - E&M Works",
      "Khadki - E&M Works",
      "Budhwarpeth - E&M Works",
      "Mandai - Electrical Works",
      "Swargate - Electrical Works",
      "Kalkadevi - PHE",
      "Mumbai Central - PHE",
      "Marine Line - PHE",
      "Mahalaxmi - PHE",
      "Science Museum - PHE",
      "Acharya Atre - PHE",
      "CST - PHE",
      "Grant Road - PHE",
    ],
  },
  {
    id: "solar",
    title: "SOLAR",
    projects_count: 19,
    icon_path: "icon-solar-panel",
    image_url: "/assets/images/sectors/solar.jpg", // Place image at: public/assets/images/sectors/solar.jpg
    project_list: [
      "Solar Park - E&M Works",
      "Solar Power Park, Vapi - E&M Works",
      "Solar Power Park, Dholera - E&M Works",
      "Solar Power Park, Mundra - E&M Works",
    ],
  },
  {
    id: "data-centre",
    title: "DATA CENTRE",
    projects_count: 19,
    icon_path: "icon-data-centre",
    image_url: "/assets/images/sectors/data-centre.jpg", // Place image at: public/assets/images/sectors/data-centre.jpg
    project_list: [
      // Placeholder - to be attached
    ],
  },
  {
    id: "solar",
    title: "SOLAR",
    projects_count: 19,
    icon_path: "icon-solar-panel",
    image_url: "/assets/images/sectors/solar.jpg", // path: public/assets/images/solar.jpg
    project_list: [
      "Solar Park - E&M Works",
      "Solar Power Park, Vapi - E&M Works",
      "Solar Power Park, Dholera - E&M Works",
      "Solar Power Park, Mundra - E&M Works",
    ],
  },
  {
    id: "industrials",
    title: "INDUSTRIAL",
    projects_count: 19,
    icon_path: "icon-factory",
    image_url: "/assets/images/sectors/industrial.jpg", // Place image at: public/assets/images/sectors/industrial.jpg
    project_list: [
      "Amul Dairy, Kadi E&M Works",
      "Kandla - Bulk Terminal",
      "Gundla Port, Pipavav - PHE Works",
      "ADANI SEZ, Kadi - PHE Works",
      "Dhanlaxmi - E&M Works",
      "GSFC, Vadodara - E&M Works",
      "Essar - E&M Works",
      "Jindal - E&M Works",
      "GSPC, Hazira - E&M Works",
      "Ahmedabad Terminal - Public Utility Works",
      "Vadodara - Public Utility Works",
      "Panchmahal, Godhra - E&M Works",
      "Gandhinagar - E&M Works",
      "Dabhoi - E&M Works",
    ],
  },
  {
    id: "airport",
    title: "AIRPORT",
    projects_count: 19,
    icon_path: "icon-airplane",
    image_url: "/assets/images/sectors/airport.jpg", // Place image at: public/assets/images/sectors/airport.jpg
    project_list: [
      "Ahmedabad Airport - E&M Works",
      "Vadodara Airport - E&M Works",
    ],
  },
  {
    id: "commercials",
    title: "COMMERCIAL",
    projects_count: 19,
    icon_path: "icon-office-building",
    image_url: "/assets/images/sectors/commercial.jpg", // Place image at: public/assets/images/sectors/commercial.jpg
    project_list: [
      "GIFT City, Gandhinagar - E&M Works",
      "Surat Diamond Bourse - E&M Works",
      "Ahmedabad IT Park - E&M Works",
      "Vadodara IT Park - E&M Works",
      "Pune IT Park - E&M Works",
      "Mumbai IT Park - E&M Works",
      "Bangalore IT Park - E&M Works",
      "Hyderabad IT Park - E&M Works",
      "Chennai IT Park - E&M Works",
      "Kolkata IT Park - E&M Works",
    ],
  },
  {
    id: "residential",
    title: "RESIDENTIAL",
    projects_count: 19,
    icon_path: "icon-house",
    image_url: "/assets/images/sectors/residential.jpg", // Place image at: public/assets/images/sectors/residential.jpg
    project_list: [
      "Adani Shantigram, Ahmedabad - E&M Works",
      "Shapoorji Pallonji, Mumbai - E&M Works",
      "L&T Realty, Bangalore - E&M Works",
      "Godrej Properties, Pune - E&M Works",
      "Hiranandani Gardens, Mumbai - E&M Works",
      "DLF Cyber City, Gurgaon - E&M Works",
    ],
  },
  {
    id: "t&d",
    title: "T&D",
    projects_count: 19,
    icon_path: "icon-pylon",
    image_url: "/assets/images/sectors/td.jpg", // Place image at: public/assets/images/sectors/td.jpg
    project_list: [
      "GETCO, Mehsana - E&M Works",
      "PGCIL, Nagpur - E&M Works",
      "DGVCL, Surat - E&M Works",
      "Gujarat Energy Dev. Agency - E&M Works",
      "Maharashtra State Power Dev. Corp. - E&M Works",
      "West Bengal State Power Dev. Corp. - E&M Works",
      "Goa Power - E&M Works",
      "Rajasthan Power - E&M Works",
      "Madhya Pradesh Power - E&M Works",
      "Chhattisgarh Power - E&M Works",
      "Andhra Pradesh Power - E&M Works",
      "Tamil Nadu Power - E&M Works",
    ],
  },
  {
    id: "institute",
    title: "INSTITUTE",
    projects_count: 19,
    icon_path: "icon-institute",
    image_url: "/assets/images/sectors/institute.jpg", // Place image at: public/assets/images/sectors/institute.jpg
    project_list: [
      // Placeholder - to be attached
    ],
  },
  {
    id: "hotel-resort",
    title: "HOTEL & RESORT",
    projects_count: 19,
    icon_path: "icon-hotel",
    image_url: "/assets/images/sectors/hotel-resort.jpg", // Place image at: public/assets/images/sectors/hotel-resort.jpg
    project_list: [
      // Placeholder - to be attached
    ],
  },
  {
    id: "hospitals",
    title: "HOSPITAL",
    projects_count: 19,
    icon_path: "icon-hospital",
    image_url: "/assets/images/sectors/hospital.jpg", // Place image at: public/assets/images/sectors/hospital.jpg
    project_list: [
      "Apollo Hospital, Vadodara - E&M Works",
      "Wockhardt Hospital, Surat - E&M Works",
      "HCG Hospital, Rajkot - E&M Works",
      "Sterling Hospital, Indore - E&M Works",
      "Apollo Hospital, Mumbai - E&M Works",
      "Aster Hospital, Bangalore - E&M Works",
      "Global Hospital, Chennai - E&M Works",
    ],
  },
  {
    id: "mall",
    title: "MALL",
    projects_count: 19,
    icon_path: "icon-mall",
    image_url: "/assets/images/sectors/mall.jpg", // Place image at: public/assets/images/sectors/mall.jpg
    project_list: [
      // Placeholder - to be attached
    ],
  },
];
