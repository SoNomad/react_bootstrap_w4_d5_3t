import { NavBar } from "./Navigation"
import { Product } from "./Product.model"

export const Products = () => {
    const products = [
        {id: 1, title: 'Some Shit', price: "200$", pic: "https://picsum.photos/id/0/200/100"},
        {id: 2, title: 'Pretty Shit', price: "340$", pic: "https://picsum.photos/id/340/200/100"},
        {id: 3, title: 'O hi Mark', price: '2300$', pic: "https://picsum.photos/id/123/200/100"},
        {id: 4, title: 'Some Shit', price: "200$", pic: "https://picsum.photos/id/0/200/100"},
        {id: 5, title: 'Pretty Shit', price: "340$", pic: "https://picsum.photos/id/340/200/100"},
        {id: 6, title: 'O hi Mark', price: '2300$', pic: "https://picsum.photos/id/123/200/100"},
    ]

    return (
        <div className="container  pt-5">
            <div className="row">
                <div className="col-3">
                    <NavBar />
                </div>
                
                <div className="col">
                    <div className='row'>
                        
                        {/* {products.map((item) => {
                        return <Product title={item.title} price={item.price} pic={item.pic}/>
                })} */}
                        <Product title={products[0].title} price={products[0].price} pic={products[0].pic}/>
                        <Product title={products[1].title} price={products[1].price} pic={products[1].pic}/>
                        <Product title={products[2].title} price={products[2].price} pic={products[2].pic}/>
                        <Product title={products[3].title} price={products[3].price} pic={products[3].pic}/>
                        <Product title={products[4].title} price={products[4].price} pic={products[4].pic}/>
                        <Product title={products[5].title} price={products[5].price} pic={products[5].pic}/>                                                
                    </div>  
                </div>
            </div>
        </div>
    )
}
