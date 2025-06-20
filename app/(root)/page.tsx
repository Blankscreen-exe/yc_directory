import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartUpCard from "@/components/StartUpCard";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/lib/queries";

export default async function Home({searchParams}: {
  searchParams: Promise<{query?: string}>
}) {
  const query = (await searchParams).query;
  const posts = await client.fetch(STARTUPS_QUERY)
  

  return (
    <>
      <section className='hero_container relative'>
        <div className="hero_inner_container"></div>
        
        <div className="hero-content">
          <h1 className="heading ">Pitch Your Idea</h1>  
          <p className="sub-heading bottom-20 !max-w-3xl">
            Submit your ideas and get noticed
          </p>
          <SearchForm query={query}/>
        </div>
      </section>

      <section className="section_container">
        <p className='text-30-semibold'>
          {query ? `Search results for: "${query}"` : 'All Startups'}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map( (post:any, index:Number) => (
              <StartUpCard key={post?._id} post={post}/> 
            ))
          ) : (
            <p className="no-results text-30-light">No Startups Found</p>
          )}
        </ul>
      </section>
      
    </>
  );
}
