import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {Options} from 'ng5-slider';

export interface Province {
	id: number;
	name: string;
	key: string;
	population: number;
	total_grads: number;
	coe_cod: number;
	prog_talent: number;
	hei: number;
	fte: number;
	image_url: string[];
	color: string;
	description: string;
}

const ELEMENT_DATA: Province[] = [
{
	"id": 1, "name": "BATANES", "key": "BTN", 
	"population": 17246, "total_grads": 349, "coe_cod": 0, 
	"prog_talent": 0, "hei": 2, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#f59131",
	"description": "Batanes is an archipelago province in the Philippines situated in the Cagayan Valley region. It is the northernmost province in the country, and also the smallest, both in population and land area. Its capital is Basco located in the island of Batan."
},
{
	"id": 2, "name": "ILOCOS NORTE", "key": "ILN", 
	"population": 593081, "total_grads": 9040, "coe_cod": 3, 
	"prog_talent": 169, "hei": 12, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#ee5b2f",
	"description": "Ilocos Norte is a province of the Philippines located in the Ilocos Region. Its capital is Laoag City and is located at the northwest corner of Luzón Island, bordering Cagayan and Apayao to the east, and Abra to the southeast, and Ilocos Sur to the southwest. Ilocos Norte faces the West Philippine Sea to the west and the Luzon Strait to the north."
},
{
	"id": 3, "name": "APAYAO", "key": "APA", 
	"population": 119184, "total_grads": 864, "coe_cod": 0, 
	"prog_talent": 34, "hei": 2, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#f8ae47",
	"description": "Apayao is basically situated within the Cordillera Central mountains, traversed by many rivers. Its capital town is Kabugao. The province borders Cagayan to the north and east, Abra and Ilocos Norte to the west, and Kalinga to the south. Prior to 1995, Kalinga and Apayao comprised a single province named Kalinga-Apayao, which was partitioned to better service the needs of individual ethnic groups. With a population of 119,184 (as of the 2015 census) covering an area of 4,413.35 square kilometers (1,704.00 sq mi), Apayao is the least densely-populated province in the Philippines."
},
{
	"id": 4, "name": "CAGAYAN", "key": "CAG", 
	"population": 1199320, "total_grads": 21893, "coe_cod": 4, 
	"prog_talent": 1318, "hei": 28, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#f27a56",
	"description": "Cagayán is a province of the Philippines in the Cagayan Valley region in the northeast of Luzon Island. It occupies the northeastern tip of the Philippines, bounded by the Batanes Islands on the north, the Philippine Sea (Pacific Ocean) on the east, Isabela Province on the south, and the Cordillera mountain ranges on the west, Cagayan has a total land area of 9,002.70 sq. km. It is just about 480 kilometers north of Manila. It is strategically located near the growing tigers of South East Asia like Singapore, Thailand, Vietnam, South Korea and even Hong Kong and Japan. It is about 2,730 kilometers south west of Tokyo, Japan or only 570 kilometers south of Kaoshiung, Taiwan."
},
{
	"id": 5, "name": "ILOCOS SUR", "key": "ILS", 
	"population": 689668, "total_grads": 10981, "coe_cod": 0, 
	"prog_talent": 830, "hei": 17, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#f8bc7d",
	"description": "Ilocos Sur is a province located in the Ilocos Region of Luzon in the Philippines. Vigan City, located on the mouth of the Mestizo River is the provincial capital. Ilocos Sur is bordered by Ilocos Norte and Abra to the north, Mountain Province to the east, La Union and Benguet to the south and the South China Sea to the west."
},
{
	"id": 6, "name": "ABRA", "key": "ABR", 
	"population": 241160, "total_grads": 3437, "coe_cod": 0, 
	"prog_talent": 178, "hei": 5, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#f8ae47",
	"description": "Abra is a landlocked province of the Philippines in the Cordillera Administrative Region in Luzon. Its capital is Bangued, and is bordered by Ilocos Norte on the northwest, Apayao on the northeast, Kalinga on the mid-east, Mountain Province on the southeast, and Ilocos Sur on the southwest. Abra has a total land area of 4,165.25 square kilometers or 1,608.21 square miles."
},
{
	"id": 7, "name": "KALINGA", "key": "KAL", 
	"population": 212680, "total_grads": 2911, "coe_cod": 0, 
	"prog_talent": 91, "hei": 8, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#f59131",
	"description": "Kalinga is a landlocked province in the Philippines situated within the Cordillera Administrative Region in Luzon. Its capital is Tabuk and borders Mountain Province to the south, Abra to the west, Isabela to the east, Cagayan to the northeast, and Apayao to the north. Kalinga and Apayao are the result of the 1995 partitioning of the former province of Kalinga-Apayao; which was seen to better service the respective needs of the various indigenous peoples in the area."
},
{
	"id": 8, "name": "ISABELA", "key": "ISA", 
	"population": 1593566, "total_grads": 23583, "coe_cod": 2, 
	"prog_talent": 1307, "hei": 48, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#f27a56",
	"description": "Isabela is the second largest province of the Philippines, and the largest on the island of Luzon in land area. Its capital is the city of Ilagan as it comprises an aggregate land area of 12,414.93 square kilometers (4,793.43 sq mi), representing almost 40 percent of the regional territory."
},
{
	"id": 9, "name": "MOUNTAIN PROVINCE", "key": "MOU", 
	"population": 154590, "total_grads": 1683, "coe_cod": 0, 
	"prog_talent": 40, "hei": 9, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#f59131",
	"description": "Mountain Province is a landlocked province of the Philippines in the Cordillera Administrative Region in Luzon. Its capital is Bontoc. Mountain Province was formerly referred to as Mountain in some foreign references. The name is usually shortened by locals to Mt. Province. The province was named so for being in the Cordillera Central mountain range found in the upper realms of Luzon island."
},
{
	"id": 10, "name": "IFUGAO", "key": "IFU", 
	"population": 202802, "total_grads": 2800, "coe_cod": 0, 
	"prog_talent": 176, "hei": 4, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#ee5b2f",
	"description": "Ifugao is a landlocked province of the Philippines in the Cordillera Administrative Region in Luzon. Its capital is Lagawe and it borders Benguet to the west, Mountain Province to the north, Isabela to the east, and Nueva Vizcaya to the south. Ifugao is named after the term i-pugo which translates to people of the hill."
},
{
	"id": 11, "name": "LA UNION", "key": "LUN", 
	"population": 786653, "total_grads": 12346, "coe_cod": 2, 
	"prog_talent": 725, "hei": 22, "fte": 0,
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#f59c7e",
	"description": "La Union is a province in the Philippines located in the Ilocos Region in the island of Luzon. Its capital is the city of San Fernando, which also serves as the regional center of the whole Ilocos Region."
},
{
	"id": 12, "name": "BENGUET", "key": "BEN", 
	"population": 791590, "total_grads": 17537, "coe_cod": 16, 
	"prog_talent": 803, "hei": 35, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#f8ae47",
	"description": "Benguet is a landlocked province located in the southern tip of the Cordillera Administrative Region in the island of Luzon. Its capital is La Trinidad. It covers an area of 2,769.08 square kilometers (1,069.15 sq mi) occupying the southwestern tip of the Cordillera Administrative Region. If Baguio City is included for geographical purposes, the total area of Benguet is 2,826.59 square kilometers (1,091.35 sq mi)."
},
{
	"id": 13, "name": "NUEVA VIZCAYA", "key": "NUV", 
	"population": 452287, "total_grads": 6015, "coe_cod": 3, 
	"prog_talent": 294, "hei": 8, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#f27a56",
	"description": "Nueva Vizcaya is a province of the Philippines located in Cagayan Valley region in Luzon, though it is geographically and culturally part of the Cordilleras. It is geographically located at the southernmost part of Region II and is often referred to as the gateway to vast Cagayan Valley Region. It is bounded on the north by Ifugao, in the northeast by Isabela, east by Quirino, west by Benguet and south by Nueva Vizcaya."
},
{
	"id": 14, "name": "QUIRINO", "key": "QUI", 
	"population": 188991, "total_grads": 2133, "coe_cod": 0, 
	"prog_talent": 106, "hei": 4, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#f8ae47",
	"description": "Quirino is a landlocked province in the Philippines located in the Cagayan Valley region in Luzon and named after Elpidio Quirino, the sixth President of the Philippines. Its capital is Cabarroguis."
},
{
	"id": 15, "name": "PANGASINAN", "key": "PAN", 
	"population": 2956726, "total_grads": 41752, "coe_cod": 4, 
	"prog_talent": 2117, "hei": 64, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#fabf69",
	"description": "Pangasinan is a province located on the west central area of the island of Luzon in the Philippines. It is bordered by La Union to the north, Benguet and Nueva Vizcaya to the northeast, Nueva Ecija to the southeast, and Zambales and Tarlac to the south. To the west of Pangasinan is the South China Sea. The province also encloses the Lingayen Gulf."
},
{
	"id": 16, "name": "TARLAC", "key": "TAR", 
	"population": 1366027, "total_grads": 16294, "coe_cod": 1, 
	"prog_talent": 748, "hei": 27, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#ee5b2f",
	"description": "Tarlac is a landlocked province located in the Central Luzon region of the Philippines. It is bounded on the north by the province of Pangasinan, Nueva Ecija on the east, Zambales on the west and Pampanga in the south. The province comprises three congressional districts and is subdivided into 17 municipalities and one city, Tarlac City, which is the provincial capital."
},
{
	"id": 17, "name": "NUEVA ECIJA", "key": "NUE", 
	"population": 2151461, "total_grads": 27824, "coe_cod": 4, 
	"prog_talent": 2023, "hei": 51, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#f59c7e",
	"description": "Nueva Ecija is a landlocked province in the Philippines located in the Central Luzon region. Its capital is the city of Palayan. Nueva Ecija borders, from the south clockwise, Bulacan, Pampanga, Tarlac, Pangasinan, Nueva Vizcaya and Aurora. The province is nationally known as the Rice Granary of the Philippines, producing the largest rice yield in the country."
},
{
	"id": 18, "name": "AURORA", "key": "AUR", 
	"population": 214336, "total_grads": 3065, "coe_cod": 0, 
	"prog_talent": 239, "hei": 9, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#f27a56",
	"description": "Aurora is located in the eastern part of Central Luzon region, facing the Philippine Sea. Its capital is Baler and borders, clockwise from the south, the provinces of Quezon, Bulacan, Nueva Ecija, Nueva Vizcaya, Quirino, and Isabela."
},
{
	"id": 19, "name": "ZAMBALES", "key": "ZMB", 
	"population": 823888, "total_grads": 11031, "coe_cod": 0, 
	"prog_talent": 762, "hei": 31, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#f59c7e",
	"description": "Zambales is a province in the Philippines located in the Central Luzon region in the island of Luzon. Its capital is Iba. Zambales borders Pangasinan to the north and northeast, Tarlac to the east, Pampanga to the southeast, Bataan to the south and the South China Sea to the west. With a total land area of 3,830.83 square kilometers (1,479.09 sq mi) (including the independent city of Olongapo), Zambales is the second largest among the seven provinces of Central Luzon after Nueva Ecija. The province is noted for its mangoes, which are abundant from January to April."
},
{
	"id": 20, "name": "PAMPANGA", "key": "PAM", 
	"population": 2609744, "total_grads": 30427, "coe_cod": 10, 
	"prog_talent": 1910, "hei": 52, "fte": 0, 
	"image_url": ["../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png", "../assets/batanes.png"], 
	"color": "#ee5b2f",
	"description": "Pampanga is a province in the Central Luzon region of the Philippines. Lying on the northern shore of Manila Bay, Pampanga is bordered by Tarlac to the north, Nueva Ecija to the northeast, Bulacan to the east, the Manila Bay to the central-south, Bataan to the southwest and Zambales to the west. Its capital is the City of San Fernando. Angeles City, while geographically within Pampanga, is classified as a first-class, highly urbanized city and is governed independently of the province."
}
];

@Component({
	selector: 'app-city-profiles',
	templateUrl: './city-profiles.component.html',
	styleUrls: ['./city-profiles.component.css']
})

export class CityProfilesComponent implements OnInit {
	populationValue: number = 0;
	populationHighValue: number = 1000000;

	totalgradValue: number = 0;
	totalgradHighValue: number = 1000000;

	coecodValue: number = 0;
	coecodHighValue: number = 1000000;

	progtalentValue: number = 0;
	progtalentHighValue: number = 1000000;

	heiValue: number = 0;
	heiHighValue: number = 1000000;

	fteValue: number = 0;
	fteHighValue: number = 1000000;

	options: Options = {
		floor: 0,
		ceil: 1000000,
		noSwitching: true,
		step: 5,
		translate: (value: number): string => {
			if (value == 1000000) {
				return '1M';
			} else {
				return '' + value;
			}
		}
	};

	carouselOptions = {
	    margin: 10,
	    responsiveClass: true,
	    responsive: {
	      0: {
	        items: 1
	      },
	      600: {
	        items: 2
	      },
	      1000: {
	        items: 3
	      }
	    }
	  }

	showToggle = false;

	name = '';
	description = '';
	images = [];

	displayedColumns: string[] = ["id", "key"];
	dataSource = ELEMENT_DATA;
	finalData = [];

