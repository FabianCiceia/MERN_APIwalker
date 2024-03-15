import React, { useEffect, useState } from 'react';
import ReturnData from "./ReturnData";

function Filter() {
    const { setUrl, datos } = ReturnData();
    const [filter, setFilter] = useState('people');
    const [id, setId] = useState('');

    const buscar = () => { 
        setUrl(`https://swapi.py4e.com/api/${filter}/${id}`);
    }
    
    

    return {
        id,
        setId,
        filter,
        setFilter,
        buscar,
        datos,
    };
}

export default Filter;


