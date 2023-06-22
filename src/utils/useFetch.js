import { useEffect, useState } from "react";

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
   

    useEffect(() => {
        fetch('http://localhost:3001/words',{cache:'no-cache'})
            .then((res) => res.json())
            .then(({data}) => {     
                setData(data)
                setLoading(false)
            }).catch(error=>{
                if(error.message === 'Failed to fetch')setLoading(false)
                console.log(error.message)
            })
    }, []);

    return { data, loading };
};

export default useFetch;