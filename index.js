module.exports = {
	
	test: function() {
	
		return "my name is test";
		
	},
	
	
	/**
	 * Finds the minimum value in an array.
	 * @param {Array} array
	 * @return {*}
	 */
	arrayMin: function(array) {
		var smallest;
		if(isNaN(array)){
			smallest = array[0];
			count = array.length; 
			for (var i = 0; i < count; i++) {
				if (array[i] < smallest) {
					smallest = array[i];
				}
			}
		} else {
			smallest = array;
		}	
		
		return smallest;
	},
	
	/**
	 * Finds the maximum value in an array.
	 * @param {Array} array
	 * @return {*}
	 */
	arrayMax: function(array) {
		var largest;
		if(isNaN(array)){
			largest = array[0];
			count = array.length;
			for (var i = 0; i < count; i++) {
				if (array[i] > largest) {
					largest = array[i];
				}
			}
		} else {
			largest = array
		}
		
		return largest;
	}, 
	
	/**
	 * Finds and returns the index of an object in an array of objects via the object's key supplied.
	 * @param {String} key
	 * @param {String} value
	 * @param {Object} data
	 * @return {*}
	 */
	indexByKey: function(key, value, data){
		var count = data.length;
		for(var index = 0; index < count; index++ ){
			if(data[index][key] == value){
				return index;
			}
		}
		return null;
	}
	
}