# pw-wagtail
Das ist die Vorlage, um alle unsere Wagtail-Projekte von Pixelwest einfach und schnell einzurichten!

# pw-wagtail
Das ist die Vorlage, um alle unsere Wagtail-Projekte von Pixelwest einfach und schnell einzurichten!

# Git
''' git add . '''
''' git commit -m <Commit> '''
''' git push origin <branch_name> '''

''' git branch --list '''
''' git branch <Name> '''
''' git checkout <Name> '''

# Django & Wagtail
1. Erstelle eine virtuelle Umgebung 
''' python3.10 -m venv env '''

2. Wechsle in die virtuelle Umgebung:
''' source env/bin/activate '''

3. Installiere Wagtail:
''' pip install wagtail '''

4. Erstelle ein neues Wagtail-Projekt:
''' wagtail start src '''

5. Installiere die Abhängigkeiten:
''' pip install -r requirements.txt '''

6. Initialisiere die Datenbank: 
''' python manage.py migrate '''

7. Erstelle einen Superuser (optional):
''' python manage.py createsuperuser '''

8. Starte den Entwicklungsserver:
''' python manage.py runserver meineapp '''

9. Create APP
''' python manage.py startapp '''


# APPs
- core
- website_setings

# NPM
1. npm init -y
2. npm install webpack webpack-cli style-loader css-loader sass-loader node-sass babel-loader @babel/core @babel/preset-env --save-dev
3.  
'''
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --mode production",
    "watch": "webpack --watch --mode development"
},
'''

4. '''
npm install @fortawesome/fontawesome-free --save
npm install bootstrap --save
npm install rainbow-code --save
npm install sticky-sidebar --save
npm install swiper --save
'''