import React from 'react';

const Categories = (props) => {
    return (
    <div>
       
        <ul className="main-categories">

            <li className="main-nav-list"><a data-toggle="collapse" href="#fruitsVegetable" aria-expanded="false" aria-controls="fruitsVegetable"><span
                     className="lnr lnr-arrow-right"></span>Fruits and Vegetables<span className="number">(53)</span></a>
                <ul className="collapse" id="fruitsVegetable" data-toggle="collapse" aria-expanded="false" aria-controls="fruitsVegetable">
                {props.categories.map(c =>   <li key={c.id} className="main-nav-list child"><a href="#">{c.name}<span className="number">{c.number}</span></a></li>)}
                </ul>
            </li>

            <li className="main-nav-list"><a data-toggle="collapse" href="#meatFish" aria-expanded="false" aria-controls="meatFish"><span
                     className="lnr lnr-arrow-right"></span>Meat and Fish<span className="number">(53)</span></a>
                <ul className="collapse" id="meatFish" data-toggle="collapse" aria-expanded="false" aria-controls="meatFish">
                {props.categories.map(c =>   <li key={c.id} className="main-nav-list child"><a href="#">{c.name}<span className="number">{c.number}</span></a></li>)}
                </ul>
            </li>

            <li className="main-nav-list"><a data-toggle="collapse" href="#cooking" aria-expanded="false" aria-controls="cooking"><span
                     className="lnr lnr-arrow-right"></span>Cooking<span className="number">(53)</span></a>
                <ul className="collapse" id="cooking" data-toggle="collapse" aria-expanded="false" aria-controls="cooking">
                {props.categories.map(c =>   <li key={c.id} className="main-nav-list child"><a href="#">{c.name}<span className="number">{c.number}</span></a></li>)}
                </ul>
            </li>

            <li className="main-nav-list"><a data-toggle="collapse" href="#beverages" aria-expanded="false" aria-controls="beverages"><span
                     className="lnr lnr-arrow-right"></span>Beverages<span className="number">(24)</span></a>
                <ul className="collapse" id="beverages" data-toggle="collapse" aria-expanded="false" aria-controls="beverages">
                {props.categories.map(c =>   <li key={c.id} className="main-nav-list child"><a href="#">{c.name}<span className="number">{c.number}</span></a></li>)}
                </ul>
            </li>

            <li className="main-nav-list"><a data-toggle="collapse" href="#homeClean" aria-expanded="false" aria-controls="homeClean"><span
                     className="lnr lnr-arrow-right"></span>Home and Cleaning<span className="number">(53)</span></a>
                <ul className="collapse" id="homeClean" data-toggle="collapse" aria-expanded="false" aria-controls="homeClean">
                {props.categories.map(c =>   <li key={c.id} className="main-nav-list child"><a href="#">{c.name}<span className="number">{c.number}</span></a></li>)}
                </ul>
            </li>

            <li className="main-nav-list"><a href="#">Pest Control<span className="number">(24)</span></a></li>
            <li className="main-nav-list"><a data-toggle="collapse" href="#officeProduct" aria-expanded="false" aria-controls="officeProduct"><span
                     className="lnr lnr-arrow-right"></span>Office Products<span className="number">(77)</span></a>
                <ul className="collapse" id="officeProduct" data-toggle="collapse" aria-expanded="false" aria-controls="officeProduct">
                {props.categories.map(c =>   <li key={c.id} className="main-nav-list child"><a href="#">{c.name}<span className="number">{c.number}</span></a></li>)}
                </ul>
            </li>

            <li className="main-nav-list"><a data-toggle="collapse" href="#beauttyProduct" aria-expanded="false" aria-controls="beauttyProduct"><span
                     className="lnr lnr-arrow-right"></span>Beauty Products<span className="number">(65)</span></a>
                <ul className="collapse" id="beauttyProduct" data-toggle="collapse" aria-expanded="false" aria-controls="beauttyProduct">
                {props.categories.map(c =>   <li key={c.id} className="main-nav-list child"><a href="#">{c.name}<span className="number">{c.number}</span></a></li>)}
                </ul>
            </li>

            <li className="main-nav-list"><a data-toggle="collapse" href="#healthProduct" aria-expanded="false" aria-controls="healthProduct"><span
                     className="lnr lnr-arrow-right"></span>Health Products<span className="number">(29)</span></a>
                <ul className="collapse" id="healthProduct" data-toggle="collapse" aria-expanded="false" aria-controls="healthProduct">
                {props.categories.map(c =>   <li key={c.id} className="main-nav-list child"><a href="#">{c.name}<span className="number">{c.number}</span></a></li>)}
                </ul>
            </li>

            <li className="main-nav-list"><a href="#">Pet Care<span className="number">(29)</span></a></li>
            <li className="main-nav-list"><a data-toggle="collapse" href="#homeAppliance" aria-expanded="false" aria-controls="homeAppliance"><span
                     className="lnr lnr-arrow-right"></span>Home Appliances<span className="number">(15)</span></a>
                <ul className="collapse" id="homeAppliance" data-toggle="collapse" aria-expanded="false" aria-controls="homeAppliance">
                {props.categories.map(c =>   <li key={c.id} className="main-nav-list child"><a href="#">{c.name}<span className="number">{c.number}</span></a></li>)}
                </ul>
            </li>

            <li className="main-nav-list"><a className="border-bottom-0" data-toggle="collapse" href="#babyCare" aria-expanded="false"
                 aria-controls="babyCare"><span className="lnr lnr-arrow-right"></span>Baby Care<span className="number">(48)</span></a>
                <ul className="collapse" id="babyCare" data-toggle="collapse" aria-expanded="false" aria-controls="babyCare">
                {props.categories.map(c =>   <li key={c.id} className="main-nav-list child"><a href="#">{c.name}<span className="number">{c.number}</span></a></li>)}
                </ul>
            </li>

        </ul>
    </div>
    );
}

export default Categories;