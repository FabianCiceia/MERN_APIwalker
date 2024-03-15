
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ReturnData() {
    const [datos, setDatos] = useState();
    const [url, setUrl] = useState('');

    useEffect(() => {
        if(url){
            axios.get(`${url}`)
            .then(response => {
                setDatos(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        }  
    }, [url]);




    return {
        datos,
        setUrl};
}
export default ReturnData