<template>
  <q-page>
    <q-card flat>
      <q-img src="/image01.png" :ratio="18.8 / 9" style="max-height: auto; max-width: auto">
        <div class="full-width full-height row items-center justify-center">
          <div class="offset-md-1">
            <div class="Box">
              <div class="LoginBox">
                <q-form @submit.prevent="onSubmit" class="q-gutter-md" ref="myLoginForm">
                  <h1>Login</h1>
                  <div class="input-box">
                    <q-input color="primary" rounded outlined v-model="email" label="Email" type="email" />
                  </div>
                  <div class="input-box">
                    <q-input color="primary" rounded outlined v-model="password" label="Password" type="password" />
                  </div>
                  <button type="submit" class="btn" @click="login">
                    Login
                  </button>
                  <div class="register-link">
                    <p class="text-black">Don't have an account? <a @click="gotoRegister">Register</a></p>
                  </div>
                </q-form>
              </div>
            </div>
          </div>
        </div>
      </q-img>
    </q-card>
  </q-page>
</template>

<script>
import axios, { api } from "src/boot/axios";
import { defineComponent } from "vue";
import { ref } from 'vue';


export default defineComponent({
  name: "LoginPage",

  data() {
    return {
      email: "",
      password: ""
    };
  },

  setup() {
    return {
      text: ref('')
    };
  },

  methods: {

    gotoReserve() {
      this.$router.push({ name: "Reserve" });
    },
    gotoHome() {
      this.$router.push({ name: "Home" });
    },
    gotoRegister() {
      this.$router.push({ name: "Register" });
    },
    async login() {
      if (this.email.length == 0 && this.password.length == 0) {
        console.log("Error");
      }
      else {
        const loginres = await api.post("auth/login", {
          email: this.email,
          password: this.password
        })
        if(loginres.data.status_code == "001"){
          this.$router.push({ name: "Admin" });
          localStorage.setItem("logincode",loginres.data.status_code)
          localStorage.setItem("email",loginres.data.user.email)
        }
        else{
          this.$router.push({ name: "Home" });
          localStorage.setItem("logincode",loginres.data.status_code)
          localStorage.setItem("email",loginres.data.user.email)
        }
        //console.log(loginres)
      }
    }
  },
});
</script>

<style>
.Box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 150px;
}

.LoginBox {
  position: relative;
  width: 420px;
  background: rgba(255, 255, 255, 0.719);
  border: 2px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 10px;
  padding: 30px;
}

.LoginBox h1 {
  font-size: 40px;
  text-align: center;
  font-weight: 600;
  color: #200b06;
}

.input-box {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 30px 0;
  margin-left: 8px;
}

.LoginBox .btn {
  margin-top: 2rem;
  width: 100%;
  height: 45px;
  background: orangered;
  border: none;
  outline: none;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  color: #ffffff;
  font-weight: 600;
  font-size: 20px;
  transition: background-color 0.3s ease;
}

.LoginBox .btn:hover {
  background-color: rgb(255, 115, 34);
}

.LoginBox .register-link {
  font-size: 12px;
  text-align: center;
  margin: 20px 0 15px;
}

.register-link p a {
  color: #000000;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
}

.register-link p a:hover {
  color: rgb(255, 106, 51);
}
</style>
