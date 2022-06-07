import { helloLib } from './hello-lib';

describe('helloLib', () => {
    it('should work', () => {
        var str = helloLib();
        console.log(str);
        expect(str != "").toEqual(true);
    })
})