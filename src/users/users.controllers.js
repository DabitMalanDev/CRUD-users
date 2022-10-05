const uuid = require('uuid')

const usersDB = [
    {
        id: '8ea97ec2-f447-4fa7-8e5c-c105332424c2',
        first_name: 'Fernando',
        last_name: 'Malan',
        email: 'fernando@hotmail.com',
        password: '1234',
        birthday: '1996/08/09'
    },
    {
        id: '2ddeaca7-8ede-4822-8658-ef1005e71b22',
        first_name: 'David',
        last_name: 'Perugachi',
        email: 'david@hotmail.com',
        password: '1234abc',
        birthday: '1996/06/10'
    },
    {
        id: '468acb4e-8702-460f-a108-ad8ffc991d7e',
        first_name: 'Edwar',
        last_name: 'Perugachi',
        email: 'edwar@hotmail.com',
        password: '1098bc',
        birthday: '2003/11/25'
    }
]

const getAllUsers = ()=>{
    return usersDB
}

const getUserById = (id) => {
    const data = usersDB.find(user => user.id === id)
    return data
}

const createUser = (
    first_name,
    last_name,
    email,
    password,
    birthday) => {
    const newUser = {
        id: uuid.v4(),
        first_name,
        last_name,
        email,
        password,
        birthday
    }
    usersDB.push(newUser)
    return newUser
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}