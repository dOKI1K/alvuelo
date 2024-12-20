export default function Header() {
    return (
        <header className="container flex flex-row justify-between w-full px-4 py-4 mx-auto text-white lg:px-0">
            <h1 className="text-3xl font-bold">Logo</h1>
            <ul className="flex-row hidden md:flex gap-x-4">
                <li><a href="#" className="">Home</a></li>
                <li><a href="#" className="">About</a></li>
                <li><a href="#" className="">Services</a></li>
                <li><a href="#" className="">Contact</a></li>
            </ul>
        </header>
    )
}