import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppWriteContext} from '../appwrite/AppwriteContext';
import Loading from '../components/Loading';
// import AppwriteContextProvider from '../appwrite/AppwriteContext';

// Routes
import AppStack from './AppStack';
import AuthStack from './AuthStack';

const Router = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const {appwrite, isLoggedIn, setIsLoggedIn} = useContext(AppWriteContext);

  useEffect(() => {
    appwrite
      .getCurrentUserDetails()
      .then(res => {
        setIsLoading(false);
        if (res) {
          setIsLoggedIn(true);
        }
      })
      .catch(error => {
        setIsLoading(false);
        setIsLoggedIn(false);
      });
  }, [appwrite, setIsLoggedIn, isLoggedIn]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    // <AppwriteContextProvider>
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
      {/* <AppStack /> */}
    </NavigationContainer>
    // </AppwriteContextProvider>
  );
};

export default Router;
