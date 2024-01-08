import styles from "./Search.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import videos from "../../json/videos.json";
import SearchVideoList from "../../components/SearchVideoList";


function Search() {
    return(
        <>
            <Header />
              <Container>
                  <section className={styles.search} >
                         <h2>Pesquisar</h2>
                         <SearchVideoList videos={videos} />
                  </section>
              </Container>
            <Footer />
        </>
    );
}

export default Search;