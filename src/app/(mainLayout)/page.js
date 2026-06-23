import Banner from '@/components/Banner';
import CtaSection from '@/components/Homepage/CtaSection';
import CustomerReviews from '@/components/Homepage/CustomerReviews';
import FaqSection from '@/components/Homepage/FaqSection';
import FeaturedPrompts from '@/components/Homepage/FeaturedPrompts';
import FeaturesSection from '@/components/Homepage/FeaturesSection';
import TestimonialsSection from '@/components/Homepage/TestimonialsSection';
import ToolCategories from '@/components/Homepage/ToolCategories';
import TopCreators from '@/components/Homepage/TopCreators';
import WhyChooseUs from '@/components/Homepage/WhyChooseUs';

export default function Home() {
  return (
    <div>
      <Banner />
      <FeaturesSection />
      <FeaturedPrompts />
      <ToolCategories />
      <WhyChooseUs />
      <TopCreators />
      <CustomerReviews />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
