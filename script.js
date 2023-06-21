// complete the given function

function palindrome(str){
	let original = str;
	let arrStr = str.split();
	let rev = arrStr.revrse();
	let ans = rev.join('');
	if(original===ans)
		true;
	else
		false;

}
module.exports = palindrome
