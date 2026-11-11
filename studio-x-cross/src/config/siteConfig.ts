export const siteConfig = {
  name: "STUDIO X CROSS",
  tagline: "Spaces That Reflect The Way You Live.",
  subTagline: "Thoughtfully designed interiors. Timeless aesthetics. Spaces created around you.",
  footerTagline: "Thoughtfully designed spaces. Timeless experiences.",
  editorialStatement:
    "Every space has a story waiting to unfold. We believe great interior design goes beyond aesthetics — it brings together functionality, individuality and thoughtful detailing to create environments that feel truly personal.",
  
  social: {
    instagram: "https://www.instagram.com/studio.x.cross/",
    instagramHandle: "@studio.x.cross",
    pinterest: "https://pinterest.com",
    linkedin: "https://linkedin.com",
  },

  contact: {
    // Editable placeholders for Studio X Cross
    phone: "+91 98712 34560",
    phoneDisplay: "+91 (0) 98712 34560",
    whatsappNumber: "919871234560",
    email: "inquire@studioxcross.com",
    consultationEmail: "projects@studioxcross.com",
    address: {
      line1: "Studio X Cross Atelier",
      line2: "Design District, South Extension II",
      city: "New Delhi",
      postalCode: "110049",
      country: "India",
      secondaryLocation: "Bespoke projects undertaken across Delhi NCR, Mumbai & Bengaluru"
    },
    hours: "Monday – Saturday: 10:00 AM – 7:00 PM IST (By Prior Appointment)",
  },

  budgetRanges: [
    "₹15 Lakhs – ₹30 Lakhs",
    "₹30 Lakhs – ₹60 Lakhs",
    "₹60 Lakhs – ₹1.2 Crores",
    "₹1.2 Crores – ₹2.5 Crores+",
    "Commercial / Custom Scope"
  ],

  projectTypes: [
    "Complete Luxury Residence",
    "Living & Dining Transformation",
    "Modular Kitchen & Pantry Atelier",
    "Master Bedroom & Walk-in Suite",
    "Penthouse / Villa Architecture",
    "Boutique Commercial / Atelier Workspace",
    "Space Planning & Design Consultation"
  ],

  getWhatsAppLink: (customMessage?: string) => {
    const text = encodeURIComponent(
      customMessage ||
      "Hello Studio X Cross team, I visited your website and would like to discuss an interior design project for my space."
    );
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
  }
};
