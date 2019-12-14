const BeerTableRow = ({beer}) =>  <tr>
  <td>{beer.name}</td>
  <td>{beer.tagline}</td>
  <td><img src={beer.image_url} alt={"sadly no picture"} style={{width: 60}}/></td>
  <td>{beer.first_brewed}</td>
  <td>{beer.description}</td>
</tr>

export default BeerTableRow;
