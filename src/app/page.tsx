"use client";

import CommentSection from '@/components/CommentSection';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t, lang, setLang } = useLanguage();

  return (
    <main>
      {/* Top Navbar for Language Toggle */}
      <header className="top-bar fade-in">
        <button
          className="lang-toggle"
          onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
        >
          {lang === 'ar' ? 'English (EN)' : 'عربي (AR)'}
        </button>
      </header>

      {/* Moving Background Particles */}
      <div className="particles-overlay">
        <div className="particle p1"></div>
        <div className="particle p2"></div>
        <div className="particle p3"></div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="fade-in title-glow">
            <span style={{ color: 'white' }}>{t.hero.brand}</span>{' '}
            <span className="gradient-text">{t.hero.title}</span>
          </h1>
          <p className="fade-in delay-1">
            {t.hero.subtitle}
          </p>
          <div className="fade-in delay-2" style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#location" className="btn-primary">
              {t.hero.btnFindUs}
            </a>
            <a href="#comments" className="btn-outline">
              {t.hero.btnCommunity}
            </a>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="section" style={{ position: 'relative' }}>
        <div className="container">
          <div className="location-card fade-in">
            <div className="location-icon">📍</div>
            <h2 className="location-text">
              <span className="gradient-text">{t.location.titleGlow}</span> {t.location.titleNormal}
            </h2>
            <p className="location-subtext">{t.location.subtext}</p>
            <div style={{ marginTop: '2rem' }}>
              <p style={{ color: '#aaa', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.1rem' }}>
                {t.location.description}
              </p>
            </div>

            <div className="fade-in delay-2" style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
              <div style={{
                background: 'rgba(255, 85, 0, 0.1)',
                border: '1px solid var(--primary-color)',
                padding: '12px 28px',
                borderRadius: '50px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 0 25px rgba(255, 85, 0, 0.15)',
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 85, 0, 0.3)';
                  e.currentTarget.style.background = 'rgba(255, 85, 0, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 0 25px rgba(255, 85, 0, 0.15)';
                  e.currentTarget.style.background = 'rgba(255, 85, 0, 0.1)';
                }}>
                <span style={{ fontSize: '1.3rem' }}>🕒</span>
                <span style={{ fontWeight: '600', color: 'var(--text-color)', letterSpacing: '0.5px' }}>{t.footer.hours}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community / Comment Section */}
      <section id="comments" className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="title-glow fade-in" style={{ fontSize: '3.5rem', margin: '0 0 1rem 0' }}>
              <span className="gradient-text">{t.comments.titleGlow}</span> <span style={{ color: 'white' }}>{t.comments.titleNormal}</span>
            </h2>
            <p className="fade-in delay-1" style={{ color: '#aaa', margin: 0, fontSize: '1.2rem' }}>
              {t.comments.subtitle}
            </p>
          </div>

          <CommentSection />
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid var(--border-color)',
        padding: '3rem 0',
        textAlign: 'center',
        background: 'linear-gradient(to top, rgba(255,85,0,0.05), transparent)'
      }}>
        <div className="container">
          <p style={{ color: '#888', margin: 0, fontSize: '1rem' }}>
            {t.footer.rights.replace('{year}', new Date().getFullYear().toString())}
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <p style={{ color: '#aaa', fontSize: '0.95rem', margin: 0 }}>
              🕒 {t.footer.hours}
            </p>
            <p style={{ color: '#555', fontSize: '0.9rem', margin: 0 }}>
              📍 {t.footer.location}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
