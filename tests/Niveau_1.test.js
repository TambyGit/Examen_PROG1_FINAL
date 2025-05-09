import { describe, it } from "mocha";
import { expect } from 'chai';
import { getLastDelegation } from '../src/Niveau_1.js';

describe('Celui qui clôture la cérémonie', () => {
    it('Si l"entré ["Chili 101 2", "Estonia 58 1", "Romania 102 3", "Ecuador 103 4", "Madagascar 104 5", "Oman 50 1", "Nicaragua 51 3", "Yemen 53 4"] devrait sortir Estonia', () => {
        expect(getLastDelegation(["Chili 101 2", "Estonia 58 1", "Romania 102 3", "Ecuador 103 4", "Madagascar 104 5", "Oman 50 1", "Nicaragua 51 3", "Yemen 53 4"]))
        .to.be.equal("Estonia")
    });
});