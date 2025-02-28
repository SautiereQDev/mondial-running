import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from 'react';

interface ViewMoreButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode
}

export default function ViewMoreButton({children, className, ...args}: Readonly<ViewMoreButtonProps>) {
	return (
		<button
			className={`border rounded-4xl px-14 py-4 font-[lexend] font-medium border-[#0000002b] ${className ?? ''}`}
			{...args}
		>
			{children}
		</button>
	)
}