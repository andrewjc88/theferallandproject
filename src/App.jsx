import logo from './assets/logo.png';
import tShirt from './assets/black-shirt.png';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function App() {
  const url = window.location.href;
  console.log(url);
  console.log('site version 1.002')

  // const BASENAME = url.includes('localhost') ? '/' : "/theferallandproject";

  return (
    // <Router basename={BASENAME}>
    <Router >
      <Routes>
        {/* update route */}
        <Route path="/" element={<OldHome/>} />
        <Route path="/demo" element={<Home/>} />
        <Route path="/support" element={<Support />}/>
      </Routes>
    </Router>
  );
}

function OldHome() {
    return (
      <div className='bg-white min-h-lvh font-'>
        <div className="flex flex-col mx-auto bg-white min-h-lvh max-w-full">
  
          {/* First section */}
          <div className='relative w-full min-h-[500px] md:max-h-[720px] md:min-h-[720px]'>
  
            <div className='absolute flex flex-col md:flex-row h-full z-10 bg-white bg-opacity-20 justify-end'>
  
              <div className='w-full hidden md:flex md:h-full md:w-2/3 flex-col justify-between'>
                <div className='mt-20 tracking-wide ml-12 text-white font-fjalla text-6xl drop-shadow-[15px_15px_15px_#000]'>
                  <h1 className='pl-3 text-5xl'>Our Mission</h1>
                </div>
              </div>
  
              <div className='flex flex-col h-full justify-evenly w-full md:w-1/3'>
                <div className='mx-auto relative w-44 h-44 md:w-60 md:h-60'>
                  <img className='absolute w-44 h-44 md:w-60 md:h-60 z-10' src={logo} alt="The Feral Land Project Logo" />
                  <div className=' w-44 h-44 absolute rounded-full bg-white blur-lg opacity-60' />
                </div>
                <p className='flex md:text-xl text-black px-1 mt-20 md:mt-0  sm:px-10 md:px-0 md:pr-10 text-balance text-center md:text-right'>
                  The purpose of The&nbsp;Feral&nbsp;Land&nbsp;Project is to provide communities, institutions and wildlife with gardens, parks, green spaces, habitats and safe passageways. We strive to repurpose, steward or rewild feral lands, waste sites and over-paved places into hospitable environments where life&nbsp;will&nbsp;thrive.
                </p>
              </div>
            </div>
            {/* bg image */}
            <div className="absolute w-full min-h-[300px] md:max-h-[720px] md:min-h-[720px] md:clip-arrow-left bg-[url('./assets/background.jpg')] bg-no-repeat bg-center bg-cover sepia-[20%]" />
          </div>
  
          {/* second section */}
          <div className='flex flex-col relative bg-white'>
            <div className='flex flex-col md:flex-row-reverse h-full justify-between absolute z-10'>
              <h1 className='mt-24 md:mr-40 tracking-wide mb-44 mx-auto md:pl-0 text-white font-fjalla text-6xl drop-shadow-[0px_0px_25px_#000]'>
                Our Vision
              </h1>
              <p className='md:text-xl  pt-10 px-4 md:p-0 text-center md:text-left w-full h-full md:h-fit text-balance md:w-1/3 my-auto bg-white md:ml-10'>
                Along with conservation, rewilding, and stewardship, The Feral Land Project envisions a world in which gardens and the act of gardening are recognized and implemented as ways to counteract some of our greatest societal and environmental challenges.            </p>
            </div >
            <div className='flex min-h-[500px] max-h-[500px] md:max-h-[720px] md:min-h-[720px] sepia-[30%] md:clip-right bg-[url("./assets/background-2.jpg")] bg-white text-black bg-cover bg-no-repeat bg-center' />
          </div>
  
          {/* third section */}
          <div className='flex max-h-96 flex-col relative bg-white'>
            <div className='flex h-full w-full justify-between absolute z-10'>
              <h1 className='mt-16 mx-auto w-full text-center md:text-left md:pl-20 text-white font-fjalla tracking-wide text-6xl drop-shadow-[0px_0px_25px_#000]'>
                Our Values
              </h1>
            </div >
            <div className='flex clip-up max-h-96 min-h-96 sepia-[30%] bg-[url("./assets/background-3.jpg")] bg-white text-black bg-cover bg-center bg-no-repeat' />
          </div>
  
          {/* fourth section */}
          <div className="relative bg-white text-black py-16">
  
            {/* three sections */}
            <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6 tracking-wide">
              <div className="w-full md:text-xl md:w-1/3 text-center">
                <h3 className="text-xl mb-4">Community <span className='text-sm'>&</span> Allyship</h3>
                <div className="w-2/3 mx-auto h-0.5 bg-black my-2"></div>
                <p className="text-lg">We strive to create systems that benefit inhabitants from pollinators to people. We recognize that plants and animals, including humans, are allies in a grander scheme and should not be separated by the dualism of society vs. nature.
                </p>
              </div>
              <div className="w-full md:w-1/3 text-center">
                <h3 className="text-xl mb-4">Sustainability <span className='text-sm'>&</span> Conservation</h3>
                <div className="w-2/3 mx-auto h-0.5 bg-black my-2"></div>
                <p className="text-lg">The Feral Land Project intends to preserve existing ecosystems where possible and to rehabilitate, revitalize and regenerate soil which contributes to our current well-being and acts as a gift to future generations and the world.</p>
              </div>
              <div className="w-full md:w-1/3 text-center">
                <h3 className="text-xl mb-4">Participation <span className='text-sm'>&</span> Optimism</h3>
                <div className="w-2/3 mx-auto h-0.5 bg-black my-2"></div>
                <p className="text-lg">We value engagement, holding outside space for community gathering and for appreciating the greater system civilization resides within. Gardens and wild places not only provide us with food and beauty, but bring us hope and health.</p>
              </div>
            </div>
  
            <div className="w-full text-center pt-12">
              <div className="w-4/5 mx-auto h-0.5 bg-white my-2"></div>
              <p className="text-base">We are actively adding new projects and details to this site. Please check back soon!</p>
            </div>
          </div>
  
          {/* fifth */}
          <div className='flex max-h-[400px] min-h-[320px] clip-arrows sepia-[30%] bg-[url("./assets/background-4.jpg")] bg-cover bg-no-repeat bg-bottom' />
  
    {/* Footer */}
          <footer className="bg-white text-black pt-8">
            <div className="container mx-auto px-6 md:px-12 lg:px-24">
  
              <div className="flex flex-col center items-center space-y-6 justify-between md:flex-row">
                {/* logo group */}
                <div className="flex flex-col items-center justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <img className="w-24" src={logo} alt="The Feral Land Project Logo" />
                    <div>
                      <h3 className="text-xl font-semibold">The Feral Land Project</h3>
                      <div className="w-full h-0.5 bg-black my-1"></div>
                      <p>P.O. Box 268 Nevada City, CA 95959</p>
                      <p>info@theferallandproject.org</p>
                    </div>
                  </div>
                </div>
  
                {/* paypal button */}
                <div className="">
                  <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="hosted_button_id" value="Q3RAAD3KGJ4JC" />
                    <input type="image" src="https://pics.paypal.com/00/s/Y2YzZWE0OWMtMGM0Yy00M2RhLWJkMGUtOGQyNThlYzA4Yzc4/file.PNG" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                  </form>
                </div>
              </div>
              <h2 className="text-center text-md font-light mt-8">
                The Feral Land Project is a tax-exempt 501(c)(3) nonprofit organization
              </h2>
            </div>
          </footer>
  
        </div>
      </div>
    )
}

