import React, { useState, useEffect } from 'react';
import useWebSocket from "react-use-websocket";

const LiveMarketPrice = () => {
  const [marketPrice, setMarketPrice] = useState({});
  const WS_URL = `ws://127.0.0.1:8000`;
  const { sendJsonMessage, lastJsonMessage } = useWebSocket(WS_URL, {
    share: true,
  });

  useEffect(() => {
    if (lastJsonMessage) {
      setMarketPrice(lastJsonMessage);
    }
  }, [lastJsonMessage]);

  return 
}7