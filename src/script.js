function $(selector): {}{
    return {
        element: document.querySelector(selector),
        
        html: function(content){
            if(content){
                this.element.innerHTML = content;
                return this;
            }else{
                return this.element.innerHTML;
            }
        },

        on: function(event, callback){
            this.element.addEventListener(event, callback);
            return this;
        },

        hide: function(){
            this.element.style.display = 'none';
            return this;
        },

        show: function(){
            this.element.style.display = 'block';
            return this;
        },

        attr: function(attributeName, value){
            if(value){
                this.element.setAttribute(attributeName, value);
                return this;
            }else{
                return this.element.getAttribute(attributeName);
            }
        },

        addClass: function(className){
            this.element.classList.add(className);
            return this;
        },

        removeClass: function(className){
            this.element.classList.remove(className);
            return this;
        },

        toggleClass: function(className){
            this.element.classList.toggle(className);
            return this;
        },

        css: function(property, value){
            if(value){
                this.element.style[property] = value;
                return this;
            }
            return this.element.style[property];
        },

        getWidth: function(){
            return this.element.offsetWidth;
        },

        getHeight: function(){
            return this.element.offsetHeight;
        },

        width: function(value){
            if(value){
                this.element.style.width = value + 'px';
                return this;
            }
            return this.element.offsetWidth;
        },

        height: function(value){
            if(value){
                this.element.style.height = value + 'px';
                return this;
            }
            return this.element.offsetHeight;
        },
    }
}

export default $;
