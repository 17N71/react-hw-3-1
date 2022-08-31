import React from 'react';

function Item({item, index}) {
    console.log(item)
    return (
            <center>
                <div key={index}>Hello world {item.url}</div>
            </center>
    );
}

export default Item;