import styles from "../styles/PizzaCard.module.css"
import Image from "next/image"

const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza.png" alt="" width="500" height="500" />
            <h1 className={styles.title}>Popcorn Veggie</h1>
            <span className={styles.price}>LKR 1100.00</span>
            <p className={styles.desc}>
                Delightful Popcorn Veggie made with carrots, mushrooms &
                potatoes accompanied by green chillies, onions & a layer of
                mozzarella & cream cheese, upon a sriracha & tomato sauce base.
            </p>
        </div>
    );
};

export default PizzaCard
