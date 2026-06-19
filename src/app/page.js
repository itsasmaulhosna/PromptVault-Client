import Banner from '@/components/Banner';
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
    </div>
  );
}
