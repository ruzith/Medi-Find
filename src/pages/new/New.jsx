// import React, { useState } from 'react';
// import { TextField, Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import './new.scss';

// const useStyles = makeStyles({
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginTop: '2rem',
//   },
//   textField: {
//     margin: '1rem 0',
//   },
//   button: {
//     margin: '1rem 0',
//   },
// });

// const New = () => {
//   const [pharmacyName, setPharmacyName] = useState('');
//   const [ownerName, setOwnerName] = useState('');
//   const [email, setEmail] = useState('');
//   const [location, setLocation] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const classes = useStyles();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//   };

//   return (
//     <form className={classes.form} onSubmit={handleSubmit}>
//       <TextField
//         label="Pharmacy Name"
//         variant="outlined"
//         className={classes.textField}
//         value={pharmacyName}
//         onChange={(e) => setPharmacyName(e.target.value)}
//       />
//       <TextField
//         label="Pharmacy Owner Name"
//         variant="outlined"
//         className={classes.textField}
//         value={ownerName}
//         onChange={(e) => setOwnerName(e.target.value)}
//       />
//       <TextField
//         label="Email Address"
//         variant="outlined"
//         className={classes.textField}
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <TextField
//         label="Add Location"
//         variant="outlined"
//         className={classes.textField}
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//       />
//       <TextField
//         label="Create Password"
//         variant="outlined"
//         className={classes.textField}
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <TextField
//         label="Confirm Password"
//         variant="outlined"
//         className={classes.textField}
//         type="password"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//       />
//       <Button
//         variant="contained"
//         color="primary"
//         className={classes.button}
//         type="submit"
//       >
//         Sign Up
//       </Button>
//     </form>
//   );
// };

// export default New;
