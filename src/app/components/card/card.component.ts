import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterpipePipe } from '../../filterpipe.pipe';
import { FormsModule } from '@angular/forms';




interface ListItem {
  name: string;
  url: string;
  description: string;
  img : string;


}

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FilterpipePipe, FormsModule],
  templateUrl: './card.component.html',
   styleUrl: './card.component.css',
})
export class CardComponent {
  searchTerm : string = '';
  Lists : ListItem[] = [
    { name: "KYC",
       url: "https://portalv3.rdpawnshop.com/KYC/KYC/Login",
        description: "Know Your Customer", img: "KYC.PNG" },
    { name: "Online Pledge",
       url: "https://portalv3.rdpawnshop.com/OnlinePledge/Account",
        description: "Online Pledge", img: "OnlinePledge.PNG"},
    { name: "OPAR",
       url: "https://portalv3.rdpawnshop.com/OPAR/Account/Login?ReturnUrl=%2fOPAR",
        description: "jkassahdjkasdasgdkjasgdjagsdasdkjsa", img: "OPAR.PNG"},
    { name: "E-Purchasing", 
      url: "https://portalv3.rdpawnshop.com/EPurchasingV2/Login", 
      description: "jkasgdkjasgdjagsdsjagdjkasdsasjkdasdjagsdassadas", img: "Epurchasing.PNG"},
    { name: "RD OperationV2",
       url: "https://portalv3.rdpawnshop.com/RDOperationV2/Account/Login.aspx",
        description: "jkasgdkjasgasjgdkjasgdkjsagdjksadjksagdjkasgdasjddj", img: "RDOpsV2.PNG"},
    { name: "RD OperationV3",
       url: "https://portalv2.rdpawnshop.com/RDOperationV3",
        description: "jkasgdkjasgdjd", img: "RDOpsV3.PNG" },    
  ];

  filteredLists = this.Lists; // Start with all items

  filterItems() {
    this.filteredLists = this.Lists.filter(item => 
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    
}

}


