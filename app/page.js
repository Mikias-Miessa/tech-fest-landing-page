import Image from 'next/image';
// import home from "@/components/home"
import Hero from '@/components/home';
import Form from '@/components/form';
export default function Home() {
  return (
    <main className=''>
      <Hero />
      <Form />
    </main>
  );
}
