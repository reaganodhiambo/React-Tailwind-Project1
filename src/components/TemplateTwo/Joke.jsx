/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const JokeItem = ({ joke }) => {
    return (
        <div className="bg-blue-50">
            <h1>{joke.title}</h1>
        </div>
        
    );
}


const Joke = () => {
    const [joke, setJoke] = useState([]);
    const [loading, setLoading] = useState(false);
    
    
    useEffect(() => {
        const fetchJoke = async () => {
            try {
                const res = await fetch("http:///localhost:27017/LibraryManagement.Books");
                const data = await res.json();
                setJoke(data);
                setLoading(false);
            }
            catch (error) {
                console.log(error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchJoke();
    }, []);
    if (loading) {
        return <h2 className="text-3xl font-bold mt-5">Loading...</h2>
    }

    return <JokeItem joke={joke} />
};
export { Joke as UseExample };