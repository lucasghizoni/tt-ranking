(function(document){
	const thatDoc = document;

    const thisDoc =  (thatDoc._currentScript || thatDoc.currentScript).ownerDocument;
    const template = thisDoc.querySelector('template').content;

	class GznTable extends HTMLElement {
		createdCallback(){
			const shadowRoot = this.createShadowRoot();
	        const clone = thatDoc.importNode(template, true);
			shadowRoot.appendChild(clone);
					
			this.tbodyElm = this.shadowRoot.querySelector('tbody');
		}

		insertRows(players){
			players = players instanceof Array ? players : [players];

			const gznRowTemplate = thisDoc.querySelector('template[id="gznrow"]');

			players.forEach( player => {
				const clone = document.importNode(gznRowTemplate.content, true),
					  tds = clone.querySelectorAll('td');

				

				Object.keys(player).forEach( (key, index) => {
					if(key !== 'country'){
						tds[index].textContent = player[key];
					}else{
						let img = tds[index].querySelector('img');
						img.src = './flags/' + player[key] + '.svg';
					}
				});
				
				this.tbodyElm.appendChild(clone);
			});
		}

		filter(attrib, value){
			
		}
	}

	document.registerElement('gzn-table', GznTable);
})(document);