**Contents**

I)Assumptions
II)Code Execution Flow
II)Run Procedure

I.Assumptions

	1)All the inputs are case-insensitive
	(for all currency,units and Roman numerals)
		ex. Gold gold GOLD are same
	
	2)As currency represents Roman numerals but credit values
	could be floating point numbers.It is acceptable to input
	credit values in floating point number.
	
	3)There should be any minimum limit, acceptable for credit value,in
	this case it is ratio of credit/value which should be greater than(or equal) 0.00001 
	(i.e. ratio less than this, is not acceptable)

II.Code flow

	1)ReadStream interface is created and 'line' event is attached for listening.
	2)Each new Line is trimmed and forwarded to Merchant function for further processing.
	3)In Merchant function line is matched again 4 different Regular Expressions to
	detect type of line(assignment/query).If line does not match any of the expressions
	it is declared as undetected type.
	4)There are 4 types of lines
		a)Assignment:-assignment lines assign inter-galaxy currency to Roman numeral
		b)Credit:-credit line give currency conversion in units(metal or scrap) with
		credit value.
		c)HowMuch query:-howmuch query is used to get inter-Galaxy currency value in
		Arabic decimals.
		d)HowMany query:-howmany query is used to get credit values for inter-Galaxy
		currency.
	5)function is used to convert inter-galaxy currency to it's value.
	Function Works as follows,
		a)Convert inter-Galaxy currency array to respective roman numeral,
		while converting use saved inter-galaxy currency for conversion.
		b)Check if constructed roman numeral is valid.
		c)Convert that roman numeral to decimal number.

III.Run Procedure

	1)Unzip the code to a folder,let's say "project".
	2)Please verify if all the files exist in the folder project.
	(index.js,helper.js,input.txt)
	3)You need node.js installed on your machine to run this code.
	(https://nodejs.org/en/)
	4)Open terminal/command promt(cmd) and go to folder project.
	5)Run the Command
		node index.js