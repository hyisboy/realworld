<!--
 * @Descripttion: 
 * @version: 
 * @Author: david
 * @Date: 2020-08-21 16:12:50
 * @LastEditors: david
 * @LastEditTime: 2020-08-22 12:41:34
-->
<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ isLogin ? "Login" : "Sign up" }}</h1>
          <p class="text-xs-center">
            <a href="">Have an account?</a>
          </p>
          <ul class="error-messages" v-if="taken">
            <li>{{ taken }}</li>
          </ul>
          <fieldset class="form-group">
            <input
              class="form-control form-control-lg"
              type="text"
              placeholder="Your Name"
              v-model="username"
              v-if="!isLogin"
            />
          </fieldset>
          <fieldset class="form-group">
            <input
              class="form-control form-control-lg"
              type="text"
              placeholder="Email"
              v-model="email"
            />
          </fieldset>
          <fieldset class="form-group">
            <input
              class="form-control form-control-lg"
              type="password"
              placeholder="Password"
              v-model="password"
            />
          </fieldset>
          <button
            class="btn btn-lg btn-primary pull-xs-right"
            type="submit"
            @click="toSubmit"
          >
            {{ isLogin ? "Login" : " Sign up" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { post } from "@/ajax/axios";
const Cookie = process.client ? require("js-cookie") : null;

export default {
  scrollToTop: true,
  data() {
    return {
      email: "4982043795@qq.com",
      username: "his",
      password: "hy125800",
      isLogin: true,
      taken: ""
    };
  },
  methods: {
    toSubmit() {
      if (this.isLogin) {
        this.login();
      } else {
        this.register();
      }
    },
    login() {
      post("/users/login", {
        user: {
          email: this.email,
          password: this.password
        }
      }).then(res => {
        console.log(res);
        this.$store.commit("setUserInfo", res.user);
        Cookie.set("user", res.user);
        this.$router.push({
          path: "/"
        });
      });
    },
    register() {
      post("/users", {
        user: {
          username: this.username,
          email: this.email,
          password: this.password
        }
      })
        .then(res => {
          const errors = res.data && res.data.errors;
          if (errors) {
            this.taken = "";
            Object.keys(errors).forEach(_e => {
              this.taken = _e + " " + this.taken + errors[_e][0] + " ";
            });
          } else if (res.user) {
            this.isLogin = true;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
