import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowRight, Check, Droplets, Leaf, LockKeyhole, Map, Menu, ShieldCheck, X } from 'lucide-react';

const base = import.meta.env.BASE_URL;
const siteUrl = 'https://mari-knutson.github.io/RewildingRestoration/';

const nav = [
  ['/', 'Home'],
  ['/source-water', 'Source Water'],
  ['/services', 'Services'],
  ['/applications', 'Work'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
];

const projectCards = [
  {
    to: '/applications#cedar',
    image: 'images/cedar/watershed-reservoir.webp',
    alt: 'Reservoir within a forested municipal watershed',
    label: 'Source Water + Watershed GIS',
    title: 'Cedar River / Lake Youngs',
  },
  {
    to: '/applications#wildlife',
    image: 'images/wildlife/corridor-map.webp',
    alt: 'Wildlife corridor map showing animal paths across the Loree Estates parcel',
    label: 'Land Use + Ecology',
    title: 'Wildlife Corridor Review',
    fit: 'contain',
  },
  {
    to: '/applications#south-king',
    image: 'images/south-king/cost-comparison.webp',
    alt: 'Chart comparing cost per acre for six proposed school-site options',
    label: 'GIS + Alternative Sites',
    title: 'South King County',
    fit: 'contain',
  },
];

const simplePages = {
  '/source-water': {
    eyebrow: 'Source-Water Protection',
    title: 'The watershed is water infrastructure.',
    intro: 'Reliable water begins with the landscape that collects, stores, filters, and delivers it.',
    description: 'Source-water protection and connected watershed risk analysis by Environmental Intelligence and RewildingRestoration.',
    body: [
      {
        title: 'Protect function, not only replacement value',
        text: 'Environmental Intelligence evaluates forests, soils, streams, wetlands, slopes, ecological resilience, and engineered infrastructure according to what their loss would mean for continued source-water function.',
        image: 'images/cedar/watershed-reservoir.webp',
        alt: 'Forested watershed surrounding a mountain reservoir',
      },
      {
        title: 'Connect field observations to the water system',
        text: 'A shared geospatial inventory brings streams, roads, reservoirs, field observations, and infrastructure into one operating picture so upstream conditions can be interpreted in terms of downstream consequence.',
        image: 'images/cedar/source-water-system.webp',
        alt: 'Regional satellite map with source-water features and field observations',
        fit: 'contain',
      },
      {
        title: 'Separate threat from consequence',
        text: 'A location can have moderate hazard but catastrophic source-water consequence. That difference should remain visible in monitoring, treatment, access, and emergency priorities.',
        image: 'images/cedar/transmission-corridor.webp',
        alt: 'Field crew beneath transmission lines in a forested utility corridor',
      },
      {
        title: 'Act while options still exist',
        text: 'The purpose of the analysis is prevention: identify where intervention, monitoring, restoration, access improvement, or additional specialist work can reduce consequence before a crisis occurs.',
        image: 'images/cedar/riparian-stream.webp',
        alt: 'Forested riparian stream documented during watershed field work',
      },
    ],
  },
  '/services': {
    eyebrow: 'Services',
    title: 'Environmental analysis built around decisions.',
    intro: 'Focused services for utilities, governments, land managers, and environmental partners.',
    description: 'Source-water protection, wildfire resilience, GIS, land-use intelligence, and implementation support.',
    body: [
      {
        title: 'Source-Water Consequence Assessment',
        text: 'Identify where disturbance could disproportionately affect usable water and produce maps, priority registers, and immediate action recommendations.',
        image: 'images/cedar/tolt-reservoir.webp',
        alt: 'Reservoir and forested mountain slopes beneath storm clouds',
      },
      {
        title: 'Wildfire & Watershed Resilience',
        text: 'Evaluate wildfire through water-quality, erosion, sediment, access, forest-condition, utility-corridor, and recovery consequences.',
        image: 'images/cedar/transmission-corridor.webp',
        alt: 'Field crew assessing a forested transmission corridor',
      },
      {
        title: 'GIS & Environmental Decision Intelligence',
        text: 'Integrate existing environmental, infrastructure, field, and operational information into practical maps and decision frameworks.',
        image: 'images/cedar/source-water-system.webp',
        alt: 'Satellite map showing connected source-water data and field observations',
        fit: 'contain',
      },
      {
        title: 'Land-Use & Development Intelligence',
        text: 'Track zoning, permits, subdivisions, infrastructure expansion, forest conversion, environmental review, and cumulative watershed pressure.',
        image: 'images/south-king/options-summary.webp',
        alt: 'Summary table comparing proposed school sites by fiscal, social, and environmental criteria',
        fit: 'contain',
      },
      {
        title: 'Implementation & Accountability',
        text: 'Connect identified risks to responsibility, deadlines, completion, verification, and measurable risk reduction.',
        image: 'images/wildlife/field-cwd.webp',
        alt: 'Moss-covered coarse woody debris documented during a parcel field survey',
      },
    ],
  },
  '/about': {
    eyebrow: 'About',
    title: 'Environmental experience connected to better decisions.',
    intro: 'Environmental Intelligence is the source-water protection and environmental decision-support practice of RewildingRestoration.',
    description: 'About Environmental Intelligence and RewildingRestoration.',
    body: [
      {
        title: 'Experience',
        text: 'Mari Knutson’s background includes restoration ecology, GIS and field mapping, water quality, forest and vegetation assessment, invasive-species management, native plant and seed systems, public-land management, habitat connectivity, and environmental risk analysis.',
      },
      {
        title: 'Cedar River Municipal Watershed',
        text: 'Her experience includes approximately 5.5 years as an Environmental Analyst working in Seattle Public Utilities’ Cedar River Municipal Watershed.',
      },
      {
        title: 'Role',
        text: 'Environmental Intelligence integrates specialist findings rather than replacing licensed engineering, fire-behavior modeling, geotechnical, legal, or other specialized disciplines.',
      },
    ],
  },
};

const caseStudies = [
  {
    id: 'cedar',
    eyebrow: 'Source-water field intelligence',
    title: 'Cedar River / Lake Youngs',
    location: 'Cedar River Municipal Watershed, Washington',
    summary: 'Field observation, watershed photography, and GIS inventory organized to make source-water conditions, infrastructure, and connected risk pathways visible.',
    question: 'How can field knowledge and spatial data be organized so emerging conditions are visible early enough to support preventive action?',
    evidence: [
      'Watershed-scale field photography and site observations',
      'Stream, reservoir, road, and infrastructure context',
      'Geospatial field inventory aligned with current imagery',
      'Riparian, forest, and restoration-condition documentation',
    ],
    recommendation: 'Maintain a connected geospatial inventory that links field observations to water-system assets and use it to prioritize monitoring, treatment, and follow-up before isolated conditions become larger watershed consequences.',
    images: [
      ['images/cedar/watershed-reservoir.webp', 'Forested mountain watershed surrounding a reservoir', 'Reservoir and forest conditions within the protected drinking-water landscape.'],
      ['images/cedar/source-water-system.webp', 'Regional satellite map with source-water features and observations', 'Geospatial field inventory connecting water features and observations across the regional source-water landscape.', 'contain'],
      ['images/cedar/transmission-corridor.webp', 'Field crew working beneath transmission lines in a forested corridor', 'Infrastructure, access, vegetation, and field conditions considered together.'],
    ],
  },
  {
    id: 'wildlife',
    eyebrow: 'Selected findings — technical report held privately',
    title: 'Loree Estates Wildlife Corridor Review',
    location: 'Sammamish, Washington',
    summary: 'Field and GIS analysis of a 4.87-acre parcel functioning as a movement corridor between two larger forested habitat blocks.',
    question: 'Does the parcel provide a documented wildlife connection whose function should be addressed before a development decision is made?',
    evidence: [
      '1,525 GPS waypoints and 413 field photographs',
      'More than 30 mapped animal paths and corridor tracks',
      'Inventory of 300 trees and 60 coarse woody-debris features',
      'Black bear, black-tailed deer, and pileated woodpecker evidence',
    ],
    finding: 'The subject parcel functions as a wildlife corridor connecting forested habitat blocks to the north and south.',
    recommendation: 'Require the environmental review to address the documented corridor function and complete critical-area assessment before approving a site design that could sever established movement routes.',
    privacy: 'The complete technical report is intentionally not published here. This case study presents selected maps, field evidence, and the resulting recommendation.',
    images: [
      ['images/wildlife/corridor-map.webp', 'Wildlife corridor map showing animal paths and observations', 'Mapped animal paths, observations, stream crossing, and the north–south corridor connection.', 'contain'],
      ['images/wildlife/habitat-map.webp', 'Habitat map of heritage trees and coarse woody debris', 'Heritage trees and coarse woody-debris features add habitat structure to the corridor analysis.', 'contain'],
      ['images/wildlife/field-cwd.webp', 'Moss-covered coarse woody debris in the survey area', 'Field documentation of coarse woody debris and understory habitat within the parcel.'],
    ],
  },
  {
    id: 'south-king',
    eyebrow: 'Selected findings — full advocacy report held privately',
    title: 'South King County Alternative-Site Review',
    location: 'South King County, Washington',
    summary: 'A GIS and parcel-screening review that identified five alternative school sites and compared fiscal, environmental, and social consequences.',
    question: 'Could a broader GIS search identify school-site options with lower fiscal, environmental, and community costs than the proposed condemnation?',
    evidence: [
      'Five alternative locations identified through parcel and GIS review',
      'Comparison of acreage, assessed value, cost per acre, and annexation needs',
      'Eleven households affected under the proposed option',
      'Open-space, groundwater-recharge, and downstream salmon-habitat context',
    ],
    finding: 'Search results in one afternoon found five more financially responsible, environmentally sound, and socially just options.',
    recommendation: 'Reconsider the condemnation and use a qualified GIS analyst or land planner to validate and advance an alternative that better balances cost, community displacement, open-space function, and downstream ecological risk.',
    privacy: 'The full advocacy report is not published here. The comparison graphic, summary table, and concise finding are presented as a portfolio example.',
    images: [
      ['images/south-king/cost-comparison.webp', 'Cost-per-acre chart comparing six school-site options', 'The proposed option had the highest cost per acre in the six-site comparison.', 'contain'],
      ['images/south-king/options-summary.webp', 'Table comparing six school-site options', 'The side-by-side screen compared fiscal responsibility, social justice, environmental stewardship, displacement, and cost.', 'contain'],
    ],
  },
];

function PageMeta({ title, description }) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    meta?.setAttribute('content', description);
  }, [title, description]);
  return null;
}

function ScrollTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  return <header className="topbar">
    <Link to="/" className="wordmark">Environmental Intelligence</Link>
    <button className="menu" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav open' : 'nav'}>{nav.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}<Link className="pill-button" to="/contact" onClick={() => setOpen(false)}>Start a project</Link></nav>
  </header>;
}

function Footer() {
  return <footer>
    <div>
      <strong>Environmental Intelligence | RewildingRestoration</strong>
      <p>Source-Water Protection • Watershed Resilience • Environmental Decision Support</p>
      <a className="footer-site" href={siteUrl}>https://mari-knutson.github.io/RewildingRestoration/</a>
    </div>
    <div><Link to="/source-water">Source Water</Link><Link to="/services">Services</Link><Link to="/applications">Work</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link></div>
    <small>Environmental Intelligence is the environmental decision-support practice of RewildingRestoration. Connect the information. Prioritize the consequence. Protect the water.</small>
  </footer>;
}

function Layout({ children }) {
  return <><Header /><main>{children}</main><Footer /></>;
}

function Home() {
  return <Layout>
    <PageMeta title="Environmental Intelligence | RewildingRestoration" description="Source-water protection, watershed resilience, and environmental decision support by Environmental Intelligence and RewildingRestoration." />
    <section className="hero-minimal">
      <video autoPlay muted loop playsInline><source src={`${base}hero-video.mp4`} type="video/mp4" /></video>
      <div className="shade" />
      <div className="hero-copy"><span>Environmental Intelligence</span><h1>Protecting source water through better environmental decisions.</h1><p>We connect environmental information, field knowledge, GIS, land-use change, infrastructure, and risk so agencies can see what matters most and act earlier.</p><Link className="light-button" to="/source-water">Explore source-water protection <ArrowRight size={18} /></Link></div>
    </section>

    <section className="intro-block">
      <div className="kicker">Why this work exists</div>
      <h2>Environmental information is abundant. Integration is not.</h2>
      <p>Forests, soils, streams, wildfire, roads, development, infrastructure, and emergency conditions are often managed in separate systems. A watershed is not. Environmental Intelligence connects those pieces around one objective: protecting the function of the water source.</p>
    </section>

    <section className="three-points">
      <article><Droplets /><h3>Protect source water</h3><p>Identify where disturbance would have the greatest consequence to water quality, quantity, reliability, or recovery.</p></article>
      <article><Map /><h3>Connect the landscape</h3><p>Bring ecological, hydrologic, GIS, infrastructure, land-use, and field information into one decision framework.</p></article>
      <article><ShieldCheck /><h3>Move from risk to action</h3><p>Translate analysis into priorities, responsibility, implementation, verification, and measurable risk reduction.</p></article>
    </section>

    <section className="full-image"><img src={`${base}images/cedar/watershed-reservoir.webp`} alt="Forested mountain watershed surrounding a reservoir" /><div><span>Core principle</span><h2>The watershed is water infrastructure.</h2><p>Forests, soils, wetlands, streams, riparian areas, and headwaters are part of the system that produces usable water. Their value cannot be reduced to replacement cost.</p><Link to="/source-water">Read the source-water approach <ArrowRight size={18} /></Link></div></section>

    <section className="how"><div className="kicker">How it works</div><h2>From information to protection.</h2><div className="steps">{[
      ['1', 'Identify', 'Where would failure matter most?'], ['2', 'Connect', 'What systems and threats interact there?'], ['3', 'Prioritize', 'What should be done first?'], ['4', 'Verify', 'Did the action reduce vulnerability?'],
    ].map(([n, t, d]) => <div key={n}><span>{n}.</span><h3>{t}</h3><p>{d}</p></div>)}</div></section>

    <section className="projects-home"><div className="section-top"><div><div className="kicker">Selected work</div><h2>Applied to real landscapes.</h2></div><Link to="/applications">See the work <ArrowRight size={18} /></Link></div><div className="project-cards">
      {projectCards.map((project) => <Link key={project.title} to={project.to}><div className={`project-image ${project.fit || ''}`}><img src={`${base}${project.image}`} alt={project.alt} loading="lazy" /></div><span>{project.label}</span><h3>{project.title}</h3></Link>)}
    </div></section>

    <section className="science"><div><Leaf /><div className="kicker">Decision framework</div><h2>Rooted in ecology, GIS, and field evidence.</h2></div><p>Environmental Intelligence does not replace hydrologists, fire professionals, engineers, geologists, or planners. It connects their findings so decision-makers can understand the whole system, compare consequence, and act on priorities.</p></section>

    <section className="closing"><h2>Better information should lead to better protection.</h2><Link className="dark-button" to="/contact">Discuss your watershed <ArrowRight size={18} /></Link></section>
  </Layout>;
}

