import React from 'react';

const Brands = (props) => {
    return (
       <div>
         <div className="head">Brands</div>
						<form action="#">
							<ul>
              {props.brands.map(b =><li key={b.id} className="filter-list"><input className="pixel-radio" type="radio" id="apple" name="brand"/><label for="apple">{b.name}<span></span>{b.number}</label></li>)}
							</ul>
						</form>
       </div>
    );
}

export default Brands;