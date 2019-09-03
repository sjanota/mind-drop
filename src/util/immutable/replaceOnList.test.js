import replaceOnList from "./replaceOnList";

describe('when element is removed', () => {
  const oldList = [1, 2, 3];
  const idx = 1;
  const el = 5;

  const newList = replaceOnList(oldList, idx, el);

  it('it is removed', () => {
    expect(newList).toEqual([1, 5, 3]);
  });

  it('old list is preserved', () => {
    expect(oldList).toEqual([1, 2, 3]);
    expect(oldList).not.toBe(newList);
  });
});

describe('when index is outside the list', () => {
  const oldList = [1, 2, 3];
  const idx = 5;
  const el = 5;

  const newList = replaceOnList(oldList, idx, el);

  it('ignores the operation', () => {
    expect(newList).toBe(oldList)
  });
});

describe('when index is not on the list', () => {
  const oldList = [1, 2, 3];
  const idx = -1;
  const el = 5;

  const newList = replaceOnList(oldList, idx, el);

  it('ignores the operation', () => {
    expect(newList).toBe(oldList)
  });
});