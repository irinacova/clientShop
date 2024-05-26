import { Button, Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
// interface IShopCartProps {
//     createdAt: string;
//     director: string;
//     houseNumber: string;
//     id: 1;
//     shopNumber: 108;
//     street: string;
//     updatedAt: string;
// }

export const ShopCart = ({ onSubmitData, shopNumber, id }) => {
    const navigate = useNavigate();
    async function onClickButtonDelete() {
        const response = await fetch(`http://localhost:3000/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
           onSubmitData()
            // Обновить state (отрисовать)
            //  const newShop = shop.filter(shop => shop.id !== id);
            //  setShopId([...newSports]);
        } else {
            alert('ЧТо-то пошло не так!!!!!');
        }
    }
    return (
        <Grid width='600px' container>
            <Grid item xs={6}>
                {shopNumber}
            </Grid>
            <Grid item>
                <Button
                    variant='text'
                    color='error'
                    onClick={onClickButtonDelete}
                    children='Удалить'
                />
            </Grid>
            <Grid item xs>
                <Button
                    variant='text'
                    color='inherit'
                    onClick={() => {
                      navigate(`/editShop/${id}`);
                    }}
                    children='Изменить'
                />
            </Grid>
        </Grid>
    );
};
