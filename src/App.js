import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import "./App.css";
import Coin from "./coin.jsx";
import Nav from "./components/nav.jsx";
import Home from "./components/home.jsx";


function App() {
  const [coins, setCoins] = useState([]);
  const [currentCoin, setCurrentCoin] = useState(0)
  const [search, setSearch] = useState('');
  const [news,setNews]=useState([])

  useEffect(async () => {
      let res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=300&page=1&sparkline=false')
      setCoins(res.data);

      // useEffect(async () => {
      //   let res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=695ae6cb7de647c1801f4549a8178faf')
      //   setNews(res.data)
     
    let interval = setInterval(() => updateCurrCoint(res.data), 3000)
    return () => clearInterval(interval);
  }, []);

  const updateCurrCoint = (currCoins) => {
    setCurrentCoin((coinIndex) => {
      if (coinIndex < currCoins.length) return coinIndex + 1;
      return 0;
    });
  }

  
  



  return (

      
      <div className="  ">
      {coins.slice(currentCoin, currentCoin + 10).map(coin => {
        return (
          <Coin
          key={coin.id}
          name={coin.name}
          price={coin.current_price}
          symbol={coin.symbol}
          marketcap={coin.total_volume}
          volume={coin.market_cap}
          image={coin.image}
          priceChange={coin.price_change_percentage_24h}
          />
          );
        })}
        </div>
      
  );
}

export default App;