import React, { useState, useEffect } from 'react';
import useWebSocket from "react-use-websocket";
import { SpiceCrop } from '../models/SpiceCrop';

const CropMarket = () => {
  const [spiceCrops, setSpiceCrops] = useState([]);
  const [username, setUsername] = useState('');
  const WS_URL = `ws://127.0.0.1:8000`;
  const { sendJsonMessage, lastJsonMessage } = useWebSocket(WS_URL, {
    share: true,
    queryParams: { username },
  });

  useEffect(() => {
    SpiceCrop.find().then((spiceCrops) => setSpiceCrops(spiceCrops));
  }, []);

  const handleBuy = (spiceCrop) => {
    // Implement C2C and C2B business logic here
  };

  return (
    <div>
      <h2>Crop Market</h2>
      <ul>
        {spiceCrops.map((spiceCrop, index) => (
          <li key={index}>
            {spiceCrop.name}: {spiceCrop.price}
            <button onClick={() => handleBuy(spiceCrop)}>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CropMarket;