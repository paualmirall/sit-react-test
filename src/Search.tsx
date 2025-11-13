import {type FormEvent, useEffect, useState} from 'react';
import {fetchProducts} from './request.ts';
import ProductCard from './ProductCard.tsx';
import type {IProduct} from './types.ts';
import styles from './component.module.css';
import { useDebouncer } from './useDebouncer.ts';


function Search() {
    const [loading, setLoading] = useState(false);
    const [searchInput, setSearchInput] = useState("");
    const [products, setProducts] = useState<IProduct[] | undefined>(undefined);
    const [responseError, setResponseError] = useState("");
    const debouncedValue = useDebouncer(searchInput);

    useEffect(() => {
        if (debouncedValue) {
            (async() => {
                setLoading(true);
                const responseData = await fetchProducts(debouncedValue);
                if (responseData.products) {
                    setProducts(responseData.products);
                } else {
                    console.log(responseData);
                    setResponseError(responseData.message);
                }
                setLoading(false);
            })();
        }
    }, [debouncedValue])

    return (
        <>
            <div className={'searchBarContainer'}>
                <input
                    type={'search'}
                    placeholder={'Search your product...'}
                    value={searchInput}
                    onInput={(event: FormEvent<HTMLInputElement>) => setSearchInput(event.target.value)}
                />
            </div>

            {
                loading &&
                <div className={styles.loadContainer}>
                    Loading the products....
                </div>
            }

            {
                !loading && products &&
                <div className={styles.productCardContainer}>
                    <ProductCard productsInfo={products} />
                </div>
            }
            {
                responseError && !products &&
                <div className={styles.errorContainer}>
                    Something is wrong when loading the product information. Please contact with the web master or try it later...
                </div>
            }
        </>
    )
}

export default Search