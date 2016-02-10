import postcss from 'postcss';
import { expect } from 'chai';

import plugin from '../';

const test = (input, output, opts, done) => {
    postcss([ plugin(opts) ]).process(input).then(result => {
        expect(result.css).to.eql(output);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(done);
};

describe('postcss-japanese-stylesheets', function () {

    it('converts 色 to color', done => {
        test(
            'a { 色: #ccc; }',
            'a { color: #ccc; }',
        {}, done);
    });

    it('converts 暗黒色 to #16160e', done => {
        test(
            'a { color: 暗黒色; }',
            'a { color: #16160e; }',
        {}, done);
    });

    it('converts 背景 to background', done => {
        test(
            'a { 背景: #fff; }',
            'a { background: #fff; }',
        {}, done);
    });

    it('text-align propertie and value', done => {
        test(
            'a { 行揃え: 中央寄せ; }',
            'a { text-align: center; }',
        {}, done);
    });

    it('converts !重要 to !important', done => {
        test(
            'a { color: #000 !重要; }',
            'a { color: #000 !important; }',
         {}, done);
    });

});
