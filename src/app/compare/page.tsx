import { CompareArena } from '@/components/compare-arena';
import { cars } from '@/data/cars';

export default async function ComparePage({ searchParams }: { searchParams: Promise<{ a?: string }> }) {
  const { a } = await searchParams;
  return <CompareArena initialA={cars.some(car => car.slug === a) ? a : cars[0].slug} />;
}
