export default function Home() {
  return (
    <main className="container">
      <div className="hero">
        <h1>R.S. Thorne</h1>
        <h2>Dark Erotic Romance</h2>
        <p className="tagline">Enter a world where passion knows no bounds</p>
      </div>
      
      <h2 className="section-title">Featured Series</h2>
      <div className="book-preview">
        <div className="series-info">
          <h3>Monstrously Claimed</h3>
          <p>A dark fantasy romance series where forbidden desires meet supernatural power. When monsters choose their mates, surrender is inevitable.</p>
          <a href="#" className="btn">Explore Series</a>
        </div>
      </div>
      
      <h2 className="section-title">Newsletter</h2>
      <div className="newsletter">
        <h3>Join My Inner Circle</h3>
        <p>Subscribe for exclusive content, new release announcements, and a free novella.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" required />
          <button type="submit" className="btn">Subscribe</button>
        </form>
      </div>
    </main>
  );
}