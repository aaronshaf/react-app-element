import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

class ReactApp extends HTMLElement {
  static get observedAttributes() {
    return ['src'];
  }

  attributeChangedCallback(_name, _oldValue, newValue) {
    const App = React.lazy(() => import(newValue));
    ReactDOM.render(
      <Suspense fallback={<div></div>}>
        <App />
      </Suspense>,
      this,
    );
  }

  connectedCallback() {
    console.log('Custom element added to page.');
    // updateStyle(this);
  }
}
customElements.define('react-app', ReactApp);
