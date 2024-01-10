import Link from "next/link";

import {
  RiYoutubeFill,
  RiInstagramFill,
  RiTwitterXFill,
  RiSpotifyFill,
} from "react-icons/ri";

const socials = [
  {
    path: "https://www.youtube.com/BUMPOFCHICKEN",
    icon: <RiYoutubeFill />,
  },
  {
    path: "https://www.instagram.com/bumpofchickenofficial/",
    icon: <RiInstagramFill />,
  },
  {
    path: "https://twitter.com/boc_official_",
    icon: <RiTwitterXFill />,
  },
  {
    path: "https://open.spotify.com/artist/0hSFeqPehe7FtCNWuQ6Bsy",
    icon: <RiSpotifyFill />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <Link href={item.path} key={index} target="_blank">
            <div className={`${iconStyles}`}>{item.icon}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
