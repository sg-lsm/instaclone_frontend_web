import { PropTypes } from "prop-types";
import { Helmet } from "react-helmet-async";

function PageTitle({ title }) {
  return <Helmet>{title} | InstaClone</Helmet>;
}

PageTitle.prototype = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
