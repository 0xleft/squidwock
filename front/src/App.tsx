import { Outlet, Route, Routes } from "react-router-dom"
import Index from "./pages/Index"

function App() {
	return (
		<>
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
		</>
	)
}

function Layout() {
	return (
		<>
			{/* <Header /> */}
			<main>
				<Outlet />
			</main>
			{/* <Footer /> */}
		</>
	)
}

export default App
