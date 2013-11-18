
/**
  @copyright Copyright (c)2013 Figomago <http://figomago.wordpress.com>
  @license : GNU General Public License v3 or later
----------------------------------------------------------------------- */

var calcContainer=null;

function chkSeps(str){
  return addSeps(str, '.', '.', ',');
}

function gdelay(value) {
    switch (value) {
      case 'a' :
            this.str = stripComma(calcContainer.txtPrice.value);
            calcContainer.txtPrice.value = chkSeps(this.str);
      break;
      case 'b' :
            this.str = stripComma(calcContainer.txtIntr.value);
            calcContainer.txtIntr.value = chkSeps(this.str);
      break;
      case 'c' :
            this.str = stripComma(calcContainer.txtYears.value);
            calcContainer.txtYears.value = chkSeps(this.str);
      break;
      case 'd' :
            this.str = stripComma(calcContainer.txtDep.value);
            calcContainer.txtDep.value = chkSeps(this.str);
      break;
      case 'x' :
            this.str = stripComma(calcContainer.resultbox.value);
            calcContainer.resultbox.value = chkSeps(this.str);
      break;
    }
}

function calcDly(value) {
    gdelay(value);
    value == 'x'? setTimeout("revcall()",200) : setTimeout("launchCalc()",200);
}

function addSeps(s, idx, o, sep)
{
	s += '';
	this.sEnd = '';
	this.dpos = s.indexOf(idx);
	if (this.dpos != -1) {
		this.sEnd = o + s.substring(this.dpos + 1, s.length);
		s = s.substring(0, this.dpos);
	}
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(s)) {
		s = s.replace(rgx, '$1' + sep + '$2');
	}
	return s + this.sEnd;
}

function stripComma(str){
	if (str.indexOf(',') != -1)
	{
		this.temp = str.split(',');
		this.j = 0;
		this.tmpStr = "";

		while ( this.temp.length > this.j)
			{this.tmpStr += this.temp[this.j]; this.j++;}
		str = this.tmpStr;
	}
	return str;
}

function launchCalc() {

	this.as = stripComma(calcContainer.txtPrice.value);
	this.bs = stripComma(calcContainer.txtIntr.value);
	this.cs = stripComma(calcContainer.txtYears.value);
	this.ds = stripComma(calcContainer.txtDep.value);

    calcContainer.txtPrice.value = chkSeps(this.as);
    calcContainer.txtIntr.value = chkSeps(this.bs);
    calcContainer.txtYears.value = chkSeps(this.cs);
    calcContainer.txtDep.value = chkSeps(this.ds);

	calc(this.as, this.bs, this.cs, this.ds);
}

function revcall() {
	this.bs = stripComma(calcContainer.txtIntr.value);
	this.cs = stripComma(calcContainer.txtYears.value);
	this.ds = stripComma(calcContainer.txtDep.value);
	this.xs = stripComma(calcContainer.resultbox.value);

    calcContainer.txtIntr.value = chkSeps(this.bs);
    calcContainer.txtYears.value = chkSeps(this.cs);
    calcContainer.txtDep.value = chkSeps(this.ds);
    calcContainer.resultbox.value = chkSeps(this.xs);

    revcalc(this.xs, this.bs, this.cs, this.ds);
}

function calc(loan, b, years, deposit) {
	this.i = b/(12 * 100);

	this.loan = loan - deposit;
	this.n = years * 12;
	this.one = ( this.i * Math.pow((1 + this.i), this.n) );
	this.two = ( Math.pow((1 + this.i), this.n) - 1 );
	this.result = (this.loan * this.one / this.two);
	this.result = roundNumber(this.result, 2);

	calcContainer.resultbox.value = chkSeps(this.result);
	if(calcContainer.resultbox.value == "NaN")	calcContainer.resultbox.value = "";
}

function revcalc(monthly, b, years, deposit) {
	this.loan = 0;
	this.i = b/(12 * 100);
	this.deposit = parseFloat(deposit);
    this.months = years * 12;
	this.one = ( this.i * Math.pow((1 + this.i), this.months) );
	this.two = ( Math.pow((1 + this.i), this.months) - 1 );
	this.loan = this.deposit + (monthly * this.two / this.one);
    this.loan = roundNumber(this.loan, 2);

	calcContainer.txtPrice.value = chkSeps(this.loan);
	if(calcContainer.txtPrice.value == "NaN") calcContainer.txtPrice.value = "";
}

function roundNumber(num, dec) {
	return Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
}

function calcDly1(value) {
    gdelay(value);
    value == 'x'? setTimeout("revcall1()",200) : setTimeout("launchCalc1()",200);
}

function launchCalc1() {

	this.as = stripComma(calcContainer.txtPrice.value);
	this.bs = stripComma(calcContainer.txtIntr.value);
	this.cs = stripComma(calcContainer.txtYears.value);

    calcContainer.txtPrice.value = chkSeps(this.as);
    calcContainer.txtIntr.value = chkSeps(this.bs);
    calcContainer.txtYears.value = chkSeps(this.cs);

	calc1(this.as, this.bs, this.cs);
}

