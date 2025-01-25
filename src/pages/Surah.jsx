import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Surah = () => {
  const { id } = useParams();
  const [surah, setSurah] = useState(null);
  const [translations, setTranslations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSurah = async () => {
      try {
        const response = await axios.get(`https://api.alquran.cloud/v1/surah/${id}`);
        setSurah(response.data.data);
      } catch (error) {
        console.error('Error fetching the Surah:', error);
      }
    };

    const fetchTranslations = async () => {
      try {
        const response = await axios.get(`https://api.alquran.cloud/v1/surah/${id}/editions/en.asad,en.ahmedali,en.arberry,en.hamidullah,en.pickthall,en.saheeh,en.yusufali`);
        setTranslations(response.data.data);
      } catch (error) {
        console.error('Error fetching the translations:', error);
      }
    };

    fetchSurah();
    fetchTranslations();
    setLoading(false);
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
      <h3 className="text-2xl font-bold mt-6">Translations</h3>
      {translations.map((translation, index) => (
        <div key={index} className="mt-4">
          <h4 className="text-xl font-semibold">{translation.edition.name} ({translation.edition.language})</h4>
          <ul className="space-y-2">
            {translation.ayahs.map(ayah => (
              <li key={ayah.numberInSurah} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <span className="text-blue-600 font-bold">{ayah.numberInSurah}:</span> {ayah.text}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Surah;
