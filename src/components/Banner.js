
import React, { Component } from 'react';


class Banner extends Component {
  constructor(props) {
    super(props);
   
   
  }
  
  render() {
    return (
      
        
		<div className="container">
			<div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
				<div className="col-first">
					<h1>Shop Category page</h1>
					<nav className="d-flex align-items-center">
						<a href="index.html">Home<span className="lnr lnr-arrow-right"></span></a>
						<a href="#">Shop<span className="lnr lnr-arrow-right"></span></a>
						<a href="category.html">Fashon Category</a>
					</nav>
				</div>
			</div>
		</div>
   
    );
  }

}


export default Banner;

