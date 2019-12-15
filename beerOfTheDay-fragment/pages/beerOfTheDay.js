import fetch from 'isomorphic-unfetch'

const BeerOfTheDay = ({beer}) =>  <div>
  <h1 className={"home-page-heading"}>Beer of the day</h1>
  <h4>{beer.name}</h4>
  <span>{beer.description}</span>
</div>;

BeerOfTheDay.getInitialProps = async () => {
  const res = await fetch('http://localhost:5000/beers');
  const beers = await res.json();
  return {beer: beers[0]};
};

export default BeerOfTheDay;
