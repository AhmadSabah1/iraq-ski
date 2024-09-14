'use client'
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 flex justify-between">
            <div>
                <a href="/about">Om os</a> | <a href="/contact">Kontakt</a> | <a href="/privacy">Privatlivspolitik</a> | <a href="/terms">Vilkår</a>
            </div>
            <div>
                <select className="bg-gray-700 text-white">
                    <option>Dansk</option>
                    <option>English</option>
                </select>
            </div>
        </footer>
    );
}
