import ContentLayout from "~/component/Layout/AllFilm";
import Header from "~/component/Layout/DefaultLayout/Header";

function FilmHot() {
    const data = {
        pageTitle: 'Phim hot',
        page: 2,
        pageSlug: 'phim-hot'
    }
    return <div >
            <Header/>
            <ContentLayout data={data}/>
        </div>
}

export default FilmHot;