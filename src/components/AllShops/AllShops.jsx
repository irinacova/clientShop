import React, { useEffect, useState } from 'react';
import { ShopCart } from '../ShopCart/ShopCart';

function AllShops() {
    const [shopCart, setShopCart] = useState([]);

    const onSubmitData = () => {
        fetch(`http://localhost:3000/shops`)
            .then(res => res.json())
            .then(data => {
                const newName = data.shops;
                console.log(newName, 'newName');
                setShopCart(newName);
            });
    }

    useEffect(() => {
       onSubmitData()
    }, []);

    return (
        <>
            {shopCart.map((el, index) => (
                <ShopCart
                    onSubmitData={onSubmitData}
                    key={index}
                    shopNumber={el.shopNumber}
                    {...el}
                />
            ))}
        </>
    );
}

export default AllShops;
