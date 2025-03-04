export type BillPreference = {
	address: string;
	city: string;
	country: string;
	name: string;
	zipCode?: string;
	company?: string;
}

export type User = {
	id: number;
	username: string;
	email: string;
	role: "admin" | "user";
	avatarSrc?: string;
	firstName?: string;
	lastName?: string;
	phoneNumber?: string;
	billPreference?: BillPreference;
	likedArticles: number; // article id
}