import Link from 'next/link';

const Navbar = () => {

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
                </div>
            </div>
        </>
    )
}

export default Navbar;