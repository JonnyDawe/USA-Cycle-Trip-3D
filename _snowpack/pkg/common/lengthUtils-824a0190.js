import { I, R } from './unitUtils-b17203be.js';
import { s } from './Point-ee7951c3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const m={inches:I(1,"meters","inches"),feet:I(1,"meters","feet"),"us-feet":I(1,"meters","us-feet"),yards:I(1,"meters","yards"),miles:I(1,"meters","miles"),"nautical-miles":I(1,"meters","nautical-miles"),millimeters:I(1,"meters","millimeters"),centimeters:I(1,"meters","centimeters"),decimeters:I(1,"meters","decimeters"),meters:I(1,"meters","meters"),kilometers:I(1,"meters","kilometers"),"decimal-degrees":1/R(1,"meters",s.radius)};

export { m };
