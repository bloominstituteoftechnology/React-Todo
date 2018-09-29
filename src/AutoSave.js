let AutoSave = (function(){

	let timer = null;

	function getEditor(){

		let elems = document.getElementsByClassName('.list')
		if (elems.length <= 0)
			return null;

		return elems[0];
	}


	function save(){

		let editor = getEditor(); 
                if (editor) {
		    localStorage.setItem("AUTOSAVE_" + document.location, editor.value )
                }

	}


	function restore(){

		let saved = localStorage.getItem("AUTOSAVE_" + document.location)
		let editor = getEditor();
		if (saved && editor){

			editor.value = saved; 
		}
	}

	return { 

		start: function(){

			let editor = getEditor(); 

		 
			if (editor.value.length <= 0)
				restore();

			if (timer != null){
				clearInterval(timer);
				timer = null;
			}

			timer = setInterval(save, 5000);


		},

		stop: function(){

			if (timer){ 
				clearInterval(timer);
				timer = null;
			}

		}
	}

}())

export default AutoSave;