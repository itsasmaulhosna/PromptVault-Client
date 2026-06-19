import Banner from '@/components/Banner';
import CtaSection from '@/components/Homepage/CtaSection';
import FaqSection from '@/components/Homepage/FaqSection';
import FeaturesSection from '@/components/Homepage/FeaturesSection';
import TestimonialsSection from '@/components/Homepage/TestimonialsSection';
import ToolCategories from '@/components/Homepage/ToolCategories';

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturesSection />
      <ToolCategories />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
