import BeerTableRow from "./beerTableRow";

const BeerTable = ({beers}) => <div>
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
    {beers.map(beer => <BeerTableRow beer={beer}/>)}
    </tbody>
  </table>
</div>;

export default BeerTable;
