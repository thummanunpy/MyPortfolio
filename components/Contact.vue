<template>
    <footer class="bg-gray-900">
  <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:pt-6 mx-auto">
    <!-- Grid -->
    <div class="flex flex-row">
      <div class="">
        <p class="text-sm font-semibold text-red-400" aria-label="Brand">Contact</p>
        <h1 class="font-bold text-md text-white mt-4 mb-6">GET IN TOUCH</h1>
        <h3 class="font-semibold text-sm text-white mb-3 text-left">+66 64-509-8865</h3>
        <h3 class="font-semibold text-sm text-white mb-3 text-left">thummanunpy@gmail.com</h3>
        <h3 class="font-semibold text-sm text-white mb-3 text-left">Huaikhang, Bangkok, Thailand</h3>
      </div>

      <!-- <div class="col-span-2">
        <h4 class="font-semibold text-gray-100">Stay up to date</h4>

        <form>
          <div class="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-white rounded-md p-2">
            <div class="w-full">
              <label for="hero-input" class="sr-only">Search</label>
              <input type="text" id="hero-input" name="hero-input" class="py-3 px-4 block w-full border-transparent shadow-sm rounded-md focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Enter your email">
            </div>
            <a class="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4" href="#">
              Subscribe
            </a>
          </div>
          <p class="mt-3 text-sm text-gray-400">
            New UI kits or big discounts. Never spam.
          </p>
        </form>
      </div> -->
      <!-- End Col -->
    </div>
    <!-- End Grid -->

    <div class="mt-5 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
      <div class="flex justify-between items-center">
        <p class="text-sm text-gray-400">© 2023 Thammanun. All rights reserved.</p>
      </div>
      <!-- End Col -->

      <!-- Social Brands -->
      <div>
        <a 
          class="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition" 
          href="https://www.facebook.com/thummanun.py"
        >
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
        </a>
        <a 
          class="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-gray-200 hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition" 
          href="https://github.com/thummanunpy"
        >
          <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
      </div>
      <!-- End Social Brands -->
    </div>
  </div>
</footer>
  </template>
  
  
  <script>

  import { ref, reactive, onMounted, computed } from 'vue'
  

  export default {
    name: "LandingPage",
    setup(){
        // สร้าง ref สำหรับเก็บจำนวนปี
        const numberOfYears = ref(0);

        // ฟังก์ชันเพื่อคำนวณจำนวนปี
        const calculateNumberOfYears = () => {
        const startDate = new Date('2020-05-01'); // วันเริ่มต้นคือพ.ค. 2020
        const currentDate = new Date(); // วันปัจจุบัน

        const diffInMilliseconds = currentDate - startDate;
        const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // 1 ปีมี 365.25 วัน

        numberOfYears.value = Math.floor(diffInMilliseconds / millisecondsPerYear);
        };

        // เรียกใช้ฟังก์ชันเมื่อคอมโพเนนต์ถูกโหลด
        onMounted(calculateNumberOfYears);

        return {
            numberOfYears: computed(() => numberOfYears.value),
        };
    }
  };
  </script>
  
  <style scoped>
  .bg-primary {
    
    
        background-color: rgb(0, 0, 0);
        background-image: radial-gradient(at 0% 100%, rgb(49, 46, 129) 0, transparent 67%), radial-gradient(at 100% 0%, rgb(136, 19, 55) 0, transparent 40%);
      
      
      
    font-family: 'Poppins', sans-serif;
  }
  </style>