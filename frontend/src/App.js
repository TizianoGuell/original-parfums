import "@/App.css";

const scentCards = [
  {
    name: "Midnight Oud",
    profile: "Oud, amber y rosa oscura",
    detail: "Una apertura intensa para noches con presencia.",
  },
  {
    name: "Golden Rose",
    profile: "Rosa, bergamota y vainilla suave",
    detail: "El acorde mas luminoso de la coleccion demo.",
  },
  {
    name: "Desert Sun",
    profile: "Incienso, mirra y datil especiado",
    detail: "Un cierre calido con caracter oriental.",
  },
];

const pillars = [
  {
    title: "Direccion visual",
    description: "Universo burgundy, dorado mate y texturas profundas.",
  },
  {
    title: "Curaduria demo",
    description: "Selecciones mock para presentar marca, tono y propuesta.",
  },
  {
    title: "Frontend autonomo",
    description: "Sin API, sin auth y sin dependencias del servidor.",
  },
];

const steps = [
  "Hero editorial para presentar la marca.",
  "Bloques cortos para mostrar concepto, coleccion y beneficios.",
  "CTA final para capturar interes mientras el producto real se define.",
];

function App() {
  return (
    <div className="App landing-shell">
      <div className="hero-orb hero-orb-left" />
      <div className="hero-orb hero-orb-right" />

      <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-8">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-heading text-xl uppercase tracking-[0.32em] text-gold">
            Original
          </span>
          <span className="font-body mt-1 text-[10px] uppercase tracking-[0.48em] text-cream/60">
            Parfums
          </span>
        </a>

        <nav className="hidden gap-6 font-body text-xs uppercase tracking-[0.3em] text-cream/70 md:flex">
          <a href="#concepto" className="transition hover:text-gold">
            Concepto
          </a>
          <a href="#coleccion" className="transition hover:text-gold">
            Coleccion
          </a>
          <a href="#contacto" className="transition hover:text-gold">
            Contacto
          </a>
        </nav>
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto grid min-h-[calc(100vh-88px)] max-w-6xl gap-10 px-6 pb-16 pt-10 md:grid-cols-[1.1fr_0.9fr] md:px-8 md:pb-24 md:pt-16">
          <div className="flex flex-col justify-center">
            <span className="mb-6 inline-flex w-fit items-center border border-gold/20 bg-gold/10 px-4 py-2 font-body text-[10px] uppercase tracking-[0.35em] text-gold">
              Demo landing 2026
            </span>

            <h1 className="max-w-3xl font-heading text-5xl leading-[0.95] text-cream md:text-7xl">
              Fragancias de autor presentadas como una experiencia editorial.
            </h1>

            <p className="mt-6 max-w-2xl font-body text-base leading-7 text-cream/72 md:text-lg">
              Esta version deja afuera toda logica de servidor y concentra la propuesta
              en una sola landing para mostrar identidad de marca, narrativa y
              producto de forma rapida.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#coleccion" className="hero-button hero-button-primary">
                Ver demo
              </a>
              <a href="#contacto" className="hero-button hero-button-secondary">
                Pedir presentacion
              </a>
            </div>

            <dl className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="stat-card">
                <dt className="stat-label">Formato</dt>
                <dd className="stat-value">Landing unica</dd>
              </div>
              <div className="stat-card">
                <dt className="stat-label">Estado</dt>
                <dd className="stat-value">Solo frontend</dd>
              </div>
              <div className="stat-card">
                <dt className="stat-label">Objetivo</dt>
                <dd className="stat-value">Demo comercial</dd>
              </div>
            </dl>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-copy">
              <p className="eyebrow">Preview capsule</p>
              <h2 className="font-heading text-3xl text-cream">
                Una coleccion breve para vender atmosfera antes que inventario.
              </h2>
              <p className="font-body text-sm leading-6 text-cream/70">
                La landing pone el foco en tono, materiales y sensacion de
                exclusividad. El ecommerce completo puede volver despues, sin
                afectar esta base.
              </p>
            </div>

            <div className="hero-panel-card">
              <p className="eyebrow">Signature notes</p>
              <ul className="space-y-4">
                <li className="flex items-center justify-between border-b border-gold/10 pb-3">
                  <span className="font-body text-sm uppercase tracking-[0.25em] text-cream/70">
                    Oud
                  </span>
                  <span className="font-heading text-xl text-gold">01</span>
                </li>
                <li className="flex items-center justify-between border-b border-gold/10 pb-3">
                  <span className="font-body text-sm uppercase tracking-[0.25em] text-cream/70">
                    Rose
                  </span>
                  <span className="font-heading text-xl text-gold">02</span>
                </li>
                <li className="flex items-center justify-between pb-1">
                  <span className="font-body text-sm uppercase tracking-[0.25em] text-cream/70">
                    Amber
                  </span>
                  <span className="font-heading text-xl text-gold">03</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="concepto" className="mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-16">
          <div className="section-heading">
            <p className="eyebrow">Concepto</p>
            <h2 className="section-title">
              El front queda desacoplado y listo para presentar la marca hoy.
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="showcase-card">
                <p className="eyebrow">Pilar</p>
                <h3 className="mt-4 font-heading text-2xl text-cream">
                  {pillar.title}
                </h3>
                <p className="mt-4 font-body text-sm leading-6 text-cream/68">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="coleccion" className="mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-16">
          <div className="section-heading section-heading-wide">
            <div>
              <p className="eyebrow">Coleccion demo</p>
              <h2 className="section-title">Tres perfumes, una narrativa clara.</h2>
            </div>
            <p className="max-w-xl font-body text-sm leading-6 text-cream/65">
              No hay catalogo, filtros ni checkout. Solo piezas suficientes para
              vender el look and feel mientras se define el producto final.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {scentCards.map((item, index) => (
              <article key={item.name} className="showcase-card showcase-card-tall">
                <span className="font-body text-xs uppercase tracking-[0.35em] text-gold/70">
                  0{index + 1}
                </span>
                <h3 className="mt-5 font-heading text-3xl text-cream">
                  {item.name}
                </h3>
                <p className="mt-3 font-body text-xs uppercase tracking-[0.28em] text-cream/55">
                  {item.profile}
                </p>
                <p className="mt-8 max-w-xs font-body text-sm leading-6 text-cream/72">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-16">
          <div className="ritual-panel">
            <div>
              <p className="eyebrow">Estructura</p>
              <h2 className="section-title max-w-2xl">
                Una demo simple, facil de iterar y sin deuda de integracion.
              </h2>
            </div>

            <ol className="grid gap-4 md:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step} className="ritual-step">
                  <span className="ritual-index">0{index + 1}</span>
                  <p className="font-body text-sm leading-6 text-cream/72">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-6xl px-6 pb-20 pt-10 md:px-8 md:pb-24 md:pt-16">
          <div className="cta-panel">
            <div>
              <p className="eyebrow">Siguiente paso</p>
              <h2 className="section-title max-w-2xl">
                Si despues queres volver a sumar logica, esta base ya quedo
                limpia para crecer.
              </h2>
            </div>

            <a
              href="mailto:hola@originalparfums.demo"
              className="hero-button hero-button-primary"
            >
              hola@originalparfums.demo
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-gold/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 font-body text-xs uppercase tracking-[0.28em] text-cream/42 md:flex-row md:items-center md:justify-between md:px-8">
          <span>Original Parfums</span>
          <span>Frontend demo only</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
