function is_leap_year(year){

	if(year % 400 == 0)
		return "leap year";

	else if(year % 4 == 0 && year % 100 !=0)
		return "leap year";
	
	else return "not leap year";
	
}

document.write(is_leap_year(223));
	