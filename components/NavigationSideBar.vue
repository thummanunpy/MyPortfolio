<template>
    <div class="fixed md:top-1/2 transform md:-translate-y-1/2 md:right-0">
      <div class="bg-primary bg-white text-white font-bold py-2 mx-4 rounded-2xl">
        <div v-if="isShowLandingPage">
            <div 
                class="bg-white hover:bg-amber-200 hover:rounded-xl p-1 rounded-md h-8 w-8 m-1 mb-4 cursor-pointer"
                @click="clickForMoveToHome" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="home"><g fill="#200E32" transform="translate(2.5 2.004)"><path d="M7.92173917,18.2568881 L3.92173915,18.2568881 C2.62561934,18.2521579 1.57473912,17.2051555 1.5652174,15.909062 L1.5652174,7.95254022 C1.56776138,7.51865617 1.76191292,7.1080734 2.09565218,6.83080108 L2.80000001,6.30906195 C3.05714116,6.03509289 3.08328826,5.61704285 2.86228858,5.31316828 C2.6412889,5.00929372 2.23552029,4.90536419 1.89565218,5.06558368 L1.89565218,5.06558368 L1.17391305,5.60471412 C0.445875565,6.16803633 0.0138352771,7.0321169 -7.10542736e-15,7.95254022 L-7.10542736e-15,15.9177576 C0.0047821894,18.0816904 1.75780637,19.8347146 3.92173915,19.8394968 L7.92173917,19.8394968 C8.35396202,19.8394968 8.70434787,19.4891109 8.70434787,19.0568881 C8.70434787,18.6246652 8.35396202,18.2742794 7.92173917,18.2742794 L7.92173917,18.2568881 Z"></path><path d="M18.7913044,7.93514891 C18.7821625,7.02148476 18.3641697,6.15997273 17.652174,5.58732281 L11.6434783,0.796018441 C10.3230761,-0.26533948 8.44214141,-0.26533948 7.12173917,0.796018441 L5.21739133,2.17862714 C4.85960686,2.43555961 4.77785016,2.93388616 5.03478263,3.29167063 C5.29171511,3.6494551 5.79004165,3.7312118 6.14782612,3.47427932 L8.07826091,2.03080106 C8.83595413,1.40700621 9.92926336,1.40700621 10.6869566,2.03080106 L16.6956523,6.82210543 C17.0414821,7.0962427 17.245809,7.51128176 17.252174,7.95254022 L17.252174,15.9177576 C17.252174,17.2144262 16.2010165,18.2655837 14.9043479,18.2655837 L13.1217392,18.2655837 C12.9392451,18.2655837 12.7913044,18.1176431 12.7913044,17.935149 L12.7913044,14.3438446 C12.7913144,13.1994401 11.8661337,12.270372 10.7217392,12.2655837 L8.11304352,12.2655837 C7.56185446,12.2655837 7.03324068,12.4845427 6.64349116,12.8742922 C6.25374164,13.2640418 6.03478264,13.7926555 6.03478264,14.3438446 L6.03478264,15.7177576 C6.03478264,16.1499805 6.38516849,16.5003663 6.81739134,16.5003663 C7.24961419,16.5003663 7.60000004,16.1499805 7.60000004,15.7177576 L7.60000004,14.3438446 C7.59766759,14.208583 7.64977261,14.0780549 7.74461016,13.9815822 C7.83944772,13.8851095 7.96906617,13.830781 8.10434787,13.8308011 L10.7130435,13.8308011 C10.9915871,13.8308011 11.2173914,14.0566053 11.2173914,14.3351489 L11.2173914,14.3351489 L11.2173914,17.935149 C11.2221784,18.9834938 12.0733835,19.8308011 13.1217392,19.8308011 L14.8608696,19.8308011 C17.0267864,19.8308011 18.7826088,18.0749787 18.7826088,15.909062 L18.7913044,7.93514891 Z"></path></g></svg>
            </div>
        </div>
        <div v-else class="items-center">
            <div 
                class="bg-white hover:bg-amber-200 hover:rounded-xl p-2 rounded-md h-8 w-8 m-1 mb-4 cursor-pointer"
                @click="clickForMoveToHome" >
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 16 16" viewBox="0 0 16 16" id="point"><path d="M8,15c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S11.859,15,8,15z M8,2C4.691,2,2,4.691,2,8s2.691,6,6,6s6-2.691,6-6    S11.309,2,8,2z"></path><circle cx="8" cy="8" r="2.167"></circle></svg>
            </div>
        </div>

        <div v-if="isShowSkillsPage">
            <div 
                class="bg-white hover:bg-amber-200 hover:rounded-xl p-1 rounded-md h-8 w-8 m-1 mb-4 cursor-pointer"
                @click="clickForMoveToSkills">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 128 128" id="skills"><path d="M103.7 62.57c2.47-4.08 5.3-9.65 5.3-16.44 0-18.31-14.35-33.21-32-33.21S45 27.81 45 46.13a33.15 33.15 0 0 0 6 19.1c.79 1.13 1.6 2.25 2.4 3.36 4 5.52 7.73 10.77 9.36 17.34a2 2 0 0 0 .21 4h.8a47.4 47.4 0 0 1 .46 5.69 2 2 0 0 0 2 1.93h21.4a2 2 0 0 0 2-1.92 41 41 0 0 1 .57-5.7H91a2 2 0 0 0 0-4h0c1.44-6.41 5.46-12.4 9.37-18.21C101.51 65.94 102.62 64.29 103.7 62.57zm-17.94 31H68.17c-.09-1.51-.2-2.68-.33-3.62H86.17C86 90.86 85.87 92 85.77 93.54zM97 65.47c-4.29 6.38-8.72 13-10.14 20.45h-20v0c-1.69-7.76-6-13.79-10.23-19.62-.79-1.1-1.58-2.2-2.37-3.32A29.18 29.18 0 0 1 49 46.13C49 30 61.56 16.92 77 16.92S105 30 105 46.13c0 4.53-1.46 9-4.7 14.35C99.27 62.11 98.17 63.74 97 65.47zM69.5 100.92a2 2 0 0 0 0 4h15a2 2 0 0 0 0-4z"></path><path d="M77,0C51,0,30,22.18,29,50.48A7,7,0,0,1,28.42,53L20.16,67.24A8,8,0,0,0,19,71.71a8.34,8.34,0,0,0,8.37,7.76,2.7,2.7,0,0,1,2.74,2.65v9.34a17.88,17.88,0,0,0,18,17.7h4.76c7.42.61,11.17,3.67,11.17,9.09a2,2,0,0,0,4,0c0-7.56-5.44-12.33-14.93-13.09h-5a13.88,13.88,0,0,1-14-13.7V82.11a6.7,6.7,0,0,0-6.74-6.65,4.33,4.33,0,0,1-4.38-4,4.08,4.08,0,0,1,.61-2.22L31.93,55l.1-.18a11,11,0,0,0,1-4.16C33.89,24.48,53.21,4,77,4a2,2,0,0,0,0-4Z"></path><path d="M96.24,40.07a19.9,19.9,0,0,0-1.5-3.62,4,4,0,0,0-.07-5.62l-2.59-2.59a4,4,0,0,0-5.62-.07,19.91,19.91,0,0,0-3.62-1.5,4,4,0,0,0-4-3.92H75.17a4,4,0,0,0-4,3.92,19.91,19.91,0,0,0-3.62,1.5,4.11,4.11,0,0,0-5.62.07l-2.59,2.59a4,4,0,0,0-.07,5.62,19.9,19.9,0,0,0-1.5,3.62,4,4,0,0,0-3.92,4v3.66a4,4,0,0,0,3.92,4,19.91,19.91,0,0,0,1.5,3.62A4,4,0,0,0,59.32,61l2.59,2.59a4,4,0,0,0,5.62.07,19.91,19.91,0,0,0,3.62,1.5,4,4,0,0,0,4,3.92h3.66a4,4,0,0,0,4-3.92,19.91,19.91,0,0,0,3.62-1.5,4,4,0,0,0,5.62-.07L94.67,61a4,4,0,0,0,.07-5.62,19.91,19.91,0,0,0,1.5-3.62,4,4,0,0,0,3.92-4V44.09A4,4,0,0,0,96.24,40.07Zm-.08,7.68-1.47,0a2,2,0,0,0-2,1.58,16,16,0,0,1-2.19,5.28,2,2,0,0,0,.27,2.5l1,1.05-2.61,2.59-1-1a2,2,0,0,0-2.5-.27,16,16,0,0,1-5.28,2.19,2,2,0,0,0-1.58,2l0,1.47-3.68,0V63.62a2,2,0,0,0-1.58-2,16,16,0,0,1-5.28-2.19,2,2,0,0,0-2.5.27l-1.05,1-2.59-2.61,1-1a2,2,0,0,0,.27-2.5,16,16,0,0,1-2.19-5.28,2,2,0,0,0-2-1.58l-1.47,0,0-3.68H59.3a2,2,0,0,0,2-1.58,16,16,0,0,1,2.19-5.28,2,2,0,0,0-.27-2.5l-1-1.05,2.61-2.59,1,1a2,2,0,0,0,2.5.27,16,16,0,0,1,5.28-2.19,2,2,0,0,0,1.58-2l0-1.47,3.68,0v1.45a2,2,0,0,0,1.58,2,16,16,0,0,1,5.28,2.19,2,2,0,0,0,2.5-.27l1.05-1,2.59,2.61-1,1a2,2,0,0,0-.27,2.5,16,16,0,0,1,2.19,5.28,2,2,0,0,0,2,1.58l1.47,0Z"></path><path d="M77,34.92a11,11,0,1,0,11,11A11,11,0,0,0,77,34.92Zm0,18a7,7,0,1,1,7-7A7,7,0,0,1,77,52.92Z"></path><circle cx="66.21" cy="126" r="2"></circle></svg>
            </div>
        </div>
        <div v-else class="items-center">
            <div 
                class="bg-white hover:bg-amber-200 hover:rounded-xl p-2 rounded-md h-8 w-8 m-1 mb-4 cursor-pointer"
                @click="clickForMoveToSkills">
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 16 16" viewBox="0 0 16 16" id="point"><path d="M8,15c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S11.859,15,8,15z M8,2C4.691,2,2,4.691,2,8s2.691,6,6,6s6-2.691,6-6    S11.309,2,8,2z"></path><circle cx="8" cy="8" r="2.167"></circle></svg>
            </div>
        </div>

        <div v-if="isShowWorkExperience">
            <div 
                class="bg-white hover:bg-amber-200 hover:rounded-xl p-1 rounded-md h-8 w-8 m-1 mb-4 cursor-pointer"
                @click="clickForMoveToWork"
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="briefcase"><path d="m55,20s-5.71954,0-5.71954,0l-2.55096-10.21533c-.56348-2.22852-2.55762-3.78467-4.84961-3.78467h-19.75977c-2.29199,0-4.28613,1.55615-4.84961,3.7876,0,0-2.55096,10.2124-2.55096,10.2124h-5.71954c-2.75684,0-5,2.24316-5,5v15c.03126,1.31654,1.97235,1.31541,2-.00004,0,.00004,0-8.38967,0-8.38967l19.00977,7.08435v5.30536c0,1.10303.89746,2,2,2,0,0,9.98047,0,9.98047,0,1.10254,0,2-.89697,2-2v-5.30536l19.00977-7.08435v16.44867c-4.16467.46295-7.47809,3.77679-7.94098,7.94104H13.94098c-.46289-4.16425-3.77631-7.47809-7.94098-7.94104v-3.05896c-.01447-1.3153-1.98379-1.31105-1.99999.00004,0-.00004,0,7.99996,0,7.99996,0,2.75684,2.24316,5,5,5h46c2.75684,0,5-2.24316,5-5v-28c0-2.75684-2.24316-5-5-5ZM19.20996,10.2749c.33887-1.33936,1.53516-2.2749,2.91016-2.2749h19.75977c1.375,0,2.57129.93555,2.91016,2.27197l2.42993,9.72803h-2.05969l-2.31067-9.24268c-.11133-.44482-.51074-.75732-.96973-.75732h-19.75977c-.45898,0-.8584.3125-.96973.75732l-2.31067,9.24268h-2.05963l2.42987-9.7251Zm7.7998,33.7251v-5h9.98047v5h-9.98047Zm10.7998-7s-11.61914,0-11.61914,0c0,0-20.19043-7.52429-20.19043-7.52429v-4.47571c0-1.6543,1.3457-3,3-3h30.23047c1.3131-.0209,1.31525-1.97846-.00004-2,.00004,0-18.32979,0-18.32979,0,0,0,2.00073-8,2.00073-8h18.19727l2.31152,9.24268c.10009.30354.31152.56056.61031.68474.11374.04426.23378.07286.35942.07259,0,0,10.62012,0,10.62012,0,1.6543,0,3,1.3457,3,3v4.47571l-20.19043,7.52429ZM6,53v-2.9201c3.05878.44067,5.47949,2.86108,5.92017,5.9201h-2.92017c-1.6543,0-3-1.3457-3-3Zm49,3h-2.9201c.44067-3.05902,2.86133-5.47943,5.9201-5.9201v2.9201c0,1.6543-1.3457,3-3,3Z"></path></svg>
            </div>
        </div>
        <div v-else class="items-center">
            <div 
                class="bg-white hover:bg-amber-200 hover:rounded-xl p-2 rounded-md h-8 w-8 m-1 mb-4 cursor-pointer"
                @click="clickForMoveToWork" 
            >
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 16 16" viewBox="0 0 16 16" id="point"><path d="M8,15c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S11.859,15,8,15z M8,2C4.691,2,2,4.691,2,8s2.691,6,6,6s6-2.691,6-6    S11.309,2,8,2z"></path><circle cx="8" cy="8" r="2.167"></circle></svg>
            </div>
        </div>

        <div v-if="isShowContact">
            <div 
                class="bg-white hover:bg-amber-200 hover:rounded-xl p-1 rounded-md h-8 w-8 m-1 mb-4 cursor-pointer"
                @click="clickForMoveToContact"
            >
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 32 32" id="contact"><path d="M24 10a5 5 0 1 0-5 5 5.006 5.006 0 0 0 5-5zm-8 0a3 3 0 1 1 3 3 3 3 0 0 1-3-3zm8.751 12.285a1 1 0 0 0 1.917-.57 8 8 0 1 0-15.333 4.571 1 1 0 0 0 .959.714H19a1 1 0 0 0 0-2h-5.915A5.9 5.9 0 0 1 13 24a6 6 0 0 1 11.751-1.715z"></path><path d="M25 27h4a1 1 0 0 0 1-1V4a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H3a1 1 0 0 0 0 2h2v8H3a1 1 0 0 0 0 2h2v8H3a1 1 0 0 0 0 2h2v1a3 3 0 0 0 3 3h21a1 1 0 0 0 0-2H8a1 1 0 0 1-1-1v-1h2a1 1 0 0 0 0-2H7v-8h2a1 1 0 0 0 0-2H7V7h2a1 1 0 0 0 0-2H7V4a1 1 0 0 1 1-1h19a1 1 0 0 1 1 1v21h-3a1 1 0 0 0 0 2Z"></path><path d="M21.29 25.29A1.05 1.05 0 0 0 21 26a1 1 0 0 0 .08.38 1.169 1.169 0 0 0 .21.33 1.155 1.155 0 0 0 .33.21.943.943 0 0 0 .76 0 1.155 1.155 0 0 0 .33-.21A.99.99 0 0 0 23 26a1 1 0 0 0-1.71-.71Z"></path></svg>
            </div>
        </div>
        <div v-else class="items-center">
            <div 
                class="bg-white hover:bg-amber-200 hover:rounded-xl p-2 rounded-md h-8 w-8 m-1 mb-4 cursor-pointer"
                @click="clickForMoveToContact"
            >
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 16 16" viewBox="0 0 16 16" id="point"><path d="M8,15c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S11.859,15,8,15z M8,2C4.691,2,2,4.691,2,8s2.691,6,6,6s6-2.691,6-6    S11.309,2,8,2z"></path><circle cx="8" cy="8" r="2.167"></circle></svg>
            </div>
        </div>
      </div>
    </div>
