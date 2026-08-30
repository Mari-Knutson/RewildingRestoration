import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  Database,
  Droplets,
  FileSearch,
  Flame,
  Layers3,
  Leaf,
  Map,
  Menu,
  Network,
  ShieldCheck,
  Sprout,
  Target,
  Trees,
  X,
} from 'lucide-react';

const services = [
  {
    icon: Droplets,
    title: 'Source-Water Consequence Assessment',
    text: 'Identify where environmental disturbance could have the greatest effect on water quality, quantity, reliability, or recovery.',
  },
  {
    icon: Flame,
    title: 'Wildfire & Watershed Resilience',
    text: 'Evaluate wildfire according to its potential effects on watershed function, erosion, sediment delivery, access, and recovery.',
  },
  {
    icon: Map,
    title: 'GIS & Environmental Decision Intelligence',
    text: 'Connect existing environmental and operational information into maps, analysis, and decision frameworks that support action.',
  },
  {
    icon: FileSearch,
    title: 'Land-Use & Development Intelligence',
    text: 'Identify proposed land-use changes that may affect source water, forests, wetlands, streams, ecological connectivity, or long-term resilience.',
  },
  {
    icon: ShieldCheck,
    title: 'Implementation & Accountability',
    text: 'Translate identified risks into responsibilities, priorities, deadlines, verification, and measurable risk reduction.',
  },
  {
    icon: Trees,
    title: 'Watershed Field Assessment',
    text: 'Direct field assessment toward conditions and information gaps capable of changing management decisions.',
  },
];

const clients = [
  'Municipal water utilities',
  'County and city governments',
  'Washington state agencies',
  'Tribal governments',
  'Conservation districts',
  'Watershed organizations',
  'Public land managers',
  'Utilities and major landowners',
  'Environmental and engineering partners',
];

