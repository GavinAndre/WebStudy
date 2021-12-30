const assert = require('assert');
const hello = require('../hello');

const sum = require('../hello');

describe('#hello.js', () => {
    describe('#asyncCalculate()', () => {

        it('#async with done', (done) => {
            (async function () {
                try {
                    let r = await hello();
                    assert.strictEqual(r, 15);
                    done();
                } catch (err) {
                    done(err);
                }
            })();
        });

        it('#async function', async () => {
            let r = await hello();
            assert.strictEqual(r, 15);
        });

        it('test sync function', () => {
            assert(true);
        });
    });
});