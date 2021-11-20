/* eslint-disable no-undef */
import { transformData } from "./transformer.js";

const testData = { "A": { notValue: true } }

describe('transform object', () => { 
    test('transformData correctly outputs expected obj', () => {
        const correctData = testData
        correctData.A.value = "A"
        expect(transformData(testData)).toEqual(correctData);
    });
}); 