const navItems = [
  ['/', 'Home'],
  ['/source-water', 'Source-Water Protection'],
  ['/services', 'Services'],
  ['/system', 'Environmental Intelligence System'],
  ['/applications', 'Applications / Case Studies'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link className="brand" to="/" aria-label="Environmental Intelligence home">
          <span className="brand-mark"><Droplets size={22} /></span>
          <span>
            <strong>Environmental Intelligence</strong>
            <small>Source-Water Protection • Watershed Resilience</small>
          </span>
        </Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {navItems.map(([to, label]) => (
            <NavLink key={to} to={to} className={({ isActive }) => isActive ? 'active' : ''}>
              {label}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/contact">Request an Assessment</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h3>Environmental Intelligence</h3>
          <p>Connecting environmental information to decisions that protect water, watersheds, and the landscapes that sustain them.</p>
        </div>
        <div>
          <h4>Core Work</h4>
          <Link to="/source-water">Source-Water Protection</Link>
          <Link to="/services">Services</Link>
          <Link to="/system">Decision System</Link>
        </div>
        <div>
          <h4>Connect</h4>
          <Link to="/applications">Applications / Case Studies</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Environmental Intelligence</span>
        <span>Connect the information. Prioritize the consequence. Protect the water.</span>
      </div>
    </footer>
  );
}

function Layout({ children }) {
  return <><Header /><main>{children}</main><Footer /></>;
}

function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{text}</p>
        {children}
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title, text, light = false }) {
  return (
    <div className={`section-heading ${light ? 'light' : ''}`}>
      {kicker && <div className="eyebrow">{kicker}</div>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function Home() {
  return (
    <Layout>
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={`${import.meta.env.BASE_URL}hero-video.mp4`} type="video/mp4" />
        </video>
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="eyebrow inverse">Environmental Intelligence</div>
          <h1>Protecting Source Water Through Better Environmental Decisions</h1>
          <p>Environmental Intelligence connects environmental, infrastructure, land-use, and operational information to help utilities and governments identify <strong>what matters most, what threatens it, and what should be done first.</strong></p>
          <div className="button-row">
            <Link className="button primary" to="/contact">Request a Source-Water Assessment <ArrowRight size={18} /></Link>
            <Link className="button ghost" to="/services">Explore Our Services</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <SectionTitle kicker="The challenge" title="Environmental Information Is Abundant. Integration Is Not." />
            <p className="lead">Utilities and government agencies already collect extensive information about forests, wildfire, streams, water quality, roads, infrastructure, habitat, land use, restoration, and environmental conditions.</p>
            <p>The problem is that those systems are often managed separately. <strong>A watershed is not.</strong></p>
          </div>
          <div className="relationship-card">
            {['Forest condition', 'Wildfire', 'Soils & slopes', 'Streams & wetlands', 'Infrastructure & access', 'Land-use change'].map((x, i) => <div key={x}><span>{String(i + 1).padStart(2, '0')}</span>{x}</div>)}
          </div>
        </div>
      </section>

      <section className="principle-band">
        <div className="container">
          <div className="principle-grid">
            <div>
              <div className="eyebrow inverse">Core principle</div>
              <h2>The Watershed Is Water Infrastructure</h2>
            </div>
            <div>
              <p>Water infrastructure begins before the intake. Forests, soils, wetlands, streams, riparian areas, and headwaters influence the quantity, quality, reliability, and recoverability of source water.</p>
              <p>Environmental Intelligence evaluates natural systems together with engineered infrastructure so priorities reflect <strong>functional consequence, not replacement cost alone.</strong></p>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <SectionTitle kicker="What we do" title="From Environmental Information to Action" text="We connect environmental evidence to the management decisions that determine whether risks are reduced." />
          <div className="card-grid three">
            {services.map(({ icon: Icon, title, text }) => (
              <article className="service-card" key={title}>
                <Icon size={28} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="center-cta"><Link className="text-link" to="/services">View all Environmental Intelligence services <ArrowRight size={17} /></Link></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle kicker="The difference" title="A Hazard Map Is Not a Management Strategy" text="Maps identify conditions. Environmental Intelligence is designed to connect those findings to responsibility, implementation, verification, and measurable risk reduction." />
          <div className="process-line">
            {['Observe', 'Connect', 'Understand consequence', 'Prioritize', 'Assign', 'Implement', 'Verify', 'Measure'].map((item, i) => (
              <div className="process-step" key={item}><span>{i + 1}</span><strong>{item}</strong></div>
            ))}
          </div>
          <blockquote className="statement">Data alone does not protect water. Decisions and action do.</blockquote>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <SectionTitle light kicker="Who we serve" title="Designed for Organizations Responsible for Water and Land" text="Source-water protection crosses jurisdictions. Our role is to connect the information and responsibilities that already exist across those boundaries." />
          <div className="client-grid">{clients.map(c => <div key={c}><CheckCircle2 size={18} />{c}</div>)}</div>
        </div>
      </section>

      <section className="section feature-section">
        <div className="container feature-grid">
          <div>
            <SectionTitle kicker="Featured service" title="Source-Water Consequence & Action-Priority Assessment" />
            <p className="lead">A focused assessment designed to identify where disturbance matters most, what threatens those areas, what can be addressed now, and what remains unresolved.</p>
            <ul className="check-list">
              {['Source-Water Consequence Map', 'Watershed Function Map', 'Hydrologic Connectivity Analysis', 'Wildfire / Source-Water Priority Map', 'Data Confidence Map', 'Priority and Unresolved-Risk Registers', 'Implementation Responsibility Matrix', 'Executive Decision Brief'].map(x => <li key={x}><CheckCircle2 size={18} />{x}</li>)}
            </ul>
            <Link className="button secondary" to="/contact">Discuss an Assessment <ArrowRight size={18} /></Link>
          </div>
          <div className="score-card">
            <div className="score-label">Decision framework</div>
            <div className="score-row"><span>Threat</span><strong>What could happen?</strong></div>
            <div className="score-row"><span>Consequence</span><strong>What would it mean for source water?</strong></div>
            <div className="score-row"><span>Actionability</span><strong>What can reduce the risk?</strong></div>
            <div className="score-row"><span>Accountability</span><strong>Who acts, and was it completed?</strong></div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-inner">
          <div><div className="eyebrow inverse">Environmental Intelligence</div><h2>Better information should lead to better protection.</h2></div>
          <Link className="button light" to="/contact">Discuss Your Watershed <ArrowRight size={18} /></Link>
        </div>
      </section>
    </Layout>
  );
}

function SourceWater() {
  const factors = [
    ['Water-Supply Dependence', 'How important is the location to the quantity or reliability of the water source?'],
    ['Hydrologic Connectivity', 'How easily can sediment, debris, contaminants, or altered runoff reach source water?'],
    ['Water-Quality & Treatment Sensitivity', 'Could disturbance significantly impair water quality or treatment capability?'],
    ['Landscape Susceptibility', 'How vulnerable are slopes, soils, and drainage systems to disturbance?'],
    ['Ecological Function', 'What natural processes help maintain watershed stability and resilience?'],
    ['Recovery Difficulty', 'How long would it take to restore lost function?'],
  ];
  return (
    <Layout>
      <PageHero eyebrow="Source-Water Protection" title="The Watershed Is Water Infrastructure" text="Reliable water begins with the landscape that collects, stores, filters, and delivers it. Environmental Intelligence identifies where loss of watershed function would have the greatest consequence and where prevention can provide the greatest benefit.">
        <Link className="button primary" to="/contact">Start a Source-Water Assessment <ArrowRight size={18} /></Link>
      </PageHero>

      <section className="section"><div className="container split">
        <div><SectionTitle kicker="The system" title="Protecting the Landscape That Produces the Water" /><p className="lead">Forests, soils, streams, wetlands, riparian areas, slopes, and headwaters are functional components of a water-supply system.</p><p>When these systems are degraded, severely burned, fragmented, destabilized, or poorly managed, downstream infrastructure can remain intact while the water source itself becomes more difficult—or sometimes impossible—to use.</p></div>
        <div className="stack-card"><Sprout size={34} /><h3>Natural infrastructure</h3><p>Forests • Soils • Streams • Wetlands • Riparian areas • Headwaters • Groundwater recharge • Ecological recovery systems</p><hr /><Network size={34} /><h3>Engineered infrastructure</h3><p>Reservoirs • Intakes • Treatment systems • Pumps • Pipelines • Roads • Culverts • Power • Communications</p></div>
      </div></section>

      <section className="section soft"><div className="container"><SectionTitle kicker="The decision gap" title="Knowing the Risks Is Not the Same as Knowing What to Do First" text="Agencies may already have hazard maps, emergency plans, forest-management plans, monitoring programs, restoration programs, capital budgets, and environmental studies. What is often missing is a common framework connecting them." />
        <div className="equation">Threat <span>+</span> Source-Water Consequence <span>+</span> Urgency <span>+</span> Effectiveness <span>+</span> Feasibility <span>+</span> Responsibility <span>=</span> Priority</div>
      </div></section>

      <section className="section"><div className="container"><SectionTitle kicker="Source-water consequence" title="Evaluate What Failure Would Mean for the Water Supply" /><div className="card-grid three">{factors.map(([a,b], i) => <article className="factor-card" key={a}><span>{String(i+1).padStart(2,'0')}</span><h3>{a}</h3><p>{b}</p></article>)}</div></div></section>

      <section className="section dark"><div className="container split"><div><SectionTitle light kicker="Risk and value" title="Threat Is Not the Same as Consequence" text="A location can have high hazard and lower source-water consequence—or moderate hazard and catastrophic source-water consequence. Those locations should not automatically receive the same management priority." /></div><div className="matrix"><div className="matrix-cell muted">Lower threat<br /><strong>Lower consequence</strong></div><div className="matrix-cell watch">Lower threat<br /><strong>High consequence</strong></div><div className="matrix-cell active">High threat<br /><strong>Lower consequence</strong></div><div className="matrix-cell critical">High threat<br /><strong>High consequence</strong></div></div></div></section>

      <section className="section"><div className="container"><SectionTitle kicker="Prevention" title="From Assessment to Action" text="The next question after identifying consequence is what can still be changed." /><div className="tag-cloud">{['Forest or fuel treatment','Invasive vegetation control','Road or culvert improvement','Erosion prevention','Monitoring','Early detection','Suppression access','Ecological restoration','Land conservation','Development controls','Infrastructure improvements','Specialist investigation'].map(x => <span key={x}>{x}</span>)}</div></div></section>
    </Layout>
  );
}

function Services() {
  const detailed = [
    ['Source-Water Consequence Assessment', 'Identify locations where disturbance could disproportionately affect usable water.', ['Water-supply dependence', 'Hydrologic connectivity', 'Water-quality sensitivity', 'Erosion and sediment risk', 'Ecological function', 'Infrastructure dependencies', 'Recovery difficulty', 'Data confidence']],
    ['Wildfire & Watershed Resilience Assessment', 'Evaluate wildfire as a watershed and water-supply problem.', ['Wildfire threat and ignition exposure', 'Fuels and forest condition', 'Slope and soils', 'Sediment and debris-flow potential', 'Suppression access', 'Source-water consequences', 'Ecological recovery', 'Prevention opportunities']],
    ['GIS & Environmental Decision Intelligence', 'Develop geospatial products designed to answer management questions rather than simply display data.', ['Watershed and source-water maps', 'Field and web maps', 'Hydrologic-connectivity analysis', 'Risk dashboards', 'Critical-area maps', 'Infrastructure-dependency maps', 'Restoration-priority maps', 'Decision-support GIS layers']],
    ['Land-Use & Development Intelligence', 'Monitor and evaluate development and policy actions that could alter watershed or ecological function.', ['Zoning and comprehensive-plan changes', 'Development proposals and permits', 'Subdivisions and annexations', 'Road and utility extensions', 'Forest conversion', 'SEPA / NEPA actions', 'Public-comment deadlines', 'Cumulative-impact screening']],
    ['Watershed Field Assessment', 'Target field work toward questions capable of changing a management decision.', ['Forest-condition assessment', 'Stream-crossing review', 'Invasive-vegetation mapping', 'Riparian and wetland observations', 'Road-condition documentation', 'Habitat corridor observations', 'Photo-point monitoring', 'GIS field-data collection']],
    ['Implementation & Accountability Support', 'Help organizations move from plans to completed and verified work.', ['Priority-action registers', 'Implementation matrices', 'Responsibility tables', 'Project tracking', 'Monitoring plans', 'Funding and grant alignment', 'Unresolved-risk tracking', 'Performance assessment']],
  ];
  return <Layout>
    <PageHero eyebrow="Services" title="Environmental Analysis Built Around Decisions" text="Environmental Intelligence provides environmental, geospatial, and implementation services focused on protecting source water and watershed function." />
    <section className="section"><div className="container service-list">{detailed.map(([title,text,items],i) => <article className="detailed-service" key={title}><div className="service-number">0{i+1}</div><div><h2>{title}</h2><p className="lead">{text}</p><div className="mini-grid">{items.map(x => <span key={x}><CheckCircle2 size={16} />{x}</span>)}</div></div></article>)}</div></section>
    <section className="cta-band"><div className="container cta-inner"><div><div className="eyebrow inverse">Start with the decision</div><h2>What does your organization need to understand or act on?</h2></div><Link className="button light" to="/contact">Discuss a Project <ArrowRight size={18}/></Link></div></section>
  </Layout>;
}

function System() {
  const modules = [
    ['01','Watershed & Environmental Mosaic',Layers3,'Watersheds, subbasins, streams, wetlands, forests, soils, slopes, roads, parcels, ownership, utilities, habitat, infrastructure, monitoring locations, and restoration areas.'],
    ['02','Source-Water Consequence',Droplets,'Source-water importance, hydrologic connectivity, treatment sensitivity, erosion, sediment delivery, ecological function, recovery difficulty, and infrastructure dependency.'],
    ['03','Threat Intelligence',CircleAlert,'Wildfire, flooding, debris flow, erosion, drought, extreme weather, forest-health decline, contamination, infrastructure failure, land-use conversion, and emerging change.'],
    ['04','Priority & Action Matrix',Target,'Consequence, threat, urgency, intervention effectiveness, feasibility, confidence, responsibility, implementation status, and funding needs.'],
    ['05','Land-Use Intelligence',FileSearch,'Zoning, comprehensive plans, permits, subdivisions, annexations, infrastructure expansion, forest conversion, environmental review, mitigation, and public-comment periods.'],
    ['06','Implementation & Accountability',ShieldCheck,'Risk, location, consequence, recommended action, responsible organization, partners, funding, deadline, status, verification, and measured effectiveness.'],
    ['07','Operational Conditions',Network,'Road access, closures, communications, power outages, field reports, staging areas, infrastructure status, and restoration conditions when operationally relevant.'],
    ['08','Future Operations API',Database,'Selected Environmental Intelligence information integrated into existing GIS platforms, dashboards, planning systems, field systems, and operational applications.'],
  ];
  return <Layout>
    <PageHero eyebrow="Environmental Intelligence System" title="Connecting Environmental Intelligence to Coordinated Action" text="An integrated decision framework connecting environmental conditions, source-water consequence, land management, infrastructure, hazards, field observations, and implementation responsibility." />
    <section className="section"><div className="container"><SectionTitle kicker="System purpose" title="Not Another General-Purpose Disaster Application" text="The objective is a common environmental operating picture that supports prevention, prioritization, coordination, and accountability for organizations responsible for water and land." /><div className="system-flow"><span>Environmental condition</span><ChevronRight/><span>Consequence</span><ChevronRight/><span>Priority</span><ChevronRight/><span>Action</span><ChevronRight/><span>Verified risk reduction</span></div></div></section>
    <section className="section soft"><div className="container module-grid">{modules.map(([n,title,Icon,text]) => <article className="module-card" key={title}><div className="module-top"><span>{n}</span><Icon size={25}/></div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="section"><div className="container split"><div><SectionTitle kicker="Integration strategy" title="Connect Existing Systems Rather Than Replace Them" text="Environmental Intelligence is designed to use authoritative and specialized sources where they already exist, then add the cross-disciplinary consequence, prioritization, and accountability layer." /></div><div className="integration-list">{['Agency GIS and monitoring','Hydrologic and weather data','Forest and wildfire information','Infrastructure and access systems','Land-use and permitting records','Field observations and restoration records'].map(x=><div key={x}><Database size={18}/>{x}</div>)}</div></div></section>
  </Layout>;
}

function Applications() {
  const applications = [
    {title:'Cedar River / Lake Youngs Source-Water Protection',tag:'Source Water + Wildfire',text:'Independent source-water and wildfire-risk analysis informed by professional watershed experience and review of current source-water protection and wildfire-resilience planning.',focus:['Municipal source-water protection','Wildfire prevention','Forest condition','Erosion and sediment consequence','Utility corridors','Emergency access','Ecological recovery','Implementation accountability']},
    {title:'South King County Watershed & Growth Interface',tag:'Watershed + Growth',text:'An application framework for rapidly changing landscapes where forest fragmentation, wetlands, streams, development pressure, wildfire, flood risk, road access, and ecological connectivity interact.',focus:['Maple Valley / Hobart','Covington / Black Diamond','Cedar River corridor','Development pressure','Wetland systems','Forest fragmentation','Access constraints','Source-water implications']},
    {title:'Parcel-Level Land-Use & Ecological Threat Analysis',tag:'Land Use + Ecology',text:'Parcel-scale intelligence connecting proposed land-use change to wetlands, streams, forest retention, wildlife connectivity, critical areas, cumulative effects, and mitigation opportunities.',focus:['Zoning changes','Development proposals','Wildlife connectivity','Wetlands and streams','Forest retention','Critical areas','Public-comment windows','Mitigation opportunities']},
  ];
  return <Layout>
    <PageHero eyebrow="Applications / Case Studies" title="Applying Integrated Environmental Intelligence to Real Landscapes" text="This page distinguishes conceptual and independent applications from formal client work while demonstrating how the framework can be used on high-consequence watersheds and changing landscapes." />
    <section className="section"><div className="container application-list">{applications.map((a,i)=><article className="application-card" key={a.title}><div className="application-index">0{i+1}</div><div><span className="pill">{a.tag}</span><h2>{a.title}</h2><p className="lead">{a.text}</p><div className="tag-cloud small">{a.focus.map(x=><span key={x}>{x}</span>)}</div></div></article>)}</div></section>
    <section className="section dark"><div className="container"><SectionTitle light kicker="Future case studies" title="Show the Decision, Not Just the Map" text="Completed projects should document the management question, environmental system, data integrated, consequence identified, decision priority, action recommended, and outcome." /><div className="process-line light-process">{['Management question','Environmental system','Data integrated','Consequence','Decision / priority','Action','Outcome'].map((x,i)=><div className="process-step" key={x}><span>{i+1}</span><strong>{x}</strong></div>)}</div></div></section>
  </Layout>;
}

function About() {
  return <Layout>
    <PageHero eyebrow="About" title="Environmental Experience Connected to Better Decisions" text="Environmental Intelligence was founded by Mari Knutson to address a recurring problem in environmental management: important information is often available, but it exists in separate disciplines, agencies, datasets, plans, and programs." />
    <section className="section"><div className="container split"><div><SectionTitle kicker="Founder experience" title="Ecology, GIS, Watershed Management, and Field Practice" /><p className="lead">Mari Knutson's professional background includes restoration ecology, source-water and watershed management, GIS and field mapping, water quality, forest and vegetation assessment, invasive-species management, native plant and seed systems, public-land management, habitat connectivity, and environmental risk analysis.</p><p>Her experience includes approximately 5.5 years working as an Environmental Analyst in Seattle Public Utilities' Cedar River Municipal Watershed.</p></div><div className="stack-card"><Leaf size={34}/><h3>The purpose</h3><p>Bring environmental, hydrologic, geospatial, infrastructure, and operational information together around the decisions necessary to protect source water and watershed function.</p><hr/><Layers3 size={34}/><h3>The role</h3><p>Integrate specialist findings rather than replace engineering, fire behavior, geotechnical, legal, or other disciplines requiring specialized credentials.</p></div></div></section>
    <section className="section soft"><div className="container"><SectionTitle kicker="Approach" title="Four Principles Guide the Work" /><div className="card-grid four">{[
      ['01','Protect function, not simply replacement value.'],
      ['02','Use existing information before commissioning unnecessary additional studies.'],
      ['03','Separate uncertainty from risk so missing data do not hide serious consequences.'],
      ['04','Measure whether management actions actually reduce vulnerability.'],
    ].map(([n,t])=><article className="principle-card" key={n}><span>{n}</span><h3>{t}</h3></article>)}</div></div></section>
    <section className="cta-band"><div className="container cta-inner"><div><div className="eyebrow inverse">Environmental Intelligence</div><h2>Connect the information. Prioritize the consequence. Protect the water.</h2></div><Link className="button light" to="/contact">Discuss a Project <ArrowRight size={18}/></Link></div></section>
  </Layout>;
}

function Contact() {
  return <Layout>
    <PageHero eyebrow="Contact" title="Discuss a Source-Water or Environmental Intelligence Project" text="Environmental Intelligence works with public agencies, utilities, land managers, and environmental partners to identify consequential environmental risk and translate it into practical management priorities." />
    <section className="section"><div className="container contact-grid"><div><SectionTitle kicker="Project discussion" title="Start With the Management Question" /><p>Tell us the watershed or geographic area, the concern you are trying to resolve, and the type of decision your organization needs to make.</p><div className="contact-note"><Droplets size={26}/><div><strong>Primary service areas</strong><p>Source-water protection • Wildfire and watershed resilience • GIS and environmental decision intelligence • Land-use intelligence • Field assessment • Implementation and accountability</p></div></div><a className="email-link" href="mailto:MariKnutson19@gmail.com">MariKnutson19@gmail.com</a></div>
      <form className="contact-form" action="https://formsubmit.co/MariKnutson19@gmail.com" method="POST">
        <input type="text" name="_honey" style={{display:'none'}} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="Environmental Intelligence website inquiry" />
        <input type="hidden" name="_next" value="https://mari-knutson.github.io/RewildingRestoration/" />
        <label>Name<input name="name" required /></label>
        <label>Organization<input name="organization" /></label>
        <label>Role<input name="role" /></label>
        <label>Email<input name="email" type="email" required /></label>
        <label>Phone<input name="phone" type="tel" /></label>
        <label>Project location / watershed<input name="location" /></label>
        <label>Service interest<select name="service"><option>Source-Water Consequence Assessment</option><option>Wildfire & Watershed Resilience</option><option>GIS & Environmental Decision Intelligence</option><option>Land-Use & Development Intelligence</option><option>Watershed Field Assessment</option><option>Implementation & Accountability</option><option>Restoration / Recovery Planning</option><option>Other</option></select></label>
        <label className="full">Message<textarea name="message" rows="6" required /></label>
        <button className="button primary full" type="submit">Send Project Inquiry <ArrowRight size={18}/></button>
      </form></div></section>
  </Layout>;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/source-water" element={<SourceWater />} />
        <Route path="/services" element={<Services />} />
        <Route path="/system" element={<System />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
