// import user from './user.json';

export function User(props) {
  // console.log(props)
  return (
    <div className="profile">
      <div className="description">
        <img
          src={props.userProfile.avatar}
          alt="User avatar"
          className="avatar"
          width="360"
        />
        <p className="name">{props.userProfile.username}</p>
        <p className="tag">{props.userProfile.tag}</p>
        <p className="location">{props.userProfile.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers </span>
          <span className="quantity">{props.userProfile.stats.followers}</span>
        </li>
        <li>
          <span className="label">Views </span>
          <span className="quantity">{props.userProfile.stats.views}</span>
        </li>
        <li>
          <span className="label">Likes </span>
          <span className="quantity">{props.userProfile.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
