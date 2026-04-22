import { config } from "./page.config";

function RenderElement({ el }: { el: any }) {
  if (el.type === "text") {
    return <p>{el.text}</p>;
  }

  if (el.type === "container") {
    return (
      <div style={{ padding: 20 }}>
        {el.children.map((child: any) => (
          <RenderElement key={child.id} el={child} />
        ))}
      </div>
    );
  }

  return null;
}

export default function Page() {
  return (
    <>
      {config.elements.map((el) => (
        <RenderElement key={el.id} el={el} />
      ))}
    </>
  );
}
