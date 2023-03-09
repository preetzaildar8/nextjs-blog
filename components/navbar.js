import Link from "next/link"
import styles from './navbar.module.css'

export default function Navbar() {
    return(
        <nav>
            <ul className={styles.navbar}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blogs">Blogs</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="contact">Contact</Link></li>
            </ul>
        </nav>
    )
}