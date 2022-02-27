import Link from 'next/link'
import '../node_modules/tachyons/css/tachyons.css'

const Navbar = () => {
    return (
        <nav className='flex flex-column flex-row-ns items-center bg-black white'>
            <div className='mr-auto ml4-ns ml-auto'>
            <Link href="/"><h1 className="pointer">Blog Posts</h1></Link>
            </div>
            <Link href="/"><a className='pa4-ns pa1 dim f4'>Home</a></Link>
            <Link href="/about"><a className='pa4-ns pa1 dim f4'>About</a></Link>
            <Link href="/posts"><a className='pa4-ns pa1 dim f4'>Blog Posts</a></Link>
        </nav>
    );
}

export default Navbar;