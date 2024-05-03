let ANDREY_API_URL = "obama.tplinkdns.com:8081" //andrey
let REMOTE_API_URL = "202.181.188.172:8080" //remote server
let LOCAL_API_URL = "localhost:8080" //local server
export let BASE_API_URL = `http://${REMOTE_API_URL}/api/v1/`;

export const NAV_BAR ={
    menus: [
        {
            path:'home',
            text:'Главная',
            roles:['USER','ADMIN']
        },
        {
            path:'catalogue',
            text:'Каталог',
            roles:['USER']
        },
        {
            path:'pass-book',
            text:'Срок сдачи книги',
            roles:['USER']
        },
        {
            path:'admin',
            text:'Админ панель',
            roles:['ADMIN']
        }
    ]
}
