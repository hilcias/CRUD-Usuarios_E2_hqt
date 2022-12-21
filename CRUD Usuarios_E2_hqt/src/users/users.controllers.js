const usersDB = []
let id = 1


const showAllUsers = () => {
    return usersDB
}


const findUserById = (id) => {
    const filterUsers = usersDB.find((user) => user.id == id)
    return filterUsers
  }


  const createNewUser = (user) => {

    const newUser = {
      id: id++,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
      birthday: user.birthday,
    } 
    usersDB.push(newUser)
    return newUser
  }

  const deleteUserById = (id) => {
    usersDB.splice(id - 1, 1)
    return usersDB
  }
  
  //?export
  module.exports = {
    showAllUsers,
    findUserById, 
    createNewUser,
    deleteUserById
  }