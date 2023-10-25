class User {
    constructor(username){
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`This Course was added by ${this.username}`);
    }
}

const firstTeacher = new Teacher('Abhishek', 'ab@as.com', 'abc');
firstTeacher.addCourse()