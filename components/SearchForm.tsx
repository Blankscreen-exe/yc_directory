'use client';
import SearchFormReset from './SearchFormReset';
import { Search } from 'lucide-react';
import { Button } from './ui/button';

const SearchForm = ({query}: {query?:string}) => {
    
  return (
    <div>
        <form action={"/"} scroll='false' className='search-form'>
            <input name='query' defaultValue={query} className='search-input' placeholder='Search Startups'/>
            <div className='flex gap-2'>
                {query && <SearchFormReset/>}
                <Button type='submit' className='search-btn text-white'>
                    <Search className='size-5'/>
                </Button>
            </div>
        </form>
    </div>
  )
}

export default SearchForm