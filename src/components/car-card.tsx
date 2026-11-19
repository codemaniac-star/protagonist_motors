import Link from 'next/link';
import { Car } from '@/data/cars';
import { ScrapbookSketch } from '@/components/scrapbook-sketch';

const mount = ['tape-pair', 'pushpin', 'torn-frame', 'paperclip', 'archive-stamp', 'roadster-pin'];
const labels = ['DEALER PICK', 'VERIFIED 2JZ', 'ARCHIVAL GRADE', 'ATTESA-ETS VERIFIED', 'GRADE 1 / ARCHIVAL', 'ANALOG PURIST'];

function ActionMark({ type }: { type: 'inspect' | 'compare' | 'reserve' }) {
  if (type === 'inspect') return <svg className="action-icon" viewBox="0 0 28 24" aria-hidden="true"><path d="M3 15h14l3-6H8L5 12H3zM6 15v3m11-3v3"/><circle cx="8" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><circle className="lens" cx="21" cy="7" r="4"/><path d="m24 10 2 2"/></svg>;
  if (type === 'compare') return <svg className="action-icon flag-icon" viewBox="0 0 28 24" aria-hidden="true"><path d="M5 21V4m18 17V4M5 5h8l-2 3 2 3H5m18-6h-8l2 3-2 3h8"/><path d="M6 16h16" strokeDasharray="2 2"/></svg>;
  return <svg className="action-icon wheel-icon" viewBox="0 0 28 24" aria-hidden="true"><circle cx="13" cy="12" r="9"/><circle cx="13" cy="12" r="2"/><path d="m13 10 4-5m-6 9-4 4m8-4 4 4M3 12h6m8 0h8"/></svg>;
}

export function CarCard({ car, i }: { car: Car; i: number }) {
  return <article className={`car-card mount-${mount[i]}`}>
    <div className="mount-detail" aria-hidden="true"><span/><span/></div>
    <div className="card-top"><span className={`stamp stamp-${i}`}>{labels[i]}</span><span className="plate-index"><ScrapbookSketch kind="circle"/>NO. {String(i + 1).padStart(2, '0')} / 06</span></div>
    <Link className="photo" href={`/dossier/${car.slug}`} aria-label={`Inspect ${car.name}`}><img src={car.image} alt={car.name}/><span>PLATE {String(i + 1).padStart(2, '0')}</span></Link>
    <h2><Link href={`/dossier/${car.slug}`}>{car.name}</Link></h2>
    <p className="subtitle">{car.engine.toUpperCase()}</p>
    <div className="car-stats">
      <div><small>POWER</small><b>{car.power}</b></div><div><small>0–100 KM/H</small><b>{car.zero} sec</b></div><div><small>TOP SPEED</small><b>{car.top} km/h</b></div>
    </div>
    <div className="valuation"><small>ARCHIVAL VALUATION</small><b>KES {car.kes}<span>${car.usd.toLocaleString()} USD</span></b></div>
    <div className="actions"><Link className="action-inspect" href={`/dossier/${car.slug}`}><ActionMark type="inspect"/><span>INSPECT</span></Link><Link className="action-compare" href={`/compare?a=${car.slug}`}><ActionMark type="compare"/><span>COMPARE</span></Link><Link className="action-primary" href={`/acquire?car=${car.slug}`}><ActionMark type="reserve"/><span>RESERVE / BOOK</span></Link></div>
  </article>;
}