</template>

<script>

  import { ref, reactive, onMounted, computed, onUpdated, onUnmounted, watch} from 'vue'
  
  

  export default {
    name: "NavigationSideBar",
    props:["isShowLandingPage", "isShowSkillsPage", "isShowWorkExperience", "isShowContact"],
    setup(props){
        const isShowLandingPage =ref(props.isShowLandingPage)
        const isShowSkillsPage = ref(props.isShowSkillsPage)
        const isShowWorkExperience = ref(props.isShowWorkExperience)
        const isShowContact = ref(props.isShowContact)
        const windowHeight = window.innerHeight;

        const clickForMoveToHome = () => {
            window.scrollTo(0, windowHeight * 0)
        };
        const clickForMoveToSkills = () => {
            window.scrollTo(0, windowHeight * 1)
        };
        const clickForMoveToWork = () => {
            window.scrollTo(0, windowHeight * 2)
        };
        const clickForMoveToContact = () => {
            window.scrollTo(0, windowHeight * 3)
        };

        watch(() => props.isShowLandingPage, (newValue, oldValue) => {
            isShowLandingPage.value = newValue; // Optionally update a local ref
        });
        watch(() => props.isShowSkillsPage, (newValue, oldValue) => {
            isShowSkillsPage.value = newValue; // Optionally update a local ref
        });
        watch(() => props.isShowWorkExperience, (newValue, oldValue) => {
            isShowWorkExperience.value = newValue; // Optionally update a local ref
        });
        watch(() => props.isShowContact, (newValue, oldValue) => {
            isShowContact.value = newValue; // Optionally update a local ref
        });

        return{
            clickForMoveToHome,
            clickForMoveToSkills,
            clickForMoveToWork,
            clickForMoveToContact
        }

    }
  };
  </script>