import styles from "../../styles/Order.module.css"
import Image from "next/image"

const Order = () => {

    const status = 0;

    const statusClass = (index) => {
        if (index - status < 1)
            return styles.done;
        if (index - status === 1)
            return styles.inProgress;
        if (index - status > 1)
            return styles.undone;
    }

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                    <table className={styles.table}>
                        <tr className={styles.trTitle}>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <span className={styles.id}>53156161531</span>
                            </td>
                            <td>
                                <span className={styles.name}>
                                    Yasiru Navoda
                                </span>
                            </td>
                            <td>
                                <span className={styles.address}>No5 Matara</span>
                            </td>
                            <td>
                                <span className={styles.total}>$79.80</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <Image slot="" src="/img/paid.png" width={30} height={30} />
                        <span>Payment</span>
                        <div className={styles.checkedIcon}>
                            <Image slot="" className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} />
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image slot="" src="/img/bake.png" width={30} height={30} />
                        <span>Preparing</span>
                        <div className={styles.checkedIcon}>
                            <Image slot="" className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} />
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image slot="" src="/img/bike.png" width={30} height={30} />
                        <span>On the way</span>
                        <div className={styles.checkedIcon}>
                            <Image slot="" className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} />
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image slot="" src="/img/delivered.png" width={30} height={30} />
                        <span>Delivered</span>
                        <div className={styles.checkedIcon}>
                            <Image slot="" className={styles.checkedIcon} src="/img/checked.png" width={20} height={20} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Discount</b>$0.00
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totalTextTitle}>Total:</b>$79.60
                    </div>
                    <button disabled className={styles.button}>PAID</button>
                </div>
            </div>
        </div>
    )
}

export default Order
