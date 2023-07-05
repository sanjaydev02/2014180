import dotenv from 'dotenv';
async function refresh(){
    const token = await fetch('http://104.211.219.98/train/auth',{
        
            "companyName": "lion central",
            "clientID": "a3bc95c2-1c6e-4bb8-bedb-90170226821a",
            "clientSecret": "DpHYjxeUBrVfdwUz",
            "ownerName": "sanjay",
            "ownerEmail": "sanjaycse2003@gmail.com",
            "rollNo": "21"
        }
        ,{ 
            method: 'POST',
    })
    
    process.env.TOKEN = token.access_token;
    return token;
}

export default  refresh;