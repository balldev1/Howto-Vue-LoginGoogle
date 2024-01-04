<template>
  <div class="bg-orange-500 p-5 justify-between">
    
    <div v-if="loggedIn">
      <button @click="logout">Logout</button>
      <img :src="user.picture" alt="User Picture" />
    </div>
    <div v-else>
      <GoogleLogin :callback="callback" :prompt="prompt" :auto-login="autoLogin" />
    </div>
</div>

</template>

<script>
import { decodeCredential, googleLogout } from 'vue3-google-login';



export default {
  data() {
    return {
      loggedIn: false,
      user: null,
    };
  },
  methods: {
    callback(response) {
      console.log('logged in');
      this.loggedIn = true;
      console.log(response);
      this.user = decodeCredential(response.credential);
      localStorage.setItem('userToken', response.credential);
      // เมื่อ login เสร็จสามารถนำผู้ใช้ไปยังหน้าที่ต้องการ
      this.$router.push('/test')
    },
    logout() {
      googleLogout();
      this.loggedIn = false;
      localStorage.removeItem('userToken');
    },
  },
  created() {
    const storedToken = localStorage.getItem('userToken');
    if (storedToken) {
      this.loggedIn = true;
      this.user = decodeCredential(storedToken);
    } else {
      // ถ้ายังไม่ login ให้นำผู้ใช้ไปยังหน้าแรก
      this.$router.push('/');
    }
  },
};
</script>

