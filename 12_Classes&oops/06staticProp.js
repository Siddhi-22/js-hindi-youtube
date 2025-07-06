class User{
    constructor(username){
        this.username = username;
    }

    logMe() {
        console.log(`Username is: ${this.username}`);
        
    }

    static createId(){
        return `${this.username}-${Math.floor(Math.random() * 1000)}`;
    }
}

const userOne = new User("Siddhi");
// userOne.logMe();
//console.log(userOne.createId()); // This will throw an error because createId is a static method and cannot be called on an instance



class Teacher extends User{
    constructor(username, email){
        super(username);
        this.email = email;

    }
}

const techerOne = new Teacher("Shreya", "sid@gmail.com");
techerOne.logMe();