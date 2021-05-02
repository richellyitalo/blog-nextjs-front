import Link from 'next/link';

export default function MenuItems () {
  return (
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-900">Blog</a>
      <a className="mr-5 hover:text-gray-900">Sobre</a>
      <a className="mr-5 hover:text-gray-900">Contato</a>
    </nav>
  )
}