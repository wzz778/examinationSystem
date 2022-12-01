import axios from "axios"
function post() {
    return new Promise((resolve, resject) => {
        axios({
            method: "GET",
            url: '/api/picture/recommendFocus',
            data: {
                begin_index: 1,
                size: 10
            }
        })
            .then(result => {
                resolve(result.data)
            })
            .catch(err => {
                resject(err)
            })
    })
}
export default {
    getUserInfo() {
        return new Promise((resolve, resject) => {
            post()
                .then(result => {
                    resolve(result)
                })
                .catch(err => {
                    resject(err)
                })
        })
    }
}