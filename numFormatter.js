function commaNumber(number, decimal) {
	return number.toFixed(decimal).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
