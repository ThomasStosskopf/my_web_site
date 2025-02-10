import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <header>
        <h1>Bienvenue sur mon site</h1>
        <nav>
          <ul>
            <li><Link href="/projects">Projets</Link></li>
            <li><Link href="/voyages">Voyages</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">À propos</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <section>
        <h2>Derniers projets</h2>
        <p>Un aperçu de mes projets récents.</p>
        <Link href="/projects">Voir tous mes projets</Link>
      </section>

      <section>
        <h2>Mes derniers voyages</h2>
        <p>Découvrez mes récits de voyage et mes photos.</p>
        <Link href="/voyages">Voir tous mes voyages</Link>
      </section>

      <footer>
        <p>© 2025 Thomas Stosskopf</p>
      </footer>
    </div>
  );
}
