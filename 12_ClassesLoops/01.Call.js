function setUserName(username) {
    this.username = username;
    console.log("Called");
}

function createUser(username, emial, password){
    this.emial = emial;
    this.password = password;
    setUserName.call(this, username);
}


const Bhai = new createUser("Bhai Bhai", "bhai@gmial.in", "1234");
console.log(Bhai);