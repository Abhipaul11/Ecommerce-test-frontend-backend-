export const setlocalStorage = (loggedInUser) => {
    localStorage.setItem('user', JSON.stringify(loggedInUser))

}

export const getlocalStorage = () => {
    const getUser = localStorage.getItem('user')
    return JSON.parse(getUser)
}

export const deletelocalStorage = () => {
    localStorage.removeItem('user')
}