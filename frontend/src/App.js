import './App.css';
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import SignUpScreen from './Screens/SignUpScreen/SignUpScreen';
import SignInScreen from './Screens/SignInScreen/SignInScreen';
import ForgotPasswordScreen from './Screens/ForgotPasswordScreen/ForgotPasswordScreen';
import ResetPasswordScreen from './Screens/ResetPasswordScreen/ResetPasswordScreen';
import ProductScreen from './Screens/ProductScreen/ProductScreen';
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen';
import NavBar from './Components/NavBar/NavBar';
import CategoryScreen from './Screens/CategoryScreen/CategoryScreen';
import SubCategoryScreen from './Screens/SubCategoryScreen/SubCategoryScreen';
import CartScreen from './Screens/CartSCreen/CartScreen';
import {ToastContainer} from "react-toastify";
import ShippingDetailScreen from './Screens/ShippingDetailScreen/ShippingDetailScreen';
import Contact from './Screens/ContactUsScreen/ContactUs';
import ConfirmDetails from './Screens/ConfirmDetails/ConfirmDetails';
import SharePointScreen from './Screens/SharePointScreen/SharePointScreen';
import WishListScreen from './Screens/WishListScreen/WishListScreen';
import SearchScreen from './Screens/SearchScreen/SearchScreen';
import OrdersScreen from './Screens/OrdersScreen/OrdersScreen';
import About from './Screens/AboutUs/AboutUs';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
    
    <Routes>
      <Route path='/' exact element={<NavBar />} >
        <Route path='/' element={<HomeScreen />}/>
        <Route path='about' element={<About />} />
        <Route path='search' element={<SearchScreen />} />
        <Route path='contact' element={<Contact />} />
        <Route path='profile' element={<ProfileScreen/>}/>
        <Route path='wishlist' element={<WishListScreen/>}/>
        <Route path='shop/:category' element={<CategoryScreen />} />
        <Route path='category/:subcategory' element={<SubCategoryScreen />} />
        {/* <Route path='shop/:category/:sub-category/:id' /> */}
        <Route path='product/:id'element={<ProductScreen />}/>
        <Route path="cart" element={<CartScreen />} />
        <Route path='shippingdetails' element={<ShippingDetailScreen />}/>
        <Route path="confirmdetails" element={<ConfirmDetails />}/>
        <Route path='sharepoints' element={<SharePointScreen />} />
        <Route path='orders' element={<OrdersScreen />} />
      </Route>
      <Route path="/signup" element={<SignUpScreen />}  />
      <Route path='/signin'  element={<SignInScreen />} />
      <Route path="/forgotpassword" element={<ForgotPasswordScreen />}/>
      <Route path='/resetpassword/:resetToken' element={<ResetPasswordScreen />}/>
      <Route path="/product/:id" element={<ProductScreen />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
