export default function removeFromList(list, element) {
  const idx = list.indexOf(element);
  return [...list.slice(0, idx), ...list.slice(idx+1, list.length)]
}