import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

/* sticky top-0 z-50 (Colocar depois na Div para deixar ela presa na tela)*/

type Props = {}
export default function Navbar({}: Props) {
    return (
        <div className='flex flex-col justify-center items-center py-3 gap-12 '>
            <Image src="./logo.svg" alt="Logo" width={100} height={100} className='invert' />
            <ul className='flex flex-col justify-between items-center space-y-8'>
                <li className='hover:scale-150 hover:transition-all hover:text-zinc-600 duration-500 ease-in-out'><Link href="/">Início</Link></li>
                <li className='hover:scale-150 hover:transition-all hover:text-zinc-600 duration-500 ease-in-out'><Link href="/oficiais">Oficiais</Link></li>
                <li className='hover:scale-150 hover:transition-all hover:text-zinc-600 duration-500 ease-in-out'><Link href="/manual">Manual de conduta</Link></li>
                <li className='hover:scale-150 hover:transition-all hover:text-zinc-600 duration-500 ease-in-out'><Link href="/edital">Edital</Link></li>
            </ul>
            <span className='w-full h-0.5 bg-white'></span>
        </div>
    )
}
