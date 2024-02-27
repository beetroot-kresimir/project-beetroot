function ListItem(props) {
  // console.log(props);
  console.log(props.name);
  const myNumChanged = `${props.myNum} changed`;

  return <li>item {myNumChanged}</li>;
}

export default ListItem;
