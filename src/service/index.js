export default class Service {
    static myInstance = null;

    users = [
        {
            id: '123',
            username: 'dan',
            password: 'dan',
            email: 'dan@gmail.com'
        },
        {
            id: '234',
            username: 'siyang',
            password: 'siyang',
            email: 'siyang@gmail.com'
        },
        {
            id: '345',
            username: 'heather',
            password: 'heather',
            email: 'heather@gmail.com'
        }
    ]

    static getInstance() {
        if(Service.myInstance == null) {
            Service.myInstance = new Service();
        }
        return this.myInstance
    }

    createUser = user => {
        this.users.push(user)
        return this.users
    }

    findAllUsers = () => {
        return this.users
    }

    validateUser = (email, password) => {
        console.log("service")

        for(let i = 0; i < this.users.length; i++) {
            if(this.users[i].email === email && this.users[i].password === password) {
                return true
            }else{
                return false
            }
        }

    }
}