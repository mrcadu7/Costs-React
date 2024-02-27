import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer () {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://github.com/mrcadu7">< FaGithub /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/mrcadu7/"><FaInstagram /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/mrcadu7/"><FaLinkedin /></a>
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Costs</span> &copy; 2024
            </p>
        </footer>
    )
}

export default Footer