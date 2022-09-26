import React, {useMemo} from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import ScrollToTop from 'utils/ScrollToTop'
import DefaultRoutes from 'Routes';
import Layout from 'layout/layout'
import get from 'lodash.get'
import {/* getDomain, */ getSubdomain} from 'utils'


import {
  DefaultLayout,
  Messages
} from "modules/avl-components/src"

import home from 'sites/home'


const Sites = {
  'home': home
}

const App = (props) => {
  const SUBDOMAIN = getSubdomain(window.location.host)
  // const PROJECT_HOST = getDomain(window.location.host)

  const site = useMemo(() => {
      return get(Sites, SUBDOMAIN, Sites['home'])
  },[SUBDOMAIN])

  const Routes =  useMemo(() => {
    return [...site.Routes, ...DefaultRoutes ]
  }, [site])

  return (
    <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
      <ScrollToTop />
      <Switch>
        { Routes.map((route, i) =>
            <DefaultLayout 
              site={site.title} 
              layout={'Simple'} 
              key={ i }
              menus={ Routes.filter(r => r.mainNav) }
              { ...route } 
              { ...props }
            />
          )
        }
      </Switch>
      <Messages />
    </BrowserRouter>
  );
}

export default App;
