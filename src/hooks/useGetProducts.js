import {useState, useEffect} from 'react'
import getProducts from '../api/getProducts'
const useGetProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      fetchProducts()
    }, [])
    

    const escapeUrl = (url = '') => {
        return url.replace(' =>', ':')
    }

    const fetchProducts = async() => {
        try {
            setLoading(true)
            let data = await getProducts();
            let products = data.data.map((product => {
                let escapedURL = escapeUrl(product.img)
                return {...product, img: escapedURL}
            }))
            setProducts(products);
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    return [products, loading]
}

export default useGetProducts