// app/page.tsx
import HeroSection from './components/HeroSection';
import FeaturedBook from './components/FeaturedBook';
import BookGrid from './components/BookGrid';
import SocialProof from './components/SocialProof';
import SimpleBookSignup from './components/SimpleBookSignup';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedBook />
      <BookGrid />
      <SocialProof />
      <SimpleBookSignup />
    </main>
  );
}