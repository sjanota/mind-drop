export default function replaceOnList(list, element) {
  const idx = list.indexOf(element);
  return [...list.slice(0, idx), element, ...list.slice(idx+1, list.length)]
}