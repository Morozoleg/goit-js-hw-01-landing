import {useEffect, useState} from "react";
let globalThis = require('globalthis')();

const useCheckSSR = () => {
    const [isFront, setIsFront] = useState(false);

    useEffect(() => {
        process.nextTick(() => {
            if (globalThis.window !== false) {
                setIsFront(true);
            }
        });
    }, []);

    return isFront;
}

export default useCheckSSR;