/* ADAPTIVE */
'use strict';

export const adaptive = {
	XXS : 360,
	XS : 480,
	SM : 576,
	MD : 768,
	LG : 992,
	XL : 1200,
	XXL : 1600,
	XXXL : 1920,

	checkSize : function (size) {
		return ( window.innerWidth < size ) ? true : false;
	},
	checkSizeUp : function (size) {
		return ( window.innerWidth >= size ) ? true : false;
	},
	checkTouch : function is_touch_device() {
		try {
			document.createEvent("TouchEvent");
			return true;
		} catch (e) {
			return false;
		}
	}
}

export default adaptive;
