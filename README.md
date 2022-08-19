# Social API

## TroubleShooting

Currently, the error that I'm recieving on the console terminal reads as follows:

```
TypeError: Router.use() requires a middleware function but got a undefined
    at Function.use (C:\Users\arian\Documents\UCF BOOTCAMP\Modules\Week 7\Challenge 14\Social API\node_modules\express\lib\router\index.js:469:13)
    at Object.<anonymous> (C:\Users\arian\Documents\UCF BOOTCAMP\Modules\Week 7\Challenge 14\Social API\routes\api\index.js:5:8)

```

This error seems to be saying that I cannot make a request to the database based on the lack of middleware. I need to figure out why the .get method is returning undefined. I'll have to look into the configuration of my config and index files.