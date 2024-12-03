import React from 'react'
import styles from './Header.module.css';
const Header = () => {
  return (
    <div className={styles.OuterDiv}>
      <div className={styles.search}>
        <input type="text" placeholder="Search..." className={styles.searchinp}/>
        <button className={styles.searchbtn}>Go</button>
      </div>
      <div className={styles.innerdiv}>
      <div className={styles.ul}>
      <ul>
        <li className={styles.li}><a href="#.." className={styles.a}>Home</a></li>
        <li className={styles.li}><a href="#.." className={styles.a}>Careers</a></li>
        <li className={styles.li}><a href="#.." className={styles.a}>Services</a></li>
        <li className={styles.li}><a href="#.." className={styles.a}>Contact</a></li>
        <li className={styles.li}><a href="#.." className={styles.a}>About Us</a></li>
        <li className={styles.li}><a href="#.." className={styles.a}>FAQ</a></li>
      </ul>
    </div>
      </div>
    </div>
  )
}

export default Header