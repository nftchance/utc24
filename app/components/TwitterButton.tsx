import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab);

const TwitterButton = () => {
  return (
    <a
      href="https://twitter.com/utc_24"
      className="button secondary"
      target="_blank"
      rel="noreferrer"
      style={{
        marginLeft: 15,
      }}
    >
      <FontAwesomeIcon className="w-4 h-4" icon={["fab", "twitter"]} />
    </a>
  );
};

export default TwitterButton;
