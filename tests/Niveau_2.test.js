import { describe, it } from "mocha";
import { expect } from 'chai';
import { countMaxBobsleigh } from '../src/Niveau_2.js';

describe('Le nombre de Bobsleigh que vous pouvez placer dans le parc', () => {
    it('entrée map retourne 3', () => {
        expect(countMaxBobsleigh(5, ["....X", "X....", ".....", "..X..", "X...X"]))
        .to.be.equal(3)
    });
    it('entrée map retourne 0', () => {
        expect(countMaxBobsleigh(0, []))
        .to.be.equal(0)
    });
    it('entrée map retourne 0', () => {
        expect(countMaxBobsleigh(5, [".X..X", "X..X.", "..X..", "..X..", "X...X"]))
        .to.be.equal(0)
    });
    it('entrée map retourne 5', () => {
        expect(countMaxBobsleigh(5, ["....X", "X....", ".....", ".....", "....X"]))
        .to.be.equal(5)
    });
    it('entrée map retourne 4', () => {
        expect(countMaxBobsleigh(4, ["...X", "X...", "....", "...."]))
        .to.be.equal(2)
    });
});