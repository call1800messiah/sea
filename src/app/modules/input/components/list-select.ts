import { Component,EventEmitter,Input,OnInit,Output } from '@angular/core';

import { ListEntry } from './../classes/list-entry';

@Component({
    selector: 'tde-list-select',
    templateUrl: './list-select.html',
    styleUrls: ['./list-select.css']
})
export class ListSelectComponent implements OnInit {
    @Input() list: object[];
    @Input() selected: ListEntry;
    @Output() add = new EventEmitter();
    
    public newItem: string;
    public listVisible: boolean = false;
    
    constructor(){}
    
//    addItem(resolve: Promise<object[]>){
//        resolve.then((newList) => {
//            this.list = newList;
//        }).catch(() => {
//            console.log("Couldn't add item");
//        });
//        this.showList(false);
//    }
    
    selectItem(item:string){
        this.newItem = item;
        console.log(item);
        this.showList(false);
    }
    
    showList(show:boolean){
        this.listVisible = show;
    }
    
    ngOnInit(){
        if (this.selected){
            this.newItem = this.selected.name;
        }
    }
}
