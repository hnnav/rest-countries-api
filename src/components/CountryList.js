import React, { useEffect, useState } from "react"

export default function CountryList() {

    // set state
    const [country, setCountry] = useState("");

    // fetch countries from API
    useEffect(() => {
        const url = "https://restcountries.com/v3.1/all";
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);

    return (
        <div>
            
        </div>
    )
}
