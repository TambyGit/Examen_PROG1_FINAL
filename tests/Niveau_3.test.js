import { describe, it } from "mocha";
import { expect } from 'chai';
import { reduceDirections } from '../src/Niveau_3.js';

describe('Tableau de chaînes de caractères qui représente le plan simplifié', () => {
    it('devrait retourner la suppression des directions inutiles, dans le bon ordre', () => {
        const tableauOriginal = ["NORD", "SUD", "SUD", "EST", "OUEST", "NORD", "OUEST"];
        const tableauAttendu = ["OUEST"];
        expect(reduceDirections(tableauOriginal)).to.deep.equal(tableauAttendu);
    });
    it('devrait retourner la suppression des directions inutiles, dans le bon ordre', () => {
        const tableauOriginal = ["NORD", "SUD", "EST", "OUEST"];
        const tableauAttendu = [];
        expect(reduceDirections(tableauOriginal)).to.deep.equal(tableauAttendu);
    });
    it('devrait retourner la suppression des directions inutiles, dans le bon ordre', () => {
        const tableauOriginal = ["NORD", "SUD", "EST", "OUEST", "NORD"];
        const tableauAttendu = [];
        expect(reduceDirections(tableauOriginal)).to.deep.equal(tableauAttendu);
    });
    it('devrait retourner la suppression des directions inutiles, dans le bon ordre', () => {
        const tableauOriginal = ["NORD", "SUD", "SUD", "EST", "OUEST", "NORD", "OUEST", "EST"];
        const tableauAttendu = ["OUEST", "EST"];
        expect(reduceDirections(tableauOriginal)).to.deep.equal(tableauAttendu);
    });
    it('devrait retourner la suppression des directions inutiles, dans le bon ordre', () => {
        const tableauOriginal = [];
        const tableauAttendu = [];
        expect(reduceDirections(tableauOriginal)).to.deep.equal(tableauAttendu);
    });
});