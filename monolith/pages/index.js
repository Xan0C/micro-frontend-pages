import 'micro-frontend-react-pages/src/scss/pages/home.scss';

const Index = () => <div>
  <header className={"home-page-header"}>
    <div className={"home-page-menu"}>
      <div className={"home-page-menu-item"}>
        <a href={"#"} className={"home-page-menu-item-link"}>Welcome to the Beerside of things</a>
      </div>
    </div>
  </header>
  <section className={"first-section"}>
    <div className={"first-section-wrapper"}>
      <h1 className={"first-section-title"}>We currently have NUMBER beers</h1>
      <p className={"first-section-description"}>But choose wisely!</p>
    </div>
  </section>
  <section className={"home-page-wrapper is-1-column"}>
    <h1 className={"home-page-heading"}>Beer of the day</h1>
    <div>
      <h4>Barre Altschuss</h4>
      <span>Beschreibung....</span>
    </div>
    <hr style={{
      display: 'block',
      height: '1px',
      border: '0',
      borderTop: '1px solid #ccc',
      margin: '4px 0',
      padding: '0'
    }}/>
    <div>
      <h1 className={"home-page-heading"}>List of our awesome beers</h1>
      <table align={"center"} style={{
        fontFamily: "Trebuchet MS, Arial, Helvetica, sans-seri",
        borderCollapse: 'collapse',
        width: '100%'
      }}>
        <thead style={{
          paddingTop: '4px',
          paddingBottom: '4px',
          textAlign: 'center',
          backgroundColor: '#4CAF50',
          color: 'white'
        }}>
          <tr>
            <th>Name</th>
            <th>Tagline</th>
            <th>Image</th>
            <th>First Brewed</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody align={"center"} style={{
          border: '1px solid #ddd',
          padding: '8px'
        }}>
          <tr>
            <td>Barre</td>
            <td>Barre Bräu dein Herz erfreu!</td>
            <td>nope</td>
            <td>1968</td>
            <td>Beschte</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</div>;

export default Index;
