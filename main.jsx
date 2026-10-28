import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDownRight, ArrowUpRight, Menu, X, Sparkles, MoveUpRight } from 'lucide-react'
import './styles.css'

const projects = [
  {
    number: '01',
    category: 'UX / UI · ACCESSIBILITY',
    title: 'Making public transit more accessible',
    description: 'Exploring how clearer information and thoughtful interactions can make everyday transit easier for riders using accessibility features.',
    tags: ['User research', 'Interaction design', 'Prototyping'],
    type: 'transit',
    label: 'MTS ACCESSIBILITY',
    detail: 'A mobile experience concept',
  },
  {
    number: '02',
    category: 'WEB DESIGN · BRAND',
    title: 'A digital home for creative community',
    description: 'Reimagining a student fashion publication’s website around its audience, creative identity, and the way people discover style online.',
    tags: ['Figma', 'Visual design', 'Audience research'],
    type: 'editorial',
    label: 'TREND MAGAZINE',
    detail: 'Website redesign exploration',
  },
  {
    number: '03',
    category: 'PRODUCT · STRATEGY',
    title: 'Turning customer insight into action',
    description: 'Combining business research, user-centered thinking, and digital design to help a local restaurant strengthen its online presence.',
    tags: ['Market research', 'UX/UI', 'Brand strategy'],
    type: 'product',
    label: 'VIET NOM',
    detail: 'Product management club project',
  },
]

function ProjectVisual({ project }) {
  if (project.type === 'transit') return (
    <div className="visual transit-visual">
      <div className="visual-top"><span className="mini-dot" /> FIELD NOTES <span>SD · CA</span></div>
      <div className="transit-card">
        <div className="transit-line"><span className="line-dot" /><span className="line-rule" /><span className="line-dot active" /></div>
        <div className="route-copy"><span>Next departure</span><strong>Gilman Dr & Mandeville Ln</strong><small>Route 30 · Arriving in 6 min</small></div>
        <div className="route-pill">View route ↗</div>
      </div>
      <div className="visual-foot"><span>DESIGNED FOR REAL LIFE</span><span>01 / 03</span></div>
    </div>
  )
  if (project.type === 'editorial') return (
    <div className="visual editorial-visual">
      <div className="editorial-nav"><span>TREND</span><span>ISSUE 04 — CULTURE / STYLE</span></div>
      <div className="editorial-main"><span className="editorial-kicker">STYLE IS A LANGUAGE</span><strong>Find your<br/><i>own</i> frequency.</strong><span className="editorial-caption">A space for emerging voices and personal style.</span></div>
      <div className="editorial-bottom"><span>THE NEW WAVE</span><span>EXPLORE STORIES ↗</span></div>
    </div>
  )
  return (
    <div className="visual product-visual">
      <div className="product-header"><span>V/N</span><span>GOOD FOOD. GOOD PEOPLE.</span></div>
      <div className="product-center"><div className="plate"><div className="plate-food">✳</div></div><span className="product-overline">VIETNAMESE KITCHEN</span><strong>Made with<br/>a little <i>more</i>.</strong></div>
      <div className="product-footer"><span>MENU</span><span>OUR STORY</span><span>ORDER ONLINE ↗</span></div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="header">
        <a className="wordmark" href="#home" onClick={closeMenu}>CH<span>✳</span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21}/> : <Menu size={21}/>}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="nav-cta" href="mailto:YOUR_EMAIL@example.com">Let’s talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-meta"><span><i className="status-dot"/> OPEN TO OPPORTUNITIES</span><span>DESIGN · RESEARCH · STRATEGY</span></div>
          <div className="hero-content">
            <div className="hero-copy">
              <p className="eyebrow">HELLO, I’M CATHERINE HOANG <span className="wave">✳</span></p>
              <h1>Curious by nature.<br/><span>Intentional</span> by design.</h1>
              <p className="hero-description">I connect people, ideas, and technology to create digital experiences that feel thoughtful, useful, and human.</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={17}/></a>
                <a className="text-link" href="#about">A little about me <ArrowUpRight size={15}/></a>
              </div>
            </div>
            <div className="hero-art" aria-label="Abstract decorative design">
              <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
              <div className="art-sun"></div><div className="art-flower">✳</div>
              <div className="art-sticker sticker-one">PEOPLE<br/>FIRST</div>
              <div className="art-sticker sticker-two">ALWAYS<br/>CURIOUS ↗</div>
              <span className="art-label label-top">FIG. 01 — IDEAS IN MOTION</span>
              <span className="art-label label-bottom">SAN DIEGO, CA · 2026</span>
            </div>
          </div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line"></span><span>01 — 03</span></div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-heading">
            <div><p className="eyebrow">A FEW THINGS I’VE BEEN WORKING ON</p><h2>Selected work<span className="accent">.</span></h2></div>
            <p className="section-intro">A mix of user-centered design, visual storytelling, and strategic problem-solving.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <ProjectVisual project={project}/>
                <div className="project-info">
                  <div className="project-overline"><span>{project.number} / {project.category}</span><span className="project-arrow"><ArrowUpRight size={18}/></span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <p className="project-detail">{project.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="work-note"><Sparkles size={15}/> These are portfolio case-study starters. Replace the descriptions and visuals with your final project work before publishing.</p>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="about-left">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Design-minded.<br/>Business-curious.<br/><span>People-focused.</span></h2>
            <div className="about-stamp">MADE WITH<br/>CURIOSITY <span>✳</span></div>
          </div>
          <div className="about-right">
            <p className="about-lead">I’m a third-year student at UC San Diego studying International Business and Cognitive Science, with a specialization in Human-Computer Interaction.</p>
            <p>I’m interested in the space where user needs, design, and business strategy meet. I like asking the extra question, finding patterns in research, and turning messy problems into clear next steps.</p>
            <p>Outside of class, I’ve explored website design, marketing, and business operations—from helping shape a student fashion publication’s digital presence to working with a sportswear company in Hong Kong.</p>
            <div className="skills-block"><span className="skills-title">WHAT I BRING TO THE TABLE</span><div className="skills">{['UX/UI Design','User Research','Figma','Visual Storytelling','Market Research','Strategy','Prototyping','Creative Collaboration'].map(s => <span key={s}>{s}</span>)}</div></div>
            <a className="text-link about-link" href="mailto:YOUR_EMAIL@example.com">More about my journey <ArrowUpRight size={15}/></a>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-top"><p className="eyebrow">HAVE A PROJECT OR OPPORTUNITY?</p><span>MY INBOX IS OPEN ↘</span></div>
          <h2>Good work starts<br/>with a <i>conversation.</i></h2>
          <a className="contact-link" href="mailto:YOUR_EMAIL@example.com">YOUR_EMAIL@example.com <MoveUpRight size={21}/></a>
          <div className="contact-bottom"><span>UX/UI · RESEARCH · STRATEGY</span><a href="https://www.linkedin.com/in/hoangcatherine/" target="_blank" rel="noreferrer">LINKEDIN <ArrowUpRight size={13}/></a><a href="#home">BACK TO TOP ↑</a></div>
        </section>
      </main>
      <footer><a className="wordmark" href="#home">CH<span>✳</span></a><span>DESIGNED WITH INTENTION © 2026</span><span>SAN DIEGO, CALIFORNIA</span></footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
