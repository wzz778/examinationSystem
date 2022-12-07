import instance from "./myAxios"

export const Text = async () => instance({
    url: "/user/getLogs",
    method: "GET"
})