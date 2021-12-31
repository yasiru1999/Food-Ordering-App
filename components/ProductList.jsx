import styles from "../styles/ProductList.module.css"
import PizzaCard from "./PizzaCard"

const ProductList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>THE BEST PIZZA IN SRILANKA</h1>
            <p className={styles.description}>
            Pizza Heaven, a subsidiary of Yum! Brands, is the srilankan largest pizza company and home of Pan Pizza. 
            Pizza Heaven began 10 years ago and today is an iconic global brand that delivers more pizza, than any other restaurant in 
            the srilanka.
            </p>
            <div className={styles.wrapper}>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
        </div>
    )
}

export default ProductList
