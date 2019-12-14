const BeerOfTheDay = ({beer}) =>  <div>
  <h1 className={"home-page-heading"}>Beer of the day</h1>
  <h4>{beer.name}</h4>
  <span>{beer.description}</span>
</div>;

export default BeerOfTheDay;
