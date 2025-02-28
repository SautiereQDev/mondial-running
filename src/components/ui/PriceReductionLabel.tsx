import React from 'react'

interface PriceReductionLabelProps extends React.HTMLProps<HTMLParagraphElement> {
	discount: number
}

export default function PriceReductionLabel({discount}: Readonly<PriceReductionLabelProps>) {
	return (
		<p className="bg-[#FF33331A] text-[#FF3333] px-3.5 py-1.5 rounded-3xl text-xs">-{discount}%</p>
	)
}
