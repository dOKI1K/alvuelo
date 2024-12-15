export default function Header() {
    return (
        <header className="container mx-auto w-full py-4 flex flex-row justify-between text-white">
            <h1 className="text-3xl font-bold">Logo</h1>
            <ul className="hidden md:flex flex-row gap-x-4">
                <li><a href="#" className="">Home</a></li>
                <li><a href="#" className="">About</a></li>
                <li><a href="#" className="">Services</a></li>
                <li><a href="#" className="">Contact</a></li>
            </ul>
        </header>
    )
}