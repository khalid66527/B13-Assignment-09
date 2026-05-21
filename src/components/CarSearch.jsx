"use client";

import { Label, SearchField } from "@heroui/react";
import { useState, useEffect } from "react";

export function Search({ allCars, onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (!searchTerm.trim()) {
            onSearch(allCars);
            return;
        }

        const term = searchTerm.toLowerCase().trim();

        const filtered = allCars.filter((car) => 
            car.carName?.toLowerCase().includes(term) ||
            car.carType?.toLowerCase().includes(term) ||
            car.location?.toLowerCase().includes(term) ||
            car.description?.toLowerCase().includes(term)
        );

        onSearch(filtered);
    }, [searchTerm, allCars, onSearch]);

    return (
        <div className="flex justify-center mb-10">
            <SearchField 
                value={searchTerm}
                onChange={setSearchTerm}
                className="w-full max-w-lg"
            >
                <Label className="text-gray-700 text-2xl font-semibold mb-1">Search Cars</Label>
                <SearchField.Group>
                    <SearchField.SearchIcon />
                    <SearchField.Input 
                        placeholder="Search by name, type, location..." 
                        className="py-3.5 text-base "
                    />
                    <SearchField.ClearButton />
                </SearchField.Group>
            </SearchField>
        </div>
    );
}