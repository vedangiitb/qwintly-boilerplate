import { RenderElement } from "@/lib/renderer/RenderElement";
import pageConfig from "./pageConfig.json";
import type { BuilderElement } from "@/types/elements";

export default function Page() {
  const config = pageConfig as { elements: BuilderElement[] };
  return config.elements.map((el) => <RenderElement key={el.id} el={el} />);
}
