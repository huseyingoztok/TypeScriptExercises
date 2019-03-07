abstract class MevzuatBase {
    
    mevzuatKaydet(){
        console.log("Mevzuat kaydı alındı");
    }

    abstract mevzuatTur() : string;
}


class MevzuatA extends MevzuatBase{
    mevzuatTur(): string {
       return "MevzuatA"
    }

} 


class MevzuatB extends MevzuatBase{
    mevzuatTur(): string {
        return "MevzuatB"
    }

}


let mevzuatA = new MevzuatA();
mevzuatA.mevzuatKaydet();
console.log(mevzuatA.mevzuatTur());

let mevzuatB = new MevzuatB();
mevzuatB.mevzuatKaydet();
console.log(mevzuatB.mevzuatTur());