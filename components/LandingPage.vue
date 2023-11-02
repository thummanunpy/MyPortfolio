<template>
    <div class="bg-primary h-screen flex flex-col justify-center md:items-center">
      <div class="flex flex-col md:flex-row md:justify-center md:items-center">
        <div class="p-4 md:ml-10">
          <div class="text-white text-center md:text-left">
            <p class="text-lg mt-4">
              Hello I'm
            </p>
            <div class="my-1 text-4xl md:text-6xl">
              <h1 class="font-bold">THAMMANUN</h1>
              <h1 class="font-bold">HWANCHAEAM</h1>
            </div>
            <p class="text-lg mb-14">Software Developer</p>
            <!-- Add the section icon below the name -->
            <div class="flex justify-center md:justify-start items-center">
              <div 
                  class="bg-white p-1 rounded-md h-8 w-8 mr-3 cursor-pointer"
                  @click="openMyFacebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="facebook" class="h-full w-full">
                  <path d="M15.12,5.32H17V2.14A26.11,26.11,0,0,0,14.26,2C11.54,2,9.68,3.66,9.68,6.7V9.32H6.61v3.56H9.68V22h3.68V12.88h3.06l.46-3.56H13.36V7.05C13.36,6,13.64,5.32,15.12,5.32Z"></path>
                </svg>
              </div>
              <div 
                class="bg-white p-1 rounded-md h-8 w-8 mr-3 cursor-pointer"
                @click="openMyGitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="github"><path d="M27.106 0s-2.101 0-4.235 3.2c-1.056-1.057-4.267-1.067-5.331-1.067-1.068 0-4.277.01-5.334 1.067C10.072 0 7.976 0 7.976 0c-1.141 2.864-.248 4.807-.033 5.333C6.877 6.4 5.806 7.467 5.806 12.8s3.878 8.008 8.538 8.533c-.599.521-1.067 2.133-1.067 3.2-1.197.533-4.528 1.045-6.4-2.133 0 0-1.067-2.133-3.2-2.133 0 0-2.133-.201 0 1.067 0 0 1.067 1.067 2.133 3.2 0 0 1.629 4.456 7.467 3.2.012 1.735 0 4.267 0 4.267h8.528v-7.467c0-.844-.466-2.68-1.067-3.2 4.66-.525 8.533-3.2 8.533-8.533 0-5.333-1.067-6.4-2.133-7.467.217-.527 1.108-2.47-.032-5.334z"></path></svg>
              </div>
              <div 
                class="bg-white p-1 rounded-md h-8 w-8 mr-3 cursor-pointer"
                @click="openMyLinkedin"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="linkedin"><path d="M0 5h3.578v11H0zM13.324 5.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 0 0-.145-.028A3.207 3.207 0 0 0 12.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 0 0-2.676-3.448z"></path><circle cx="1.75" cy="1.75" r="1.75"></circle></svg>
              </div>
            </div>
          </div>
        </div>
        <img
          src="@/assets/profile-1.png"
          alt="Developer"
          class="rounded-lg md:w-1/3 shadow-lg hidden md:block"
        />
      </div>
    </div>
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

        const openMyFacebook = () => {
          window.open('https://www.facebook.com/thummanun.py', '_blank')
        }

        const openMyGitHub = () => {
          window.open('https://github.com/thummanunpy', '_blank')
        }

        const openMyLinkedin = () => {
          window.open('https://www.linkedin.com/in/thummanoon-hwanchaeam-b23533190/', '_blank')
        }

        // เรียกใช้ฟังก์ชันเมื่อคอมโพเนนต์ถูกโหลด
        onMounted(calculateNumberOfYears);

        return {
            numberOfYears: computed(() => numberOfYears.value),
            openMyFacebook,
            openMyGitHub,
            openMyLinkedin

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