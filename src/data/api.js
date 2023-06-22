import axios from "axios";
    
async function fetchTasks() {
    const { data } = await axios.get('http://127.0.0.1:8000/api/tasks/')
    return data
}
    
export default fetchTasks;