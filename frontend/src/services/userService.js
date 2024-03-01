import api from "./api"

export const createUser = async (obj) => {
    try{
        await api.post(`http://localhost:8080/users`, {obj})
    } catch (error) {
        throw error
    }
}

export const getUsers = async () => {
    try{
        const response = await api.get("http://localhost:8080/users")
        
        return response.data
   } catch (error){
        throw error
   }
}

export const getOneUser = async (id) => {
    try{
        const response = await api.get(`http://localhost:8080/users/${id}`)
        
        return response.data
   } catch (error){
        throw error
   }
}

export const deleteUser = async (id) => {
    try{
        await api.delete(`http://localhost:8080/users/${id}`)
    } catch (error){
        throw error
    }
}

export const updateUser = async (id, obj) => {
    try{
        await api.put(`http://localhost:8080/users/${id}`, obj)
    } catch (error) {
        throw error
    }
}