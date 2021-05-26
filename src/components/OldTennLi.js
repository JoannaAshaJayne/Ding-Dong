import React, { useState, useEffect } from 'react';
import getTennant from '../requests/getTennant';

// DingDongCTA props => tenant id


const TennantRow = ({tennant}) => {

    const {lastname} = tennant;
     /* 
    tr 
        td: flat
        td: full name
        td: actions
    */
    return <li> {lastname} </li>    
}

const TenantList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
         getTennant()
            .then((response) => {
                setList(response.data);
            })
            .catch((error) => {
                console.error(error)
            });
    }, [])

    // return a table instead
    /*
    <table>
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
        </tr>
    */
    return (
        <ul> 
            {list.map((tennant) => <TennantRow tennant={tennant} key={tennant.id} />)}
        </ul>
    );
}

export default TenantList;