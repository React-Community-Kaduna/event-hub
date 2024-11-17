import { END_POINT } from "../config/environment";
export async function getAlleventLoader() {
    try{
        const response = await fetch(`${END_POINT.BASE_URL}/event/all?limit=25`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data =  response.json(); 
        return data// The fetched data will be available in the component
    }catch(error){
        console.log(error)
    }   
}
