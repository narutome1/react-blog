import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json();

            })
            .then((data) => {
                console.log(data);
                setData(data)
                setIsPending(false);
            })
            .catch((e) => {
                console.log(e.message);
            })

    }, [url /* this is the dependancy to rerun the useeffect*/]);

    return { data, isPending }; 

}

export default useFetch;
