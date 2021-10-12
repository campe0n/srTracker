let platform;
let battletag;
let region;

// getData = () => {
// fetch(https://ow-api.com/v1/stats/`${platform}`/`${region}`/`${battletag}`/profile)
//  const response = fetch('https://ow-api.com/v1/stats/pc/us/champion-12648/profile')
//     .then(res = res.json)
//     .then(data => console.log(data))
// }

// getData()

async function postData() {
  const response = await fetch(
    "https://ow-api.com/v1/stats/pc/us/champion-12648/profile",
    {
      method: "GET",
    }
  );
  return response.json();
}

postData().then((data) => {
  console.log(data);
});

export default function Stats() {
  return <div></div>;
}
