import { END_POINT } from "../config/environment";
export async function eventLoader({params}) {
    const {eventId} = params
    try{
        const response = await fetch(`${END_POINT.BASE_URL}/event/get-event/${eventId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return response.json(); // The fetched data will be available in the component
    }catch(error){
        console.log(error)
    }   
}

export async function findEventLoader({params}) {
    const {name} = params
    try{
        const response = await fetch(`${END_POINT.BASE_URL}/event/search?text=${name}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = response.json()
        return data; // The fetched data will be available in the component
    }catch(error){
        console.log(error)
    }   
}