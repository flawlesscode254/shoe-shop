import React from 'react'
import Products from './Products'
import One from './one.jpg'
import Two from './two.jpg'
import Three from './three.jpg'
import Four from './four.jpg'
import Five from './five.jpg'
import Six from './six.jpg'
import Seven from './seven.jpg'

function Details() {
    return (
        <div>
            <Products
                src={One}
                price="Sh.500"
            />
            <Products
                src={Two}
                price="Sh.500"
            />
            <Products
                src={Three}
                price="Sh.500"
            />
            <Products
                src={Four}
                price="Sh.500"
            />
            <Products
                src={Five}
                price="Sh.500"
            />
            <Products
                src={Six}
                price="Sh.500"
            />
            <Products
                src={Seven}
                price="Sh.500"
            />
        </div>
    )
}

export default Details
