import Image from 'next/image';
// import home from "@/components/home"
import Hero from '@/components/home';
import Navbar from '@/components/navbar';
import SocialLinks from '@/components/socialLink';
import RunningClasses from '@/components/classes';
export default function Home() {
  return (
    <div className=''>
      <Navbar />
      <div className='justify-center flex'>
        <Hero />
      </div>
      <div>
        <SocialLinks />
      </div>
      <div>
        <RunningClasses />
      </div>
    </div>
  );
}