function Home() {
  return (
    <div className='bg-white min-h-lvh font-'>
      <div className="flex flex-col mx-auto bg-white min-h-lvh max-w-full">

        {/* First section */}
        <div className='relative w-full min-h-[500px] md:max-h-[720px] md:min-h-[720px]'>

          <div className='absolute flex flex-col md:flex-row h-full z-10 bg-white bg-opacity-20 justify-end'>

            <div className='w-full hidden md:flex md:h-full md:w-2/3 flex-col justify-between'>
              <div className='mt-20 tracking-wide ml-12 text-white font-fjalla text-6xl drop-shadow-[15px_15px_15px_#000]'>
                <h1 className='pl-3 text-5xl'>Our Mission</h1>
              </div>
            </div>

            <div className='flex flex-col h-full justify-evenly w-full md:w-1/3'>
              <div className='mx-auto relative w-44 h-44 md:w-60 md:h-60'>
                <img className='absolute w-44 h-44 md:w-60 md:h-60 z-10' src={logo} alt="The Feral Land Project Logo" />
                <div className=' w-44 h-44 absolute rounded-full bg-white blur-lg opacity-60' />
              </div>
              <p className='flex md:text-xl text-black px-1 mt-20 md:mt-0  sm:px-10 md:px-0 md:pr-10 text-balance text-center md:text-right'>
                The purpose of The&nbsp;Feral&nbsp;Land&nbsp;Project is to provide communities, institutions and wildlife with gardens, parks, green spaces, habitats and safe passageways. We strive to repurpose, steward or rewild feral lands, waste sites and over-paved places into hospitable environments where life&nbsp;will&nbsp;thrive.
              </p>
              <a href="/support" class="font-fjalla md:mr-10 mx-20  rounded-md bg-green-800 hover:bg-green-900 border-sh px-3.5 py-3 text-sm font-semibold text-white text-center shadow-xs shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Support Our Mission!</a>
            </div>
          </div>
          {/* bg image */}
          <div className="absolute w-full min-h-[300px] md:max-h-[720px] md:min-h-[720px] md:clip-arrow-left bg-[url('./assets/background.jpg')] bg-no-repeat bg-center bg-cover sepia-[20%]" />
        </div>

        {/* second section */}
        <div className='flex flex-col relative bg-white'>
          <div className='flex flex-col md:flex-row-reverse h-full justify-between absolute z-10'>
            <h1 className='mt-24 md:mr-40 tracking-wide mb-44 mx-auto md:pl-0 text-white font-fjalla text-6xl drop-shadow-[0px_0px_25px_#000]'>
              Our Vision
            </h1>
            <p className='md:text-xl  pt-10 px-4 md:p-0 text-center md:text-left w-full h-full md:h-fit text-balance md:w-1/3 my-auto bg-white md:ml-10'>
              Along with conservation, rewilding, and stewardship, The Feral Land Project envisions a world in which gardens and the act of gardening are recognized and implemented as ways to counteract some of our greatest societal and environmental challenges.            </p>
          </div >
          <div className='flex min-h-[500px] max-h-[500px] md:max-h-[720px] md:min-h-[720px] sepia-[30%] md:clip-right bg-[url("./assets/background-2.jpg")] bg-white text-black bg-cover bg-no-repeat bg-center' />
        </div>

        {/* third section */}
        <div className='flex max-h-96 flex-col relative bg-white'>
          <div className='flex h-full w-full justify-between absolute z-10'>
            <h1 className='mt-16 mx-auto w-full text-center md:text-left md:pl-20 text-white font-fjalla tracking-wide text-6xl drop-shadow-[0px_0px_25px_#000]'>
              Our Values
            </h1>
          </div >
          <div className='flex clip-up max-h-96 min-h-96 sepia-[30%] bg-[url("./assets/background-3.jpg")] bg-white text-black bg-cover bg-center bg-no-repeat' />
        </div>

        {/* fourth section */}
        <div className="relative bg-white text-black py-16">

          {/* three sections */}
          <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-6 tracking-wide">
            <div className="w-full md:text-xl md:w-1/3 text-center">
              <h3 className="text-xl mb-4">Community <span className='text-sm'>&</span> Allyship</h3>
              <div className="w-2/3 mx-auto h-0.5 bg-black my-2"></div>
              <p className="text-lg">We strive to create systems that benefit inhabitants from pollinators to people. We recognize that plants and animals, including humans, are allies in a grander scheme and should not be separated by the dualism of society vs. nature.
              </p>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <h3 className="text-xl mb-4">Sustainability <span className='text-sm'>&</span> Conservation</h3>
              <div className="w-2/3 mx-auto h-0.5 bg-black my-2"></div>
              <p className="text-lg">The Feral Land Project intends to preserve existing ecosystems where possible and to rehabilitate, revitalize and regenerate soil which contributes to our current well-being and acts as a gift to future generations and the world.</p>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <h3 className="text-xl mb-4">Participation <span className='text-sm'>&</span> Optimism</h3>
              <div className="w-2/3 mx-auto h-0.5 bg-black my-2"></div>
              <p className="text-lg">We value engagement, holding outside space for community gathering and for appreciating the greater system civilization resides within. Gardens and wild places not only provide us with food and beauty, but bring us hope and health.</p>
            </div>
          </div>

          <div className="w-full text-center pt-12">
            <div className="w-4/5 mx-auto h-0.5 bg-white my-2"></div>
            <p className="text-base">We are actively adding new projects and details to this site. Please check back soon!</p>
          </div>
        </div>

        {/* fifth */}
        <div className='flex max-h-[400px] min-h-[320px] clip-arrows sepia-[30%] bg-[url("./assets/background-4.jpg")] bg-cover bg-no-repeat bg-bottom' />

        {/* Footer */}
        <footer className="bg-white text-black pt-8">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">

            <div className="flex flex-col center items-center space-y-6 justify-between md:flex-row">
              {/* logo group */}
              <div className="flex flex-col items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <img className="w-24" src={logo} alt="The Feral Land Project Logo" />
                  <div>
                    <h3 className="text-xl font-semibold">The Feral Land Project</h3>
                    <div className="w-full h-0.5 bg-black my-1"></div>
                    <p>P.O. Box 268 Nevada City, CA 95959</p>
                    <p>info@theferallandproject.org</p>
                  </div>
                </div>
              </div>

              {/* paypal button */}
              <a href="/support" class="font-fjalla lg:mr-10 mx-20  rounded-md bg-green-800 hover:bg-green-900 border-sh px-3.5 py-3 text-sm font-semibold text-white text-center shadow-xs shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Support Our Mission!</a>

              {/* <div className="">
                <form action="https://www.paypal.com/donate" method="post" target="_top">
                  <input type="hidden" name="hosted_button_id" value="Q3RAAD3KGJ4JC" />
                  <input type="image" src="https://pics.paypal.com/00/s/Y2YzZWE0OWMtMGM0Yy00M2RhLWJkMGUtOGQyNThlYzA4Yzc4/file.PNG" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                  <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
              </div> */}
            </div>

            <h2 className="text-center text-md font-light mt-8">
              The Feral Land Project is a tax-exempt 501(c)(3) nonprofit organization
            </h2>
          </div>
        </footer>

      </div>
    </div>
  )
}

