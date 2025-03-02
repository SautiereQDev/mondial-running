import {Minus, Plus} from "lucide-react";

interface NumercialInputProps {
	value: number,
	setValueFn: (value: number) => void
	stock: number
}

export default function NumericalInput({value, setValueFn, stock}: Readonly<NumercialInputProps>) {
	return (
		<div className="flex items-center border rounded-md w-fit">
			<button
				type="button"
				disabled={value <= 1}
				onClick={() => setValueFn(value - 1)}
				className="px-3 py-2 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
				aria-label="Diminuer la quantité"
			>
				<Minus size={16}/>
			</button>

			<input
				type="number"
				value={value}
				min="1"
				max={stock}
				className="w-12 text-center border-0 focus:ring-0 focus:outline-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
				onChange={(e) => {
					const value = parseInt(e.target.value);
					if (!isNaN(value) && value >= 1 && value <= stock) {
						setValueFn(value);
					}
				}}
				aria-label="Quantité"
			/>

			<button
				type="button"
				disabled={value >= stock}
				onClick={() => setValueFn(value + 1)}
				className="px-3 py-2 text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
				aria-label="Augmenter la quantité"
			>
				<Plus size={16}/>
			</button>
		</div>
	)
}