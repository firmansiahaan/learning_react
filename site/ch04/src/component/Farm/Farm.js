// LISTING 4- 6: Using props inside a componen

export default function Farm(props) {
  return (
    <>
      <div>
        <p>{props.farmer} had a farm.</p>
        <p>On his farm, he had some {props.animals[0]}.</p>
        <p>On his farm, he had some {props.animals[1]}.</p>
        <p>On his farm, he had some {props.animals[2]}.</p>
      </div>
      
    </>
  );
}