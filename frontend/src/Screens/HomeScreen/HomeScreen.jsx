import React from 'react'
import BestSeller from '../../Components/BestSeller/BestSeller'
import Category from '../../Components/Category/Category'
import Footer from '../../Components/Footer/Footer'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Subscribe from '../../Components/Subscribe/Subscribe'
// import SectionHead from '../../Components/SectionHead/SectionHead'
// import { Outlet } from 'react-router-dom'
// import NavBar from '../../Components/NavBar/NavBar'
// import HeroSection from '../../components/HeroSection/HeroSection'
// import QualitySection from '../../components/QualitySection/QualitySection'

// import NavBar from '../../components/NavBar/NavBar'
import Reward from '../../Components/Rewardpoints/reward'
const HomeScreen = () => {
  // const navigate = useNavigate();
  // const logout =()=>{
  //   localStorage.removeItem("authToken")
  //   navigate("/");
  // }
  return (
    <>
    {/* <header>
    <NavBar />
    </header> */}

{/* <h1>HomeScreen</h1> */}
<HeroSection/>
{/* <SectionHead title="Our BestSellers" /> */}

<BestSeller />
<Reward/>
<Category />
<Subscribe/>
<Footer />

{/* <button onClick={logout} >Log Out</button> */}
    {/* <HeroSection />
    <QualitySection /> */}
    {/* <Outlet /> */}
    </>
  )
}

export default HomeScreen
