import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SurahCard from '../components/SurahCard';

const Home = () => {
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await axios.get('https://api.alquran.cloud/v1/surah');
        setSurahs(response.data.data);
      } catch (error) {
        console.error('Error fetching the Surahs:', error);
      }
    };

    fetchSurahs();
  }, []);

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6">All Surahs</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {surahs.map(surah => (
          <SurahCard key={surah.number} surah={surah} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
