import './styles/index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { ErrorBoundary } from './components';

import configureAppStore, { getPreloadedState } from './store/configureStore';

import AppContextProvider from './contexts/AppContextProvider';

import {BrowserRouter} from "react-router-dom";
import { HomePage } from './pages';


(async () => {
    const preloadedState = getPreloadedState();

    const root = createRoot(document.getElementById('root'));

    root.render(
      <React.StrictMode>
            <ReduxProvider store={configureAppStore(preloadedState)}>
                <AppContextProvider>
                <ErrorBoundary>

                    <HomePage />
              
                    </ErrorBoundary>
                </AppContextProvider>
            </ReduxProvider>
      </React.StrictMode>
    );
})();
