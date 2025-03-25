import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from "react-router-dom";

const Home = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">Home Page</h1>
    <p>Welcome to the homepage.</p>
  </div>
);

const About = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold">About Page</h1>
    <p>This is the about page.</p>
  </div>
);

const User = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">User Page - ID: {id}</h1>
      <button 
        className="mt-4 p-2 bg-blue-500 text-white rounded"
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <nav className="flex gap-4 p-4 bg-gray-200">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user/42">User 42</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
  </BrowserRouter>
);

export default App;
