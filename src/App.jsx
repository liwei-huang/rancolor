import { Fragment } from 'react';
import './App.css';
import ColorProvider from './hooks/useColors.jsx';
import ColorList from './components/ColorList.jsx';
import RandomColor from './components/RandomColor.jsx';

function App() {
  return (
    <Fragment>
      <h1>
        <i className='bi bi-pentagon-half' title='Logo'></i>
        Rancolor
      </h1>
      <ColorProvider>
        <section className='container-create-color'>
          <RandomColor />
        </section>
        <section className='container-color-list'>
          <ColorList />
        </section>
      </ColorProvider>
    </Fragment>
  );
}

export default App;
