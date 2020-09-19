class Tooltip extends HTMLElement{
    constructor(){
        super();
        console.log('Hi! I m your custom tooltip')
        this.tooltipContainer;
    }
    connectedCallback(){
        const questionMark = document.createElement('span');
        questionMark.textContent = '<?>'
        this.addEventListener('mouseenter',()=> this._showCustomTooltip())
        this.addEventListener('mouseleave',()=> this._hideCustomTooltip())
        this.appendChild(questionMark);

    }
    disconnectedCallback(){
        console.log('Web COmponent Disconnected to Dom !!')
        
    }
    _showCustomTooltip(){

        this.tooltipContainer = document.createElement('div');
        this.tooltipContainer.style.backgroundColor ="black";
        this.tooltipContainer.style.color = "white";
        this.tooltipContainer.innerHTML = "This is the tooltip content !!!!";
        this.appendChild(this.tooltipContainer);        

    }
    _hideCustomTooltip(){
        this.removeChild(this.tooltipContainer)
    }
    

}
customElements.define('dg-basic-tooltip',Tooltip)