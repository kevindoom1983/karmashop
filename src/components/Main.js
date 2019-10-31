import React, { Component } from 'react';
import Service from '../service';
import Categories from './Categories';
import Brands from './Brands';
import Colors from './Colors';
import PriceFilter from './PriceFilter';
import FilterStart from './FilterStart';
import Products from './Products';
import FilterEnd from './FilterEnd';
import RelatedProducts from './RelatedProducts';




class Main extends Component {
    
    constructor(props) {
        super(props);
        this.service = new Service();
        this.state = {
            categories: this.service.getCategories(),
            brands: this.service.getBrands(),
            colors: this.service.getColors(),
            products: this.service.getProducts(),
            relatedproducts: this.service.getRelatedProducts(),
            
        }
       
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-5">
                                <div className="sidebar-categories">
                                    <div className="head">Browse Categories</div>
                                        <Categories categories={this.state.categories}/>   
                                </div>
                                <div className="sidebar-filter mt-50">
                                    <div className="top-filter-head">Product Filters</div>
                                    <div className="common-filter">
                                        <Brands brands={this.state.brands}/>
                                    </div>
                                    <div className="common-filter">
                                        <Colors colors={this.state.colors}/>
                                    </div>
                                    <div className="common-filter">
                                        <PriceFilter/>
                                    </div>
                                </div>  
                            </div>
                            <div className="col-xl-9 col-lg-8 col-md-7">
                                <FilterStart/>
                                <div>
                                <section className="lattest-product-area pb-40 category-list">
                                    <div className="row">
                                    {this.state.products.map(p =>
                                        <Products key={p.id} product={p}
                                        onAddToCart={p => this.props.onAddToCart(p)}/>)}
                                    </div>
                                </section>
                                <FilterEnd/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <section className="related-product-area section_gap">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 text-center">
                                    <div className="section-title">
                                        <h1>Deals of the Week</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                            magna aliqua.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-9">
                                        <div className="row">
                                        {this.state.relatedproducts.map(p =>
                                            <RelatedProducts key={p.id} relatedproduct={p}/>)}  
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="ctg-right">
                                            <a href="#" target="_blank">
                                                <img className="img-fluid d-block mx-auto" src="img/category/c5.jpg" alt=""/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>      
        );
    }

   
}



export default Main;