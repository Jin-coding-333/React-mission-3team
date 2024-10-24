import { getData } from "./api";
import { useEffect, useState } from "react";

export function HandleApi() {
    const [pic, setPic] = useState([]);

    const handleLoad = async () => {
        const gif = await getData();
        setPic(gif);
    }

    useEffect(() => {
        handleLoad();
    },[])

    return (
        <div>
            <img src={pic} alt='대체이미지'/>
        </div>
    )
}

