maven java
click on file,click on new,click on other,and on filter org.apache.maven ,and quick start 1.4 (remove check box) and group id com.app.demo and articaft id samplejavamavenproject
right click on project click on maven clean
and maven install
maven test
maven build and on goals clean install test or package and apply and run
AND run as java application
create repo in git and at add.gitignore select Maven 
clone the repo into local
from the users in c=ecllipse workspace select project folder waht you have created copy the files init paste into cloned repo
and git add . and git commit -m "message" and finnaly git push

MAVEN WEB
every thing is same but in src main index.jsp change text if needed
and in pom.xml add dependency by searching servelt api maven dependency and select version 2.5 and add the dependency to pom file 
and same steps but last run on server and tomcat server and next and finish 
create repo as same
and right click on project and click show in terminal and execute following commands
git init
git add .
git commit -m "message"
git remote add origin "paste repo link"
git push -u origin master 

JENKINS JAVA
click on new item,give some name to project,click on freestyle,
source code managment select git paste repo link
select branch as main from master
add build steps build top level maven targets maven version maven home goal clean
same add build steps build top level maven targets maven version maven home goal install
next post build actions select archive the articafts files to archive to (**/*)
next post build actions select build other projects projects to build some file name like test
now open dashboard to create test file 
now source code managment to none only and select build environment to delete worksapec befroe starts
now for build steps select copy articafs from other projects and give name of projec you created first 
artifacts to copy **/* select stable build only
add next build steps select top level maven projects goals test
add post build actions select archive the articafts files to arcieve **/*
click on save and apply
now + symbol on dashboard for pipeine and give some name and type build pipeline view and create 
and select intial job file-build you created 
next apply ok
now click on run

JENKINS WEB
select build triggers to pollscm add 5 stars 
same upto test as jenkins java
now add post build steps at test to create for deploy(filename deploy)
copy articrafs from test
add post build steps deploy wartoear container files with **/*.war
context path samplewebprojectmaven  add container tomact 9.x
credential admin 1234 tomcat url http://localhost:8083/ save and apply
now dashboard + for pipeline for build project

SCRIPTED PIPELINE
new item crete piple line paste script and select build now
select comfigure build triggers build peridocally 5 stars 


  
