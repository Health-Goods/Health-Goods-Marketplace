import Link from 'next/link';

const Navbar = ({
    toggle,
}: {
    toggle: () => void;
}): JSX.Element => {

    return (
        <>
            <div>
                <div>
                    <ul>
                        <li>
                            <Link href='/'>
                                <p>Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link href='/account'>
                                <p>Account</p>
                            </Link>
                        </li>
                    </ul>
                    <button type="button" className="inline-flex items-center md:hidden" onClick={toggle}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24">
                            <path fill="#fff"
                                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar;