import { useState } from "react";
import VideoList from "../VideoList";
import styles from "./SearchVideoList.module.css";


//Filtering video by category or title
function filterVideos(videos, searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

function SearchVideoList({ videos }) {
    
    const [searchText, setSearchText] = useState('Geografia')
    const foundVideos = filterVideos(videos, searchText)

    return (
        <section className={styles.container}>
            <input 
                type="search"
                placeholder="Pesquisar..."
                value={searchText}
                onChange={e => setSearchText(e.target.value)}
            />
            <VideoList 
            videos={foundVideos}
            emptyHeading={`Sem vídeos sobre "${searchText}"`} />
        </section>
    );
}

export default SearchVideoList;