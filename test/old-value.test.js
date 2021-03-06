const OldValue = require('../lib/old-value');

describe('.check()', () => {

    it('checks value in string', () => {
        const old = new OldValue('calc', '-o-calc');
        expect(old.check('1px -o-calc(1px)')).toBeTruthy();
        expect(old.check('1px calc(1px)')).toBeFalsy();
    });

    it('allows custom checks', () => {
        const old = new OldValue('calc', '-o-calc', 'calc', /calc/);
        expect(old.check('1px calc(1px)')).toBeTruthy();
    });

});
