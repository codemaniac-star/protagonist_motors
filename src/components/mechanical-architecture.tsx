import type { Car } from '@/data/cars';

export function MechanicalArchitecture({ car }: { car: Car }) {
  const notes = [
    ['01 // POWERTRAIN', car.engine],
    ['02 // TRANSMISSION', car.transmission],
    ['03 // PERFORMANCE', `${car.power} · ${car.zero} sec 0–100 km/h · ${car.top} km/h`],
    ['04 // CHASSIS & MASS', `${car.drive} · ${car.weight.toLocaleString()} kg`],
  ];

  return <section className="panel blueprint">
    <div className="architecture-heading">
      <div><span className="eyebrow">TECHNICAL MONOGRAPH // CHASSIS BLUEPRINT</span><h2>Annotated Mechanical Architecture</h2></div>
      <span className="architecture-spec">SPEC: {car.make.toUpperCase()} {car.model.toUpperCase()}</span>
    </div>
    <figure className="architecture-plate">
      <img src={car.architecture} alt={`Archival mechanical architecture drawing for the ${car.make} ${car.model}`} loading="lazy" />
      <figcaption><span>PLATE REF. {car.slug.toUpperCase()}</span><span>CURATORIAL ARCHIVE · CHASSIS FILE VERIFIED</span></figcaption>
    </figure>
    <div className="architecture-notes">{notes.map(([label, value]) => <article key={label}><b>{label}</b><p>{value}</p></article>)}</div>
  </section>;
}
