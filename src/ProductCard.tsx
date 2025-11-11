import styles from './component.module.css';
import type {IProduct, IProductCardProps} from './types.ts';

function ProductCard(props: IProductCardProps) {
    const { productsInfo } = props
    return (
        <>
            {
                productsInfo && productsInfo.map((product: IProduct) =>
                    <div className={styles.productCard}>
                        <p>Status: { product.availabilityStatus} </p>
                        <p>Title: { product.title} </p>
                        <p>Brand: { product.brand ?? "Unknown" } </p>
                        <p>Desc: { product.description.slice(0, 30) + '...'} </p>
                        <p>Price: {product.price} </p>
                    </div>
                )
            }
        </>
    )
}

export default ProductCard
