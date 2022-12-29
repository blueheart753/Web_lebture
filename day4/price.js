const price = ['2000','1000','3000','5000','4000'];
function getWonPrice(priceList) {
//   const newPrice = [];
//   for(let i =0; i<priceList.length; i++) {
//     Number(priceList[i]);
//     if(Number(priceList[i]) > 1000) {
//       newPrice.push(`${priceList[i]}원`);
//     }
//   }
  const isOverpriceList = priceList.filter((item) => {Number(item) > 1000}); 
  isOverpriceList.map((item) => `${item}원`);
  return isOverpriceList;
}
const result = getWonPrice(price);
console.log(result);


