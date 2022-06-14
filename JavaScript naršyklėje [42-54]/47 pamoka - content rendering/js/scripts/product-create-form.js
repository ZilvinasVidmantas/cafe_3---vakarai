/*
  Sukurkite form'ą pridėti produktui:

  1. Sukurkite vaizdą visiems ekrano dydžiams
  Produkto pridėjimo laukai(fields)
    * title: input[text]
    * category: select
      * food: option
      * clothes: option
      * other: option
    * price: input[number]
    * amount: input[number]
    * condition:
      * new: input[radio]   
      * used: input[radio]   

  2. Sukurkite skript'ą, kuris atliktu validavimą (analogišką registracijos formai) ir duomenų 
    atspausdinimą konsolėje

    validuojamos savybės:
      * title:
        * privaloma
        * min 2 raidės
        * max 32 raidės
      * category:
        * privaloma
      * price:
        * privaloma
        * turi būti aprašyta ne daugiau kaip 2 skaičiai po kablelio
        * negali būt neigiamas skaičius
      * amount:
        * privaloma
        * turi būti sveikas skaičius
        * negali būt neigiamas skaičius
      * condition:
        * privaloma        
*/
