const people=[
    {firstName:"kariveda",lastName:"Sunitha"},
    {firstName:"Jane",lastName:"smith"},
    {firstName:"peter",lastName:"jones"}
];
const peoplewithFullname= people.map(person=>{
    return{...person, fullName:'${person,firstName} ${person.lastName}'};
});
console.log("original people:",people);
console.log("people with full name:",peoplewithFullname);
