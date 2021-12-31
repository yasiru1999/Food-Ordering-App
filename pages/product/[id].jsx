import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
    const [size, setSize] = useState(0);

    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "Name",
        price: [1100, 1500, 1800],
        desc: "Delightful Popcorn Veggie made with carrots, mushrooms & potatoes accompanied by green chillies, onions & a layer of mozzarella & cream cheese, upon a sriracha & tomato sauce base."
    };


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} layout="fill" alt="" objectFit="contain" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.price}>LKR {pizza.price[size]}.00</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h1 className={styles.choose}>Choose the size</h1>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => setSize(0)}>
                        <Image alt="" src="/img/size.png" layout="fill" />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(1)}>
                        <Image alt="" src="/img/size.png" layout="fill" />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() => setSize(2)}>
                        <Image alt="" src="/img/size.png" layout="fill" />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>Choose additional ingrediants</h3>
                <div className={styles.ingredients}>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="double"
                            name="double"
                            className={styles.checkbox}
                        />
                        <labele htmlFor="double">Double Ingredients</labele>
                    </div>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="cheese"
                            name="cheese"
                            className={styles.checkbox}
                        />
                        <labele htmlFor="cheese">Extra Cheese</labele>
                    </div>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="spicy"
                            name="spicy"
                            className={styles.checkbox}
                        />
                        <labele htmlFor="spicy">Spicy Sauce</labele>
                    </div>
                    <div className={styles.option}>
                        <input
                            type="checkbox"
                            id="garlic"
                            name="garlic"
                            className={styles.checkbox}
                        />
                        <labele htmlFor="garlic">Garlic Sauce</labele>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity} />
                    <button className={styles.button}>Add to Card</button>
                </div>
            </div>
        </div>
    )
}

export default Product
