import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile(data) {
  console.log(data.location.state.referrer.battletag);
  const battletag = data.location.state.referrer.battletag;
  const platform = data.location.state.referrer.platform;
  const region = data.location.state.referrer.region;
  const url = `https://ow-api.com/v1/stats/${platform}/${region}/${battletag}/profile`;
  const [profile, setProfile] = useState(null);

  let content = null;

  useEffect(() => {
    axios.get(url).then((response) => {
      setProfile(response.data);
    });
  }, [url]);

  if (profile) {
    content = (
      <div className="page">
        <h2>{profile.name}</h2>
      </div>
    );
  }
  return <div>{content}</div>;
}
