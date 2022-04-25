import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Table from './components/Table';
import FileUpload from './components/FileUpload';
import MultipleFile from './components/MultipleFile';
import DependentDropdown from './components/Dependent_dropdown';
import SearchableDD from './components/SearchableDD';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Table /> */}
      {/* <FileUpload /> */}
      {/* <MultipleFile /> */}
      {/* <DependentDropdown /> */}
      <SearchableDD />
    </div>
  );
}

export default App;
