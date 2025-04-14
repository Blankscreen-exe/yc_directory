import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { auth, signOut, signIn } from '@/auth'
import { redirect } from 'next/dist/server/api-utils'

const NavBar = async () => {
    const session = await auth()

  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans flex flex-row justify-between'>
        <nav className='flex justify-between items-center'>
            <Link href={'/'}>
                <Image src='/logo.png' alt='logo' width={144} height={30}/>
            </Link>
        </nav>
        <div className='flex items-center gap-5 text-black'>
            {session && session?.user 
                ? (
                    <>
                        <Link href={'/starup/create'}>
                            <span>Create</span>
                        </Link>
                        <form className='hover:text-slate-600 hover:bg-red-200 p-1 rounded-md' action={async () => {
                                'use server';
                                await signOut({redirectTo: '/'});
                                }}>

                            <button type='submit'>
                                Sign Out
                            </button>
                        </form>
                        <Link href={`/user/${session?.id}`}>
                            <span>{session?.user?.name}</span>
                        </Link>
                    </>
                ) : (
                    <>
                        <form action={async () => {
                            "use server";
                            await signIn('github');
                            }}>
                            <button type='submit' className='text-black cursor:pointer bg-red-300'>Login</button>
                        </form>
                    </>
                )
            }
        </div>
    </header>
  )
}

export default NavBar