import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent {
  name = 'Angular';

  // @ts-ignore
  getColor(country) {
    switch (country) {
      case 'Manisa':
        return 'green';
      case 'İzmir':
        return 'blue';
      case 'İstanbul':
        return 'red';
    }
  }

  people: any[] = [
    {
      "name": "Kardelen Keles",
      "city": 'Manisa'
    },
    {
      "name": "Keles Kardelen",
      "city": 'İzmir'
    },
    {
      "name": "Kel Kar",
      "city": 'İstanbul'
    },
    {
      "name": "Kar Kel",
      "city": 'Manisa'
    }
  ];
}
