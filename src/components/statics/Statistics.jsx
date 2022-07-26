export function Stats(props) {
  const list = props.userStats.map(item => (
    <li key={item.id} className="item">
      <span className="label">{item.label}</span>
      <span className="percentage"> {item.percentage.toString()} %</span>
    </li>
  ));
  return (
    <section className="statistics">
      <h2 className="title">{props.title}</h2>

      <ul className="stat-list">{list}</ul>
    </section>
  );
}
