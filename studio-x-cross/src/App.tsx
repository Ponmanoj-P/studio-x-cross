import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { StudioIntroSection } from './components/sections/StudioIntroSection';
import { SelectedWorksSection } from './components/sections/SelectedWorksSection';
import { BeforeAfterInteractive } from './components/sections/BeforeAfterInteractive';
import { ServicesSection } from './components/sections/ServicesSection';
import { MaterialExplorer } from './components/sections/MaterialExplorer';
import { WhyUsSection } from './components/sections/WhyUsSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { ContactSection } from './components/sections/ContactSection';
import { ConsultationModal } from './components/ui/ConsultationModal';

export const App: React.FC = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#141413] flex flex-col font-sans selection:bg-[#222220] selection:text-[#FAF8F5]">
      {/* Navigation */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Section 3: Hero */}
        <HeroSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Section 4: Intro Studio */}
        <StudioIntroSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Section 5: Project Portfolio (Selected Works) */}
        <SelectedWorksSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Interactive Experience: 3D Concept to Turnkey Reality */}
        <BeforeAfterInteractive />

        {/* Section 6: Services */}
        <ServicesSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Interactive Materiality Atelier */}
        <MaterialExplorer />

        {/* Section 7: Why Choose The Studio */}
        <WhyUsSection />

        {/* Section 8: Design Process (Timeline) */}
        <ProcessSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Section 9: Testimonials */}
        <TestimonialsSection />

        {/* Section 10: Contact Section */}
        <ContactSection />
      </main>

      {/* Section 11: Footer */}
      <Footer onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Global Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
};

export default App;
