import Home from "~/pages/Home"
import Movie from "~/pages/Movie"
import SignIn from "~/pages/SignIn"

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/movie', component: Movie },
    { path: '/sign-in', component: SignIn}
]


const privateRoutes = [

]

export {
    publicRoutes,
    privateRoutes
}
