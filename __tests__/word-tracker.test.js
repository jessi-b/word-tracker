import Entry from '.././src/js/word-tracker.js';

describe('Entry', () => {

  let testEntry;

  beforeEach(() => {
    testEntry = new Entry("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
  });

  test('should return create an entry object', () => {
    expect(testEntry.body).toEqual("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
  });
  test('should return word count', () => {
    expect(testEntry.countWords()).toEqual("19");
  });
});
