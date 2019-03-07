var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MevzuatBase = /** @class */ (function () {
    function MevzuatBase() {
    }
    MevzuatBase.prototype.mevzuatKaydet = function () {
        console.log("Mevzuat kaydı alındı");
    };
    return MevzuatBase;
}());
var MevzuatA = /** @class */ (function (_super) {
    __extends(MevzuatA, _super);
    function MevzuatA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MevzuatA.prototype.mevzuatTur = function () {
        return "MevzuatA";
    };
    return MevzuatA;
}(MevzuatBase));
var MevzuatB = /** @class */ (function (_super) {
    __extends(MevzuatB, _super);
    function MevzuatB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MevzuatB.prototype.mevzuatTur = function () {
        return "MevzuatB";
    };
    return MevzuatB;
}(MevzuatBase));
var mevzuatA = new MevzuatA();
mevzuatA.mevzuatKaydet();
console.log(mevzuatA.mevzuatTur());
var mevzuatB = new MevzuatB();
mevzuatB.mevzuatKaydet();
console.log(mevzuatB.mevzuatTur());
