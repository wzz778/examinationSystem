import instance from "./myAxios"

export const Text = async () => instance({
    url: "/user/getLogs",
    method: "GET"
})

export const getAllGrade = async () => instance({
    url: "/grade/getAllGrade",
    method: "GET"
})