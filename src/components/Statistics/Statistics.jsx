import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export function Stats(props) {
  const { userStats } = props;
  const list = userStats.map(item => (
    <li key={item.id} className={s.statsItem}>
      <span className={s.statsLabel}>{item.label}</span>
      <span className={s.statsPercentage}> {item.percentage.toString()} %</span>
    </li>
  ));
  return (
    <section className={s.statistics}>
      {props.title && (
        <h2 className={s.statsTitle}>{props.title.toUpperCase()}</h2>
      )}

      <ul className={s.statsList}>{list}</ul>
    </section>
  );
}

Stats.propTypes = {
  userStats: PropTypes.array,
  title: PropTypes.string,
};
