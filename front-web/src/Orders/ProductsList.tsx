import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    // variável será uma lista
    products: Product[];
}


function ProductsList({products}:Props){
    return (
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product=>(
                    // o react precisa de uma chave/identificador único para o componente
                    <ProductCard key={product.id} product={product}/>
                ))}
            </div>
        </div>
    )
}

export default ProductsList;