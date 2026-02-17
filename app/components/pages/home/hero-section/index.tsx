import Image from 'next/image';
import { TechBadge } from "@/app/components/tech-badge";
import { Button } from '@/app/components/button';
import { HiArrowNarrowRight } from 'react-icons/hi'
import { TbBrandGithub, TbBrandInstagram, TbBrandLinkedin, TbMail } from 'react-icons/tb'
import Link from 'next/link';

const MOCK_CONTACT = [
    {
        url: 'https://github.com.br',
        icon: <TbBrandGithub />
    },
    {
        url: 'Linkedin.com',
        icon: <TbBrandLinkedin />
    },
    {
        url: 'Instagram.com',
        icon: <TbBrandInstagram />
    },
    {
        url: 'Email.com.br',
        icon: <TbMail /> 
    }
]

export const HeroSection = () => {
    return (
        <section className="w-full lg:h-[755px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col justify-end pb-10 sm:pb-32 py-32 lg:pb-[110px]">
            <div className="container flex items-start justify-between flex-col-reverse lg:flex-row">
                <div className='w-full lg:max-w-[530px]'>
                    <p className='font-mono text-emerald-400 pt-2'>Olá, Meu nome é</p>
                    <h2 className='text-4xl font-medium mt-2'>Lucas Eduardo</h2>

                       <p className='text-gray-400 my-6 text-sm'>Olá, meu nome é Lucas Eduardo e sou um desenvolvedor full-stack apaixonado por técnologia, ...  </p> 
                       
                       <div className='flex flex-wrap gap-x-2 gap-y-3 lg:max-w-[340px]'>
                       {Array.from({ length: 8 }).map((_, index) => (
                        <TechBadge name="Next.Js" />
                       ))}
                       </div>

                       <div className='mt-6  lg:mt-10l flex sm:items-center sm:gap-5 flex-col sm:flex-row items-start' >
                        <Button className='w-max shadow-button'>
                        Entre em Contato
                       <HiArrowNarrowRight size={18}/>
                        </Button>

                        <div className=' text-2xl text-gray-600 flex items-center justify-center gap-3 mt-4'>
                       {MOCK_CONTACT.map((contact, index) => (
                        <a 
                        href={contact.url} 
                        key={`contact-${index}`}
                        target='_blank'
                        className='hover:text-gray-100 transition-colors'
                        >
                            {contact.icon}
                        </a>
                       ))}
                        </div>
                       </div>
                </div>

                <Image 
                width={420}
                height={404}
                src="/images/profile-pic.png"
                alt='Foto de Perfil Lucas'
                className='w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 shadow-2xl rounded-xl object-cover'
                />
            </div>
        </section>
    )
}