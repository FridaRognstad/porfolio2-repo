import PropTypes from "prop-types";
import Link from "next/link";
import Image from "next/image";

export default function LinkProp({ url }) {
  return (
    <Link href={url}>
      <a>
        <Image
          src={`/GitHub-Mark-Light-64px.png`}
          alt="GitHub logo"
          width={30}
          height={30}
        />
      </a>
    </Link>
  );
}

LinkProp.propTypes = {
  url: PropTypes.string.isRequired,
};
