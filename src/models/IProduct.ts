export interface IProduct{
	title: string;
	specializedSubjects: specializedSubject[];
}

export interface specializedSubject{
	id: number;
	string: string;
}