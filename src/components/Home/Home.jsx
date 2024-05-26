import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

import SomeImg from '../../../public/shop.webp';
import { Input } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const [shopId, setShopId] = useState('');
    const [shopNumber, setNumber] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHous] = useState('');
    const [director, setDirector] = useState('');

    const onClickButton = () => {
        navigate(`/shops/${shopId}`);
        //  fetch(`http://localhost:3000/shops/${shopId}`)
        //      .then(res => res.json())
        //      .then(data => {
        //          console.log(data);
        //      });
    };

    async function onClickButtonCreate() {
      const shopsData = { shopNumber, street, houseNumber, director };
        const response = await fetch(`http://localhost:3000/createShops`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(shopsData)
        });
    }

    return (
        <>
            <h1>Добро пожаловать на главную страницу</h1>
            <img src={SomeImg} alt='' />
            <h2>Для просмотра информации о всех магазинах нажмите кнопку Далее</h2>
            <Button variant='contained' onClick={onClickButton}>
                Далее
            </Button>
            <h2>Для поиска информации об одном магазине введите номер магазина</h2>

            <div>
                <Input
                    onChange={ar => {
                        setShopId(ar.target.value);
                    }}
                />
                <Button variant='contained' onClick={onClickButton}>
                    Далее
                </Button>
                <h2>Для добавления информаци о магазине заполните форму</h2>
                <TextField
                    onChange={ar => {
                        setNumber(ar.target.value);
                    }}
                    label='Номер магазина'
                    color='secondary'
                    focused
                />
                <TextField
                    onChange={ar => {
                        setStreet(ar.target.value);
                    }}
                    label='Адрес,Улица'
                    color='secondary'
                    focused
                />
                <TextField
                    onChange={ar => {
                        setHous(ar.target.value);
                    }}
                    label='Дом'
                    color='secondary'
                    focused
                />
                <TextField
                    onChange={ar => {
                        setDirector(ar.target.value);
                    }}
                    label='ФИО директора'
                    color='secondary'
                    focused
                />
            </div>
            <Button variant='contained' onClick={onClickButtonCreate}>
                Добавить
            </Button>
        </>
    );
}

export default Home;
