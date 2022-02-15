import React from 'react';

export const Website_context = React.createContext({
    token: '',
    isLoggedIn: false,
    login: (token: String) => {},
    logout: () => {}

})


