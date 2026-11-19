'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cars } from '@/data/cars';
import { CuratorConcierge } from '@/components/curator-concierge';

const links = [
  { label: 'SHOWROOM (06)', href: '/' },
  { label: 'HEAD-TO-HEAD COMPARE (ARENA)', href: '/compare' },
  { label: 'ACQUIRE / BOOKING', href: '/acquire' },
];

function CarRearMenuIcon({ open }: { open: boolean }) {
  return <svg viewBox="0 0 64 44" aria-hidden="true" className={open ? 'car-menu-svg is-open' : 'car-menu-svg'}>
    <path className="car-body" d="M6 27c1-3 4-5 9-6l5-10c2-4 6-6 12-6h1c7 0 11 2 14 7l5 9c4 1 6 3 7 6l1 6H5z"/>
    <path className="car-glass" d="m23 11-4 9h26l-4-8c-2-3-5-4-10-4s-8 1-8 3Z"/>
    <path className="menu-line" d="M25 13h14M23 16h18M22 19h20"/>
    <path className="car-trunk" d="M12 25h40M10 30h44"/>
    <path className="car-light" d="M10 25h8v4h-8zm36 0h8v4h-8z"/>
    <path className="car-bumper" d="M9 34h46"/>
    <circle className="car-wheel" cx="16" cy="35" r="3.2"/><circle className="car-wheel" cx="48" cy="35" r="3.2"/>
    <path className="car-exhaust" d="M25 38h4m7 0h4"/>
  </svg>;
}

function CloseMobileDrawer({ close }: { close: () => void }) {
  return <div className="mobile-drawer-wrap">
    <button className="mobile-backdrop" aria-label="Close navigation menu" onClick={close}/>
    <section className="mobile-drawer" role="dialog" aria-modal="true" aria-label="Showroom navigation">
      <div className="drawer-heading"><span>THE GARAGE INDEX</span><small>06 AUTHENTICATED CHASSIS</small></div>
      <div className="drawer-main-links">{links.map(item=><Link key={item.href} href={item.href} onClick={close}>{item.label}<span>↗</span></Link>)}</div>
      <div className="drawer-dossiers"><h2>INSPECT A DOSSIER <span>PLATES 01—06</span></h2><div>{cars.map((car,index)=><Link key={car.slug} href={`/dossier/${car.slug}`} onClick={close}><small>PLATE {String(index+1).padStart(2,'0')}</small><span>{car.name}</span><b>↗</b></Link>)}</div></div>
      <p className="drawer-footnote">J. STERLING · CHIEF CURATOR & ARCHIVIST</p>
    </section>
  </div>;
}

export function Shell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (!menuOpen) return;
    const handleKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [menuOpen]);
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  return <>
    <aside className="binder"><div className="holes"><i/><i/><i/></div><span>PROTAGONIST LOGBOOK VOL. IV — FOLIO 42</span></aside>
    <header className="topbar">
      <Link href="/" className="brand"><span className="crest">✺</span><span><b>PROTAGONIST MOTORS</b><small>A COLLECTOR’S GARAGE LOGBOOK</small></span></Link>
      <nav aria-label="Main navigation">
        {links.slice(0,2).map(item=>{const active=pathname===item.href;return <Link key={item.href} className={active?'active':''} aria-current={active?'page':undefined} href={item.href}>{item.label}</Link>;})}
        <details className="dossier-menu"><summary className={pathname.startsWith('/dossier/')?'active':''}>INSPECT DOSSIER <span>⌄</span></summary><div className="dossier-dropdown">{cars.map((car,index)=><Link key={car.slug} href={`/dossier/${car.slug}`} onClick={event=>event.currentTarget.closest('details')?.removeAttribute('open')}><small>PLATE {String(index+1).padStart(2,'0')}</small>{car.name}</Link>)}</div></details>
        <Link className={pathname==='/acquire'?'active':''} aria-current={pathname==='/acquire'?'page':undefined} href="/acquire">ACQUIRE / BOOKING</Link>
      </nav>
      <button className={`car-menu-button ${menuOpen?'is-open':''}`} aria-label={menuOpen?'Close navigation menu':'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-menu" onClick={()=>setMenuOpen(!menuOpen)}><CarRearMenuIcon open={menuOpen}/></button>
      <div className="curator-badge"><img src="/images/curator.svg" alt="Illustrated portrait of J. Sterling"/><span><b>J. Sterling</b><small>CHIEF CURATOR</small></span></div>
    </header>
    {menuOpen&&<div id="mobile-menu"><CloseMobileDrawer close={()=>setMenuOpen(false)}/></div>}
    <main>{children}</main>
    <footer><div><h2>Protagonist Motors Archive <em>LEDGER VERIFIED</em></h2><p>Printed on mechanical letterpress and cataloged into permanent archival folio registry. Preserving provenance, dyno benchmarks, and physical inspection receipts.</p></div><div><b>PHYSICAL SHOWROOM</b><p>Shed 7, Industrial Way, Nairobi Branch<br/>Inspections by appointment only</p></div><div><b>COLOPHON: SET IN PLAYFAIR DISPLAY & SPACE MONO</b><p>PLATE IMPRESSION NO. 89-042<br/>© 1989–2025 Protagonist Motors Ltd.</p></div></footer>
    <CuratorConcierge agentId={process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID ?? ''} />
  </>;
}
