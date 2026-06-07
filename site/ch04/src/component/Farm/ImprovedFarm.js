// LISTING 4- 7: An improved version of the Farm componen

export default function Farm(props) {
  let onHisFarm = [];
  if (props.animals) {
    onHisFarm = props.animals.map((animal, index) => (
      <p key={index}>On his farm he had some {animal}.</p>
    ));
  }
  return (
    <>
      <p>{props.farmer} had a farm.</p>
      {onHisFarm}
    </>
  );
}