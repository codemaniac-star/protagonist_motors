'use client';
import { useMemo, useState } from 'react';
import { cars } from '@/data/cars';
import { CarCard } from '@/components/car-card';
import { ScrapbookSketch } from '@/components/scrapbook-sketch';

export function Showroom(){
  const [category,setCategory]=useState('All 6 authenticated');
  const [sort,setSort]=useState('Catalog order');
  const visible=useMemo(()=>cars.filter(c=>category==='All 6 authenticated'||c.category===category).sort((a,b)=>sort==='Price: low to high'?a.usd-b.usd:sort==='0–100 km/h: fastest'?a.zero-b.zero:cars.indexOf(a)-cars.indexOf(b)),[category,sort]);
  return <>
    <div className="section-head" id="showroom"><div><span className="eyebrow">THE SHOWROOM SCRAPBOOK COLLAGE · <span className="circled-count"><ScrapbookSketch kind="circle"/>06</span></span><h2>Six machines. One remarkable collection.<ScrapbookSketch kind="underline"/></h2></div><div className="showroom-controls"><label>⌘ FILTER REGISTRY <select value={category} onChange={e=>setCategory(e.target.value)}><option>All 6 authenticated</option><option>JDM Legends</option><option>European Exotics</option></select></label><label>SORT <select value={sort} onChange={e=>setSort(e.target.value)}><option>Catalog order</option><option>Price: low to high</option><option>0–100 km/h: fastest</option></select></label></div></div>
    <div className="grid">{visible.map(car=><CarCard key={car.slug} car={car} i={cars.indexOf(car)}/>)}</div>
  </>;
}
