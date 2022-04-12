# Mano pirmoji GIT repozitorija

Ši repozitorija skirta tam, kad išmokti naudotis **projektų versijavimo kontrolės komandinės eilutės sąsaja - GIT CLI**. Tam jums reikės parsisiųsti ir įsirašyti:
https://git-scm.com/downloads

## Repozitorijos parsiuntimas

1. Atsidarykite GIT CLI (GIT bash).
2. Naudodami komandą **&lt;cd&gt;** pakeiskite savo darbinę kategoriją į tą, kurioje norite parsiųsti repozitoriją
3. Parsiųskite repozitoriją:
  **git clone https://github.com/ZilvinasVidmantas/test**
4. Pakeiskite darbinę kategoriją į parsiųstos repozitorijos kategoriją
  **cd test**

## Pagrindinės komandos

- **git add** -> failų paruošimas patvirtinimui
  - **git add &lt;failo-pavadinimas&gt;**  -> prideda failą nurodytu pavadinimu
  - **git add .** -> Prideda visus pakitusius failus

- **git diff** -> skirtumas tarp dviejų failų, ar dviejų to paties failo versijų
  - **git diff &lt;failo-pavadinimas&gt;** ->  failo nurodytu pavadinimu pakitimai nuo paskutinio commit'o

- **git status** -> parodo pakitusių failų būseną

- **git branch** -> komanda, kuri naudoja operacios su šakomis
  - **git branch -a** -> parodo visas parsiųstas šakas ir šiuo metu aktyvią šaką

- **git commit** -> komanda skirta užtvirti projekto pakitimui
  - **git commit -m "Žinutė apibūdinanti pakitimą"**
  
- **git push** -> komanda skirta paviešinti commit'us į atitinkamą globalią šaką
