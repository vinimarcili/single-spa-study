export default function Root(props) {
  return (
    <div>
      {props.name} is mounted! {props.country ? props.country : ""}
    </div>
  );
}
