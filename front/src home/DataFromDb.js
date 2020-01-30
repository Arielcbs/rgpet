import React from 'react';

export default function DataFromDb(props){

    const {data, fetchData} = props;

    if (!data){
        return (
            <div>
            <h2>Nothing to show</h2>
            <button onClick={fetchData}>Pegar coisas do DB</button>        
            </div>
        )
    } else{
        return (
            <ul>
                {data.data.map(data => (
                    <li key={data.id}>{data.test} - {data.email}</li>
                ))}
            </ul>
        )
        // return <h1>hi</h1>
    }
    
}