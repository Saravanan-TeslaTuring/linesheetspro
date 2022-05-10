<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
//  var typed = new Typed('.animate', {
//     strings: ["PASSION", "ACTION", "PROGRESS"],
//     typeSpeed: 50
//     });
</script>

<template>
    <div class="h-screen font-sans">
    <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="grow-0">
            <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow">
          </div>
          <div class="grow hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Dashboard</a>

              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>

              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>

              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>

              <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Reports</a>
            </div>
          </div>
        </div>     
        <div class="-mr-2 flex md:hidden">
          <!-- Mobile menu button -->
          <button type="button" class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            -->
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            -->
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <!-- <div class="md:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>

        <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Reports</a>
      </div>    -->
    <!-- </div> -->
  </nav>
    <div class="bg-gray h-[34%] md:p-[40px] xl:p-[120px]">
        <div class="text-center mx-auto justify-center grid content-center">
          <div class="xl:text-4xl md:text-2xl font-light">
            Create Powerful Websites <span class="italic text-purple"> Beautifully.</span>
          </div>
          <div>
            <div class="pt-8 text-5xl animate inline-block font-bold text-[#333]">
                Imagine ..Create ..Sell
            </div>
            <div class="pt-8 text-md w-[600px] mx-auto text-textGray">
                The <b> Best Selling</b> Multi-Purpose & Powerful Bootstrap 5.x Template with 1200+ Niche, Multi-Page & One-Page Layouts and 1500+ UI Features.
                <button class="bg-purple rounded hover:bg-gray text-gray hover:text-purple border hover:border-purple mt-8 py-3 px-4 mr-3">
                    View Demo
                </button>
                <button class="bg-purple rounded hover:bg-gray text-gray hover:text-purple border hover:border-purple mt-8 py-3 px-4">
                    Watch Video
                </button>
           </div>
          </div>
        </div>
    </div>
    <div class="p-3 bg-gray h-[65%] bg-banner bg-contain bg-no-repeat subpixel-antialiased"></div>
    <div class="w-9/12 mx-auto">
        <div class="my-[5rem] w-1/2 mx-auto text-center">
            <p class="text-4xl font-black text-header">
                What 
                <span class="text-purple"> You </span>
                Get?
            </p>
            <p class="mt-[1rem] text-textGray">Best-Selling & Most Trusted HTML5 Template.
            </p>
            <p class="text-textGray">Experience the Ever-Growing Feature Rich Template since 2014.
            </p>
        </div>
        <div class="grid grid-cols-3 grid-rows-3">
           <div class="col-span-2 grid content-center">
               <img src="./assets/images/home.svg" alt="">
           </div>
           <div class="col-span-1 grid content-center p-3">
               <p class="text-titleHeader text-3xl">
                Manually formatting data is a pain
               </p>
               <p class="pt-3 text-md text-textGray">
                Importing data into CSV templates, building custom import scripts, or running lengthy implementation projects are not actually solving the root of your data onboarding problem.
               </p>
           </div>
           <div class="col-span-1 grid content-center p-12">
            <p class="text-titleHeader text-3xl">
             Manually formatting data is a pain
            </p>
            <p class="pt-3 text-md text-textGray ">
             Importing data into CSV templates, building custom import scripts, or running lengthy implementation projects are not actually solving the root of your data onboarding problem.
            </p>
          </div>
          <div class="col-span-2">
               <img src="./assets/images/second.svg" alt="">
          </div>
          <div class="col-span-2 grid content-center">
            <img src="./assets/images/home.svg" alt="">
          </div>
        <div class="col-span-1 grid content-center p-3">
            <p class="text-titleHeader text-3xl">
             Manually formatting data is a pain
            </p>
            <p class="pt-3 text-md text-textGray">
             Importing data into CSV templates, building custom import scripts, or running lengthy implementation projects are not actually solving the root of your data onboarding problem.
            </p>
        </div>
        <div class="col-span-1 grid content-center p-12">
            <p class="text-titleHeader text-3xl">
             Manually formatting data is a pain
            </p>
            <p class="pt-3 text-md text-textGray ">
             Importing data into CSV templates, building custom import scripts, or running lengthy implementation projects are not actually solving the root of your data onboarding problem.
            </p>
          </div>
          <div class="col-span-2">
               <img src="./assets/images/second.svg" alt="">
          </div>
          <div class="col-span-2 grid content-center">
            <img src="./assets/images/home.svg" alt="">
          </div>
        <div class="col-span-1 grid content-center p-3">
            <p class="text-titleHeader text-3xl">
             Manually formatting data is a pain
            </p>
            <p class="pt-3 text-md text-textGray">
             Importing data into CSV templates, building custom import scripts, or running lengthy implementation projects are not actually solving the root of your data onboarding problem.
            </p>
        </div>
        <div class="col-span-1 grid content-center p-12">
            <p class="text-titleHeader text-3xl">
             Manually formatting data is a pain
            </p>
            <p class="pt-3 text-md text-textGray">
             Importing data into CSV templates, building custom import scripts, or running lengthy implementation projects are not actually solving the root of your data onboarding problem.
            </p>
          </div>
          <div class="col-span-2">
               <img src="./assets/images/second.svg" alt="">
          </div>
        </div>
    </div>
        <div class="bg-statsBackground py-20">
           <div class="w-9/12 mx-auto">
                <div class="grid grid-cols-4 gap-2 text-center">
                    <div>
                        <p class="text-4xl font-extrabold text-purple">
                            65000+
                        </p>
                        <p class="text-md text-textGray">
                            Happy Customers
                        </p>
                    </div>
                    <div>
                        <p class="text-4xl font-extrabold text-purple">
                            65000+
                        </p>
                        <p class="text-md text-textGray">
                            Happy Customers
                        </p>
                    </div>
                    <div>
                        <p class="text-4xl font-extrabold text-purple">
                            65000+
                        </p>
                        <p class="text-md text-textGray">
                            Happy Customers
                        </p>
                    </div>
                    <div>
                        <p class="text-4xl font-extrabold text-purple">
                            65000+
                        </p>
                        <p class="text-md text-textGray">
                            Happy Customers
                        </p>
                    </div>                 
                </div>      
            </div>               
        </div>
        <div class="p-12">
            <div class="w-9/12 mx-auto">
            <p class="text-5xl text-header font-extrabold text-center">Blocks</p>
            <p class="pt-6 text-md w-6/12 mx-auto text-textGray text-center">
                Get Started with Canvas quickly using the premade Section Blocks. Just Copy, Paste and Assemble.
            </p>
            <div class="text-center mt-10">
                <img class="w-6/12 mx-auto shadow-2xl" style="margin-bottom: -195px" src="./assets/images/collection.svg" alt="">
            </div>           
        </div>      
        </div>
        <div class="bg-gradient-to-r from-purpleFrom via-purpleFrom to-purpleTo pb-24 pt-60">
            <div class="w-9/12 mx-auto">
                <div class="grid grid-cols-3 text-center gap-4">
                    <div>
                        <span class="text-6xl text-white material-symbols-outlined">
                            widgets
                            </span>
                        <p class="pt-5 text-white text-2xl">Many Option</p>
                        <p class="pt-5 text-md text-white">
                            Includes 156 Pre-built Blocks across categories.
                        </p>
                    </div>
                    <div>
                        <span class="text-6xl text-white material-symbols-outlined">
                            wifi_protected_setup
                            </span>
                            <p class="pt-5 text-white text-2xl">Easy Setup</p>
                            <p class="pt-5 text-md text-white">
                                Includes 156 Pre-built Blocks across categories.
                            </p>
                    </div>
                    <div>
                        <span class="text-6xl text-white material-symbols-outlined">
                            extension
                            </span>
                            <p class="pt-5 text-white text-2xl">Customizable</p>
                            <p class="pt-5 text-md text-white">
                                Includes 156 Pre-built Blocks across categories.
                            </p>
                    </div>
                    <div class="col-span-3">
                        <button class="bg-white rounded hover:bg-purpleFrom font-bold text-purpleFrom hover:text-white border border-white hover:border-white mt-10 py-3 px-4 mr-3">
                            View Demo
                        </button>
                    </div>
                </div>
            </div>
    </div>
    <div class="pb-12 grid grid-cols-6 grid-rows-3 content-center">
        <p class="pt-16 pb-16 col-span-6 text-3xl text-header font-extrabold text-center">Shortcodes & Components</p>
          <div class="text-center  border border-border
          cursor-pointer grid content-center">
            <span class="text-purple material-symbols-outlined">
                extension
                </span>
            <p class="text-md font-bold">
                Animations
            </p>
          </div>
          <div class="text-center border border-border transition cursor-pointer grid content-center">
            <span class="text-purple material-symbols-outlined">
                extension
                </span>
            <p class="text-md font-bold">
                Animations
            </p>
          </div>
          <div class="text-center border border-border transition cursor-pointer grid content-center">
            <span class="text-purple material-symbols-outlined">
                extension
                </span>
            <p class="text-md font-bold">
                Animations
            </p>
          </div>
          <div class="text-center border border-border transition cursor-pointer grid content-center">
            <span class="text-purple material-symbols-outlined">
                extension
                </span>
            <p class="text-md font-bold">
                Animations
            </p>
          </div>
          <div class="text-center border border-border transition cursor-pointer grid content-center">
            <span class="text-purple material-symbols-outlined">
                extension
                </span>
            <p class="text-md font-bold">
                Animations
            </p>
          </div>
          <div class="text-center border border-border transition cursor-pointer grid content-center">
            <span class="text-purple material-symbols-outlined">
                extension
                </span>
            <p class="text-md font-bold">
                Animations
            </p>
          </div>
           <div class="text-center border border-border transition cursor-pointer grid content-center">
            <span class="text-purple material-symbols-outlined">
                extension
                </span>
            <p class="text-md font-bold">
                Animations
            </p>
          </div>
          <div class="text-center border border-border transition cursor-pointer grid content-center">
            <span class="text-purple material-symbols-outlined">
                extension
                </span>
            <p class="text-md font-bold">
                Animations
            </p>
          </div>
          <div class="text-center border border-border transition cursor-pointer grid content-center">
            <span class="text-purple material-symbols-outlined">
                extension
                </span>
            <p class="text-md font-bold">
                Animations
            </p>
          </div>
          <div class="text-center border border-border transition cursor-pointer grid content-center">
            <span class="text-purple material-symbols-outlined">
                extension
                </span>
            <p class="text-md font-bold">
                Animations
            </p>
          </div>
          <div class="text-center border border-border transition cursor-pointer grid content-center">
            <span class="text-purple material-symbols-outlined">
                extension
                </span>
            <p class="text-md font-bold">
                Animations
            </p>
          </div>
          <div class="text-center border border-border transition cursor-pointer grid content-center">
            <span class="text-purple material-symbols-outlined">
                extension
                </span>
            <p class="text-md font-bold">
                Animations
            </p>
          </div>
           <div class="text-center border border-border transition cursor-pointer grid content-center">
            <span class="text-purple material-symbols-outlined">
                extension
                </span>
            <p class="text-md font-bold">
                Animations
            </p>
          </div>
          <div class="text-center border border-border transition cursor-pointer grid content-center">
            <span class="text-purple material-symbols-outlined">
                extension
                </span>
            <p class="text-md font-bold">
                Animations
            </p>
          </div>
          <div class="text-center border border-border transition cursor-pointer grid content-center">
            <span class="text-purple material-symbols-outlined">
                extension
                </span>
            <p class="text-md font-bold">
                Animations
            </p>
          </div>
          <div class="text-center border border-border transition cursor-pointer grid content-center">
            <span class="text-purple material-symbols-outlined">
                extension
                </span>
            <p class="text-md font-bold">
                Animations
            </p>
          </div>
          <div class="text-center border border-border transition cursor-pointer grid content-center">
            <span class="text-purple material-symbols-outlined">
                extension
                </span>
            <p class="text-md font-bold">
                Animations
            </p>
          </div>
          <div class="p-9 text-center border border-border transition cursor-pointer grid content-center">
            <span class="text-purple material-symbols-outlined">
                extension
                </span>
            <p class="text-md font-bold">
                Animations
            </p>
          </div>
    </div>
    <div class="pb-12">
        <p class="pt-16 pb-16 col-span-6 text-3xl text-header font-extrabold text-center">Plans</p>
        <div class="grid grid-cols-5 gap-4 content-center pt-10">
            <div class="h-[26rem] w-60 rounded-lg shadow-custom ml-3 p-7">
                <p class="text-md text-textGray">Free</p>
                <p class="pt-3">
                    <span class="text-4xl text-header font-bold">
                        $0
                    </span>
                    <span class="text-sm text-light">/Month</span>
                </p>
                <p class="text-textGray text-md pt-5">
                    Best for kiddies
                </p>
                <p class="text-textGray text-sm pt-5">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            person
                            </span>
                  1 User
                </p>
                <p class="text-textGray text-sm pt-4">
                     <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            notes
                            </span>
                  10 SKU's
                </p>
                <p class="text-textGray text-sm pt-4">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            draw
                            </span>
                  5 Templates
                </p>
                <p class="text-textGray text-sm pt-4">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            brush
                            </span>
                  2 LineSheets
                </p>
                <div class="text-left">                
                    <button class="bg-purple w-full hover:bg-white font-bold text-white hover:text-purple border border-purple hover:border-purple py-2 px-3 my-4">
                                Get This Package
                    </button>
                </div>
            </div>
                       <div class="h-[26rem] w-60 rounded-lg shadow-custom p-7">
                <p class="text-md text-textGray">Free</p>
                <p class="pt-3">
                    <span class="text-4xl text-header font-bold">
                        $26
                    </span>
                    <span class="text-sm text-light">/Month</span>
                </p>
                <p class="text-textGray text-md pt-5">
                    Best for kiddies
                </p>
                <p class="text-textGray text-sm pt-5">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            person
                            </span>
                  1 User
                </p>
                <p class="text-textGray text-sm pt-4">
                     <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            notes
                            </span>
                  10 SKU's
                </p>
                <p class="text-textGray text-sm pt-4">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            draw
                            </span>
                  5 Templates
                </p>
                <p class="text-textGray text-sm pt-4">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            brush
                            </span>
                  2 LineSheets
                </p>
                <div class="text-left">                
                    <button class="bg-purple w-full hover:bg-white font-bold text-white hover:text-purple border border-purple hover:border-purple py-2 px-3 my-4">
                                Get This Package
                    </button>
                </div>
            </div>
            <div class="h-[26rem] w-[15rem] bg-purple rounded-lg shadow-custom p-7" style="margin-top: -20px">
                <p class="text-md text-white">Free</p>
                <p class="pt-3">
                    <span class="text-4xl text-white font-bold">
                        $26
                    </span>
                    <span class="text-sm text-white font-light">/Month</span>
                </p>
                <p class="text-white text-md pt-5">
                    Best for kiddies
                </p>
                <p class="text-white text-sm pt-5">
                    <span class="text-xl text-white align-middle material-symbols-outlined mr-2">
                            person
                            </span>
                  1 User
                </p>
                <p class="text-white text-sm pt-4">
                     <span class="text-xl text-white align-middle material-symbols-outlined mr-2">
                            notes
                            </span>
                  10 SKU's
                </p>
                <p class="text-white text-sm pt-4">
                    <span class="text-xl text-white align-middle material-symbols-outlined mr-2">
                            draw
                            </span>
                  5 Templates
                </p>
                <p class="text-white text-sm pt-4">
                    <span class="text-xl text-white align-middle material-symbols-outlined mr-2">
                            brush
                            </span>
                  2 LineSheets
                </p>
                <div class="text-left">                
                    <button class="bg-white hover:bg-purple font-bold text-purple 
                    hover:text-white border w-full border-white hover:border-white py-2 px-3 my-4">
                                Get This Package
                    </button>
                </div>
            </div>
             <div class="h-[26rem] w-60 rounded-lg shadow-custom ml-3 p-7">
                <p class="text-md text-textGray">Free</p>
                <p class="pt-3">
                    <span class="text-4xl text-header font-bold">
                        $26
                    </span>
                    <span class="text-sm text-light">/Month</span>
                </p>
                <p class="text-textGray text-md pt-5">
                    Best for kiddies
                </p>
                <p class="text-textGray text-sm pt-5">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            person
                            </span>
                  1 User
                </p>
                <p class="text-textGray text-sm pt-4">
                     <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            notes
                            </span>
                  10 SKU's
                </p>
                <p class="text-textGray text-sm pt-4">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            draw
                            </span>
                  5 Templates
                </p>
                <p class="text-textGray text-sm pt-4">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            brush
                            </span>
                  2 LineSheets
                </p>
                <div class="text-left">                
                    <button class="bg-purple w-full hover:bg-white font-bold text-white hover:text-purple border border-purple hover:border-purple py-2 px-3 my-4">
                                Get This Package
                    </button>
                </div>
            </div>
             <div class="h-[26rem] w-60 rounded-lg shadow-custom ml-3 p-7">
                <p class="text-md text-textGray">Free</p>
                <p class="pt-3">
                    <span class="text-4xl text-header font-bold">
                        $26
                    </span>
                    <span class="text-sm text-light">/Month</span>
                </p>
                <p class="text-textGray text-md pt-5">
                    Best for kiddies
                </p>
                <p class="text-textGray text-sm pt-5">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            person
                            </span>
                  1 User
                </p>
                <p class="text-textGray text-sm pt-4">
                     <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            notes
                            </span>
                  10 SKU's
                </p>
                <p class="text-textGray text-sm pt-4">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            draw
                            </span>
                  5 Templates
                </p>
                <p class="text-textGray text-sm pt-4">
                    <span class="text-xl text-purple align-middle material-symbols-outlined mr-2">
                            brush
                            </span>
                  2 LineSheets
                </p>
                <div class="text-left">                
                    <button class="bg-purple w-full hover:bg-white font-bold text-white hover:text-purple border border-purple hover:border-purple py-2 px-3 my-4">
                                Get This Package
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="w-9/12 mx-auto">
        <p class="pt-10 pb-8 col-span-6 text-3xl text-header font-extrabold text-center">Customer Reviews</p>
        <!-- <img src="./assets/images/testimonial.svg" alt=""> -->
        <div class="grid grid-rows-3 grid-cols-3 gap-7 pb-16">
            <div class="shadow-md p-7 border-border col-span-2">
             <div class="grid grid-cols-3 content-center border-b border-border p-3">
                <div class="col-span-2">
                    <p class="text-textGray text-xs pt-2">Saravnan</p>
                    <p class="pt-1 text-xs text-blue-700">Software Developer at SellersCommerce</p>
                    </div>                
                <div class="col-span-1 grid content-center">
                     <img class="text-right" src="./assets/images/stars.svg" alt="">

                </div>
            </div>   
            <p class="text-xs pt-3 p-3">
                 "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
            </p>                 
            </div>                         
            <div class="col-span-1">

            </div>
              <div class="col-span-1">

            </div>
            <div class="shadow-md p-7 rounded-sm border-border col-span-2">
            <div class="grid grid-cols-3 content-center border-b border-border p-3">
                <!-- June 01, 2022 | Abraham -->
                <div class="col-span-2">
                    <p class="text-textGray text-xs pt-2">Saravnan</p>
                    <p class="pt-1 text-xs text-blue-700">Software Developer at SellersCommerce</p>
                    </div>                
                <div class="col-span-1 grid content-center">
                     <img class="text-right" src="./assets/images/stars.svg" alt="">

                </div>
            </div>   
            <p class="text-xs pt-3 p-3">
                 "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
            </p>                     
            </div>                         
           <div class="shadow-md p-7 border-border col-span-2">
          <div class="grid grid-cols-3 content-center border-b border-border p-3">
                <!-- June 01, 2022 | Abraham -->
                <div class="col-span-2">
                    <p class="text-textGray text-xs pt-2">Saravnan</p>
                    <p class="pt-1 text-xs text-blue-700">Software Developer at SellersCommerce</p>
                    </div>                
                <div class="col-span-1 grid content-center">
                     <img class="text-right" src="./assets/images/stars.svg" alt="">

                </div>
            </div>   
            <p class="text-xs pt-3 p-3">
                 "when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting."
            </p>                   
            </div>                         
            <div class="col-span-1">

            </div>
        </div>
        
    </div>
    <div class="bg-statsBackground py-24">
        <div class="w-9/12 mx-auto">
             <div class="grid grid-cols-4 gap-2 text-center">               
                 <div class="col-span-4 text-center">
                     <p class="text-3xl text-header font-black">
                         Loved by 
                         <span class="text-purple"> 65000+</span>
                         Happy Customers
                     </p>
                     <p class="text-textGray text-lg pt-2">
                         Powered by Top-Notch Support & Stellar 
                         <a href="#" class="text-purple hover:underline-offset-1"> Customer Reviews</a>
                     </p>
                 </div>
             </div>      
         </div>               
     </div>
     <div class="bg-bannerdark h-[65%] grid content-center">
        <div class="w-9/12 mx-auto text-center">
             <p class="text-white font-bold text-4xl">
                Start Creating Beautiful Websites
             </p>
             <p class="pt-4 text-white font-bold text-4xl">
                Purchase <span class="text-purple">LineSheets</span> for $16 only!
             </p>
             <button class="bg-white rounded hover:bg-purple text-black hover:text-white border-white hover:border-purple mt-14 py-3 px-4 mr-3">
               Purchase License
            </button>
        </div>
    </div>
    <div class="py-6">
        <div class="w-9/12 mx-auto text-center grid grid-cols-2 content-start">
        <p class="text-titleHeader text-left text-sm">SellersCommerce © 2022</p>
        <p class="text-titleHeader text-right text-sm">            
            <a href="">Have a query?</a>
        </p>
        <!-- <p class="text-titleHeader">
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
        </p> -->
        </div>
    </div>
</div>
</template>

<style>
.typed-cursor{
            font-size: 50px;
        }
.material-symbols-outlined {
    font-size: 32px;
}
</style>
