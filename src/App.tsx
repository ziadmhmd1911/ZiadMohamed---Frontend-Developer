import './App.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

import { DataGrid, Filters } from '@modules';
import { store } from '@store';
import { Buffer } from 'buffer';
import { Provider } from 'react-redux';

import Banner from './modules/Banner/Banner';
import { PaginationContextProvider } from './modules/Pagination';

window.Buffer = Buffer;

function App() {
  return (
    <Provider store={store}>
      <Banner />
      <Filters />
      <PaginationContextProvider>
        <DataGrid />
      </PaginationContextProvider>
    </Provider>
  );
}

export default App;
