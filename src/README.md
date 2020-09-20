# romano-numbers

But de l’exercice : La conversion des nombres décimaux en chiffre romains. Celui ce se fera en deux étapes :

1. Un formulaire permet de saisir un nombre décimal entre 0 et 100. La validation de ce formulaire permet d’afficher à l’utilisateur la conversion du nombre décimal en chiffre romain. Les règles de conversion sont indiquées en annexe.
Par exemple, si l’utilisateur saisit 9 et valide le formulaire, la page doit lui afficher “IX”. La requête sera envoyé en AJAX.
2. Une fois que le chiffre retourné sera le bon, vous modifierez le code pour que le serveur indique au client la valeur via un Server Side Event. https://fr.wikipedia.org/wiki/Server-sent_events
Les deux exercices seront à faire dans des branches séparées.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



-------------

Annexe
Les principaux chiffres romains
Les principaux chiffres romains (les sept lettres utilisées) sont : ● I=1
● V=5
● X=10
● L=50
● C=100 ● D=500 ● M=1000
Lorsque les romains écrivaient les nombres, ils utilisaient l'addition et la soustraction pour former ceux-ci.
Principe de l’addition
Pour compter un nombre écrit en chiffres romains, on le lit de droite à gauche on ajoute la valeur du chiffre. Autrement dit, lorsque la lettre est supérieure ou égale à la suivante, on ​additionne​. Exemple :
● II=I+I(1+1=2)
● VI=V+I(5+1=6)
● LV=L+V(50+5=55)
Principe de la soustraction
Quand une lettre en chiffre romain est située juste à gauche d’une lettre de plus grande valeur, on soustrait​.
Exemple :
● IV=V-I(5-1=4)
● IX=X-I(10–1=9)
● XC = C-X (100 – 10=90)
Les lettres sont donc toujours placées par ordre décroissant, sauf pour les valeurs à soustraire. Exemple :
● XXXIV=34,soit(10+10+10)+(5–1)
● MMMDCIX=3609,soit(1000+1000+1000)+(500+100)+(10–1)
Autres règles
1. La règle des chiffres romains veut que l'on n'utilise jamais une même lettre plus de 3 fois, sauf pour la lettre M. Les chiffres I, X et C peuvent donc être présents trois fois, mais pas plus.
2. Exemple :
○ 3 s’écrit III, mais 4 s’écrit IV et non IIII
○ 300 s’écrit CCC, mais 400 s’écrit CD et non CCCC
○ 80 s’écrit LXXX, mais 90 s’écrit XC et non LXXXX
3. Cependant, il est possible d'écrire de deux façons différentes certains nombres :
4. Exemple : 99 peut soit s'écrire IC, soit XCIX. La première écriture est bien sûr plus lisible que
la seconde.
5. La numérotation romaine ne comprend pas de 0 contrairement à la numérotation arabe.
Aussi, elle ne fonctionne que pour les nombres entiers, ceux qui ne sont pas suivis de décimale avec la virgule.