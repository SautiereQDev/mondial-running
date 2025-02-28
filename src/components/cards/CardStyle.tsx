import Image from 'next/image'

export default function CardStyle({image, title} : Readonly<{ image: string, title: string }>) {
	return (
		<div>
			<Image src={image} alt={title}/>
			<h4>{title.slice(0,1).toUpperCase() + title.slice(1, title.length)}</h4>
		</div>
	)
}
