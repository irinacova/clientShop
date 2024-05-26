import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UpdateShop() {
    const [shop, setShop] = useState(null);
    const [shopNumber, setNumber] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHous] = useState('');
    const [director, setDirector] = useState('');

    const params = useParams();

    console.log(params);
    useEffect(() => {
        fetch(`http://localhost:3000/shop/${params.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setShop(data);
            });
    }, []);

    useEffect(() => {
        console.log(shop);
        if (shop) {
          setNumber(shop.shopNumber)
          setStreet(shop.street)
          setHous(shop.houseNumber);
          setDirector(shop.director);
        }
    }, [shop]);
    const onClickButtonUpdate = async () => {
       const shopsData = { shopNumber, street, houseNumber, director };
        const response = await fetch(`http://localhost:3000/${params.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(shopsData)
        });

    };
    return (
        <>
            <h2>Для изменения информации о магазине заполните форму</h2>
            <div>
                <TextField
                    value={shopNumber}
                    onChange={ar => {
                        setNumber(ar.target.value);
                    }}
                    label='Номер магазина'
                    color='secondary'
                    focused
                />
                <TextField
                    value={street}
                    onChange={ar => {
                        setStreet(ar.target.value);
                    }}
                    label='Адрес,Улица'
                    color='secondary'
                    focused
                />
                <TextField
                    value={houseNumber}
                    onChange={ar => {
                        setHous(ar.target.value);
                    }}
                    label='Дом'
                    color='secondary'
                    focused
                />
                <TextField
                    value={director}
                    onChange={ar => {
                        setDirector(ar.target.value);
                    }}
                    label='ФИО директора'
                    color='secondary'
                    focused
                />
            </div>
            <Button variant='contained' onClick={onClickButtonUpdate}>
                Изменить
            </Button>
        </>
    );
}

export default UpdateShop;
