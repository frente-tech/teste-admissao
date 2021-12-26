import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  email: '',
  role: '',
};

const UserContext = createContext(INITIAL_STATE);

const { Provider } = UserContext;

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(INITIAL_STATE);
  const userContext = {
    userData,
    setUserData,
  };

  return <Provider value={ userContext }>{children}</Provider>;
};

export const useUserCtx = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserCtx must be used within a UserProvider');
  }
  return context;
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
