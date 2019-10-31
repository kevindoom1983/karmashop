import React, { Component} from 'react';

class RelatedProducts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            relatedproduct : props.relatedproduct
        }
    }

    render() {
        const p = this.state.relatedproduct;
        
        return (
        <div className="col-lg-4 col-md-4 col-sm-6 mb-20">
            <div className="single-related-product d-flex">
                <a href="#"><img src={'img/' + p.img} alt=""/></a>
                <div className="desc">
                    <a href="#" className="title">Black lace Heels</a>
                    <div className="price">
                        <h6>$189.00</h6>
                        <h6 className="l-through">$210.00</h6>
                    </div>
                </div>
            </div>
        </div>
          
        );
    }

    

    
}


export default RelatedProducts;