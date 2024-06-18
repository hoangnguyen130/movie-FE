import { searchSlug } from "~/component/Layout/HeaderSearch/SearchRecommend/SearchRecommend";
import ModelMovie from "~/component/Layout/ModelMovie";

function PlaySearch() {
    return ( <ModelMovie slug={searchSlug}/> );
}

export default PlaySearch;