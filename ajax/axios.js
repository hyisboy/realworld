/*
 * @Descripttion: 
 * @version: 
 * @Author: david
 * @Date: 2020-08-21 16:52:43
 * @LastEditors: david
 * @LastEditTime: 2020-08-21 18:11:16
 */
import Axios from 'axios'
import Vue from 'vue'
const qs = require('querystring')
const axios = Axios.create({
  baseURL: 'https://conduit.productionready.io/api',
  headers: {
    //"Content-Type": "application/json"
  }
})

function get() {
  axios({
    method: 'get',
  })
}
export function post(url, data) {
  console.log(data)
  return axios({
    method: 'post',
    url,
    data: data
  }).then(res => res.data).catch(err => err.response)
}
