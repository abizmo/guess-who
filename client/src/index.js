import React from 'react';
import { render } from 'react-dom';

import App from '#Components/App';
import Wrapper from '#Components/Wrapper';

import { Provider } from './context';
import './index.css';

render((
  <Provider>
    <Wrapper title="Guess Who?">
      <App />
    </Wrapper>
  </Provider>
),  document.getElementById("root"));
