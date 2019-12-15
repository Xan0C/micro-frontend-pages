import fetch from 'isomorphic-unfetch'

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

const BeerTableRow = ({beer}) =>  <tr>
  <td>{beer.name}</td>
  <td>{beer.tagline}</td>
  <td><img src={beer.image_url} alt={"sadly no picture"} style={{width: 60}}/></td>
  <td>{beer.first_brewed}</td>
  <td>{beer.description}</td>
</tr>

BeerTable.getInitialProps = async () => {
  const res = await fetch('http://localhost:5000/beers');
  const beers = await res.json();
  return {beers: beers};
};

export default BeerTable;
