import removeFromList from "./removeFromList";
import replaceOnList from "./replaceOnList";

describe('when element is removed', () => {
  const oldList = [1, 2, 3];
  const el = 2;

  const newList = removeFromList(oldList, el);

  it('it is removed', () => {
    expect(newList).toEqual([1, 3]);
  });

  it('old list is preserved', () => {
    expect(oldList).toEqual([1, 2, 3]);
    expect(oldList).not.toBe(newList);
  });
});

describe('when element is not on the list', () => {
  const oldList = [1, 2, 3];
  const el = 5;

  const newList = removeFromList(oldList, el);

  it('ignores the operation', () => {
    expect(newList).toBe(oldList)
  });
});