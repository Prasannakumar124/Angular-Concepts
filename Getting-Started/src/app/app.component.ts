import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Getting-Started';
  name="";
  
}

/*Notes:

What is Angular?

Angular is a JavaScript Framework which allows you to create 
Reactive Single page Applcations(SPAs)= it changes html code DOM at run time  

what is Angular CLI ?

1.This is simple a tool set which creating managing and building your angular applications
very simple

2.It quicly creates new angular project and then we have some commands you can use
to build that project for production.

Why do i use CLI not just import the angular framework in an existing index html page?

 Angular is futuristic framework and therefore
 it uses feature like typescript which is superset
 of javascript which needs to be compiled  before it runs in the browser
 so it has some extra steps we have to take it in to account during  development
 and doing that manually cant really be a pain that why it CLI really an awsome
 solution and will be used in scores later in the course 

 What a CLI needs?

 It needs nodeJS- its a server side language .behind the scenes it does some things
 with it to build our project and to manage our dependencies the packages we use 
 like angular frame work itself and it also spins up a little development server
 which will host our app on our local machine making it easy for us to test it

what is the process of installing CLI and should we do before that?

Install node-JS and then install Npm(Node package Manager)= A little tool which was installed
to gather with nodejs 

1.npm install -g @angular/cli
2.ng new project name
3.cd projectname
4.ng serve

What ng serve do?

1.It will spin up a little development server running at specifed
 default port addres(ng serve --port 5000)

2.It will build all our source code as angular use typescript which needs 
to be compiled to javascript. 

why we need serve dont simply double click the index html file?

Due to nature how angular works it loads a lot of resources dynamically once it runs 
and we can only simulate how it would really look like on a real server 
if we use http protocal which we dont use when double clicking on a file.

What is Typescript ?

1.Typescript is superset of javascript it offer more features than another challanges kept 
like classes interfaces and very important which gives it to name types strong typing
so u define an typescript if a certain variable is a number a string or somethig else
u dont do it vinall javascript  there we have dynamic typing u can have a string variable
and then u assign a number and that total fine but in typescript  
much more robust code which gets checked at time u write it and not at the time  run it
A great Enhancement

2.typescript doesnt run in the browser so it is compiled javascript in the end and this 
compilation is handled by the CLI  one of the reason why we need cli?why we need project
mangement tool like cli Now this compilation is really fast and therefore in the end 
in the browser javascript is going to run .

Bootstrap for Styling?
 we can use it in two ways one is adding  cdn method in html file.
 another way
 u can install it with npm like npm install --save bootstrap to market as production dependency
this will now downloaded it and put it into this project folder and then u r able to 
easily import there.
How: In project we have angular-cli.json file  which configure u r project
there u can add path of installed location.

what is use of Webpack?

A tool which bundles all u r js and css files and adds them to the index.html file.




*/