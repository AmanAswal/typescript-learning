var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["GUEST_USER"] = 2] = "GUEST_USER";
})(Role || (Role = {}));
;
var person = {
    name: "aman",
    age: 25,
    skills: ["React", "Node"],
    product: [10, "macbook"],
    role: Role.ADMIN,
};
