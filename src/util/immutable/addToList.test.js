import addToList from "./addToList";

describe('when element is added', () => {
  const oldList = [1, 2, 3];
  const el = 4;

  const newList = addToList(oldList, el);

  it('it is appended', () => {
    expect(newList).toEqual([1, 2, 3, 4]);
  });

  it('old list is preserved', () => {
    expect(oldList).toEqual([1, 2, 3]);
    expect(oldList).not.toBe(newList);
  });
});