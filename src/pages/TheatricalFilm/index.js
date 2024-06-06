import ContentLayout from "~/component/Layout/AllFilm";
import Header from "~/component/Layout/DefaultLayout/Header";

function TheatricalFilm() {
    const data = {
        pageTitle: 'Phim chiếu rạp',
        page: 3,
        pageSlug: 'phim-chieu-rap'
    }
    return <div >
            <Header/>
            <ContentLayout data={data}/>
        </div>
}

export default TheatricalFilm;