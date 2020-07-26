import React, { useState, useEffect } from 'react';
import MediaCard from '../MediaCard/MediaCard'

import './MediaGrid.css';

interface IMediaGridProps {
    BaseURL: (string |undefined );
    SearchQuery: (string |undefined );
    SearchType: (string| undefined);
}


function MediaGrid(props: IMediaGridProps) {
    const [ItemArray, setItemArray] = useState<any[]>([])
    var url:string
    if(props.SearchQuery===""){
        url=`https://api.themoviedb.org/3/trending/${props.SearchType}/day`
    }else{
        url=`https://api.themoviedb.org/3/search/${props.SearchType}?query=${props.SearchQuery}`
    }
    if(process.env.REACT_APP_API_KEY){
        var key = process.env.REACT_APP_API_KEY
    }else{
        key=""
    }
    useEffect(() => {
        fetch(url, {
            method: 'get',
            headers: new Headers({
                'Authorization': key
            })
        })
            .then(response =>{
                return response.json()
            })
            .then(response => {
                setItemArray(response.results)
            })
            .catch((e) => console.log(e)
            );

    }, [url, key]);

    var Cards: JSX.Element[] = [];
    if(ItemArray){
        ItemArray.forEach((el: any, i: Number) => {
            if (!el) {
                return;
            }
            Cards.push(
                // <MediaCard Name={el.name} Title={el.title} Synopsis={el.overview} /> 
                <MediaCard key={i.toString()} BaseURL={props.BaseURL} Element={el} SearchType={props.SearchType}/>
            )
        })
    }
    return (
        <div>
            {Cards}
        </div>
    )
}

export default MediaGrid
