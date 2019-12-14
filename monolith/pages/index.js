import 'micro-frontend-react-pages/src/scss/pages/home.scss';
import FirstSection from "./firstSection";
import BeerOfTheDay from "./beerOfTheDay";
import BeerTable from "./beerTable";
import fetch from 'isomorphic-unfetch'

const Index = ({beers}) => <div>
  <header className={"home-page-header"}>
    <div className={"home-page-menu"}>
      <div className={"home-page-menu-item"}>
        <a href={"#"} className={"home-page-menu-item-link"}>Welcome to the Beerside of things</a>
      </div>
    </div>
  </header>
  <FirstSection length={beers.length} />
  <section className={"home-page-wrapper is-1-column"}>
    <BeerOfTheDay beer={beers[0]}/>
    <hr style={{
      display: 'block',
      height: '1px',
      border: '0',
      borderTop: '1px solid #ccc',
      margin: '4px 0',
      padding: '0'
    }}/>
    <BeerTable beers={beers}/>
  </section>
</div>;

  Index.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/beers');
    console.log(res.responseText);
    const json = await res.json();
    return {beers: json};
  };

export default Index;
