import { PageRenderer } from "@/lib/renderer/PageRenderer";
import type { ConfigType } from "@/types/elements";
import pageConfig from "./pageConfig.json";

export default function Page() {
  return <PageRenderer config={pageConfig as ConfigType} />;
}
