import { Book, Search } from 'lucide-react';
import { useState } from 'react';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (text: string) => Promise<void>;
}

export const SearchInput = ({ value, onChange, onSearch }: SearchInputProps) => {
  const [error, setError] = useState<string>('');

  const handleSearch = () => {
    const [book, versicle] = value.split(':')
    
    if (!book || !versicle) {
      setError('Por favor, digite no formato "Livro Capítulo:Versículo"');
      return;
    }

    setError('');
    onSearch(value);
  };

  return (
    <div className="w-96 relative mt-[80vh]">
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <Book className="w-5 h-5 text-blue-600" />
      </div>
      
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        type="text"
        placeholder='Ex: "João 3:16"'
        className="w-full text-center px-12 py-4 border border-blue-200 
                rounded-lg outline-none bg-white shadow-md
                placeholder-gray-500 text-gray-700 text-lg
                focus:border-blue-300 focus:ring-2 focus:ring-blue-100
                transition-all duration-300"
      />
      
      <button
        onClick={handleSearch}
        className="absolute right-4 top-1/2 transform -translate-y-1/2
                 hover:bg-blue-50 p-2 rounded-full transition-colors"
      >
        <Search className="w-5 h-5 text-blue-600" />
      </button>

      {error && (
        <p className="absolute -bottom-6 left-0 text-red-500 text-sm">
          {error}
        </p>
      )}
    </div>
  );
};

