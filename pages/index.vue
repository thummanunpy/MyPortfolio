<template>
  <div>
    <LandingPage/>
    <SkillsPage/>
    <WorkExperience/>
    <Contact/>
    <NavigationSideBar 
     :isShowLandingPage ="isDisplayLandingPage"
     :isShowSkillsPage = "isDisplaySkillsPage"
     :isShowWorkExperience ="isDisplayExperiencePage"
     :isShowContact = "isDisplayContactPage"
    />
    <LiveChat/>
  </div>
</template>

<script>
import LandingPage from "../components/LandingPage.vue";
import SkillsPage from "../components/Skills.vue";
import WorkExperience from "../components/WorkExperience.vue";
import Contact from "../components/Contact.vue";
import NavigationSideBar from "../components/NavigationSideBar.vue";
import LiveChat from "../components/LiveChat.vue";

import { ref, reactive, onMounted, computed, onUnmounted, nextTick} from 'vue'

export default {
  name: 'IndexPage',
  components: {
    LandingPage,
    SkillsPage,
    NavigationSideBar,
    WorkExperience,
    Contact,
    LiveChat
  },
  setup(){
    const isDisplayLandingPage = ref(true)
    const isDisplaySkillsPage = ref(false)
    const isDisplayExperiencePage = ref(false)
    const isDisplayContactPage = ref(false)



    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const calculateHieght = window.scrollY/windowHeight;

      if(calculateHieght.toFixed(2) < 0.3){
        isDisplayLandingPage.value = true;
        isDisplaySkillsPage.value = false;
        isDisplayExperiencePage.value = false;
        isDisplayContactPage.value = false;
      }else if(calculateHieght.toFixed(2) > 2.3){
        isDisplayLandingPage.value = false;
        isDisplaySkillsPage.value = false;
        isDisplayExperiencePage.value = false;
        isDisplayContactPage.value = true;
      }else if(calculateHieght.toFixed(2) > 1.3){
        isDisplayLandingPage.value = false;
        isDisplaySkillsPage.value = false;
        isDisplayExperiencePage.value = true;
        isDisplayContactPage.value = false;
      }else if(calculateHieght.toFixed(2) > 0.3){
        isDisplayLandingPage.value = false;
        isDisplaySkillsPage.value = true;
        isDisplayExperiencePage.value = false;
        isDisplayContactPage.value = false;
      }
    
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isDisplayLandingPage,
      isDisplaySkillsPage,
      isDisplayExperiencePage,
      isDisplayContactPage
    };
  }
}
</script>
