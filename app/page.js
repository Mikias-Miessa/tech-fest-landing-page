import Image from 'next/image';
// import home from "@/components/home"
import Hero from '@/components/home';
import Navbar from '@/components/navbar';
import SocialLinks from '@/components/socialLink';
import RunningClasses from '@/components/classes';
import Form from '@/components/form';
import Footer from '@/components/footer';
import Services from '@/components/services';
export default function Home() {
  return (
    <div className=''>
      <div className='justify-center flex'>
        <Navbar />
      </div>

      <div className='justify-center flex'>
        <Hero />
      </div>
      <div className='px-4 '>
        <Services />
      </div>
      <div className=' mt-20'>
        <Form />
      </div>
      <div className='justify-center flex mt-20 '>
        <SocialLinks />
      </div>
      {/* <div className='justify-center flex '>
        <RunningClasses />
      </div> */}

      <div className='mt-20'>
        <Footer />
      </div>
    </div>
  );
}
