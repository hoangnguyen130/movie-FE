import Home from "~/pages/Home"
import NewUpdate from "~/pages/NewUpdate"
import Movie from "~/pages/Movie"
import SignIn from "~/pages/SignIn"
import FilmHot from "~/pages/FilmHot"
import TheatricalFilm from "~/pages/TheatricalFilm"
import PlayFeatured from "~/pages/PlayFeatured"
import PlaySearch from "~/pages/PlaySearch"
import Cartoon from "~/pages/Cartoon/Cartoon"

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/movie', component: Movie },
    { path: '/sign-in', component: SignIn},
    { path: '/phim-moi-cap-nhat', component: NewUpdate},
    { path: '/phim-hot', component: FilmHot},
    { path: '/phim-chieu-rap', component: TheatricalFilm},
    { path: '/featured-movie', component: PlayFeatured},
    { path: '/search-movie', component: PlaySearch},
    { path: '/cartoon', component: Cartoon}
]


const privateRoutes = [

]

export {
    publicRoutes,
    privateRoutes
}
