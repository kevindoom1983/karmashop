import React, { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';
import Cart from './classes/cart';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: new Cart(0),

    }  

  }
  
  render() {
    return (
      
        <div>
            <Header cart={this.state.cart}/>
            <section className="banner-area organic-breadcrumb">
              <Banner/>
            </section>
            <Main onAddToCart={p => this.onAddToCart(p)}/>
            <div>
            <Footer/>
            </div>  
        </div>
   
    );
  }


  onAddToCart(p) {
    const newState = {
      cart: Object.assign({}, this.state.cart)
    }
    newState.cart.count++;
    this.setState(newState);
   
  }

}


export default App;

