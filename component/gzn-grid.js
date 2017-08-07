(function(document){
	const thatDoc = document;

    const thisDoc =  (thatDoc._currentScript || thatDoc.currentScript).ownerDocument;
    const template = thisDoc.querySelector('template').content;

	class GznGrid extends HTMLElement {
		createdCallback(){
			const shadowRoot = this.createShadowRoot();
	        const clone = thatDoc.importNode(template, true);
	        shadowRoot.appendChild(clone);
		}

		createRow(rankingPosition, name){
			const gznRowTemplate = thisDoc.querySelector('template[id="gznrow"]');
			const clone = document.importNode(gznRowTemplate.content, true);
			clone.querySelector('td').textContent = '1';
			clone.querySelectorAll('td')[1].textContent = 'Ma Long';

			this.shadowRoot.querySelector('tbody').appendChild(clone);
		}
	}

	document.registerElement('gzn-grid', GznGrid);
})(document);