import { featuredSlug } from "~/component/Layout/DefaultLayout/FeaturedMovie";
import ModelMovie from "~/component/Layout/ModelMovie";

function PlayFeatured() {
    return <ModelMovie slug={featuredSlug}/>
}

export default PlayFeatured;