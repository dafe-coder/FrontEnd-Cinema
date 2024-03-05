import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'

interface IHeading
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	title: string
}

export const Heading: FC<IHeading> = ({ title, className, ...props }) => {
	return (
		<div
			className={`text-white text-opacity-80 font-semibold ${className?.includes('xl') ? '' : 'text-3xl'} ${className}`}
			{...props}
		>
			Heading
		</div>
	)
}
