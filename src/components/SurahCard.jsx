import React from 'react';
import { Link } from 'react-router-dom';

const SurahCard = ({ surah }) => (
  <li className="bg-white p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
    <Link to={`/surah/${surah.number}`} className="text-lg font-bold text-green-600">
      {surah.number}. {surah.englishName} ({surah.englishNameTranslation})
    </Link>
    <p className="text-gray-700 mt-2">{surah.revelationType} - {surah.ayahs} Ayahs</p>
  </li>
);

export default SurahCard;
