
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth'
// import './App.css'
import { login, logout } from './store/authSlice';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';

function App() {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    <div className="flex flex-wrap content-between bg-bgColor w-full">
      <div className="w-full">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <>
      <div className="w-full min-h-screen text-center flex items-center justify-center bg-bgColor text-textColor">
        <h1 className="text-xl p-10 font-bold inline-block  transition duration-200">
          Loading...
        </h1>
      </div>
    </>
  );
}

export default App