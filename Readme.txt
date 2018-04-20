Setting up Dev env
npm install -g @angular/cli
Create a new project
ng new my-app
ng serve
ng generate component hero-detail
ng generate module app-routing --flat --module=app



git

git init
git add ..
git commit -m "first commit"
git remote add origin https://github.com/neojilz/JIJILWT.git
git push -u origin master

Add this

node_modules/
to .gitignore file to ignore all directories called node_modules in current folder and any subfolders

Proxy issue:
git config --global http.proxy http://413575:pwd@proxy.cognizant.com:8080

For error  - while  npm install -g @angular/cli
 stack: 'Error: EPERM: operation not permitted, npm cache verify -DIDN'T work at office.

Given FULL Rights node_modules folders (Locally)
Ran npm install  @angular/cli without -g 
then ran npm start (ng serve threw errros).

