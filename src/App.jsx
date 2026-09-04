import { useEffect, useState } from 'react';
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { ArrowRight, Droplets, Leaf, Map, Menu, ShieldCheck, X } from 'lucide-react';

const base = import.meta.env.BASE_URL;

const nav = [
  ['/', 'Home'],
  ['/source-water', 'Source Water'],
  ['/services', 'Services'],
  ['/applications', 'Work'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
];

function ScrollTop(){ const {pathname}=useLocation(); useEffect(()=>window.scrollTo(0,0),[pathname]); return null; }

function Header(){
  const [open,setOpen]=useState(false);
  const {pathname}=useLocation();
  useEffect(()=>setOpen(false),[pathname]);
  return <header className="topbar"><Link to="/" className="wordmark">Environmental Intelligence</Link><button className="menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button><nav className={open?'nav open':'nav'}>{nav.map(([to,label])=><NavLink key={to} to={to}>{label}</NavLink>)}<Link className="pill-button" to="/contact">Start a project</Link></nav></header>
}

function Footer(){ return <footer><div><strong>Environmental Intelligence | RewildingRestoration</strong><p>Source-Water Protection • Watershed Resilience • Environmental Decision Support</p><p className="footer-site">https://mari-knutson.github.io/RewildingRestoration/</p></div><div><Link to="/source-water">Source Water</Link><Link to="/services">Services</Link><Link to="/applications">Work</Link><Link to="/about">About</Link><Link to="/contact">Contact</Link></div><small>Environmental Intelligence is a DBA of RewildingRestoration. Connect the information. Prioritize the consequence. Protect the water.</small></footer> }

function Layout({children}){ return <><Header/><main>{children}</main><Footer/></> }

function Home(){ return <Layout>
  <section className="hero-minimal">
    <video autoPlay muted loop playsInline><source src={`${base}hero-video.mp4`} type="video/mp4"/></video>
    <div className="shade"/>
    <div className="hero-copy"><span>Environmental Intelligence</span><h1>Protecting source water through better environmental decisions.</h1><p>We connect environmental information, field knowledge, GIS, land-use change, infrastructure, and risk so agencies can see what matters most and act earlier.</p><Link className="light-button" to="/source-water">Explore source-water protection <ArrowRight size={18}/></Link></div>
  </section>

  <section className="intro-block">
    <div className="kicker">Why this work exists</div>
    <h2>Environmental information is abundant. Integration is not.</h2>
    <p>Forests, soils, streams, wildfire, roads, development, infrastructure, and emergency conditions are often managed in separate systems. A watershed is not. Environmental Intelligence connects those pieces around one objective: protecting the function of the water source.</p>
  </section>

  <section className="three-points">
    <article><Droplets/><h3>Protect source water</h3><p>Identify where disturbance would have the greatest consequence to water quality, quantity, reliability, or recovery.</p></article>
    <article><Map/><h3>Connect the landscape</h3><p>Bring ecological, hydrologic, GIS, infrastructure, land-use, and field information into one decision framework.</p></article>
    <article><ShieldCheck/><h3>Move from risk to action</h3><p>Translate analysis into priorities, responsibility, implementation, verification, and measurable risk reduction.</p></article>
  </section>

  <section className="full-image"><img src={`${base}images/projects/1-sammamish.png`} alt="Watershed and landscape analysis"/><div><span>Core principle</span><h2>The watershed is water infrastructure.</h2><p>Forests, soils, wetlands, streams, riparian areas, and headwaters are part of the system that produces usable water. Their value cannot be reduced to replacement cost.</p><Link to="/source-water">Read the source-water approach <ArrowRight size={18}/></Link></div></section>

  <section className="how"><div className="kicker">How it works</div><h2>From information to protection.</h2><div className="steps">{[
    ['1','Identify','Where would failure matter most?'],['2','Connect','What systems and threats interact there?'],['3','Prioritize','What should be done first?'],['4','Verify','Did the action reduce vulnerability?']
  ].map(([n,t,d])=><div key={n}><span>{n}.</span><h3>{t}</h3><p>{d}</p></div>)}</div></section>

  <section className="projects-home"><div className="section-top"><div><div className="kicker">Applications</div><h2>Applied to real landscapes.</h2></div><Link to="/applications">See the work <ArrowRight size={18}/></Link></div><div className="project-cards">
    <Link to="/applications"><img src={`${base}images/projects/1-sammamish.png`} alt="Source-water landscape"/><span>Source Water + Wildfire</span><h3>Cedar River / Lake Youngs</h3></Link>
    <Link to="/applications"><img src={`${base}images/projects/2-wildlife.png`} alt="Wildlife corridor landscape"/><span>Land Use + Ecology</span><h3>Wildlife Corridor Review</h3></Link>
    <Link to="/applications"><img src={`${base}images/projects/3-iride.png`} alt="Environmental field project"/><span>Watershed + Growth</span><h3>South King County</h3></Link>
  </div></section>

  <section className="science"><div><Leaf/><div className="kicker">Decision framework</div><h2>Rooted in ecology, GIS, and field evidence.</h2></div><p>Environmental Intelligence does not replace hydrologists, fire professionals, engineers, geologists, or planners. It connects their findings so decision-makers can understand the whole system, compare consequence, and act on priorities.</p></section>

  <section className="closing"><h2>Better information should lead to better protection.</h2><Link className="dark-button" to="/contact">Discuss your watershed <ArrowRight size={18}/></Link></section>
</Layout> }

const simplePages={
  '/source-water':{eyebrow:'Source-Water Protection',title:'The watershed is water infrastructure.',intro:'Reliable water begins with the landscape that collects, stores, filters, and delivers it.',body:[['Protect function, not only replacement value','Environmental Intelligence evaluates forests, soils, streams, wetlands, slopes, ecological resilience, and engineered infrastructure according to what their loss would mean for continued source-water function.'],['Separate threat from consequence','A location can have moderate hazard but catastrophic source-water consequence. That difference should remain visible in management priorities.'],['Act while options still exist','The purpose of the analysis is prevention: identify where intervention, monitoring, restoration, access improvement, or additional specialist work can reduce consequence before a crisis occurs.']]},
  '/services':{eyebrow:'Services',title:'Environmental analysis built around decisions.',intro:'Focused services for utilities, governments, land managers, and environmental partners.',body:[['Source-Water Consequence Assessment','Identify where disturbance could disproportionately affect usable water and produce maps, priority registers, and immediate action recommendations.'],['Wildfire & Watershed Resilience','Evaluate wildfire through water-quality, erosion, sediment, access, forest-condition, and recovery consequences.'],['GIS & Environmental Decision Intelligence','Integrate existing environmental and operational information into practical maps and decision frameworks.'],['Land-Use & Development Intelligence','Track zoning, permits, subdivisions, infrastructure expansion, forest conversion, environmental review, and cumulative watershed pressure.'],['Implementation & Accountability','Connect identified risks to responsibility, deadlines, completion, verification, and measurable risk reduction.']]},
  '/applications':{eyebrow:'Work',title:'Applied environmental intelligence.',intro:'Independent applications and case-study frameworks for high-consequence watersheds and changing landscapes.',body:[['Cedar River / Lake Youngs','Source-water protection, wildfire prevention, forest condition, erosion and sediment consequence, utility corridors, access, recovery, and implementation accountability.'],['South King County','Forest fragmentation, wetlands, streams, development pressure, wildfire, flood risk, road access, ecological connectivity, and source-water implications.'],['Parcel-Level Land-Use Review','Zoning change, development proposals, wetlands, streams, forest retention, wildlife connectivity, critical areas, cumulative effects, and mitigation opportunities.']]},
  '/about':{eyebrow:'About',title:'Environmental experience connected to better decisions.',intro:'Environmental Intelligence was founded by Mari Knutson to connect disciplines, datasets, and agency responsibilities around practical environmental decisions.',body:[['Experience','Mari Knutson’s background includes restoration ecology, GIS and field mapping, water quality, forest and vegetation assessment, invasive-species management, native plant and seed systems, public-land management, habitat connectivity, and environmental risk analysis.'],['Cedar River Municipal Watershed','Her experience includes approximately 5.5 years as an Environmental Analyst working in Seattle Public Utilities’ Cedar River Municipal Watershed.'],['Role','Environmental Intelligence integrates specialist findings rather than replacing licensed engineering, fire-behavior modeling, geotechnical, legal, or other specialized disciplines.']]}
};

function SimplePage({data}){ return <Layout><section className="plain-hero"><div className="kicker">{data.eyebrow}</div><h1>{data.title}</h1><p>{data.intro}</p></section><section className="plain-list">{data.body.map(([h,p],i)=><article key={h}><span>0{i+1}</span><div><h2>{h}</h2><p>{p}</p></div></article>)}</section><section className="closing"><h2>Connect the information. Prioritize the consequence. Protect the water.</h2><Link className="dark-button" to="/contact">Start a project <ArrowRight size={18}/></Link></section></Layout> }

function Contact(){ return <Layout><section className="plain-hero"><div className="kicker">Contact</div><h1>Discuss a source-water or environmental intelligence project.</h1><p>Tell us the watershed, landscape, or management question your organization needs to resolve.</p></section><section className="contact-simple"><div><h2>Environmental Intelligence</h2><p>Source-water protection • watershed resilience • GIS • land-use intelligence • implementation support</p><a href="mailto:MariKnutson19@gmail.com">MariKnutson19@gmail.com</a></div><form action="https://formsubmit.co/MariKnutson19@gmail.com" method="POST"><input type="hidden" name="_captcha" value="false"/><input type="hidden" name="_subject" value="Environmental Intelligence website inquiry"/><label>Name<input name="name" required/></label><label>Organization<input name="organization"/></label><label>Email<input type="email" name="email" required/></label><label>Project location / watershed<input name="location"/></label><label>Message<textarea rows="6" name="message" required/></label><button className="dark-button" type="submit">Send inquiry <ArrowRight size={18}/></button></form></section></Layout> }

function App(){ return <><ScrollTop/><Routes><Route path="/" element={<Home/>}/>{Object.entries(simplePages).map(([path,data])=><Route key={path} path={path} element={<SimplePage data={data}/>}/>)}<Route path="/contact" element={<Contact/>}/><Route path="*" element={<Home/>}/></Routes></> }

export default App;
