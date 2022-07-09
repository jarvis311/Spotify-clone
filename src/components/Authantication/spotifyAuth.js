    // 1--> click Login 2--> redirect spotify login page  3 --> redirect to home page   
    
    // first i will lick login than i will move on the below link for the authntication..  
    export const authUser = "https://accounts.spotify.com/authorize/";
    
    // after the login i will redirect to the localhost 3000!!!!!
    const redirectUrl = "http://localhost:3000/"


    const clientId = "12839312f6cf4196ae8fd7f6f10fe7f4"


    // what type of operation doing by user that define in scope, so this is allow to user read the song and do some operation
    // remember user can ony read the song he can not delete the song bcz we not give the permisiion in the scope
    var scopes = [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",                           // --> top artist and content
        "user-modify-playback-state",
     
      ];

      // get token from the url
      // example: #token:kdfhgjhbk&name=jig
      export const tokenFromUrl = () => {
        return window.location.hash
            .substring(1)
            .split('&')
            .reduce((initial, item) => {
                let part = item.split('=')
                initial[part[0]] = decodeURIComponent(part[1])

                return initial
            }, {})
      }
    
      export const loginUrl = `${authUser}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`; 