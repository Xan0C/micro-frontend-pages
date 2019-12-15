import 'micro-frontend-react-pages/src/scss/pages/home.scss';

const Index = () => <div>
  <header className={"home-page-header"}>
    <div className={"home-page-menu"}>
      <div className={"home-page-menu-item"}>
        <a href={"#"} className={"home-page-menu-item-link"}>Welcome to the Beerside of things</a>
      </div>
    </div>
  </header>
  <div dangerouslySetInnerHTML={{
    __html: `<!--# include virtual="/firstSection" -->`
  }}></div>
  <section className={"home-page-wrapper is-1-column"}>
    <div dangerouslySetInnerHTML={{
      __html: `<!--# include virtual="/beerOfTheDay" -->`
    }}></div>
    <hr style={{
      display: 'block',
      height: '1px',
      border: '0',
      borderTop: '1px solid #ccc',
      margin: '4px 0',
      padding: '0'
    }}/>
    <div dangerouslySetInnerHTML={{
      __html: `<!--# include virtual="/beerTable" -->`
    }}></div>
  </section>
</div>;

export default Index;
