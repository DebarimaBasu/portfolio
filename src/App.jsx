import { BrowserRouter } from "react-router-dom";

import {  Contact, About, Hero, Navbar, Tech, Works, StarsCanvas ,SocialLinks} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
         
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center '>
        
          <Navbar />
          <Hero />
        </div>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <About/>
        </div>
         <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Tech />
        </div>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Works />
        </div>
        
        </div>
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
       
        <div className='items-center justify-center flex flex-col'>
          
          <SocialLinks/>
        </div>
     
     </div>
    </BrowserRouter>
  );
}

export default App;
