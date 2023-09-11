import Link from "next/link";

const Nav = () => {
    return (
        <nav className="fixed w-full">
            <div className="body-margin flex justify-between items-center h-16 border-b border-gray-700">
                <div className="text-lg font-bold">
                    <Link href="/"><h1>Krycom</h1></Link>
                </div>

                <div>
                    {/*  */}
                </div>
            </div>
        </nav>
    )
}

export default Nav;
