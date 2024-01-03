import styles from "./Category.module.css"


function Category({ category, children }) {
    return(
        <section className={styles.category}>
            <h2>{category}</h2>
            <section>
                { children }
            </section>
        </section>
    );
}

export default Category;