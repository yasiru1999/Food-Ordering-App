import styles from "../styles/Footer.module.css"
import Image from "next/image"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/bg.png" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        OH YES, WE DID.THE PIZZA HEAVEN, WELL BAKED SLICE OF PIZZA.
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        FIND OUR RESTAURANTS
                    </h1>
                    <p className={styles.text}>
                        No.30/7 Galle Road
                        <br />Matara

                    </p>
                    <p className={styles.text}>
                        No.5, Main Road,Pannipitiya
                        <br />Colombo
                    </p>
                    <p className={styles.text}>
                        No.36, Havelock Rd
                        <br />Galle
                    </p>
                    <p className={styles.text}>
                        40/1 Deveni Rajasinghe Mawatha
                        <br />Kandy
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        Working Hours
                    </h1>
                    <p className={styles.text}>
                        Monday to Friday
                        <br />9:00 - 22:00
                    </p>
                    <p className={styles.text}>
                        Saturday & Sunday
                        <br />10:00 - 24.00
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer
