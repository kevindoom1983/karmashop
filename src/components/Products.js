import React, { Component} from 'react';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product : props.product
        }
    }

    render() {
        const p = this.state.product;
       
        
        return (
        
            <div className="col-lg-4 col-md-6">
                    <div className="single-product">
                        <img className="img-fluid" src={'img/product/' + p.img} alt=""/>
                        <div className="product-details">
                            <h6>addidas New Hammer sole
                               </h6>
                            <div className="price">
                                <h6>$150.00</h6>
                                <h6 className="l-through">$210.00</h6>
                            </div>
                       
                            <div className="prd-bottom">
                            
                                <a href="#"  className="social-info" >
                                    <span className="ti-bag" onClick={()=>this.props.onAddToCart(p)}></span>
                                    <p className="hover-text">add to bag</p>
                                </a>
                                <a href="" className="social-info">
                                    <span className="lnr lnr-heart"></span>
                                    <p className="hover-text">Wishlist</p>
                                </a>
                                <a href="" className="social-info">
                                    <span className="lnr lnr-sync"></span>
                                    <p className="hover-text">compare</p>
                                </a>
                                <a href="" className="social-info">
                                    <span className="lnr lnr-move"></span>
                                    <p className="hover-text">view more</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            
        );
    }

}


export default Products;