import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/spotlight/styles.css';
import { Notifications } from '@mantine/notifications';
import { Outlet, Route, Routes } from "react-router-dom"
import Index from "./pages/Index"
import Login from "./pages/Login"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NoMatch from "./pages/NoMatch"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { AppShell, MantineProvider } from '@mantine/core';
import UserDashboard from './pages/user/Dashboard';
import UserInfo from './pages/user/Info';
import PostCreate from './pages/post/Create';
import PostView from './pages/post/View';
import PostEdit from './pages/post/Edit';
import Posts from './pages/Posts';

function App() {
  return (
    <>
      <MantineProvider defaultColorScheme='dark'>
        <Notifications />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="login" element={<Login />} />
            <Route path="user">
              <Route index element={<UserDashboard />} />
              <Route path=":id" element={<UserInfo />} />
            </Route>
            <Route path="posts" element={<Posts />} />
            <Route path="post">
              <Route index element={<PostCreate />} />
              <Route path=":id">
                <Route index element={<PostView />} />
                <Route path="edit" element={<PostEdit />} />
              </Route>
            </Route>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
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
