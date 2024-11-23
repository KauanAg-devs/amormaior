import { Cross } from 'lucide-react';

export const Header = () => {
  return (
    <div className="text-center space-y-2">
      <Cross className="w-8 h-8 text-blue-700 mb-4 mx-auto" />
      <h1 className="text-3xl font-serif text-gray-800 mb-2">
        Palavra Sagrada
      </h1>
      <p className="text-gray-600 text-sm font-medium">
        "Lâmpada para os meus pés é a tua palavra, e luz para o meu caminho."
      </p>
      <p className="text-gray-500 text-sm italic">
        Salmos 119:105
      </p>
    </div>
  );
};
