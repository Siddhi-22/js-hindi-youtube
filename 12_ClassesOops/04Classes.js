// class User{
//     constructor(username, email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`;
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const one = new User("Sid", "sid@gmail.com", 'wxyz');
// console.log(one.encryptPassword());


// const two = new User("Hitesh", "hit@gmail.com", 'abcd');
// console.log(two.changeUsername());


//BTS
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;

}

    User.prototype.encryptPassword = function(){
        return `${this.password}abc`;
    }

    User.prototype.changeUsername = function(){
        return `${this.username.toUpperCase()}`;
    }

const ek = new User("Siddhi", "siddhi@gmail.com", 'wxyz');
console.log(ek.encryptPassword());
console.log(ek.changeUsername());

