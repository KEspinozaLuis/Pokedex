import styles from "./filter.module.css"

const Filter = ({active}) => {
    return (
       <section className={`${styles.containerFilter} ${active && styles.active}`}>
            <div className={styles.contentFilter}>
                <h3 className={styles.titleFilter}>Type</h3>
                <div className={styles.contentCheck}>
                    <input type="checkbox" />
                    <span>Grass</span>
                </div>
                <div className={styles.contentCheck}>
                    <input type="checkbox" />
                    <span>Fire</span>
                </div>
                <div className={styles.contentCheck}>
                    <input type="checkbox" />
                    <span>Water</span>
                </div>
                <div className={styles.contentCheck}>
                    <input type="checkbox" />
                    <span>Electric</span>
                </div>
                <div className={styles.contentCheck}>
                    <input type="checkbox" />
                    <span>Bug</span>
                </div>
                <div className={styles.contentCheck}>
                    <input type="checkbox" />
                    <span>Ice</span>
                </div>
                <div className={styles.contentCheck}>
                    <input type="checkbox" />
                    <span>Rock</span>
                </div>
                <div className={styles.contentCheck}>
                    <input type="checkbox" />
                    <span>Psychic</span>
                </div>
                <div className={styles.contentCheck}>
                    <input type="checkbox" />
                    <span>Dragon</span>
                </div>
                <div className={styles.contentCheck}>
                    <input type="checkbox" />
                    <span>Normal</span>
                </div>
                <div className={styles.contentCheck}>
                    <input type="checkbox" />
                    <span>Fairy</span>
                </div>
                <div className={styles.contentCheck}>
                    <input type="checkbox" />
                    <span>Ghost</span>
                </div>
                <div className={styles.contentCheck}>
                    <input type="checkbox" />
                    <span>Ground</span>
                </div>
                <div className={styles.contentCheck}>
                    <input type="checkbox" />
                    <span>Steel</span>
                </div>
                <div className={styles.contentCheck}>
                    <input type="checkbox" />
                    <span>Sinister</span>
                </div>
                <div className={styles.contentCheck}>
                    <input type="checkbox" />
                    <span>Fighting</span>
                </div>
                <div className={styles.contentCheck}>
                    <input type="checkbox" />
                    <span>Flying</span>
                </div>
                <div className={styles.contentCheck}>
                    <input type="checkbox" />
                    <span>Poison</span>
                </div>
            </div>
       </section>
    )
}

export default Filter;