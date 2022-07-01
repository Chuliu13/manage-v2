// 项目中我们大多数的时候都会把对应的接口请求封装成api来调用
import service from '../service.js'

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