import {cn} from '@/app/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

type NavItemProps = {
    label: string,
    href: string
}

export const NavItem = ({ label, href }: NavItemProps) => {
    const pathname = usePathname(); //hook que le o caminho atual da url do navegador

    const isActive = pathname == href;  // se a url que mostra pathname é igual o deste link ex: se vc tiver na home e o link for da home true, e ao contrario tb

    return (
        <Link href={href} className= {cn(
            'text-gray-400 flex items-center gap-2 font-medium font-mono',
            isActive && 'text-gray-50',
        )}>
            <span className="text-emerald-400">#</span>
            {label}
        </Link>
    )
}