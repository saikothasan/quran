import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Surah = () => {
  const { id } = useParams();
  const [surah, setSurah] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const response = await axios.get(`https://api.alquran.cloud/v1/surah/${id}`);
        setSurah(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the Surah:', error);
        setLoading(false);
      }
    };

    fetchSurah();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-6">{surah.englishName} ({surah.englishNameTranslation})</h2>
      <p className="text-gray-700 mb-4">{surah.revelationType} - {surah.numberOfAyahs} Ayahs</p>
      <ul className="space-y-4">
        {surah.ayahs.map(ayah => (
          <li key={ayah.numberInSurah} className="bg-white p-6 rounded-lg shadow-md">
            <span className="text-green-600 font-bold">{ayah.numberInSurah}:</span> {ayah.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Surah;
