import styles from "./Search.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import VideoList from "../../components/VideoList";
import videos from "../../json/videos.json";


function Search() {
    return(
        <>
            <Header />
              <Container>
                  <section className={styles.search} >
                         <h2>Pesquisar</h2>
                         <VideoList videos={videos} />
                  </section>
              </Container>
            <Footer />
        </>
    );
}

export default Search;