import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { LDProvider } from 'launchdarkly-react-client-sdk';

import App from './App.tsx';
import './index.css';

// Configure the LaunchDarkly user context
// Replace these values with your actual user data in production
const context = {
  kind: 'user',
  key: 'user-key-123abcde',
  email: 'biz@face.dev',
  role: 'visitor',  // Attribute for role-based targeting
  beta: false       // Attribute for beta user targeting
};

// Replace this with your LaunchDarkly SDK key
const clientSideID = '67d16d256f0e8e09824d22b2';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LDProvider clientSideID={clientSideID} context={context}>
      <App />
    </LDProvider>
  </StrictMode>,
);