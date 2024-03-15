import React, { useEffect, useState } from 'react';

function RenderData({datos, filter}) {
    const[print, setPrint] = useState((<div>Hola</div>));
    useEffect(()=>{
        if(!datos) return;
        switch (filter) {
            case 'people':
                setPrint(
                    <div>
                        <h1>{datos.name}</h1>
                        <p>heigth: {datos.height}</p>
                        <p> Hair Color: {datos.hair_color} </p>
                        <p> Birth Year: {datos.birth_year} </p>
                        <p> Eyes Color: {datos.eye_color} </p>
                    </div>
                );
                break;
            case 'planets':
                setPrint(
                    <div>
                        <h1>{datos.name}</h1>
                        <p> Population: {datos.population}</p>
                        <p> Rotation period: {datos.rotation_period} </p>
                        <p> Diameter: {datos.diameter} </p>
                        <p> Terrain: {datos.terrain} </p>
                        <p> Climate: {datos.climate} </p>
                    </div>
                );
                break;
            case 'films':
                setPrint(
                    <div>
                        <h1>{datos.title}</h1>
                        <p> Director: {datos.director}</p>
                        <p> Producer: {datos.producer} </p>
                        <p> Release date: {datos.release_date} </p>
                        <p> Opening Crawl: {datos.opening_crawl} </p>
                    </div>
                );
                
                break;
            case 'species':
                setPrint(
                    <div>
                        <h1>{datos.name}</h1>
                        <p> Classification: {datos.classification}</p>
                        <p> Designation: {datos.designation} </p>
                        <p> Language: {datos.language} </p>
                        <p> Average heightr: {datos.average_height} </p>
                    </div>
                );
                break;
            case 'vehicles':
                setPrint(
                    <div>
                        <h1>{datos.name}</h1>
                        <p> Model: {datos.model}</p>
                        <p> Manufacturer: {datos.manufacturer} </p>
                        <p> Vehicle class: {datos.vehicle_class} </p>
                        <p> Length: {datos.length} </p>
                    </div>
                );
                break;
            case 'starships':
                setPrint(
                    <div>
                        <h1>{datos.name}</h1>
                        <p> Model: {datos.model}</p>
                        <p> Manufacturer: {datos.manufacturer} </p>
                        <p> Starship class: {datos.starship_class} </p>
                        <p> Length: {datos.length} </p>
                    </div>
                );
                break;
            default:
                break;
        }
    },[datos])
    return print;
}

export default RenderData;
