export default function handleParseModelName(name) {
  return name
    .split("-")
    .map((e) => e.split("").map((c, i)=> i=== 0 ? c.toUpperCase() : c).join(""))
    .join(" ");
}
