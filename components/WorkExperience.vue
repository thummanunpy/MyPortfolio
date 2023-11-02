<template>
  <div class="bg-primary h-screen flex flex-col justify-center items-center p-2">
    <div class="flex flex-col lg:flex-row justify-center items-center">
      <div class="lg:w-1/3 mb-6 lg:p-6">
          <div class="max-w-xs text-center lg:text-start lg:pl-10 xl:pl-30">
            <p class="mt-1 text-white">TIMELINE</p>
            <h2 class="text-2xl font-bold lg:text-4xl xl:text-6xl text-white">WORKING PERIOD</h2>
          </div>
      </div>
      <div class="lg:w-2/3 mb-6 p-2 sm:p-20">
        <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px lg:before:ml-[8.75rem] lg:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <!-- Item #1 -->
        <div class="relative">
            <div class="lg:flex items-center lg:space-x-4 mb-3">
                <div class="flex items-center space-x-4 lg:space-x-2 lg:space-x-reverse">
                    <!-- Icon -->
                    <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow lg:order-1">
                        <svg class="fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                            <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                        </svg>
                    </div>
                    <!-- Date -->
                    <time class="font-caveat font-medium text-md text-white lg:w-28">Oct 2021 - Current</time>
                </div>
                <!-- Title -->
                <div class="text-white ml-14"><span class="text-white font-bold xl:text-lg">SS&C FINTECH SERVICES (THAILAND) LIMITED </span> - Associate Software Engineer</div>
            </div>
            <!-- Card -->
            <div class="bg-gray-50 bg-opacity-20 pl-10 py-4 pr-4 rounded-md text-sm shadow ml-14 lg:ml-44">
              <ul class="text-gray-200 lg:text-justify"> 
              <li>
                Developed, and implemented web applications on the both front-end (Nuxt Js, Bootstrap) and back-end (Spring Boot).
              </li>
              <li>
                Designed and developed the Spring Boot application.
              </li>
              <li>
                Unit test back-end with Junit and mockito.
              </li>
              <li>
                Meeting and receiving requirements from foreign clients.
              </li> 
            </ul>
            </div>
        </div>
      <!-- Item #2 -->
      <div class="relative">
          <div class="lg:flex items-center lg:space-x-4 mb-3">
              <div class="flex items-center space-x-4 lg:space-x-2 lg:space-x-reverse">
                  <!-- Icon -->
                  <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow lg:order-1">
                    <svg class="fill-emerald-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
                    </svg>
                  </div>
                  <!-- Date -->
                  <time class="font-caveat font-medium text-md text-white lg:w-28">May 2020 - Oct 2021</time>
              </div>
              <!-- Title -->
              <div class="text-white ml-14"><span class="text-white font-bold xl:text-lg">Depthfirst</span> - Junior Java Developer</div>
          </div>
          <!-- Card -->
          <div class="bg-gray-50 bg-opacity-20 pl-10 py-4 pr-4 rounded-md text-sm shadow ml-14 lg:ml-44">
            <ul class="text-gray-200 lg:text-justify"> 
                <li>
                  Designed, developed, and implemented web applications on the both front-end (Bootstrap, JavaScript, JQuery) and back-end (Struts, Spring Framework, Hibernate, JPA Framework).
                </li>
                <li>
                  Designed and developed database (MySQL).
                </li>
                <li>
                  Wrote, modified, and maintained web applications.
                </li>
                <li>
                  Used Jasper Reports to create PDF files.
                </li> 
              </ul>
          </div>
      </div>

        </div>
      </div>
    </div>
    </div>
    
</template>

  
  
  <script>

  import { ref, reactive, onMounted, computed } from 'vue'
  

  export default {
    name: "LandingPage",
    setup(){
      const jobList = ref([
      {
        title: "SS&C FINTECH SERVICES (THAILAND) LIMITED",
        position:"Associate Software Engineer",
        period: "( Oct 2021 - Current )",
        description: " <ul> <li>Designed, developed, and implemented software web applications on the both front-end (Bootstrap, JavaScript, JQuery) and back-end (Struts, Spring, Hibernate, JPA Framework)</li><li>Designed and developed database (MySQL)</li><li>Wrote, modified, and maintained software</li><li>Used Jasper Reports to create PDF files</li> </ul>",
        expanded: ref(false) // เพิ่ม ref สำหรับการขยาย
      },
      {
        title: "Depthfirst",
        position:"Junior Java Developer",
        period: "( May 2020 - Oct 2021 )",
        description: "Your description here.",
        expanded: ref(false) // เพิ่ม ref สำหรับการขยาย
      },
      // เพิ่มงานอื่น ๆ ที่คุณมีที่นี่
    ]);

    const expand = (index) => {
      jobList.value[index].expanded = !jobList.value[index].expanded;
    };

    return {
      jobList,
      expand
    }; 
    }
  };
  </script>
  
  <style scoped>
    .bg-primary {
    
    background-color: rgb(0, 0, 0);
    background-image: radial-gradient(at 0% 0%, rgb(49, 46, 129) 0, transparent 67%), radial-gradient(at 100% 100%, rgb(136, 19, 55) 0, transparent 40%);
      
    font-family: 'Poppins', sans-serif;
  }
  </style>