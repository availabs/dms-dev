## DMS development


AVAILabs repository for working on DMS implementations

##### Installation

```

 $ git clone git@github.com:availabs/dms-dev.git 
 $ cd dms-dev
 $ git submodule init
 $ git submodule update
 $ npm install
 $ npm start

```


##### Detached Submodule Head

```

 $ git submodule update 
 $ git submodule foreach git checkout master 
 $ git submodule foreach git pull origin master

```

##### Detached Submodule Head, fix issues with master

```

 $ git branch my-temporary-work
 $ git checkout master
 $ git merge my-temporary-work
 
```