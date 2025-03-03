import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {ChevronDown} from "lucide-react";
import {SortType} from "@/types/testimonials.types";

interface SortDropdownProps {
	sortType: SortType;
	setSortType: (type: SortType) => void;
}

const sortOptions: { value: SortType; label: string }[] = [
	{value: "latest", label: "Plus récents"},
	{value: "oldest", label: "Plus anciens"},
	{value: "highest-rated", label: "Mieux notés"},
	{value: "lowest-rated", label: "Moins bien notés"},
];

export function SortDropdown({sortType, setSortType}: Readonly<SortDropdownProps>) {

	const handleSort = (type: SortType) => {
		setSortType(type);
	};

	// Récupère le label de l'option actuellement sélectionnée
	const currentSortLabel = sortOptions.find((option) => option.value === sortType)?.label;

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" className="flex items-center gap-2 bg-white border-gray-200 hover:bg-gray-50">
					<span>{currentSortLabel}</span>
					<ChevronDown className="h-4 w-4 opacity-70"/>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end" className="w-40">
				{sortOptions.map((option) => (
					<DropdownMenuItem
						key={option.value}
						onClick={() => handleSort(option.value)}
						className={`cursor-pointer ${sortType === option.value ? 'font-medium bg-gray-50' : ''}`}
					>
						{option.label}
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}