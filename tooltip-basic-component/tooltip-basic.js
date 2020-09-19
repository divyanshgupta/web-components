class Tooltip extends HTMLElement{
    constructor(){
        super();
        console.log('Hi! I m your custom tooltip')
        this.tooltipContainer;
        this.tooltipText = 'Default tooltip text'
    }
    connectedCallback(){
        
        if(this.hasAttribute('text')){

            this.tooltipText = this.getAttribute('text');
        }
        

        const questionMark = document.createElement('span');
        questionMark.textContent = '<?>'
        this.addEventListener('mouseenter',()=> this._showCustomTooltip())
        this.addEventListener('mouseleave',()=> this._hideCustomTooltip())
        this.appendChild(questionMark);
        this.style.position = "relative"

    }
    disconnectedCallback(){
        console.log('Web COmponent Disconnected to Dom !!')
        
    }
    _showCustomTooltip(){

        this.tooltipContainer = document.createElement('div');
        this.tooltipContainer.style.backgroundColor ="black";
        this.tooltipContainer.style.color = "white";
        this.tooltipContainer.style.position = "absolute";
        this.tooltipContainer.style.zIndex = "10"
        this.tooltipContainer.innerHTML = this.tooltipText;
        this.appendChild(this.tooltipContainer);        

    }
    _hideCustomTooltip(){
        this.removeChild(this.tooltipContainer)
    }
    

}
customElements.define('dg-basic-tooltip',Tooltip)