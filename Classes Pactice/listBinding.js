// jshint esversion:6

class ListBinding {
    constructor(element){
        this.listElement = element;
        this.listItems =[];

    }

    //static method to  convert item to li

    static createElement(item){
        const li = document.createElement("li");
        li.textContent = item;
        return li;
    }



    //updating the existing list
    
    update(){
        //we first remove existing list items;
        while(this.listElement.firstChild){
        this.listElement.removeChild(this.listElement.firstChild);
    }

    // we now add new list items into ul/ol
        for (const item of this.listItems){
            this.listElement.appendChild(ListBinding.createElement(item));
        }
    }

    //add new list items;
    add(item){
        this.listItems.push(item);
        this.update();
    }

    // remove existing items;

    remove(index){
        this.listItems.splice(index, 1);
        this.update();
    }
    
}