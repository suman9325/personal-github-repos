import { useEffect } from 'react';
const useSetWindowLocation = () => {
    useEffect(() => {
        if (window.location.host === "localhost:3000") {
            console.log("The UI should only be accessed from behind the gateway. Redirecting...");
            window.location.href = "http://localhost:8000"
        }
    },[])
}
export default useSetWindowLocation;