const cards = [{
  "id": "ade869d8-7913-4f67-bb4d-72719f0a2be0",
  "address": {
    "bitcoin": "1GpBtJXXa1NdG94cYPGZTc3DfRY2P7EwzH"
  },
  "label": "USD card",
  "currency": "USD",
  "balance": "897.29",
  "available": "897.29",
  "lastTransactionAt": "2014-09-24T18:11:53.561Z",
  "settings": {
    "position": 1,
    "starred": true
  }
}, {
  "id": "91380a1f-c6f1-4d81-a204-8b40538c1f0d",
  "address": {
    "bitcoin": "1KHpy2xrscep4RiXPiM3jyjee82iBMyMan"
  },
  "label": "BTC Card #2",
  "currency": "BTC",
  "balance": "0.00",
  "available": "0.00",
  "lastTransactionAt": "2014-07-07T05:40:46.624Z",
  "settings": {
    "position": 7,
    "starred": true
  }
}];

class CardsApi {
  static getMyCards() {
    chrome.cookies.get({url:'https://uphold.com', name: '_token'},(cookie)=>{
      console.log(cookie.value);
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], cards));
      }, 1000);
    });
  }
}

export default CardsApi;
