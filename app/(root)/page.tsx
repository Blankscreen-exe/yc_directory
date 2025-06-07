import Image from "next/image";

export default function Home() {
  return (
    <>
    <section className='hero_container relative'>
      <div className="hero_inner_container"></div>
      
      <div className="hero-content">
        <h1 className="heading ">Pitch Your Idea</h1>  
        <p className="sub-heading bottom-20 !max-w-3xl">
          Submit your ideas and get noticed
        </p>
      </div>
    </section>
    </>
  );
}
