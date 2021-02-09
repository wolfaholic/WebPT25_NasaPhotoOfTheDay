import React, { useEffect, useState } from "react";
import axios from "axios";
import {SubHeader} from "./advstyle"
import {DailyImg} from "./advstyle"

const Picture = () => {
    const [picture, setPicture] = useState("");
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [explanation, setExplanation] = useState("");
    const [copyright, setCopyright] = useState("");

    useEffect(() => {
        function getImg() {
            axios
                .get(
                   'https://api.nasa.gov/planetary/apod?start_date=2020-07-30&end_date=2020-07-30&api_key=423cCMT2mrL1VXr8vxwf2O3n0pRmQ91O5qsNyBK7'
                )
                .then(response => {
                    
                    setPicture(response.data[0].url);
                    setDate(response.data[0].date);
                    setTitle(response.data[0].title);
                    setExplanation(response.data[0].explanation);
                    setCopyright(response.data[0].copyright);
                    console.log(response.data[0]);
                })
                .catch (error => console.log(error));
        }
        getImg();
    },[date]);



    return (

        <section className="container">
            <div className = "topSection">
                <h1 className = "mainHeader">
                <img src="/assets/projectnasa_logo.png" alt= "project nasa logo"/></h1>
                <SubHeader>
                    Photograph of the Day
                </SubHeader>
            </div>
            <div className = "pictureCard">
                <h2>
                    {title}
                </h2>
                <p>Date: {date}</p> 
                <p>Photo Provided by: {copyright}</p>
                <p>{explanation}</p>
            
            <DailyImg src={picture} alt= "NASA PIC of the Day" />
            </div>
        </section>



    );
};


export default Picture;