import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Context } from '..';
import { authRoutes, publicRoutes } from '../router/routes';

const AppRouter: React.FC = () => {
  const { user } = useContext(Context);
  console.log(user);

  // const isAuth = false;

  return (
    <Routes>
      {user.isAuth && authRoutes.map(({path, Element}) => (
        <Route key={path} path={path} element={ <Element />}/>
        ))}
      {publicRoutes.map(({path, Element}) => (
        <Route key={path} path={path} element={ <Element />}/>
        ))}
    </Routes>
  );
};

export default AppRouter;