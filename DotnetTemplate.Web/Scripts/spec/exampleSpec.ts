import { functionOne } from '../home/example';

describe('Example', () => {
  it('can run testedFunction', () => {
    // Given
    const one = 1;

    // When
    functionOne();

    // Then
    expect(1).toEqual(one);
  });
});
