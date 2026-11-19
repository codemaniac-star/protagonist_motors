'use client';

import { useMemo, useState } from 'react';
import { cars } from '@/data/cars';
import { ScrapbookSketch } from '@/components/scrapbook-sketch';

type Track = { name:string; unit:string; av:number; bv:number; lower?:boolean };
export function CompareArena({ initialA }: { initialA?:string }) {
  const firstCar=cars.some(car=>car.slug===initialA)?initialA!:cars[0].slug;
  const secondCar=firstCar===cars[1].slug?cars[0].slug:cars[1].slug;
  const [a,setA]=useState(firstCar);
  const [b,setB]=useState(secondCar);
  const carA=cars.find(car=>car.slug===a)??cars[0];
  const carB=cars.find(car=>car.slug===b)??cars[1];
  const chooseA=(next:string)=>{if(next===b)setB(a);setA(next);};
  const chooseB=(next:string)=>{if(next===a)setA(b);setB(next);};
  const tracks=useMemo<Track[]>(()=>[
    {name:'ACCELERATION 0–100 KM/H',unit:'SECONDS · LOWER WINS',av:carA.zero,bv:carB.zero,lower:true},
    {name:'TOP SPEED TERMINAL RUN',unit:'KM/H',av:carA.top,bv:carB.top},
    {name:'POWER-TO-WEIGHT INDEX',unit:'HP / TONNE',av:Math.round(parseFloat(carA.power.match(/[\d.]+/)?.[0]||'0')/carA.weight*1000),bv:Math.round(parseFloat(carB.power.match(/[\d.]+/)?.[0]||'0')/carB.weight*1000)},
    {name:'FUEL EFFICIENCY',unit:'L/100KM · LOWER WINS',av:carA.economy,bv:carB.economy,lower:true},
  ],[carA,carB]);
  return <div className="page"><section className="panel arena-panel"><span className="eyebrow">CHASSIS DYNO ARENA · CALIBRATED HEAD-TO-HEAD RUN</span><h1>The Scribble Race<br/>Comparison Arena</h1>
    <div className="duel"><div className="duel-car"><select aria-label="Choose car A" value={a} onChange={event=>chooseA(event.target.value)}>{cars.map(car=><option key={car.slug} value={car.slug}>{car.name}</option>)}</select><img src={carA.image} alt={carA.name}/><h2>{carA.name}</h2><span>{carA.power}</span></div><b className="vs">VS</b><div className="duel-car"><select aria-label="Choose car B" value={b} onChange={event=>chooseB(event.target.value)}>{cars.map(car=><option key={car.slug} value={car.slug}>{car.name}</option>)}</select><img src={carB.image} alt={carB.name}/><h2>{carB.name}</h2><span>{carB.power}</span></div></div>
    <div className="trackhead">TELEMETRY SCRIBBLE RACE TRACKS <span>FINISH LINE ▦</span></div>
    {tracks.map(track=>{const scoreA=track.lower?1/track.av:track.av;const scoreB=track.lower?1/track.bv:track.bv;const peak=Math.max(scoreA,scoreB);const aWins=scoreA>scoreB;const tied=scoreA===scoreB;return <div className="track" key={track.name}><div className="tracktitle">{track.name}<span>{track.unit}</span><ScrapbookSketch kind="scribble"/></div><div className="race-row"><div className="bar redbar" style={{width:`${Math.max(14,scoreA/peak*94)}%`}}>{carA.make} · {track.av}{track.name.startsWith('ACCELERATION')?' s':''}{aWins?' · WINNER':''}</div></div><div className="race-row"><div className="bar charcoalbar" style={{width:`${Math.max(14,scoreB/peak*94)}%`}}>{carB.make} · {track.bv}{track.name.startsWith('ACCELERATION')?' s':''}{!aWins&&!tied?' · WINNER':''}</div></div>{tied&&<small className="race-tie">EVEN ON THIS MEASURE</small>}</div>})}
  </section><div className="proscons">{[carA,carB].map((car,index)=><section className="panel" key={car.slug}><h3>{index?'CAR B':'CAR A'} LEDGER PROVENANCE · {car.name}</h3><b>VERIFIED ATTRIBUTES (PROS)</b>{car.pros.map(pro=><p key={pro}>✓ {pro}</p>)}<b className="redtext">FIELD DRAWBACKS (CONS)</b>{car.cons.map(con=><p key={con}>× {con}</p>)}</section>)}</div><section className="archive-note"><b>DEALER’S BOTTOM LINE & REGISTRY FINDING</b><p>“{carA.name} brings {carA.power} and a {carA.zero}s sprint. {carB.name} answers with {carB.top} km/h terminal speed. The right choice depends on the story you want to write.”</p><a className="button dark" href={`/acquire?car=${carA.slug}`}>BOOK COMPARISON TEST</a></section></div>;
}
