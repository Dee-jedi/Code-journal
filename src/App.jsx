import {
  About,
  Blog,
  EditPage,
  Header,
  Home,
  Missing,
  PostPage,
} from './components';
import { Routes, Route } from 'react-router-dom';
import DataProvider from './context/DataContext';

const App = () => {
  return (
    <>
      <Header />
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/postpage" element={<PostPage />} />
          <Route path="/editpage/:id" element={<EditPage />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </DataProvider>
    </>
  );
};

export default App;
