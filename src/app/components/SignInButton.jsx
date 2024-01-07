import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { Menu } from '@headlessui/react';
import Image from 'next/image'
import Link from 'next/link'
import {
    Cog6ToothIcon,
    ArrowRightEndOnRectangleIcon
} from '@heroicons/react/24/solid'
export default function SignInButton() {

    const { data: session } = useSession();

    console.log(session)
    return (
        <div className='col-start-11 col-end-13 px-5 py-3 text-lg text-center'>
            {session ? (
                // <div>Logged in as: {session?.user.name}, {session?.user?.id}</div>
                <Menu as="div">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center rounded-mg">
                            Options
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>

                        </Menu.Button>
                        <Menu.Items className='bg-react dark:text-react absolute right-0 mt-1 flex w-1/6 origin-top-right flex-col rounded-xl py-6 text-white shadow-lg focus:outline-none dark:bg-white'>
                            <div className='mb-4 flex gap-4 px-6 text-sm'>
                                {session?.user?.image ? (
                                    <div className='relative h-10 w-10'>
                                        <Image
                                            src={session.user.image}
                                            alt={session.user.name}
                                            className='inline-block rounded-full'
                                            fill
                                        />
                                    </div>
                                ) : (
                                    <span className='inline-block h-8 w-8 overflow-hidden rounded-full bg-stone-100'>
                                        <svg
                                            className='h-full w-full text-stone-300'
                                            fill='currentColor'
                                            viewBox='0 0 24 24'
                                        >
                                            <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
                                        </svg>
                                    </span>
                                )}
                                <div>
                                    <p className='font-medium text-stone-600'>
                                        {session.user.name + "(" + session.user.id + ")" || 'User name'}
                                    </p>
                                    <p className='text-stone-400'>{session.user.email}</p>
                                </div>
                            </div>
                            <Menu.Item>
                                {({ active }) => (
                                    <Link
                                        href='/profile'
                                        className=
                                            'inline-flex items-center pl-5 text-sm text-primary gap-6 py-2'
                                    >
                                        <Cog6ToothIcon className='h-5 w-5 text-stone-400' />
                                        <span>Manage Account</span>
                                    </Link>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className=
                                            'inline-flex items-center pl-5 gap-6 self-start text-sm py-2'
                                        
                                        onClick={() => signOut()}
                                    >
                                        <ArrowRightEndOnRectangleIcon className='h-5 w-5 text-stone-400' />
                                        <span>Sign Out</span>
                                    </button>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </div>
                </Menu>
            )
                :
                <button onClick={signIn} className='px-5 py-3 text-lg text-center mx-auto my-auto'>Sign in</button>
            }
        </div>
    )
}
