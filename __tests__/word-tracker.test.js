import { TestScheduler } from 'jest';
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
    expect(testEntry.wordCount()).toEqual(19);
  });
  test('should return vowel count', () => {
    expect(testEntry.vowelCount()).toEqual(45);
  });
  test('should return consonant count', () => {
    expect(testEntry.consonantCount()).toEqual(57);
  });
  // test('should return 8 word teaser', () => {
  //   expect(testEntry.getTeaser() + "...").toEqual("Lorem ipsum dolor sit amet, consectetur adipiscing elit...");
  // });
});