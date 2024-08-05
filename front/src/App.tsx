import '@mantine/core/styles.css';
import { Outlet, Route, Routes } from "react-router-dom"
import Index from "./pages/Index"
import Login from "./pages/Login"
import User from "./pages/User"
import Post from "./pages/Post"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NoMatch from "./NoMatch"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { AppShell, MantineProvider } from '@mantine/core';

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme='dark'>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </MantineProvider>
    </>
  )
}

function Layout() {
  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 200,
          breakpoint: 'sm',
          collapsed: { mobile: true, desktop: true },
        }}
        padding="md"
      >
        <Header />
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
        <Footer />
      </AppShell>
    </>
  )
}

export default App
