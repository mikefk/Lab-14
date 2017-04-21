import { ClassExcercisePage } from './app.po';

describe('class-excercise App', () => {
  let page: ClassExcercisePage;

  beforeEach(() => {
    page = new ClassExcercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
