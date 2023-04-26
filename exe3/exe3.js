import { LightningElement, api } from 'lwc';

export default class Exe3 extends LightningElement {
    @api ide;
    @api name;
    @api company;
    @api status;
}