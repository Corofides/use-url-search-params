
import {getSearchParamsAsArray} from './SearchParamsAsArray';

test('empty search string results in empty array', () => {
    expect(getSearchParamsAsArray).toBe([]);
});
