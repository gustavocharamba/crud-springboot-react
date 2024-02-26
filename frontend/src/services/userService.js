import axios from "axios";

export const createUser = async (obj) => {
    try{
        await axios.post(`http://localhost:8080/users`, {obj})
    } catch (error) {
        throw error
    }
}

export const getUsers = async (res) => {
    try{
        const response = await axios.get("http://localhost:8080/users")
        
        return response.data
   } catch (error){
        throw error
   }
}

export const deleteUser = async (id) => {
    try{
        await axios.delete(`http://localhost:8080/users/${id}`)
    } catch (error){
        throw error
    }
}

export const editUser = async (id) => {
    try{
        await axios.put(`http://localhost:8080/users/${id}`)
    } catch (error) {
        throw error
    }
}