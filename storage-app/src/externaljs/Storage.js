/**
 * Cookie has been used to store the user token instead of
 * localStorage because localStorage connot be directly accessed 
 * from server side code.
 */
export default {
    // Get a cookie value
    get: function(key){
        let name = key + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    },
    // Set a cookie value
    set: function(key, value){
        var d = new Date();
        d.setTime(d.getTime() + (30*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = key + "=" + value + ";" + expires + ";path=/";
    },
    // Remove a cookie
    remove: function(key){
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
    }
}