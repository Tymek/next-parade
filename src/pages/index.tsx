import parade from "../../lib";
import withStaticProps from "../../lib/props";

const context = require.context("../components", true, /[A-Z].*\.tsx/);

export default parade(context);

export const getStaticProps = withStaticProps(context, "src/components");
