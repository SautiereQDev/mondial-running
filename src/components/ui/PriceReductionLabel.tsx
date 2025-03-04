import {Reduction} from '@/types/articles.types'
import React from "react";

interface PriceReductionLabelProps extends React.HTMLProps<HTMLParagraphElement> {
	reduction: Pick<Reduction, 'value' | 'type'>
}

export default function PriceReductionLabel({reduction, ...args}: Readonly<PriceReductionLabelProps>) {
	if(!reduction) return null;

	const {value, type} = reduction;

	return (
		<p
			className={`bg-[#FF33331A] text-[#FF3333] px-3.5 py-1.5 rounded-3xl text-xs ${args.className ?? ''}`}
			{...args}
		>
			{type === "percentage" ? (`-${value}%`) : (`-${value}€`)}
		</p>
	)
}

