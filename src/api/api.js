// 项目中我们大多数的时候都会把对应的接口请求封装成api来调用
import service from '../service.js'
import qs from 'qs'

// 登录接口
export function login(data) {
    return service({
        method: 'post',
        url: '/login',
        data
    })
}

// 学生列表查询接口
export function students(params) {
    return service({
        method: 'get',
        url: '/students',
        params
    })
}

// 学生列表删除接口
export function studentDel(id) {
    return service({
        method: 'delete',
        url: `/students/${id}`  // 注意这里的符号 ``

    })

}

// 信息列表查询接口
export function getInfo(data) {
    data = qs.stringify(data)
    return service({
        method: 'get',
        url: '/info',
        data
    })
}

// 信息列表修改接口
export function updateInfo(data) {
    data = qs.stringify(data)
    return service({
        method: 'put',
        url: '/info',
        data
    })
}

// 信息列表新增接口
export function infoAdd(data) {
    data = qs.stringify(data)
    return service({
        method: 'post',
        url: '/info',
        data
    })
}

// 信息列表新增和修改接口
export function info(type, data) {
    data = qs.stringify(data)
    let obj = { method: type, url: '/info', data }
    return service(obj)
}

// 信息列表删除接口
export function infoDel(id) {
    return service({
        method: 'delete',
        url: `/info/${id}`
    })
}

// 数据概览的接口
export function dataview(){
    return service({
        method: 'get',
        url: '/dataview'
    })
}

// 旅游地图的接口
export function travel(){
    return service({
        method: 'get',
        url: '/travel'
    })
}