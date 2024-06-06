import ContentLayout from "~/component/Layout/AllFilm";
import Header from "~/component/Layout/DefaultLayout/Header";

function NewUpdate() {
    const data = {
        pageTitle: 'Phim mới cập nhật',
        page: 1,
        pageSlug: 'phim-moi-cap-nhat'
    }
    return <div >
            <Header/>
            <ContentLayout data={data}/>
        </div>
}

export default NewUpdate;