function Support() {
  return (
    <div className='bg-white min-h-lvh font-'>
      <div className="flex flex-col mx-auto bg-white min-h-lvh max-w-full">

        {/* First section */}
        <div className='relative w-full min-h-[500px] md:max-h-[720px] md:min-h-[720px]'>

          <div className='absolute flex flex-col  md:flex-row h-full z-10justify-end'>

            <div className='w-full h-full hidden md:flex md:h-full md:w-2/3 flex-col '>
              <div className='mt-20 tracking-wide ml-12 text-white font-fjalla text-6xl drop-shadow-[15px_15px_15px_#000]'>
                <h1 className='pl-3 text-5xl'></h1>
                <a href="/demo" class="px-3.5 py-3 text- font-thin text-white text-center shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  {'< '}Home
                </a>
              </div>
              <img className='absolute w-44 h-44 md:w-60 md:h-60 z-10 my-auto' src={tShirt} alt="The Feral Land Project T-Shirt in black" />
            </div>

            <div className='flex flex-col h-full justify-evenly w-full md:w-1/3'>
              <div className='mx-auto relative w-44 h-44 md:w-60 md:h-60'>
                <img className='absolute w-44 h-44 md:w-60 md:h-60 z-10' src={logo} alt="The Feral Land Project Logo" />
                <div className='hidden sm:enabled: w-44 h-44 absolute rounded-full bg-white blur-lg opacity-60'/>
              </div>

              <p className='md:text-xl text-black px-1 mt-80 md:mt-0 sm:px-10 md:px-0 md:pr-10 text-balance text-center md:text-right'>
                Your financial contribution directly supports our efforts to 
                improve community sustainability,<br/>  
                beauty<span className='text-sm'>&nbsp;&&nbsp;</span>resilience.
              </p>

              <div className='flex flex-col justify-end sm:mx-10'> 
                <a href="https://theferallandproject.printful.me/mens-clothing" class="rounded-md bg-green-800 hover:bg-green-900 px-3.5 py-3 text-sm font-semibold text-white text-center shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                  Shop T-Shirts and Merch!
                </a>
                
                {/* paypal button */}
                <div className='flex pr-10'>
                  <form action="https://www.paypal.com/donate" method="post" target="_top">
                    <input type="hidden" name="hosted_button_id" value="Q3RAAD3KGJ4JC" />
                    <input type="image" src="https://pics.paypal.com/00/s/Y2YzZWE0OWMtMGM0Yy00M2RhLWJkMGUtOGQyNThlYzA4Yzc4/file.PNG" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                  </form>
                </div>

              </div>
            </div>
          </div>

          {/* bg image */}
          <div className="w-full bg-cover min-h-[300px] md:max-h-[720px] md:min-h-[720px] md:clip-arrow-left bg-[url('./assets/background-7.jpg')] bg-no-repeat bg-center" />
        </div>

        {/* second section */}
        <div className='flex flex-col relative bg-white'>
          <div className='flex flex-col md:flex-row-reverse h-full justify-between absolute z-10'>
            <h1 className='mt-24 md:mr-40 tracking-wide mb-44 mx-auto md:pl-0 text-white font-fjalla text-6xl drop-shadow-[0px_0px_25px_#000]'>
              Our Vision
            </h1>
            <p className='md:text-xl  pt-10 px-4 md:p-0 text-center md:text-left w-full h-full md:h-fit text-balance md:w-1/3 my-auto bg-white md:ml-10'>
              Along with conservation, rewilding, and stewardship, The Feral Land Project envisions a world in which gardens and the act of gardening are recognized and implemented as ways to counteract some of our greatest societal and environmental challenges.            </p>
          </div >
          <div className='flex min-h-[500px] max-h-[500px] md:max-h-[720px] md:min-h-[720px] md:clip-right bg-[url("./assets/background-8.jpg")] bg-white text-black bg-cover bg-no-repeat bg-center' />
        </div>

        {/* Footer */}
        <footer className="bg-white text-black pt-8">
          <div className="container mx-auto px-6 md:px-12 lg:px-24">

            <div className="flex flex-col center items-center space-y-6 justify-between md:flex-row">
              {/* logo group */}
              <div className="flex flex-col items-center justify-between space-y-4 md:space-y-0">
                <div className="flex items-center space-x-4">
                  <img className="w-24" src={logo} alt="The Feral Land Project Logo" />
                  <div>
                    <h3 className="text-xl font-semibold">The Feral Land Project</h3>
                    <div className="w-full h-0.5 bg-black my-1"></div>
                    <p>P.O. Box 268 Nevada City, CA 95959</p>
                    <p>info@theferallandproject.org</p>
                  </div>
                </div>
              </div>
              
              {/* paypal button */}
              <div className="flex  flex-col">
                <form className='flex flex-shrink' action="https://www.paypal.com/donate" method="post" target="_top">
                  <input type="hidden" name="hosted_button_id" value="Q3RAAD3KGJ4JC" />
                  <input type="image" src="https://pics.paypal.com/00/s/Y2YzZWE0OWMtMGM0Yy00M2RhLWJkMGUtOGQyNThlYzA4Yzc4/file.PNG" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                  <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
              </div>

            </div>
            <h2 className="text-center text-md font-light mt-8">
              The Feral Land Project is a tax-exempt 501(c)(3) nonprofit organization
            </h2>
          </div>
        </footer>

      </div>
    </div>
  )
}
