import React from 'react';
import Coin from './Coin'; // Assuming Coin.js is in the same directory
import './Coin.css';

const CoinTable = ({ coins }) => {
    return (
        <div className="coin-table">
            <table>

                <thead>
                    <tr className='tableheader'>
                        <th className='nameHead'>Name</th>
                        <th className='bodyHead'>Body</th>
                    </tr>
                </thead>

                <tbody>
          {coins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              pricechange={coin.price_change_percentage_24h}
              // volume={coin.total_volume}
            />
          ))}
        </tbody>

            </table>
        </div>
    );
};

export default CoinTable;
