import { formatDate } from '@/lib/utils'
import { EyeIcon, Image } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const StartUpCard = ({post}: {post:StartupTypeCard}) => {
    const {_createdAt, author:{_id:authorId, name}, title, category, _id, views, description, image} = post;
  return (
    <li className='startup-card group'>
        <div className='flex-between'>
            <p className='startup_card_date'>
                {formatDate(_createdAt)}
            </p>
            <div className='flex gap-1.5'>
                <EyeIcon className='size-6 text-primary' />
                <span className='text-16-medium'>{views}</span>
            </div>
        </div>
        <div className='flex-between mt-5 gap-5'>
            <div className='flex-1'>
                <Link href={`/user/${authorId}`}>
                    <p className='text-16-medium line-clamp-1'>
                        {name}
                    </p>
                </Link>
                <Link href={`/startup/${_id}`}>
                    <p className='text-16-medium line-clamp-1'>
                        {title}
                    </p>
                </Link>
            </div>
            <Link href={`/user/${authorId}`}>
                {/* <Image src={"https://picsum.photos/200"} width={48} height={48} className='rounded-full' alt={'placeholder'} /> */}
                <img src={"https://picsum.photos/30"} width={48} height={48} className='rounded-full' alt={'placeholder'} />
            </Link>
        </div>
        <Link href={`/startup/${_id}`}>
            <p className='startup-card_desc'>
                {description}
            </p>
            <img src={image} width={48} height={48} className='startup-card_img' alt={'placeholder'} />
        </Link>
        <div className='flex-between gap-3 mt-5'>
            <Link href={`?query=${category.toLowerCase()}`}>
                <p className='text-16-medium'>
                    {category}
                </p>
            </Link>
            <Button className={'startup-card_btn'} asChild>
                <Link href={`/startup/${_id}`}>
                    Details
                </Link>
            </Button>
        </div>
    </li>
  )
}

export default StartUpCard