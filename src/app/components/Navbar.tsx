import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-blue-800 p-4">
            <h1 className="text-3xl font-bold">CV</h1>
            <ul className="flex justify-end gap-20 text-1xl font-bold">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/client">Client</Link></li>
                <li><Link href="/api/auth/signout">Sign Out</Link></li>
            </ul>
        </nav>
    )
}