function revcall1() {

	this.bs = stripComma(calcContainer.txtIntr.value);
	this.cs = stripComma(calcContainer.txtYears.value);
	this.xs = stripComma(calcContainer.resultbox.value);

    calcContainer.txtIntr.value = chkSeps(this.bs);
    calcContainer.txtYears.value = chkSeps(this.cs);
    calcContainer.resultbox.value = chkSeps(this.xs);

    revcalc1(this.xs, this.bs, this.cs);
}

function calc1(loan, b, c) {
	this.i = b/(12 * 100);
	this.deposit = 0;
	this.loan = loan - this.deposit;
	this.one = ( this.i * Math.pow((1 + this.i), c) );
	this.two = ( Math.pow((1 + this.i), c) - 1 );
	this.result = (this.loan * this.one / this.two);
	this.result = roundNumber(this.result, 2);

	calcContainer.resultbox.value = chkSeps(this.result);
	if(calcContainer.resultbox.value == "NaN")	calcContainer.resultbox.value = "";

}

function revcalc1(monthly, b, c) {
	this.i = b/(12 * 100);
	this.deposit = 0;
    this.one = ( this.i * Math.pow((1 + this.i), c) );
	this.two = ( Math.pow((1 + this.i), c) - 1 );
	this.loan = (monthly * this.two / this.one) + this.deposit;
	this.loan = roundNumber(this.loan, 2);

	calcContainer.txtPrice.value = chkSeps(this.loan);
	if(calcContainer.txtPrice.value == "NaN") calcContainer.txtPrice.value = "";
}

function calcDly2(value) {
    gdelay(value);
    value == 'x'? setTimeout("revcall2()",200) : setTimeout("launchCalc2()",200);
}

function launchCalc2() {
	this.as = stripComma(calcContainer.txtPrice.value);
	this.bs = stripComma(calcContainer.txtIntr.value);
	this.cs = stripComma(calcContainer.txtYears.value);

    calcContainer.txtPrice.value = chkSeps(this.as);
    calcContainer.txtIntr.value = chkSeps(this.bs);
    calcContainer.txtYears.value = chkSeps(this.cs);

	calc2(this.as, this.bs, this.cs);
}

function revcall2() {

	this.bs = stripComma(calcContainer.txtIntr.value);
	this.cs = stripComma(calcContainer.txtYears.value);
	this.xs = stripComma(calcContainer.resultbox.value);

    calcContainer.txtIntr.value = chkSeps(this.bs);
    calcContainer.txtYears.value = chkSeps(this.cs);
    calcContainer.resultbox.value = chkSeps(this.xs);

    revcalc2(this.xs, this.bs, this.cs);
}

function calc2(loan, b, years) {
	this.i = b/(12 * 100);
	this.deposit = 0;
	this.loan = loan - this.deposit;
	this.n = years * 12;
	this.one = ( this.i * Math.pow((1 + this.i), this.n) );
	this.two = ( Math.pow((1 + this.i), this.n) - 1 );
	this.result = (this.loan * this.one / this.two);
	this.result = roundNumber(this.result, 2);

	calcContainer.resultbox.value = chkSeps(this.result);
	if(calcContainer.resultbox.value == "NaN") calcContainer.resultbox.value = "";

}

function revcalc2(monthly, b, years) {
	this.i = b/(12 * 100);
	this.deposit = 0;

	this.n = years * 12;
	this.one = ( this.i * Math.pow((1 + this.i), this.n) );
	this.two = ( Math.pow((1 + this.i), this.n) - 1 );
	this.loan = (monthly * this.two / this.one) + this.deposit;
	this.loan = roundNumber(this.loan, 2);

	calcContainer.txtPrice.value = chkSeps(this.loan);
	if(calcContainer.txtPrice.value == "NaN")	calcContainer.txtPrice.value = "";
}

function calcDly3(value) {
    gdelay(value);
	if(value != 'a') setTimeout("revcall3()",200);
}

function revcall3() {
	this.bs = stripComma(calcContainer.txtIntr.value);
	this.cs = stripComma(calcContainer.txtYears.value);
	this.ds = stripComma(calcContainer.txtDep.value);
	this.xs = stripComma(calcContainer.resultbox.value);

    calcContainer.txtIntr.value = chkSeps(this.bs);
    calcContainer.txtYears.value = chkSeps(this.cs);
    calcContainer.txtDep.value = chkSeps(this.ds);
    calcContainer.resultbox.value = chkSeps(this.xs);

    calcPrice(this.xs, this.bs, this.cs, this.ds);
}

function calcPrice(monthly, b, years, d) {
	this.i = b/1200;
	this.deposit = parseFloat(d);
	this.n = years * 12;
    this.PV = 0;
    this.PV = this.deposit + monthly*((1-(1/Math.pow((1+this.i),this.n)))/this.i);
    this.loan = this.PV*Math.pow((1+this.i),this.n);
    this.loan = roundNumber(this.loan, 2);

	calcContainer.txtPrice.value = chkSeps(this.loan);
	if(calcContainer.txtPrice.value == "NaN") calcContainer.txtPrice.value = "";
}

window.onload = function() {
    calcContainer = document.getElementById("mcalcLive");
	launchCalc();
}