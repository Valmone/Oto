function simulation() {

	//---------------------------------//
	//---------------------------------//
	//---------------------------------//
	var attaquant = new Array(),
		defenseur = new Array(),
		total_attak = 0,
		total_def = 0,

		attaquant_tour = new Array(),
		defenseur_tour = new Array(),
		total_attak_tour = 0,
		total_def_tour = 0,

		degat_a_venir=0,
		rapidfire = false,
		nbr_rapidfire = 0,

		RapidFire = new Array(),
		RapidFire = [
        /*					   pt  gt cle clo cro  vb  vc  etc...
        /*               PT */[-1, -1, -1, -1, -1, -1, -1, -1, 80, -1, 80, -1, -1, -1/*, -1, -1, -1, -1, -1, -1, -1, -1*/],
        /*               GT */[-1, -1, -1, -1, -1, -1, -1, -1, 80, -1, 80, -1, -1, -1/*, -1, -1, -1, -1, -1, -1, -1, -1*/],
        /*               Cl */[-1, -1, -1, -1, -1, -1, -1, -1, 80, -1, 80, -1, -1, -1/*, -1, -1, -1, -1, -1, -1, -1, -1*/],
        /*               CL */[-1, -1, -1, -1, -1, -1, -1, -1, 80, -1, 80, -1, -1, -1/*, -1, -1, -1, -1, -1, -1, -1, -1*/],
        /*               CR */[-1, -1, 83.33, -1, -1, -1, -1, -1, 80, -1, 80, -1, -1, -1/*, 90, -1, -1, -1, -1, -1, -1, -1*/],
        /*               VB */[-1, -1, -1, -1, -1, -1, -1, -1, 80, -1, 80, -1, -1, -1/*, -1, -1, -1, -1, -1, -1, -1, -1*/],
        /*               VC */[-1, -1, -1, -1, -1, -1, -1, -1, 80, -1, 80, -1, -1, -1/*, -1, -1, -1, -1, -1, -1, -1, -1*/],
        /*               RC */[-1, -1, -1, -1, -1, -1, -1, -1, 80, -1, 80, -1, -1, -1/*, -1, -1, -1, -1, -1, -1, -1, -1*/],
        /*               SE */[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1/*, -1, -1, -1, -1, -1, -1, -1, -1*/],
        /*               BB */[-1, -1, -1, -1, -1, -1, -1, -1, 80, -1, 80, -1, -1, -1/*, 95, 95, 90, 90, -1, -1, -1, -1*/],
        /*               SS */[-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1/*, -1, -1, -1, -1, -1, -1, -1, -1*/],
        /*               DS */[-1, -1, -1, -1, -1, -1, -1, -1, 80, -1, 80, -1, -1, 50/*, -1, 90, -1, -1, -1, -1, -1, -1*/],
        /*               EM */[99.6, 99.6, 99.5, 99, 96.97, 99.667, 99.6, 99.6, 99.6, 96, 99.6, 80, 0, 93.333/*, 99.5, 99.5, 99, 99, 98, -1, -1, -1*/],
        /*               BC */[66.667, 66.667, -1, 75, 75, 85.7, -1, -1, 80, 80, -1, -1, -1, -1/*, -1, 90, -1, -1, -1, -1, -1, -1*/],
        /*               LM   [-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               Ll   [-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               LL   [-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               AI   [-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               CG   [-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               LP   [-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               PB   [-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        /*               GB   [-1, -1, -1, -1, -1, -1, -1, -1, 80, 80, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]*/
];
	//---------------------------------//
	//---------------------------------//
	//---------------------------------//




	//-------------------------------------------------------------------------//
	//--------------------------------Fonctions--------------------------------//
	//-------------------------------------------------------------------------//
	function verif(result) {		//on vérifie les champs vide du simulateur
		if (result === "")
			{var value = 0;}
		else if (result === undefined)
			{var value = 0;}
		else {var value = result;}
		
		return value;
	}

	function tablo(fleet, type, degat, bouclier, protection, attaquant_ou_pas) {	//on créer les flottes	
		if (attaquant_ou_pas === "attaquant")
			{
				for (var i = total_attak; i < (total_attak+fleet); i++)
					{
						attaquant[i] = new Array();
						attaquant[i][0] = type;				//type de vaisseau
						attaquant[i][1] = degat;			//arme
						attaquant[i][2] = bouclier;			//bouclier
						attaquant[i][3] = protection;		//protection
						attaquant[i][4] = bouclier;			//bouclier => valeur initial
					}
				total_attak = total_attak + fleet;
			}
		else if (attaquant_ou_pas === "defenseur")
			{
				for (var i = total_def; i < (total_def+fleet); i++)
					{
						defenseur[i] = new Array();
						defenseur[i][0] = type;				//type de vaisseau
						defenseur[i][1] = degat;			//arme
						defenseur[i][2] = bouclier;			//bouclier
						defenseur[i][3] = protection;		//protection
						defenseur[i][4] = bouclier;			//bouclier => valeur initial
					}
				total_def = total_def + fleet;
			}
		else {}		
	}

	function destruction_bouclier(id_victimiseur, id_victime, a_qui_le_tour) {
		if (a_qui_le_tour === "attaquant")			//c'est le tour de l'attaquant
			{
				if (attaquant_tour[id_victimiseur][1] < (defenseur_tour[id_victime][2]/100))			//si il est trop faible pour attaquer le bouclier
					{degat_a_venir = 0;}
				else {
					if (attaquant_tour[id_victimiseur][1] < (defenseur_tour[id_victime][2]/100))		//si il peut attaquer le bouclier mais pas la coque
						{
							defenseur_tour[id_victime][2] = defenseur_tour[id_victime][2] - attaquant_tour[id_victimiseur][1];
							degat_a_venir = 0;
						}
					else {			//si il peut attaquer la coque et on met le bouclier a 0
							degat_a_venir = attaquant_tour[id_victimiseur][1] - defenseur_tour[id_victime][2];
							defenseur_tour[id_victime][2] = 0;
					}
				}
			}
		else {
				if (defenseur_tour[id_victimiseur][1] < (attaquant_tour[id_victime][2]/100))			//si il est trop faible pour attaquer le bouclier
					{degat_a_venir = 0;}
				else {
					if (defenseur_tour[id_victimiseur][1] < (attaquant_tour[id_victime][2]/100))		//si il peut attaquer le bouclier mais pas la coque
						{
							attaquant_tour[id_victime][2] = attaquant_tour[id_victime][2] - defenseur_tour[id_victimiseur][1];
							degat_a_venir = 0;
						}
					else {			//si il peut attaquer la coque et on met le bouclier a 0
							degat_a_venir = defenseur_tour[id_victimiseur][1] - attaquant_tour[id_victime][2];
							attaquant_tour[id_victime][2] = 0;
					}
				}
		}
	}

	function degat_a_faire(id_victimiseur, id_victime, a_qui_le_tour) {
		if (degat_a_venir > 0)
			{
				if (a_qui_le_tour === "attaquant")
					{
						if (defenseur_tour[id_victime][3] > degat_a_venir)
							{defenseur_tour[id_victime][3] = defenseur_tour[id_victime][3] - degat_a_venir;}
						else {defenseur_tour[id_victime][3] = -1;}
					}
				else {
						if (attaquant_tour[id_victime][3] > degat_a_venir)
							{attaquant_tour[id_victime][3] = attaquant_tour[id_victime][3] - degat_a_venir;}
						else {attaquant_tour[id_victime][3] = -1;}
				}
			}
		else {}
	}

	function proba_destruction(id, a_qui_le_tour) {
		if (a_qui_le_tour === "attaquant")
			{
				if ((defenseur_tour[id][3] *10) < (defenseur_tour[id][4] *7))
					{
						if (Math.floor(Math.random() * defenseur_tour[id][4]) > defenseur_tour[id][3])
							{defenseur_tour[id][3] = -1;}
						else {}
					}
			}
		else {
				if ((attaquant_tour[id][3] *10) < (attaquant_tour[id][4] *7))
					{
						if (Math.floor(Math.random() * attaquant_tour[id][4]) > attaquant_tour[id][3])
							{attaquant_tour[id][3] = -1;}
						else {}
					}
		}
	}

	function rapidfire_ou_pas(id_victimiseur, id_victime, a_qui_le_tour) {
		/*var un = id_victimiseur,
			deux = id_victime;console.log(defenseur_tour[id_victime]);*/
		if (a_qui_le_tour === "attaquant")
			{
				var RF = RapidFire[attaquant_tour[id_victimiseur][0]][defenseur_tour[id_victime][0]]; // rf attaquant vs defenseur
		        if (RF > 0)
		        	{
				        var rnd = Math.random() * 100;
				        if (rnd > RF)
					        {rapidfire = true;}
					    else {rapidfire = false;}
		        	}
		        else {}			
			}
		else {
				var RF = RapidFire[defenseur_tour[id_victimiseur][0]][attaquant_tour[id_victime][0]]; // rf defenseur vs attaquant
				if (RF > 0)
					{
						var rnd = Math.random() * 100;
				        if (rnd > RF)
					        {rapidfire = true;}
					    else {rapidfire = false;}
					}
				else {}
		        				
		}
		console.log(rnd, RF);
		
	}

	function del_vaisso_detruit() {				//suppression des vaisseaux detruit
		for (var i = 0; i < total_attak_tour; i++)		//vaisseaux attaquant
			{
				if (attaquant_tour[i][3] === -1)
					{
						for (o = i; o < (total_attak_tour-1); o++)
							{
								attaquant_tour[o] = attaquant_tour[o+1];
							}
						total_attak_tour--;
					}
				else {}
			}
		for (var i = 0; i < total_def_tour; i++)		//vaisseaux defenseur
			{
				if (defenseur_tour[i][3] === -1)
					{
						for (o = i; o < (total_def_tour-1); o++)
							{
								defenseur_tour[o] = defenseur_tour[o+1];
							}
						total_def_tour--;
					}
				else {}
			}
	}

	function rearmement_bouclier() {			//rearmement du bouclier pour tout les vaisseaux non détruit
		for (var i = 0; i < total_attak_tour; i++)		//vaisseaux attaquant
			{
				aa[i][2] = aa[i][4];
			}
		for (var i = 0; i < total_def_tour; i++)		//vaisseaux defenseur
			{
				aa[i][2] = aa[i][4];
			}
	}
	
	//-------------------------------------------------------------------------//
	//-------------------------------------------------------------------------//
	//-------------------------------------------------------------------------//





	//-------------------------------------------------------------------------//
	//---------------On récupère les vaisseaux de l'attaquant------------------//
	//-------------------------------------------------------------------------//
	var pt = verif(document.getElementById('ship_a_0_b').value),
		gt = verif(document.getElementById('ship_a_1_b').value),
		cle = verif(document.getElementById('ship_a_2_b').value),
		clo = verif(document.getElementById('ship_a_3_b').value),
		cro = verif(document.getElementById('ship_a_4_b').value),
		vb = verif(document.getElementById('ship_a_5_b').value),
		vc = verif(document.getElementById('ship_a_6_b').value),
		cyclo = verif(document.getElementById('ship_a_7_b').value),
		sonde = verif(document.getElementById('ship_a_8_b').value),
		bb = verif(document.getElementById('ship_a_9_b').value),
		//---
		dd = verif(document.getElementById('ship_a_11_b').value),
		rip = verif(document.getElementById('ship_a_12_b').value),
		traq = verif(document.getElementById('ship_a_13_b').value),

		tech_arme = 10,
		tech_bouclier = 10,
		tech_protection = 10;

	tablo(parseInt(pt), 0, (tech_arme*0.5 +5), (tech_bouclier*1 +10), (tech_protection*400 + 4000), "attaquant");							//pt
	tablo(parseInt(gt), 1, (tech_arme*0.5 +5), (tech_bouclier*2.5 +25), (tech_protection*1200 +12000), "attaquant");						//gt
	tablo(parseInt(cle), 2, (tech_arme*5 +50), (tech_bouclier*1 +10), (tech_protection*400 +4000), "attaquant");							//cle
	tablo(parseInt(clo), 3, (tech_arme*15 +150), (tech_bouclier*2.5 +25), (tech_protection*1000 +10000), "attaquant");						//clo
	tablo(parseInt(cro), 4, (tech_arme*40 +400), (tech_bouclier*5 +50), (tech_protection*2700 +27000), "attaquant");						//cro
	tablo(parseInt(vb), 5, (tech_arme*10 +1000), (tech_bouclier*20 +200), (tech_protection*6000 +60000), "attaquant");						//vb
	tablo(parseInt(vc), 6, (tech_arme*5 +50), (tech_bouclier*10 +100), (tech_protection*3000 +30000), "attaquant");							//vc
	tablo(parseInt(cyclo), 7, (tech_arme*0.1 +1), (tech_bouclier*1 +10), (tech_protection*6000 +16000), "attaquant");						//cycmp
	tablo(parseInt(sonde), 8, (tech_arme*0 +0), (tech_bouclier*0 +0), (tech_protection*100 +1000), "attaquant");							//sonde
	tablo(parseInt(bb), 9, (tech_arme*100 +1000), (tech_bouclier*50 +500), (tech_protection*7500 +75000), "attaquant");						//bb

	tablo(parseInt(dd), 11, (tech_arme*200 +2000), (tech_bouclier*50 +500), (tech_protection*11000 +110000), "attaquant");					//dd
	tablo(parseInt(rip), 12, (tech_arme*20000 +200000), (tech_bouclier*5000 +50000), (tech_protection*900000 +9000000), "attaquant");		//rip
	tablo(parseInt(traq), 13, (tech_arme*70 +700), (tech_bouclier*40 +400), (tech_protection*7000 +70000), "attaquant");					//traq
	//console.log(attaquant);
	//-------------------------------------------------------------------------//
	//-------------------------------------------------------------------------//
	//-------------------------------------------------------------------------//

	


	//-----------------------------------------------------------------------//
	//---------------On récupère les vaisseaux du defenseur------------------//
	//-----------------------------------------------------------------------//
	var pt = verif(document.getElementById('ship_d_0_b').value),
		gt = verif(document.getElementById('ship_d_1_b').value),
		cle = verif(document.getElementById('ship_d_2_b').value),
		clo = verif(document.getElementById('ship_d_3_b').value),
		cro = verif(document.getElementById('ship_d_4_b').value),
		vb = verif(document.getElementById('ship_d_5_b').value),
		vc = verif(document.getElementById('ship_d_6_b').value),
		cyclo = verif(document.getElementById('ship_d_7_b').value),
		sonde = verif(document.getElementById('ship_d_8_b').value),
		bb = verif(document.getElementById('ship_d_9_b').value),
		sat = verif(document.getElementById('ship_d_10_b').value),
		dd = verif(document.getElementById('ship_d_11_b').value),
		rip = verif(document.getElementById('ship_d_12_b').value),
		traq = verif(document.getElementById('ship_d_13_b').value),

		tech_arme = 10,
		tech_bouclier = 10,
		tech_protection = 10;

	tablo(parseInt(pt), 0, (tech_arme*0.5 +5), (tech_bouclier*1 +10), (tech_protection*400 + 4000), "defenseur");							//pt
	tablo(parseInt(gt), 1, (tech_arme*0.5 +5), (tech_bouclier*2.5 +25), (tech_protection*1200 +12000), "defenseur");						//gt
	tablo(parseInt(cle), 2, (tech_arme*5 +50), (tech_bouclier*1 +10), (tech_protection*400 +4000), "defenseur");							//cle
	tablo(parseInt(clo), 3, (tech_arme*15 +150), (tech_bouclier*2.5 +25), (tech_protection*1000 +10000), "defenseur");						//clo
	tablo(parseInt(cro), 4, (tech_arme*40 +400), (tech_bouclier*5 +50), (tech_protection*2700 +27000), "defenseur");						//cro
	tablo(parseInt(vb), 5, (tech_arme*10 +1000), (tech_bouclier*20 +200), (tech_protection*6000 +60000), "defenseur");						//vb
	tablo(parseInt(vc), 6, (tech_arme*5 +50), (tech_bouclier*10 +100), (tech_protection*3000 +30000), "defenseur");							//vc
	tablo(parseInt(cyclo), 7, (tech_arme*0.1 +1), (tech_bouclier*1 +10), (tech_protection*6000 +16000), "defenseur");						//cycmp
	tablo(parseInt(sonde), 8, (tech_arme*0 +0), (tech_bouclier*0 +0), (tech_protection*100 +1000), "defenseur");							//sonde
	tablo(parseInt(bb), 9, (tech_arme*100 +1000), (tech_bouclier*50 +500), (tech_protection*7500 +75000), "defenseur");						//bb
	tablo(parseInt(sat), 10, (tech_arme*0.1 +1), (tech_bouclier*0.1 +1), (tech_protection*200 +2000), "defenseur");							//sat
	tablo(parseInt(dd), 11, (tech_arme*200 +2000), (tech_bouclier*50 +500), (tech_protection*11000 +110000), "defenseur");					//dd
	tablo(parseInt(rip), 12, (tech_arme*20000 +200000), (tech_bouclier*5000 +50000), (tech_protection*900000 +9000000), "defenseur");		//rip
	tablo(parseInt(traq), 13, (tech_arme*70 +700), (tech_bouclier*40 +400), (tech_protection*7000 +70000), "defenseur");					//traq
	//console.log(defenseur);
	//console.log(defenseur[0][1], defenseur[0][2], defenseur[0][3], defenseur[0][4]);
	//console.log(attaquant[0][1], attaquant[0][2], attaquant[0][3], attaquant[0][4]);
	//-------------------------------------------------------------------------//
	//-------------------------------------------------------------------------//
	//-------------------------------------------------------------------------//





	//-----------------------------------------------------------------------//
	//-----------------------------Simulation--------------------------------//
	//-----------------------------------------------------------------------//
	var tours = 0,
		nbr_simulation = 1;

	//do {			//on fait plusieurs simulations pour avoir une moyenne

		attaquant_tour = attaquant;				//on remet à jours les flottes
		defenseur_tour = defenseur;
		total_attak_tour = total_attak;
		total_def_tour = total_def;

		do {			//les 6 tours maximums
			tours++;
			for (var id_VaisseauTireur = 0; id_VaisseauTireur < total_attak_tour; id_VaisseauTireur++)		//c'est le tour de l'attaquant
				{
					rapidfire = false;
					do {

						if (total_def_tour > 0)
							{
								var id_VaisseauCible = Math.floor(Math.random() * (total_def_tour)); 			// selection de la cible aléatoire
								destruction_bouclier(id_VaisseauTireur, id_VaisseauCible, "attaquant");
								degat_a_faire(id_VaisseauTireur, id_VaisseauCible, "attaquant");
								rapidfire_ou_pas(id_VaisseauTireur, id_VaisseauCible, "attaquant");
							}
						else {}
					} while((rapidfire) && (nbr_rapidfire < 1000));	//en cas de rapidfire on recommence					
				}

			for (var id_VaisseauTireur = 0; id_VaisseauTireur < total_def_tour; id_VaisseauTireur++)		//c'est le tour du defenseur
				{
					rapidfire = false;
					do {

						if (total_def_tour > 0)
							{
								var id_VaisseauCible = Math.floor(Math.random() * (total_attak_tour)); 			// selection de la cible aléatoire
								destruction_bouclier(id_VaisseauTireur, id_VaisseauCible, "defenseur");
								degat_a_faire(id_VaisseauTireur, id_VaisseauCible, "defenseur");
								rapidfire_ou_pas(id_VaisseauTireur, id_VaisseauCible, "defenseur");
							}
						else {}
					} while((rapidfire) && (nbr_rapidfire < 1000));	//en cas de rapidfire on recommence					
				}

			del_vaisso_detruit();
			rearmement_bouclier();

				
				if ((tours < 6) && (total_attak_tour > 0) && (total_def_tour > 0))
					{var continu = true;}
				else {var continu = false;}

		} while(continu);
		nbr_simulation++;
	//} while(nbr_simulation < 10);

	console.log("Nombre de tours: "+tours+"\n"+ total_attak_tour, total_def_tour);
	console.log(attaquant_tour, defenseur_tour);




	//-------------------------------------------------------------------------//
	//-------------------------------------------------------------------------//
	//-------------------------------------------------------------------------//

}