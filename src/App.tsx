import { useState } from 'react';
import axios from 'axios';
import { Header } from './components/header';
import { SearchInput } from './components/search-input';
import type { BibleResponse } from './types';

function App() {
  const [searchValue, setSearchValue] = useState<string>('');
  const [verseData, setVerseData] = useState<BibleResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSearchInput = async (text: string) => {
    try {
      setIsLoading(true);
      setError('');
      
      const response = await axios.get<BibleResponse>(
        `https://bible-api.com/${text}?translation=almeida`
      );
      
      setVerseData(response.data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err: unknown) {
      setError('Não foi possível encontrar o versículo. Por favor, verifique o formato e tente novamente.');
      setVerseData(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[200vh] w-full bg-gradient-to-b from-slate-50 to-blue-50">
      <div className="flex flex-col items-center px-4">
        <div className="flex flex-col items-center gap-16 pt-12">
          <Header />
          <div className="relative">
        <img
          className="h-44 w-44 rounded-lg shadow-md object-cover
                   transition-transform duration-300
                   ring-2 ring-blue-100"
          src="amormaior.jpg"
          alt="amormaior"
        />
      </div>
        </div>

        <SearchInput
          value={searchValue}
          onChange={setSearchValue}
          onSearch={handleSearchInput}
        />

        {isLoading && (
          <div className="mt-8 text-blue-600">Buscando versículo...</div>
        )}

        {error && (
          <div className="mt-8 text-red-500 text-center max-w-md">
            {error}
          </div>
        )}

        {verseData && (
          <div className="mt-8 max-w-xl p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-serif text-gray-800 mb-4">
              {verseData.reference}
            </h2>
            <p className="text-gray-700 text-2xl leading-relaxed">
              {verseData.text}
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Tradução: {verseData.translation_name}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;