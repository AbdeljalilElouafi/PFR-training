// javascript oop: 

class Personne {
    constructor(nom, age) {
        this.nom = nom;
        this.age = age;
    }

    salutation() {
        console.log(`Bonjour, je m'appelle ${this.nom}`);
    }
}


let personne1 = new Personne("tahcha", 22);
let personne2 = new Personne("mahmouud", 19);


console.log(personne1.nom); 
console.log(personne1.age); 

console.log(personne2.nom); 
console.log(personne2.age); 

personne1.salutation(); 
personne2.salutation(); 
