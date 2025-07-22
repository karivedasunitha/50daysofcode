const person={
    Firstname:"sunitha",
    Lastname:"reddy",
    getFullname:function(){
        return this.Firstname+""+this.Lastname;
    }
};
document.getElementById("Firstname").innerHTML="Firstname: "+person.Firstname;
document.getElementById("Lastname").innerHTML="Lastname: "+person.Lastname;
document.getElementById("Fullname").innerHTML="Fullname: "+person.getFullname();