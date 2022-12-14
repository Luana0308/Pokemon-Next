import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return(
        <nav>
            <div>
                <Image src="/images/pokeball.png" width="30px" height="30px" alt="PokeNext" />
                <h1>PokeNext</h1>
            </div>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}