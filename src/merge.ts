export function merge(collection1: number[], collection2: number[], collection3: number[]): number[] {
    let result: number[] = [];
    let i = 0, j = 0, k = 0;

    while (i < collection1.length || j < collection2.length || k < collection3.length) {
        const min1 = collection1[i] !== undefined ? collection1[i] : Infinity;
        const min2 = collection2[j] !== undefined ? collection2[j] : -Infinity;
        const min3 = collection3[k] !== undefined ? collection3[k] : Infinity;

        if (min1 <= min2 && min1 <= min3) {
            result.push(min1);
            i++;
        } else if (min2 <= min3) {
            result.push(min2);
            j++;
        } else {
            result.push(min3);
            k++;
        }
    }

    return result;
}
