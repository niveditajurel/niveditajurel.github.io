import { renderToString } from "react-dom/server";
import App from "./App";
import { seoRoutes } from "./lib/seo";

export { seoRoutes };

export function render(pathname: string) {
  return renderToString(<App ssrPath={pathname} />);
}
