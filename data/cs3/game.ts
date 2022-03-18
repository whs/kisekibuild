import {Art, Character, Element, Game, Quartz, Stats, StatsChangeType} from '../../proto/gen/kiseki/v1/data_pb';

// https://docs.google.com/spreadsheets/d/19m9dlV2_SLtLjUDdP4anCyYq_nSeswAqIzKNidw2pRo/edit#gid=0
let tbl = `
	HP	STR	DEF	ATS	ADF	SPD	DEX	AGL (Evasion%)	MOV	RNG
Rean Schwarzer	12300	652	312	562	223	99	55	41	6	1
Juna Crawford	10200	571 (527)	339 (272)	509	218	90	47	43	6 (4)	1 (5 [5])
Kurt Vander	10725	611	299	580	245	96	52	39 (5%)	6	1
Altina Orion	9150	625	384	638	356	81	41	29	5	3 [3]
Ash Carbide	11460	638	317	558	178	84	44	45	5	3
Musse Egret	9570	527	245	660	303	86	56	34	4	6
Alisa Reinford	9885	545	263	652	280	94	56	37	4	6
Elliot Craig	10095	522	259	656	298	85	39	32	4	4 [3]
Laura S. Arseid	11250	660	326	518	196	89	46	36	5	2
Machias Regnitz	11145	567	308	545	227	83	47	30	4	6 [5]
Jusis Albarea	10935	602	285	634	276	95	42	40	5	1
Fie Claussell	9675	594	250	504	214	107	53	52 (25%)	7	1
Emma Millstein	9780	500	268	678	289	78	43	29	4	4 [3]
Gaius Worzel	13350	656	352	589	267	88	50	38	5	4
Millium Orion	9360	669	406	527	334	77	38	28	5	3 [3]
Sara Valestine	11670	647	334	571	236	101	48	46 (5%)	6	1
Claire Rieveldt	10620	634	290	611	249	93	57	35	5	6
Agate Crosner	12825	678	343	500	187	82	40	33	5	2
Tio Plato	9465	504	321	674	307	80	39	31	4	4 [3]
Sharon Kreuger	10410	629	303	643	240	100	54	47 (20%)	6	3 [4]
Oliviert Reise Arnor	10830	553	294	669	294	87	62	37	4	6
Angelica Rogner	11880	634	330	513	205	92	45	44 (5%)	6	1
Tita Russel	31200	768	495	536	191	74	37	27	4	3 [3]
Aurelia Le Guin	13140	701	361	553	231	97	61	42 (15%)	6	2
Lechter Arundel	11040	598	281	647	285	98	49	46 (10%)	6	1
`;

let charactersMap: {[name: string]: Character} = {}

tbl.split("\n").forEach((line, index) => {
	let [name, hp, str, def, ats, adf, spd, dex, agl, mov, rng] = line.split("\t")
	if(!name){
		return;
	}
	charactersMap[name] = Character.create({
		name: name,
		hp: parseInt(hp, 10),
		str: parseInt(str, 10),
		def: parseInt(def, 10),
		ats: parseInt(ats, 10),
		adf: parseInt(adf, 10),
		spd: parseInt(spd, 10),
		dex: parseInt(dex, 10),
		agl: parseInt(agl, 10),
		mov: parseInt(mov, 10),
	})
});

export const characters = Object.values(charactersMap) as Character[];

export const quartz = [
] as Quartz[];

export const arts = [
] as Art[];

export default Game.create({
	name: 'Trails of Cold Steel III',
	characters: characters,
	quartz: quartz,
	arts: arts,
}) as Game;
