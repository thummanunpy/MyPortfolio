<template>
    <div class="fixed bottom-0 right-0">
        <!-- component -->
        <div v-if="isShowMessagePopup" ref="chatRoom" class="flex text-gray-800">
            <div class="flex flex-col flex-auto h-3/6 md:w-4/5 lg:w-2/5 xl:w-2/5 2xl:w-2/5 fixed bottom-0 right-0 ">
            <div class="flex flex-col flex-auto h-full p-6">
                <div 
                    style='border-bottom: 2px solid #eaeaea'
                    :class="{'hidden':googleSignInResult === null, 'block':googleSignInResult !== null}"
                    v-if="userDetail.email === adminUser"
                >
                    <div class='flex overflow-y-auto'>
                        <ul v-for="(user, key) in userGroup">
                        <li 
                            class='py-2 px-6 rounded-t-lg cursor-pointer'
                            :class="{'bg-white': tab !== key, 'bg-emerald-200': tab === key}"
                            @click="changeTab(key)"
                        >
                            {{ key }}
                        </li>
                    </ul>
                    </div>
                </div>
                <div
                    class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4"
                >
                    <div 
                        class="w-full h-full flex flex-col justify-center items-center"
                        v-if="googleSignInResult === null"
                    >
                        <div class="text-semibold text-2xl px-10 pt-10">
                            Chat with Me
                        </div>
                        <div class="w-20 m-10">
                            <lottie-vue-player 
                                :src="`https://lottie.host/2f16bbd7-e4ab-46fe-aee5-cccf879ea26a/gJA7UP42KX.json`"
                                :autoplay="true"
                                :loop="true"
                                :speed="0.5"
                                style=" background: rgba(0, 0, 0, 0.0);" >
                            </lottie-vue-player>
                        </div>
                        <button type="button" @click="googleSignIn" class="text-white md:w-1/2 bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
                    </div>
                    <div 
                        class="flex flex-col h-full overflow-x-auto mb-4"
                        v-else
                    >   
                        <div class="flex flex-col h-full">
                            <div v-for=" (item, key) in messagesRef" :key="key">
                                <div v-if="item.email === userDetail.email">
                                    <div class="grid grid-cols-12 gap-y-2">
                                        <div class="col-start-6 col-end-13 p-3 rounded-lg">
                                            <div class="flex items-center justify-start flex-row-reverse">
                                                <div
                                                    class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                                >
                                                    A
                                                </div>
                                                <div
                                                    class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                                                >
                                                    <div>
                                                        {{ item.text }}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="grid grid-cols-12 gap-y-2">
                                        <div class="col-start-1 col-end-8 p-3 rounded-lg">
                                            <div class="flex flex-row items-center">
                                                <div
                                                    class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                                >
                                                    A
                                                </div>
                                                <div
                                                    class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                                                >
                                                    <div>{{ item.text }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div ref="messageContainer"></div>
                        </div>
                        <!-- input box -->
                </div>
                <div 
                    class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
                    :class="{'hidden':googleSignInResult === null, 'block':googleSignInResult !== null}"
                >
                            <div class="flex-grow ml-4">
                                <div class="relative w-full">
                                    <input
                                        type="text"
                                        class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                                        v-model="inputTextBox"
                                        @keyup.enter="sendMessage"
                                    />
                                </div>
                            </div>
                            <div class="ml-4">
                            <button
                                class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                                @click="sendMessage"
                            >
                                <span>Send</span>
                                <span class="ml-2">
                                <svg
                                    class="w-4 h-4 transform rotate-45 -mt-px"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                    ></path>
                                </svg>
                                </span>
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
            </div>
        </div>
        <div 
            ref="chatBubble"
            class="text-white font-bold w-40 cursor-pointer"
            v-if="!isShowMessagePopup"
        >
            <lottie-vue-player 
                :src="`https://lottie.host/38b5714e-630e-485a-9d03-edbb3d6abdc1/wVBZHEch9u.json`"
                :autoplay="true"
                :loop="true"
                :speed="0.5"
                style=" background: rgba(0, 0, 0, 0.0);" >
            </lottie-vue-player>
      </div>
    </div>
  </template>


<script>
import { reactive, onMounted, ref as vueRef, nextTick, onUpdated, watchEffect } from 'vue';
import { database, auth } from '../firebase.js'
import { push, child, ref, update, onValue, set  } from "firebase/database";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';



export default {
  name: 'App',
  data() {
    return {
      userName: '',
      name: null,
      showMessage: '',
      messages: [],
    };
  },
  setup() {
    const isShowMessagePopup = vueRef(false)
    const googleSignInResult = vueRef(null);
    const messageContainer = vueRef();
    const inputTextBox = vueRef("");
    const tab = vueRef(null);
    const chatRoom = vueRef(null);
    const chatBubble = vueRef(null);
    const adminUser = vueRef("thummanunpy@gmail.com");
    const messagesRef = reactive([])
    const userGroup = reactive({})
    const userDetail = reactive({})

    const triggerMessagePopup = () => {
        isShowMessagePopup.value = !isShowMessagePopup.value
    }

    const changeTab = (key) => {
        tab.value = key;
        userGroup[tab.value].forEach(
            message =>  messagesRef.push(message)
        )
    }

    const googleSignIn = async () => {
      try {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        googleSignInResult.value = result;
        userDetail.email = googleSignInResult.value._tokenResponse.email;
        userDetail.firstName = googleSignInResult.value._tokenResponse.firstName;
        sendMessage();
      } catch (error) {
        console.error(error);
      }
    };

    const sendMessage = () => {
        const newPostKey = push(child(ref(database), 'messages')).key;
        if(inputTextBox.value){
            set(ref(database, 'messages/' + newPostKey), {
            text: inputTextBox.value,
            email: userDetail.email,
            name:  userDetail.firstName,
            from: userDetail.email,
            to:  (userDetail.email === adminUser.value) ? tab.value : adminUser.value
        });
        }

        if(userDetail.email !== adminUser.value){
            userGroup[userDetail.email].forEach(
                message =>  messagesRef.push(message)
            )
        }else{
            userGroup[tab.value].forEach(
                message =>  messagesRef.push(message)
            )
        }

        inputTextBox.value = '';
    }

    const handleDocumentClick = (event) => {
        if (chatRoom.value && !(chatRoom.value.contains(event.target) ?? false)
        ) {
            triggerMessagePopup();
        }else if (chatBubble.value && (chatBubble.value.contains(event.target) ?? false)
        ) {
            triggerMessagePopup();
        }
    };

    onMounted(() => {
        const itemsRef = ref(database, 'messages/' )
        onValue(itemsRef, (snapshot) => {
            const data = snapshot.val();
            messagesRef.length = 0;
            for (const messageId in data) {
                const message = data[messageId];
                const key = message.email === adminUser.value ? message.to : message.from; 
                if (!userGroup[key]) {
                    userGroup[key] = [];
                }
                userGroup[key].push(message);
            }

            if(userDetail.email !== adminUser.value){
            userGroup[userDetail.email].forEach(
                message =>  messagesRef.push(message)
            )
        }else{
            userGroup[tab.value].forEach(
                message =>  messagesRef.push(message)
            )
        }

        })

        document.addEventListener("click", handleDocumentClick);
    
    });

    onUpdated (() => {
        if(messageContainer.value){
            messageContainer.value.scrollIntoView();
        }
    })

    return {
        tab,
        userGroup,
        adminUser,
        chatBubble,
        chatRoom,
        messagesRef,
        messageContainer,
        isShowMessagePopup,
        googleSignInResult,
        inputTextBox,
        userDetail,
        changeTab,
        googleSignIn,
        triggerMessagePopup,
        sendMessage
    //   messages: messagesRef,
      // ...other data and methods
    };
  },
}

</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Material+Icons");
#app {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
}
.login {
  background: #fff;
  width: 40%;
  height: 50vh;
  margin: auto;
  padding-left: 20px;
  padding-right: 20px;
}
h3 {
  font-size: 30px;
  text-align: center;
}
input {
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgb(156, 156, 156);
  padding-left: 2px;
  padding-right: 2px;
}
.message-body {
  width: 40%;
  height: 80vh;
  margin: auto;
}
.message-text {
  min-width: 10%;
  border-radius: 4px;
}
.message {
  font-size: 14px;
}
.mg-text {
  color: rgb(0, 195, 255);
  font-weight: bolder;
}
.message-body input {
  width: 80%;
  border-radius: 4px;
  border: 1px solid rgb(156, 156, 156);
  height: 6vh;
  padding-left: 2px;
  padding-right: 2px;
}
.card {
  width: 100%;
  height: 75vh;
  margin: auto;
}
.card-body {
  min-height: 50vh;
  overflow-x: scroll;
}

.lottie-player-no-bg {
  background-color: transparent;
}

</style>