"use client"
import Image from 'next/image'
import Icon from './plus_icon.svg'

export default function AddGroup({ setModalActive }) {

    return (
        <div className="rounded-xl border-2 border-gray-500 w-48 h-40 flex items-center justify-center"
            onClick={() => setModalActive(true)} role="button"
        >
            <Image
                src={Icon}
                alt='plus sign'
                width={50}
                quality={100}
            />
        </div>
    )
}
