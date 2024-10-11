import React, { useState, useEffect } from 'react';
import './App.css';

const attractions = [
  { name: '和歌山城', type: '観光名所', region: '紀北' },
  { name: '高野山', type: '観光名所', region: '紀北' },
  { name: '白浜温泉', type: '観光名所', region: '紀南' },
  { name: '那智の滝', type: '観光名所', region: '紀南' },
  { name: '熊野古道', type: '観光名所', region: '紀南' },
  { name: '円月島', type: '観光名所', region: '紀南' },
  { name: '和歌山ラーメン', type: '食事', region: '紀北' },
  { name: '梅干し', type: '食事', region: '紀中' },
  { name: '熊野牛', type: '食事', region: '紀南' },
  { name: 'アドベンチャーワールド', type: '観光名所', region: '紀南' },
  { name: '友ヶ島', type: '観光名所', region: '紀北' },
  { name: '和歌の浦', type: '観光名所', region: '紀北' },
  { name: '有田みかん', type: '食事', region: '紀北' },
  { name: '紀州湯浅醤油', type: '食事', region: '紀北' },
  { name: '根来寺', type: '観光名所', region: '紀北' },
  { name: '紀州石神温泉', type: '観光名所', region: '紀中' },
  { name: '黒潮市場', type: '観光名所', region: '紀南' },
  { name: '紀州備長炭', type: '特産品', region: '紀南' },
];

function App() {
  const [currentAttraction, setCurrentAttraction] = useState(null);
  const [usedAttractions, setUsedAttractions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('全体');

  const getRandomAttraction = () => {
    const filteredAttractions = attractions.filter(
      (attraction) =>
        !usedAttractions.includes(attraction) &&
        (selectedRegion === '全体' || attraction.region === selectedRegion)
    );

    if (filteredAttractions.length === 0) {
      setUsedAttractions([]);
      setCurrentAttraction({ name: '全ての観光名所・食事を表示しました', type: '', region: '' });
      return;
    }

    const randomIndex = Math.floor(Math.random() * filteredAttractions.length);
    const newAttraction = filteredAttractions[randomIndex];
    setCurrentAttraction(newAttraction);
    setUsedAttractions((prev) => [...prev, newAttraction]);
  };

  useEffect(() => {
    setUsedAttractions([]);
    getRandomAttraction();
  }, [selectedRegion]);

  return (
    <div className="App">
      <h1>和歌山県の観光名所・食事</h1>
      <div className="region-buttons">
        <button onClick={() => setSelectedRegion('全体')}>和歌山全体</button>
        <button onClick={() => setSelectedRegion('紀北')}>紀北</button>
        <button onClick={() => setSelectedRegion('紀中')}>紀中</button>
        <button onClick={() => setSelectedRegion('紀南')}>紀南</button>
      </div>
      <div className="attraction-display">
        {currentAttraction && (
          <>
            <h2>{currentAttraction.name}</h2>
            {currentAttraction.type && <p>種類: {currentAttraction.type}</p>}
            {currentAttraction.region && <p>地域: {currentAttraction.region}</p>}
          </>
        )}
      </div>
      <button onClick={getRandomAttraction}>次の観光名所・食事を表示</button>
    </div>
  );
}

export default App;