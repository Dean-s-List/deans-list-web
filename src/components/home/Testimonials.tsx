import Link from 'next/link';

const Testimonials = () => {
  return (
    <div className="flex w-full flex-col items-center bg-[url('/images/testimonials/bg.png')] bg-cover pt-40" id="testimonials">
      <div className="text-center font-tt text-7xl">
      Become better with <br /> our help
      </div>
      <div className="text-left font-space text-xl mt-10 mw50">
      The Dean&apos;s List feedback platform provides a reliable and trustworthy space for you to receive valuable insights and suggestions from a diverse community of experts and users. 
      Whether you are a developer, entrepreneur, or simply looking to improve your project, the Dean&apos;s List provides the feedback you need to succeed.<br/><br/>
      <h3><Link href="/services">Get started today</Link> and bring your project to the next level with the Dean&apos;s List!</h3>
      </div>

      <div className="vwm lh-spc mt-10 mb-20">
        <iframe className="w-full aspect-[16/9]" src="https://www.youtube.com/embed/XDTsq7xI-SU"></iframe>
      </div>
    </div>
  );
};

export default Testimonials;
