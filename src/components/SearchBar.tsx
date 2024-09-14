// components/SearchBar.tsx

'use client';
import { useState } from 'react';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    const dummyData = [
        'Product 1',
        'Product 2',
        'Service A',
        'Supplier B',
        'Agreement C',
        'Agreement D',
    ];

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setQuery(input);

        if (input.length > 1) {
            setSuggestions(
                dummyData.filter((item) =>
                    item.toLowerCase().includes(input.toLowerCase())
                )
            );
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        alert(`You selected: ${suggestion}`);
        setQuery(suggestion);
        setSuggestions([]);
    };

    return (
        <div className="relative w-full max-w-xs">
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search..."
                className="w-full p-2 pl-10 pr-4 rounded-full border border-gray-300 focus:border-primary focus:outline-none"
            />
            {/* Search Icon */}
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path
                        fillRule="evenodd"
                        d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM10 16a6 6 0 100-12 6 6 0 000 12z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            {suggestions.length > 0 && (
                <ul className="absolute bg-white border mt-2 w-full shadow-dropdown z-50 max-h-60 overflow-y-auto rounded-lg">
                    {suggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            className="p-2 hover:bg-background cursor-pointer"
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
