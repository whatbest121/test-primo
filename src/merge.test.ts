import { merge } from './merge';

describe('merge function', () => {
    it('should merge three sorted collections correctly', () => {
        const collection1 = [1, 3, 5, 7];
        const collection2 = [8, 6, 4, 2];
        const collection3 = [9, 10, 11, 12];
        const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

        const result = merge(collection1, collection2, collection3);

        expect(result).toEqual(expected);
    });
});
