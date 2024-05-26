import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";




function PageInfoShop() {

  const [shop, setShop] = useState(null);


  const params = useParams()
  console.log(params);
     useEffect(() => {
         fetch(`http://localhost:3000/shop/${params.id}`)
             .then(res => res.json())
             .then(data => {
              console.log(data);
             setShop(data)
             });
     }, []);
    return (
        <>
            <div> Номер магазина {shop && shop.shopNumber}</div>
            <div> Фамилия И.О директора   {shop && shop.director}</div>
            <div> Адрес,Улица  {shop && shop.street}</div>
            <div> Дом {shop && shop.houseNumber}</div>
        </>
    );
}

export default PageInfoShop;
