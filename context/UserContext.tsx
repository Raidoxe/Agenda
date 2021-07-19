import React from 'react';
import firebase from 'firebase/app';

const userContext = React.createContext<firebase.User | null>(null);

export default userContext;