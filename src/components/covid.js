import React,{ useEffect,useState } from 'react'
import './covid.css'
const Covid=()=>{
    const [data,setData]=useState([]);

    const getCovidData = async()=>{
        try{
            const res= await fetch('https://data.covid19india.org/data.json');
            const  actualData =await res.json();
            console.log(actualData.statewise[0]);
            setData(actualData.statewise[0]);
        }
        catch (err){
            console.log(err);
        }
    }

    useEffect(()=>{
        getCovidData();
    },[]);
    return(
        <>
        <section>
            <h1>🔴 Live</h1>
            <h2>COVID-19 TRACKER</h2>
                <p>
                    Total revcovered- {data.recovered}
                </p>
                <p>
                    Total active- {data.active}
                </p>
                <p>
                    Total death- {data.deaths}
                </p>
                <p>
                    Last Updated- {data.lastupdatedtime}
                </p>
        </section>
        </>
    )
}
export default Covid