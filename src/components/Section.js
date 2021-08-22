import React from 'react';
import Products from './section/Products';
import Details from './section/Details';
import { Route } from 'react-router';
import Cart from './section/Cart';

const  Section = (props) => {
    return (
        <div>
            <section>
                <Route path="/product" component={Products} exact/>
                <Route path="/product/:id" component={Details} />
                <Route path="/cart" component={Cart} />
            </section>
        </div>
    )
}


export default Section

