enum Role {ADMIN, AUTHOR, GUEST_USER};

const person: {
	name: string;
	age: number;
	skills: string[];
	product: [number, string];
    role: Role
} = {
	name: "aman",
	age: 25,
	skills: ["React", "Node"],
	product: [10, "macbook"],
	role: Role.ADMIN,
};
