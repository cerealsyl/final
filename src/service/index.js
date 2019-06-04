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
    }

    findAllUsers = () => {
        return this.users
    }
}