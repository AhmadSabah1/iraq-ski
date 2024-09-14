'use client'
import { useState } from 'react';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const dummyData = [
        'Produkt 1',
        'Produkt 2',
        'Produkt 3',
        'Leverandør A',
        'Leverandør B',
        'Aftale C',
        'Aftale D',
    ];

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setQuery(input);

        // Filtrer dummy-data baseret på brugerens input
        if (input.length > 2) {
            setSuggestions(dummyData.filter(item => item.toLowerCase().includes(input.toLowerCase())));
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        alert(`Du har valgt: ${suggestion}`);
        setQuery(suggestion);
        setSuggestions([]); // Tøm suggestions efter valg
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Søg efter produkter, aftaler eller leverandører"
                className="p-2 rounded border border-gray-300 w-64"
            />
            {suggestions.length > 0 && (
                <ul className="absolute bg-white border mt-2 w-full shadow-lg z-50 max-h-48 overflow-y-auto">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
