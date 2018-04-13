![index](http://res.cloudinary.com/dgxmjwbrc/image/upload/v1523652218/Screen_Shot_2018-04-13_at_1.41.25_PM.png)

# Jtsy

[Jtsy wiki](https://github.com/jeffliang0318/Jtsy/wiki)

Jtsy is the e-commerce website for manufacturing/production equipment component inspired by Etsy.

## DEMO

Here is the working live demo : [https://jtsy.herokuapp.com/](https://jtsy.herokuapp.com/#/)

## Site

### Feature

**Register/login modal**

![index](http://res.cloudinary.com/dgxmjwbrc/image/upload/v1523653311/Screen_Shot_2018-04-13_at_1.56.25_PM.png)

Register/Login is on the nav bar, you can surf around, check the product you want to buy and Register/Login on the current page but not redirect back and forth.

If you do not have an account and too lazy to register, don't worry! All you need to do is click the DEMO button on the nav bar or on the register/login form.

![index](http://res.cloudinary.com/dgxmjwbrc/image/upload/v1523655017/Screen_Shot_2018-04-13_at_2.26.35_PM.png)

![index](http://res.cloudinary.com/dgxmjwbrc/image/upload/v1523655018/Screen_Shot_2018-04-13_at_2.27.21_PM.png)

If you want to sell something without login, the website also has a friendly reminder and the login modal will pop out so you can login.

```javascript
const Protected = ({ component: Component, path, loggedIn, exact, redirectModal }) => (
  <Route path={path} exact={exact} render={(props) => {
     if (loggedIn) {
      return <Component {...props} />;
    } else {
      redirectModal("login");
        return (
          <div className="plz-login-img">
            <img src="http://res.cloudinary.com/dgxmjwbrc/image/upload/v1523430004/800px-Gear-kegelzahnrad.svg.png"></img>
            <strong>Please Register Or Log In as DEMO User</strong>
        </div>
        );
    }
    }
  } />
);
```

![index](http://res.cloudinary.com/dgxmjwbrc/image/upload/v1523655930/Screen_Shot_2018-04-13_at_2.45.12_PM.png)

*You need to login if you want to add items to your cart, create items you want to sell, delete and edit the items in your shop.

**Create the item you want to sell**

To sell something, you need to upload a photo, enter the product title, description, and price, the title is default to 1.
The price has a default value on the website


```js

class Product < ApplicationRecord
  validates :user_id, :img_url, :title, :description, presence: true

  validates :quantity, numericality: { greater_than: 0 }

  validates :price, numericality: { greater_than: 0 }

end

```

![index](http://res.cloudinary.com/dgxmjwbrc/image/upload/v1523655879/Screen_Shot_2018-04-13_at_2.39.44_PM.png)

**Update items in your shop**

By clicking the update button, the user will be redirected to the product edit page with product information filled.
And you can only edit the item in your shop.

![index](http://res.cloudinary.com/dgxmjwbrc/image/upload/v1523659303/Screen_Shot_2018-04-13_at_2.48.27_PM.png)

![index](http://res.cloudinary.com/dgxmjwbrc/image/upload/v1523659302/Screen_Shot_2018-04-13_at_2.47.24_PM.png)

**Search**
Autocomplete in search

![index](http://res.cloudinary.com/dgxmjwbrc/image/upload/v1523659302/Screen_Shot_2018-04-13_at_2.49.13_PM.png)

![index](http://res.cloudinary.com/dgxmjwbrc/image/upload/v1523659302/Screen_Shot_2018-04-13_at_2.50.27_PM.png)

**Cart**

You can only buy the items not in your shop

![index](http://res.cloudinary.com/dgxmjwbrc/image/upload/v1523659303/Screen_Shot_2018-04-13_at_2.47.57_PM.png)

You can see the total price in your shopping cart, and remove it if you want

![index](http://res.cloudinary.com/dgxmjwbrc/image/upload/v1523659697/Screen_Shot_2018-04-13_at_3.47.56_PM.png)
