import React from 'react'
import "./Home.css";
import Product from "./Product"
function Home() {
    return (
        <div className="home">
            <img className="homeimage" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="amazon"
            />
        {/* displays the product container */}
                <div className="home_row">
                    <Product
                        id="1234"
                        title="Phone"
                        price={800}
                        rating={5}
                        image="/images/iphone2.jpg" 
                    />
                    <Product
                        id="1235"
                        title="Earpods"
                        price={70}
                        rating={5}
                        image="/images/apple-earpodss.jpg" 
                    />
               
                </div>
                <div className="home_row">      
                    <Product
                            id="1236"
                            title="Camera"
                            price={850}
                            rating={5}
                            image="/images/Quicktake.jpg" 
                        />
                    <Product
                            id="1237"
                            title="Stand"
                            price={15}
                            rating={5}
                            image="/images/ipad stand.jpg" 
                        />
                    <Product
                            id="1238"
                            title="Phone"
                            price={700}
                            rating={5}
                            image="/images/iphone1.jfif" 
                        />    
                </div>   
                <div className="home_row">
                    <Product
                                id="1239"
                                title="Laptop"
                                price={1500}
                                rating={5}
                                image="/images/laptop6.jfif" 
                         />
                    
               </div>    

           
        </div>

        
    );
}

export default Home;
