import Link from "next/link"
export default function Navbar() {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
        <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
            <h2>Title</h2>
            <div>
                <ul className="hidden md:flex">
                    <Link href="/">
                        <li className="m-2 uppercase">Home</li>
                    </Link>
                    <Link href="/about">
                        <li className="m-2 uppercase">About</li>
                    </Link>
                    <Link href="/skills">
                        <li className="m-2 uppercase">Skills</li>
                    </Link>
                    <Link href="/projects">
                        <li className="m-2 uppercase">My Work</li>
                    </Link>
                    <Link href="/contact">
                        <li className="m-2 uppercase">Contact</li>
                    </Link>
                </ul>
            </div>
        </div>
    </div>
  )
}
