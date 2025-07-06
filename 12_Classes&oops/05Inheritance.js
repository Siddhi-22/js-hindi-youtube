class user{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}


class Teacher extends user{
    constructor(username, email, password){
        super(username);
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course has been added by ${this.username}`);
        
    }
}

const techerOne = new Teacher("Hitesh","hitu@gmail.com", "1234");
techerOne.addCourse();


const UserOne = new user("Hitesh");
UserOne.logMe();
//UserOne.addCourse(); // This will throw an error because addCourse is not defined in the user class


console.log(techerOne === UserOne);//
console.log(techerOne instanceof Teacher); // true
console.log(techerOne instanceof user); // true