	toggleButton(element) {
		element.toggle();
		this.showToggle = !this.showToggle
	}

	getProvince(data, element) {
		this.images = [];
		for (var i = 0; i <= this.dataSource.length - 1; i++) {
			if(this.dataSource[i].key == data.key) {
				this.name = data.name;
				this.description = data.description;
				for(var j = 0; j <= data.image_url.length - 1; j++) {
					this.images.push(data.image_url[j]);
				}
				element.toggle();
			}
		}
	}

	applyFilter() {
		this.finalData = [];
		for (var i = 0; i <= this.dataSource.length - 1; i++) {
			if(this.dataSource[i].population >= this.populationValue && this.dataSource[i].population <= this.populationHighValue &&
				this.dataSource[i].total_grads >= this.totalgradValue && this.dataSource[i].total_grads <= this.totalgradHighValue &&
				this.dataSource[i].coe_cod >= this.coecodValue && this.dataSource[i].coe_cod <= this.coecodHighValue &&
				this.dataSource[i].prog_talent >= this.progtalentValue && this.dataSource[i].prog_talent <= this.progtalentHighValue &&
				this.dataSource[i].hei >= this.heiValue && this.dataSource[i].hei <= this.heiHighValue &&
				this.dataSource[i].fte >= this.fteValue && this.dataSource[i].fte <= this.fteHighValue
				) {
				this.finalData.push(this.dataSource[i])
			}
		}
	}

	reset() {
		this.populationValue = 0;
		this.populationHighValue = 1000000;

		this.totalgradValue = 0;
		this.totalgradHighValue = 1000000;

		this.coecodValue = 0;
		this.coecodHighValue = 1000000;

		this.progtalentValue = 0;
		this.progtalentHighValue = 1000000;

		this.heiValue = 0;
		this.heiHighValue = 1000000;

		this.fteValue = 0;
		this.fteHighValue = 1000000;

		this.finalData = this.dataSource;
	}

	constructor() {
		
	}

	ngOnInit() {
		this.finalData = this.dataSource;
	}

}
