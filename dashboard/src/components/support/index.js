import React from 'react';  
import { Provider } from 'react-redux';

// import FormContainer from './modules/form/form.container';  
import Store from './store';

const store = Store();

const SupportForm = props => {  
  return (
    <Provider store={store}>
      <div>
        what
      </div>
    </Provider>
  );
}


export default SupportForm