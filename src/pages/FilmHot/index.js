import ContentLayout from "~/component/Layout/AllFilm";
import Header from "~/component/Layout/DefaultLayout/Header";

function FilmHot() {
    const data = {
        title: 'Phim mới cập nhật',
        page: 2,
        slug: 'phim-moi-cap-nhat'
    }
    return <div >
            <Header/>
            <ContentLayout data={data}/>
        </div>
}

export default FilmHot;