function SimplePage({ data }) {
  return <Layout>
    <PageMeta title={`${data.eyebrow} | Environmental Intelligence | RewildingRestoration`} description={data.description} />
    <section className="plain-hero"><div className="kicker">{data.eyebrow}</div><h1>{data.title}</h1><p>{data.intro}</p></section>
    <section className="plain-list">{data.body.map((item, i) => <article key={item.title} className={item.image ? 'has-media' : ''}><span>0{i + 1}</span><div><h2>{item.title}</h2><p>{item.text}</p></div>{item.image && <figure className={item.fit || ''}><img src={`${base}${item.image}`} alt={item.alt} loading="lazy" /></figure>}</article>)}</section>
    <section className="closing"><h2>Connect the information. Prioritize the consequence. Protect the water.</h2><Link className="dark-button" to="/contact">Start a project <ArrowRight size={18} /></Link></section>
  </Layout>;
}

function CaseStudy({ study }) {
  return <article id={study.id} className="case-study">
    <div className="case-heading"><div><div className="kicker">{study.eyebrow}</div><h2>{study.title}</h2><span>{study.location}</span></div><p>{study.summary}</p></div>

    <div className={`case-media count-${study.images.length}`}>{study.images.map(([image, alt, caption, fit]) => <figure key={image} className={fit || ''}><a href={`${base}${image}`} target="_blank" rel="noreferrer"><img src={`${base}${image}`} alt={alt} loading="lazy" /></a><figcaption>{caption}</figcaption></figure>)}</div>

    <div className="case-analysis">
      <div><div className="kicker">Management question</div><h3>{study.question}</h3></div>
      <div><div className="kicker">Evidence brought together</div><ul>{study.evidence.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul></div>
    </div>

    {study.finding && <div className="case-result"><blockquote><div className="kicker">Selected finding</div><p>“{study.finding}”</p></blockquote><div><div className="kicker">Resulting recommendation</div><p>{study.recommendation}</p></div></div>}
    {!study.finding && <div className="case-recommendation"><div className="kicker">Resulting recommendation</div><p>{study.recommendation}</p></div>}

    {study.privacy && <p className="privacy-note"><LockKeyhole size={17} />{study.privacy}</p>}
  </article>;
}

function WorkPage() {
  return <Layout>
    <PageMeta title="Selected Work | Environmental Intelligence | RewildingRestoration" description="Selected Cedar River, Loree Estates wildlife-corridor, and South King County environmental intelligence work." />
    <section className="plain-hero work-hero"><div className="kicker">Selected work</div><h1>Real places. Connected evidence. Clearer decisions.</h1><p>Selected maps, field evidence, findings, and recommendations from source-water, wildlife-connectivity, and land-use reviews. Complete technical reports remain private.</p></section>
    <section className="case-studies">{caseStudies.map((study) => <CaseStudy key={study.id} study={study} />)}</section>
    <section className="closing"><h2>Have a landscape question that needs a connected evidence base?</h2><Link className="dark-button" to="/contact">Discuss the decision <ArrowRight size={18} /></Link></section>
  </Layout>;
}

function Contact() {
  return <Layout>
    <PageMeta title="Contact | Environmental Intelligence | RewildingRestoration" description="Discuss a source-water, watershed resilience, GIS, or environmental decision-support project." />
    <section className="plain-hero"><div className="kicker">Contact</div><h1>Discuss a source-water or environmental intelligence project.</h1><p>Tell us the watershed, landscape, or management question your organization needs to resolve.</p></section>
    <section className="contact-simple"><div><h2>Environmental Intelligence | RewildingRestoration</h2><p>Source-water protection • watershed resilience • GIS • land-use intelligence • implementation support</p><a href="mailto:MariKnutson19@gmail.com">MariKnutson19@gmail.com</a></div><form action="https://formsubmit.co/MariKnutson19@gmail.com" method="POST"><input type="hidden" name="_captcha" value="false" /><input type="hidden" name="_subject" value="Environmental Intelligence | RewildingRestoration website inquiry" /><input type="hidden" name="_next" value={siteUrl} /><label>Name<input name="name" required /></label><label>Organization<input name="organization" /></label><label>Email<input type="email" name="email" required /></label><label>Project location / watershed<input name="location" /></label><label>Message<textarea rows="6" name="message" required /></label><button className="dark-button" type="submit">Send inquiry <ArrowRight size={18} /></button></form></section>
  </Layout>;
}

function App() {
  return <><ScrollTop /><Routes><Route path="/" element={<Home />} />{Object.entries(simplePages).map(([path, data]) => <Route key={path} path={path} element={<SimplePage data={data} />} />)}<Route path="/applications" element={<WorkPage />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<Home />} /></Routes></>;
}

export default App;
