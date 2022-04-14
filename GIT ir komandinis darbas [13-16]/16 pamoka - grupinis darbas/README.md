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

### Darbo atlikimo schema pateika iliustracijoje.

0. Prisiskirti sau task'ą užduočių planuoklėje, pakeisti jo būseną "In progress"
1. git pull → tai daryti "main" šakoje. Šia komanda parsisiunčiate naujausią versiją
2. git checkout -b "task-branch-name" → Persijungiate į savo šaką, kurioje atliksite darbus.
  * ... atliekate darbą, rašote kodą ...
3. git add . → užfiksuojate pakitimus
4. git commit -m "darbą apibūdinantis paaiškinimas" → užtvirtinate pakitimus
5. git checkout main →  grįžtate į pagrindinę šaką, į tą nuo kurios atsiskyrėte.
6. git pull → pasisiunčiate potencialiai pakitusią "main" versiją
7. git checkout "task-branch-name" → grįžtate į savo šaką
8. git merge main → prie savo šakos "task-branch-name" prijungiate naują "main" versiją
  * ... išsprendžiate konfliktus, jei jų buvo ir pa'commit'ate
9. git push --set-upstream origin "task-branch-name" → jūsų šaka su pakitimais paviešinama globalioje repozitorijoje
10. https://github.com susirasti repozitoriją ir joje padaryti pull Request
  * Pull request pavadinime turi būti task'o Pavadinimas
  * turi būti jungiama jūsų šaka į pagrindinę
11. Užduočių tvarkyklėje perkelti task'ą į Pull Request skiltį ir į komentarus įdėti nuorodą į Pull Request
12. Laukti 2 patvirtinimų, ir sulaukus sujungti šakas
       base:main ← "task-branch-name"

![](./task%20workflow%20scheme/git-branching-workflow2.png)
