import React, { useEffect, useState } from 'react'
import TextHeader from '../../components/TextHeader';
import Table from '../../components/Table';
import url from '../../config/API';

function Records() {
    const [surveys, setSurveys] = useState({data: []});

   useEffect(()=>{
        getSurveys();
        }, []);

    const getSurveys = async (e) => {
    
        const response = await fetch(url+'getFamilyTables',{method: 'GET',
                                headers: {'x-access-token' : localStorage.getItem('token')} });
        const data = await response.json();
        setSurveys(data);
    }
    return (
        <>
            <TextHeader text="Registros" />
            <Table data={surveys} />
        </>
    );
}

export default Records;
