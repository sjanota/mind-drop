export default function replaceOnList(list, idx, element) {
  if (idx < 0 || idx > list.length) {
    return list
  }
  return [...list.slice(0, idx), element, ...list.slice(idx+1, list.length)]
}