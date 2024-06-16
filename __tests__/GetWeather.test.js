import React from 'react';
import GetWeather from '../pages/getWeather';

it('Успешное получение местоположения', async function() {
    const state = await GetWeather.state;
    console.warn(state);
    expect(GetWeather.state).toBeTruthy(); 
});

