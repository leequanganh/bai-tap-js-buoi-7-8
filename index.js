var numArr = [];
function nhapSo() {
  var numEl = document.getElementById('num');
  var numValue = numEl.value * 1;
  numArr.push(numValue);
  numEl.value = '';
  document.getElementById('result1').innerText = numArr.join(' ; ');

  // số dương
  var positiveArr = [];
  for (var i = 0; i < numArr.length; i++) {
    if (numArr[i] > 0) {
      positiveArr.push(numArr[i]);
    }
  }

  var sumPositiveArr = 0;
  var minPositive = positiveArr[0];
  for (var i = 0; i < positiveArr.length; i++) {
    sumPositiveArr += positiveArr[i];
    var minPositiveCurrent = positiveArr[i];
    if (minPositiveCurrent < minPositive) {
      minPositive = minPositiveCurrent;
    }
  }

  document.getElementById('result2').innerText = sumPositiveArr;
  document.getElementById('result3').innerText = positiveArr.length;
  document.getElementById('result5').innerText = minPositive;

  // số nhỏ nhất trong mảng
  var minNum = numArr[0];
  for (var i = 1; i < numArr.length; i++) {
    var minNumCurrent = numArr[i];
    if (minNumCurrent < minNum) {
      minNum = minNumCurrent;
    }
  }
  document.getElementById('result4').innerText = minNum;

  // số chẵn trong mảng

  var soChanArr = [];
  var lastSochan = '';
  for (var i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
      var soChan = numArr[i];
      soChanArr.push(soChan);
      lastSochan = soChanArr.pop();
      document.getElementById('result6').innerText = lastSochan;
    }
  }
  var negativeArr = [];
  for (var i = 0; i < numArr.length; i++) {
    var num = numArr[i];
    if (num < 0) {
      negativeArr.push(num);
    }
  }

  //so sánh số lượng số dương và số lượng số âm
  if (positiveArr.length > negativeArr.length) {
    document.getElementById('result11').innerText =
    positiveArr.length +
      'so duong' +
      ' ' +
      ' nhieu hon ' +
      negativeArr.length +
      'so am';
  } else if (positiveArr.length < negativeArr.length) {
    document.getElementById('result11').innerText =
    positiveArr.length +
      'so duong' +
      ' ' +
      ' it hon' +
      negativeArr.length +
      'so am';
  } else if (positiveArr.length == negativeArr.length) {
    document.getElementById('result11').innerText =
    positiveArr.length +
      'so duong' +
      ' ' +
      ' bang so am' +
      negativeArr.length +
      'so am';
  }
  // số nguyên tố
  var primeArr = [];
  for (var i = 0; i <= numArr.length; i++) {
    isPrime = true;
    for (var n = 2; n <= numArr[i]; n++) {
      if ((numArr[i] % n == 0 && n != numArr[i]) || numArr[i] == 0 || numArr[i] == 1) {
        isPrime = false;
      }
    }
    if(isPrime == true && numArr[i] !== 0 && numArr[i] !== 1 && numArr[i] !== undefined && numArr[i] > 0) {
      primeArr.push(numArr[i]);
      console.log(primeArr);
      document.getElementById('result10').innerText = '(' + primeArr+')' + ' ' + primeArr.length;
      document.getElementById('result9').innerText = primeArr[0]
    }
    
    
    
  }
  // sắp xếp tăng dàn trong mảng
  var numArr2 = [...numArr]
   numArr2.sort(function (a, b) {
      return a - b;
    })
    document.getElementById('result8').innerText = numArr2;
}
/// đổi 2 vị trí trong mảng

function swapIndex() {
  var index1El = document.getElementById('index1');
  var index2El = document.getElementById('index2');
  var index1 = index1El.value * 1 - 1;
  var index2 = index2El.value * 1 - 1;

  const tmp = numArr[index1];
  numArr[index1] = numArr[index2];
  numArr[index2] = tmp;
  console.log(numArr);
  document.getElementById('swap-result').innerText = numArr;
}