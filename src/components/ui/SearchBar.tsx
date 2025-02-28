import React from 'react'
import {Search} from "lucide-react";

interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
	placeholder: string;
}

export default function SearchBar({
																		placeholder,
																		...props
																	}: Readonly<SearchBarProps>) {
	return (
		<label htmlFor="search"
					 className={`flex gap-2 items-center border border-gray-700 rounded-lg p-2 ${props.className}`}>
			<Search/>
			<input
				type="text"
				placeholder={placeholder}
				name="search"
				className="focus:outline-none w-full font[open-sans]"
			/>
		</label>
	)
}