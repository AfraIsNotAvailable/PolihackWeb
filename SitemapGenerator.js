const SitemapGenerator = require('sitemap-generator');
const fs = require('fs');

const f = [
['https://upb.ro','Universitatea Politehnica din Bucuresti','Bucuresti','BUCUREsTI'],
['https://www.unmb.ro','Universitatea Naţională de Muzică din Bucuresti','Bucuresti','BUCUREsTI'],
['https://unibuc.ro','Universitatea din Bucuresti','Bucuresti','BUCUREsTI'],
['https://www.upit.ro','Universitatea din Pitesti','Arges','PITEsTI'],
['https://www.uav.ro','Universitatea Aurel Vlaicu din Arad','Arad','ARAD'],
['https://www.upg-ploiesti.ro','Universitatea Petrol-Gaze din Ploiesti','Prahova','PLOIEsTI'],
['https://www.uvt.ro','Universitatea de Vest din Timisoara','Timis','TIMIsOARA'],
['https://www.uoradea.ro','Universitatea din Oradea','Bihor','ORADEA'],
['https://www.upt.ro','Universitatea Politehnica Timisoara','Timis','TIMIsOARA'],
['www.univ-ovidius.ro','Universitatea Ovidius din Constanţa','Constanţa','CONSTANŢA'],
['www.upet.ro','Universitatea din Petrosani','Hunedoara','PETROsANI'],
['https://www.ucv.ro','Universitatea din Craiova','Dolj','CRAIOVA'],
['https://www.ulbsibiu.ro','Universitatea Lucian Blaga din Sibiu','Sibiu','SIBIU'],
['www.usv.ro','Universitatea stefan cel Mare din Suceava','Suceava','SUCEAVA'],
['www.ub.ro','Universitatea Vasile Alecsandri din Bacău','Bacău','BACĂU'],
['https://www.unitbv.ro','Universitatea Transilvania din Brasov','Brasov','BRAsOV'],
['cmu-edu.eu','Universitatea Maritimă din Constanţa','Constanţa','CONSTANŢA'],
['https://www.utcluj.ro','Universitatea Tehnică din Cluj-Napoca','Cluj','CLUJ-NAPOCA'],
['uem.ro','Universitatea Eftimie Murgu din Resiţa','Caras-Severin','REsIŢA'],
['https://ubbcluj.ro','Universitatea Babes-Bolyai din Cluj-Napoca','Cluj','CLUJ-NAPOCA'],
['https://www.umfst.ro','Universitatea Petru Maior din Târgu Mures','Mures','TiRGU MUREs'],
['https://www.tuiasi.ro','Universitatea Tehnică Gheorghe Asachi din Iasi','Iasi','IAsI'],
['www.uad.ro','Universitatea de Artă si Design din Cluj-Napoca','Cluj','CLUJ-NAPOCA'],
['www.uaic.ro','Universitatea Alexandru Ioan Cuza din Iasi','Iasi','IAsI'],
['https://umfcd.ro','Universitatea de Medicină si Farmacie Carol Davila din Bucuresti','Bucuresti','BUCUREsTI'],
['www.amgd.ro','Academia de Muzică Gheorghe Dima din Cluj-Napoca','Cluj','CLUJ-NAPOCA'],
['https://www.umfiasi.ro','Universitatea de Medicină si Farmacie Gr. T. Popa din Iasi','Iasi','IAsI'],
['www.uat.ro','Universitatea de Arte din Târgu Mures','Mures','TiRGU MUREs'],
['UPB.ro','Universitatea Politehnica din Bucuresti','Bucuresti','BUCUREsTI'],
['www.umfst.ro','Universitatea de Medicină si Farmacie din Tirgu Mures','Mures','TiRGU MUREs'],
['www.umft.ro','Universitatea de Medicină si Farmacie Victor Babes din Timisoara','Timis','TIMIsOARA'],
['https://unarte.org','Universitatea Naţională de Arte din Bucuresti','Bucuresti','BUCUREsTI'],
['www.utgjiu.ro','Universitatea Constantin Brâncusi din Târgu Jiu','Gorj','TiRGU JIU'],
['www.umfcv.ro','Universitatea de Medicină si Farmacie din Craiova','Dolj','CRAIOVA'],
['https://www.usamvcluj.ro','Universitatea de stiinţe Agricole si Medicină Veterinară din Cluj-Napoca','Cluj','CLUJ-NAPOCA'],
['https://www.usab-tm.ro','Universitatea de stiinţe Agricole si Medicină Veterinară a Banatului Regele Mihai I al României din Timisoara','Timis','TIMIsOARA'],
['snspa.ro','scoala Naţională de Studii Politice si Administrative din Bucuresti','Bucuresti','BUCUREsTI'],
['unatc.ro','Universitatea Naţională de Artă Teatrală si Cinematografică I. L. Caragiale din Bucuresti','Bucuresti','BUCUREsTI'],
['www.umfcluj.ro','Universitatea de Medicină si Farmacie Iuliu Haţieganu din Cluj-Napoca','Cluj','CLUJ-NAPOCA'],
['www.uaiasi.ro','Universitatea de stiinţe Agricole si Medicină Veterinară Ion Ionescu de La Brad din Iasi','Iasi','IAsI'],
['www.unap.ro','Universitatea Naţională de Apărare Carol I din Bucuresti','Bucuresti','BUCUREsTI'],
['www.academiadepolitie.ro','Academia de Poliţie Alexandru Ioan Cuza din Bucuresti','Bucuresti','BUCUREsTI'],
['www.ueb.ro','Universitatea Ecologică din Bucuresti','Bucuresti','BUCUREsTI'],
['www.ubv.ro','Universitatea Bogdan Vodă din Cluj-Napoca','Cluj','CLUJ-NAPOCA'],
['www.brasovultau.ro','Universitatea George Bariţiu din Brasov','Brasov','BRAsOV'],
['https://itb.ro','Institutul Teologic Baptist din Bucuresti','Bucuresti','BUCUREsTI'],
['https://www.hyperion.ro','Universitatea Hyperion din Bucuresti','Bucuresti','BUCUREsTI'],
['https://andreisaguna.ro','Universitatea Andrei saguna din Constanţa','Constanţa','CONSTANŢA'],
['www.roger-univ.ro','Universitatea Româno-Germană din Sibiu','Sibiu','SIBIU'],
['https://www.univnt.ro','Universitatea Nicolae Titulescu din Bucuresti','Bucuresti','BUCUREsTI'],
['https://uai-cluj.ro','Universitatea Avram Iancu din Cluj-Napoca','Cluj','CLUJ-NAPOCA'],
['https://www.univapollonia.ro','Universitatea Apollonia din Iasi','Iasi','IAsI'],
['https://arteiasi.ro','Universitatea Naţională de Arte George Enescu din Iasi','Iasi','IAsI'],
['https://www.emanuel.ro','Universitatea Emanuel din Oradea','Bihor','ORADEA'],
['https://www.uvvg.ro','Universitatea de Vest Vasile Goldis din Arad','Arad','ARAD'],
['https://www.optiuni.ro','Universitatea Română de stiinţe si Arte Gheorghe Cristea din Bucuresti','Bucuresti','BUCUREsTI'],
['https://acad.ro','Academia Romana','Bucuresti','BUCUREsTI'],
['www.univ-tomis.ro','Universitatea Tomis din Constanţa','Constanţa','CONSTANŢA'],
['proteo.cj.edu.ro','Institutul Teologic Protestant din Cluj-Napoca','Cluj','CLUJ-NAPOCA'],
['nou.univath.ro','Universitatea Athenaeum din Bucuresti','Bucuresti','BUCUREsTI'],
['https://www.artifex.org.ro','Universitatea Artifex din Bucuresti','Bucuresti','BUCUREsTI'],
['www.islavici.ro','Universitatea Ioan Slavici din Timisoara','Timis','TIMIsOARA'],
['www.ugb.ro','Universitatea George Bacovia din Bacău','Bacău','BACĂU'],
['www.univ-danubius.ro','Universitatea Danubius din Galaţi','Galaţi','GALAŢI'],
['https://infosapientia.ro','Institutul Teologic Romano-Catolic din Iasi','Iasi','IAsI'],
['https://www.armyacademy.ro','Academia Forţelor Terestre Nicolae Bălcescu din Sibiu','Sibiu','SIBIU'],
['www.sapientia.ro','Universitatea Sapientia din Cluj-Napoca','Cluj','CLUJ-NAPOCA'],
['www.universitateaeuropeanadragan.ro','Universitatea Europeană Drăgan din Lugoj','Timis','LUGOJ'],
['www.utm.ro','Universitatea Titu Maiorescu din Bucuresti','Bucuresti','BUCUREsTI'],
['www.cse.uaic.ro','Institutul de Studii Europene din Iasi','Iasi','IAsI'],
['www.rau.ro','Universitatea Româno-Americană din Bucuresti','Bucuresti','BUCUREsTI'],
['https://www.tibiscus.ro','Universitatea Tibiscus din Timisoara','Timis','TIMIsOARA'],
['https://www.partium.ro','Universitatea Crestină Partium din Oradea','Bihor','ORADEA'],
['https://www.anmb.ro','Academia Navală Mircea cel Bătrân din Constanţa','Constanţa','CONSTANŢA'],
['https://cantemir.ro','Universitatea Dimitrie Cantemir din Târgu Mures','Mures','TiRGU MUREs'],
['https://www.lumina.org','Universitatea Europei de Sud Est-Lumina','Bucuresti','BUCUREsTI'],
['https://uadventus.ro','Institutul Teologic Adventist din Cernica - Ilfov','Ilfov','CERNICA'],
['https://www.ucdc.ro','Universitatea Crestină Dimitrie Cantemir din Bucuresti','Bucuresti','BUCUREsTI'],
['www.upa.ro','Universitatea Petre Andrei din Iasi','Iasi','IAsI'],
['www.aracis.ro','Institutul de Administrare a Afacerilor din Bucuresti','Bucuresti','BUCUREsTI'],
['https://www.univcb.ro','Universitatea Constantin Brâncoveanu din Pitesti','Arges','PITEsTI'],
['https://itrcf.ofmconv.ro','Institutul Teologic Romano-Catolic Franciscan din Roman','Neamţ','ROMAN']];

// create generator



function loopThroughSplittedText(splittedText) {
    for (var i = 0; i < splittedText.length; i++) {
        // for each iteration console.log a word
        // and make a pause after it
        (function (i) {
            setTimeout(function () {
                const generator = SitemapGenerator(splittedText[i][0], {
                stripQuerystring: false,
                maxDepth:2
            });

            generator.on('done', () => {
                generator.stop();
            });

            generator.on('add', (url) => {
                var ustring = JSON.stringify(url);
                if(ustring.includes('bursa')||ustring.includes('burse')){
                    fs.appendFile('3pac.txt',"['" + ustring +"','" + splittedText[1] +"','" + splittedText[2] +"','" + splittedText[3] +"'],\n" ,function(err, result) {
                        if(err) console.log('error', err);
                    });
                    console.log("['" + ustring +"','" + splittedText[i][1] +"','" + splittedText[i][2] +"','" + splittedText[i][3] +"'],\n");
                    generator.stop();
                }
            });

            generator.on('error', (error) => {
                console.log(error);
                // => { code: 404, message: 'Not found.', url: 'http://example.com/foo' }
            });

            // start the crawler
            generator.start();
            }, 10000 * i);
        })(i);
    };
}

loopThroughSplittedText(f);