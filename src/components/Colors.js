import React from 'react';

const Colors = (props) => {
    return (
        <div>
            <div className="head">Color</div>
            <form action="#">
                <ul>
                {props.colors.map(c =><li  key={c.id} className="filter-list"><input className="pixel-radio" type="radio" id="black" name="color"/><label for="black">{c.name}<span>{c.number}</span></label></li>)}
                </ul>
            </form>
        </div>
    );
}

export default Colors;