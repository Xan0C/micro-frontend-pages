import fetch from 'isomorphic-unfetch'

const FirstSection = ({length}) =>  <section className={"first-section"}>
  <div className={"first-section-wrapper"}>
    <h1 className={"first-section-title"}>We currently have {length} beers</h1>
    <p className={"first-section-description"}>But choose wisely!</p>
  </div>
</section>;

FirstSection.getInitialProps = async () => {
  const res = await fetch('http://localhost:5000/beers');
  const beers = await res.json();
  return {length: beers.length};
};

export default FirstSection;
