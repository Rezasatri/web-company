const txtElement = ['Perkenalkan nama saya Reza Satria Tama', 'Saya dari kelas 11 sija'];
let count =0;
let txtIndex =0;
let currettTxt ='';
let words ='';

(function  ngetik(){

	if (count == txtElement.length){
		count = 0;
	}

	curretTxt = txtElement[count];

	words = curretTxt.slice(0, ++txtIndex);
	document.querySelector('.efek-ngetik').textContent = words;

	if (words.length == curretTxt.length){
		count++;
		txtIndex=0;
	}
	setTimeout(ngetik, 250);

})();