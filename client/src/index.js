import React from 'react';
import { render } from 'react-dom';

import App from '#Components/App';
import Wrapper from '#Components/Wrapper';

render((
  <Wrapper title="Guess Who?">
    <App />
  </Wrapper>
),  document.getElementById("root"));
