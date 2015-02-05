jQuery(document).ready(function ($) {
	var options = {
		$AutoPlay: true,									//[Optional] Whether to auto play, to enable slideshow, this option must be set to true, default value is false
		$DragOrientation: 3,								//[Optional] Orientation to drag slide, 0 no drag, 1 horizental, 2 vertical, 3 either, default value is 1 (Note that the $DragOrientation should be the same as $PlayOrientation when $DisplayPieces is greater than 1, or parking position is not 0)
		$SlideDuration: 1000,								//[Optional] Specifies default duration (swipe) for slide in milliseconds, default value is 500

		//Bullet Navigation
		$BulletNavigatorOptions: {
			$Class: $JssorBulletNavigator$,					//[Required] Class to create navigator instance
			$ChanceToShow: 2,								//[Required] 0 Never, 1 Mouse Over, 2 Always
//			$AutoCenter: 1,									//[Optional] Auto center navigator in parent container, 0 None, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
//			$Steps: 1,										//[Optional] Steps to go for each navigation request, default value is 1
//			$Lanes: 1,										//[Optional] Specify lanes to arrange items, default value is 1
			$SpacingX: 10,									//[Optional] Horizontal space between each item in pixel, default value is 0
			$SpacingY: 10,									//[Optional] Vertical space between each item in pixel, default value is 0
			$Orientation: 1 								//[Optional] The orientation of the navigator, 1 horizontal, 2 vertical, default value is 1
		},

		//Arrow Navigation
		$ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$,              //[Required] Class to create arrow navigator instance
			$ChanceToShow: 2                                //[Required] 0 Never, 1 Mouse Over, 2 Always
		}
	};
	var jssor_slider1 = new $JssorSlider$('slider1_container', options);
});