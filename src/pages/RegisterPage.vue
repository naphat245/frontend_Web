<template>
  <q-page>
    <q-card flat>
      <q-img src="/image01.png" :ratio="18.8 / 9" style="min-height: 800px; max-width: auto">
        <div class="full-width full-height row items-center justify-center">
          <div class="offset-md-1">
            <div class="Regis-Box">
              <div class="RegisBox">
                <q-form @submit.prevent="onSubmit" class="q-gutter-md">
                  <h1>Register</h1>
                  <div class="input-regis">
                    <q-input color="primary" rounded outlined v-model="fullname" label="Fullname" lazy-rules :rules="[
                      (val) => (val && val.length > 0) || 'fill your fullname',
                    ]" />
                  </div>
                  <div class="input-regis">
                    <q-input color="primary" rounded outlined v-model="email" type="text" label="Your Email" lazy-rules
                      :rules="[emailValidate, requiredValidate]" />
                  </div>
                  <div class="input-regis">
                    <q-input color="primary" rounded outlined v-model="username" type="text" label="Username" lazy-rules
                      :rules="[
                        (val) => (val && val.length > 0) || 'fill your username',
                      ]" />
                  </div>
                  <div class="input-regis">
                    <q-input color="primary" rounded outlined v-model="password" type="password" label="Your Password"
                      lazy-rules :rules="[
                        (val) => (val && val.length >= 6) || 'Must be at least 6 characters',
                      ]">
                    </q-input>
                  </div>
                  <div class="input-regis">
                    <q-input color="primary" rounded outlined v-model="conpassword" type="password"
                      label="Confirm Password" lazy-rules :rules="[
                        (val) => (val && val.length >= 6) || 'Must be at least 6 characters',
                        () => (conpassword === password) || 'Passwords do not match',
                      ]">
                    </q-input>
                  </div>
                  <div class="Age-Confirm">
                    <q-toggle class="text-black" color="positive" v-model="accept" label="I am already 20 years old" />
                  </div>
                  <button type="submit" class="btn" @click="onSubmit">
                    Register
                  </button>
                  <div class="login-link">
                    <p class="text-black">have an account ? <a @click="gotoLogin">Login</a></p>
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
import { emailValidate, requiredValidate } from "../util/validation";
import { useLoginUserStore } from "../stores/loginUserStore.js";
import { defineComponent } from "vue";
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: "RegisterPage",

  setup() {
    const $q = useQuasar()
    const fullname = ref("")
    const email = ref("")
    const username = ref("")
    const password = ref("")
    const conpassword = ref("")
    const accept = ref(false)
    return {
      fourth: ref(true),
      text: ref(''),
      fullname,
      email,
      username,
      password,
      conpassword,
      accept,
      storeLogUser: useLoginUserStore(),
    };
  },

  methods: {
    emailValidate,
    requiredValidate,

    onSubmit() {
      if (!this.usernameCaption.showClass) {
        Notify.create({
          type: "negative",
          message: "Username is already taken",
        });
        return;
      }
      const data = {
        fullname: this.fullname,
        email: this.email,
        username: this.username,
        password: this.password,
      };
      this.$api
        .post("/auth/signup", data)
        .then((res) => {
          if (res.status == 200) {
            this.storeLogUser.userid = res.data.id;
            this.storeLogUser.fullname = res.data.fullname;
            this.storeLogUser.username = res.data.username;
            this.storeLogUser.accessToken = res.data.accessToken;
            this.storeLogUser.userType = res.data.userType;
          }
          this.$refs.myRegisterForm.reset();
        })
        .catch((err) => {
          console.log(err);
        });
      this.$router.push("/");
    },

    gotoHome() {
      this.$router.push({ name: "Home" });
    },
    gotoLogin() {
      this.$router.push({ name: "Login" });
    },
    gotoRegister() {
      this.$router.push({ name: "Register" });
    },
  },

  watch: {
    username() {
      this.usernameValidate();
    },
  },
});
</script>

<style>
.Regis-Box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 150px;
}

.RegisBox {
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

.RegisBox h1 {
  font-size: 40px;
  text-align: center;
  font-weight: 600;
  color: #200b06;
}

.input-regis {
  position: relative;
  width: 100%;
  height: 50px;
  margin: 30px 0;
  margin-left: 8px;
}

.RegisBox .btn {
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

.RegisBox .btn:hover {
  background-color: rgb(255, 115, 34);
}

.login-link {
  font-size: 12px;
  text-align: center;
  margin: 20px 0 15px;
}

.login-link p a {
  color: #000000;
  text-decoration: none;
  font-weight: 600;
  text-align: center;
}

.login-link p a:hover {
  color: rgb(255, 106, 51);
}
</style>
