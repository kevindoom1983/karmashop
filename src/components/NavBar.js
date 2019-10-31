import React from 'react'

const NavBar = (props) => {
    return (
<div>

    <ul className="nav navbar-nav menu_nav ml-auto">
        <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>
        
        <li className="nav-item submenu dropdown active">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
            aria-expanded="false">Shop</a>
            <ul className="dropdown-menu">
                <li className="nav-item active"><a className="nav-link" href="category.html">Shop Category</a></li>
                <li className="nav-item"><a className="nav-link" href="single-product.html">Product Details</a></li>
                <li className="nav-item"><a className="nav-link" href="checkout.html">Product Checkout</a></li>
                <li className="nav-item"><a className="nav-link" href="cart.html">Shopping Cart</a></li>
                <li className="nav-item"><a className="nav-link" href="confirmation.html">Confirmation</a></li>
            </ul>
        </li>
        <li className="nav-item submenu dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
            aria-expanded="false">Blog</a>
            <ul className="dropdown-menu">
                <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                <li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
            </ul>
        </li>
        <li className="nav-item submenu dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
            aria-expanded="false">Pages</a>
            <ul className="dropdown-menu">
                <li className="nav-item"><a className="nav-link" href="login.html">Login</a></li>
                <li className="nav-item"><a className="nav-link" href="tracking.html">Tracking</a></li>
                <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
            </ul>
        </li>
        <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
    </ul>
        
</div>


);
}

export default NavBar; 