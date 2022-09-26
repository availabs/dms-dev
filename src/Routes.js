
import Auth from "pages/Auth"
import NoMatch from "pages/404"
import Documentation from "pages/Documentation"

const Routes = [
  Auth,
  ...Documentation,
  NoMatch
]

export default Routes
