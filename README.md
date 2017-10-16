# Acme Explosives

This assignment was given in class to practice Promises.

##### Requirements
Create several JSON files that will be describing all of the explosive products that will be sold. Use Promises to handle the order of the asynchronous operations needed to load the data.

##### User Interface
Create a simple user interface for your product catalog where a user can select a category from a dropdown. When a category is selected, you must use Promises to read, first, from the categories.json to load that array of objects, then load types.json, then products.json.
Once all data is loaded, you need to display the products in a Bootstrap grid. Each product must display the string name of its product type, and product category. Not the integer id value.

##### Installation
```
$ git clone git@github.com:waamber/Acme-Explosives.git
$ cd Acme-Explosives/lib/
$ npm install
$ grunt
```


![HomePage](https://imgur.com/ugpcuYO)
![Fireworks](https://imgur.com/8T32DEq)
![Explosives](https://imgur.com/WDwtIj6)

