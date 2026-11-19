import { AcquireDesk } from '@/components/acquire-desk';
import { cars } from '@/data/cars';

export default async function AcquirePage({ searchParams }: { searchParams: Promise<{ car?: string }> }) {
  const { car } = await searchParams;
  return <AcquireDesk initialCar={cars.some(item => item.slug === car) ? car : cars[0].slug} />;
}
