import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { auth, signOut, signIn } from '@/auth'

const NavBar = async () => {
    const session = await auth()

  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
        <nav className='flex justify-between items-center'>
            <Link href={'/'}>
                <Image src='/logo.png' alt='logo' width={144} height={30}/>
            </Link>
        </nav>
        <div className='flex items-center gap-5'>
            {session && session?.user 
                ? (
                    <>
                        <Link href={'/starup/create'}>
                            <span>Create</span>
                        </Link>
                        <button onClick={signOut}>
                            Sign Out
                        </button>
                        <Link href={`/user/${session?.id}`}>
                            <span>{session?.user?.name}</span>
                        </Link>
                    </>
                ) : (
                    <>
                        <button onClick={signIn('github')}>
                            <span>Login</span>
                        </button>
                    </>
                )
            }
        </div>
    </header>
  )
}

export default NavBar