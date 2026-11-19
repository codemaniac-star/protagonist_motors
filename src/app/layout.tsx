import type { Metadata } from 'next';
import './globals.css';
import { Shell } from '@/components/shell';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/space-mono/400.css';
import '@fontsource/space-mono/700.css';
import '@fontsource/caveat/400.css';
export const metadata:Metadata={title:"Protagonist Motors | A Collector's Garage Logbook",description:'Six analog icons. Zero guesswork. Explore our authenticated collector car archive.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" data-scroll-behavior="smooth"><body><Shell>{children}</Shell></body></html>}
