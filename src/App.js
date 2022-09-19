import { Route, Routes, Redirect } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

function App() {
	return (
		<div>
			<MainHeader />
			<main>
				<Routes>
					<Route path='/' exact >
						{/* <Redirect to='/welcome' />  */}
					</Route>
					<Route path="/welcome" element={<Welcome />} />
					<Route path="/products" element={<Products />} />
					<Route path='/product-detail/:productId' element={<ProductDetail />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;

// Redirect  there is error!   (doesn't work like it should)

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book  (any value=cankacat arjeq)
