

import { useEffect, useState} from 'react';
import { get } from '../services/ApiCalls';
import { Container, Row } from 'react-bootstrap';
import ProductCard from './ProductCard';

const Products = () => {
    // useEffect(()=>{ Arrow funtion},[ Array])
    const [products,setProducts] = useState([])
    useEffect(() => {
        const resp = get('products')
        resp.then((result) => setProducts(result?.data))

    },[])
    // useEffect(()=>{
    //     const resp = get('products')
    //     resp.then((result)=>setProducts(result?.data))
        // setProducts(get('products'))
        
        // get('products');
        

    
return (
<Container>
    <Row>
        {console.log(products?.data)}

    <h2>Product</h2>
  
    
    {products?.length > 0 ? ( 
      <>       {products?.map((product,index) => (
         <ProductCard key={product.id} productDetail={product} />
        ))}
      </>)
        :(
        <p> Loading or there is an error...</p>)}
    </Row>
    </Container>
)
}
export default Products;