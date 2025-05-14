import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      
      <h2 className="section-title">Featured Series</h2>
      <div className="book-preview">
        <div className="series-info">
          <h3>Monstrously Claimed</h3>
          <p>A dark fantasy romance series where forbidden desires meet supernatural power. When monsters choose their mates, surrender is inevitable.</p>
          <a href="#" className="btn">Explore Series</a>
        </div>
      </div>
    </main>
  );
}