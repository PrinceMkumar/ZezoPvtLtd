// import React from 'react'
// import { useState, useEffect } from 'react';
// import AuthService from './service/AuthServiceUsers';

// export default function LoginComponent(props) {

//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');

//     useEffect(() => { localStorage.clear() }, []);

//    const login = (e) => {
//         e.preventDefault();
//         const credentials = {username: username, password: password};
//         AuthService.login(credentials).then(res => {

//            props.history.push('/UserLogin');
            
//         });
//     };
//     console.log('Component Call');
//     const styles= {
//         center :{
//             display: 'flex',
//             justifyContent: 'center'
    
//         },
//         notification: {
//             display: 'flex',
//             justifyContent: 'center',
//             color: '#dc3545'
//         }
//     }
//     return (
//         <>
//                 {/* <AppBar position="static">
//                     <Toolbar>
//                         <Typography variant="h6">
//                             React User Application
//                         </Typography>
//                     </Toolbar>
//                 </AppBar> */}
//                 <>
//                     {/* <Typography variant="h4" style={styles.center}>Login</Typography> */}
//                     <form>
//                         {/* <Typography variant="h4" style={styles.notification}>{message}</Typography> */}
//                         <input type="text" label="USERNAME"  name="username" value={username} onChange={(e)=> setUsername(e.target.value) }/>

//                         <input type="password" label="PASSWORD"  name="password" value={password} onChange={(e)=> setPassword(e.target.value) }/>

//                         <input type="button" value="Login" onClick={login}/>
//                     </form>
//                 </>
//             </>
//     )
// }
