import Link from 'next/link';

const Doc = ({ children, title, next, prev }) => {
    return (
        <div>
            <h2 className="text-black font-bold text-3xl mb-3 border-b border-gray-300 pb-4">{ title }</h2>
            { children }
            <div className="flex justify-between w-full">
                {prev && <Link href={prev} className="mr-auto mt-5">
                    <div className="link-btn text-sm border rounded px-2 py-1 hover:text-blue-500 font-light text-gray-600 bg-gray-100 hover:bg-gray-200">
                    &lt; prev
                    </div>
                </Link>}
                {next && <Link href={next} className="ml-auto mt-5">
                    <div className="link-btn text-sm border rounded px-2 py-1 hover:text-blue-500 font-light text-gray-600 bg-gray-100 hover:bg-gray-200">
                    next &gt;
                    </div>
                </Link>}
            </div>
        </div>
    );
}

export default Doc;
