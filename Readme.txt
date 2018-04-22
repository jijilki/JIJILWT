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


ng generate module services

Creating services inside a module/folder
ng generate service services/Test //cli can take a directory if getting error try to create module first and generate services -look below.
Following the comment below, you might need to first run:


========================================================Environment setup thingies===========================================================
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

Again has issues to run ng generate. Copied local npm modules to global folder.Worked like a charm





======================================================Angular tips:=======================================================================
  imports: [RouterModule.forRoot(routes,{enableTracing:true})], // <-- debugging purposes only




==========================================================================================================================================
Errors:
VM2108 core.js:1665 ERROR Error: Uncaught (in promise): Error: StaticInjectorError(AppModule)[ViewallComponent -> WorkoutService]: 
  StaticInjectorError(Platform: core)[ViewallComponent -> WorkoutService]: 
    NullInjectorError: No provider for WorkoutService!  

Solved by adding provider for the service in app.module.ts

Error:
Can't bind to 'ngModel' since it isn't a known property of 'input'
Solved by
  Importing formsModule.
  import { FormsModule } from '@angular/forms';

[...]

@NgModule({
  imports: [
    [...]
    FormsModule
  ],
  [...]
})
